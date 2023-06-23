"use client";
import { useEffect, useState, useRef } from "react";
import { postApi } from "@/src/apis/postsApi";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as List } from "react-window";
import PostCard from "@/src/components/PostCard";
// import { useObserver } from "@/src/hooks/useObserver";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const observerTarget = useRef(null);
  // const { visibleCounts } = useObserver(observerTarget);

  useEffect(() => {
    postApi.getAll().then((posts) => setPosts(posts));
  }, []);
  const getColumn = (width: number) => {
    if (width < 400) return 1;
    if (width < 600) return 2;
    if (width < 900) return 3;
    return 4;
  };
  return (
    <div className="mt-8 h-full w-full">
      {/*Added virtualization to boost performance since our list is too large*/}
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              columnCount={getColumn(width)}
              rowCount={posts.length / getColumn(width)}
              columnWidth={width / getColumn(width) - 6}
              rowHeight={530}
              width={width}
              height={height}
            >
              {({ columnIndex, rowIndex, style }) => {
                const currentIndex = rowIndex * 4 + columnIndex;
                return (
                  <div style={style} key={currentIndex}>
                    <PostCard {...(posts[currentIndex] as object)} />
                  </div>
                );
              }}
            </List>
          );
        }}
      </AutoSizer>
      {/*{posts.slice(0, visibleCounts).map((post: any, index) => (*/}
      {/*  <PostCard {...post} key={index} />*/}
      {/*))}*/}
      {/*<div ref={observerTarget}></div>*/}
    </div>
  );
}
