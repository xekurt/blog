"use client";
import { FC, useMemo } from "react";

import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as List } from "react-window";
import PostCard from "@/src/components/PostCard";
import Loading from "@/src/components/Loading";
import { Post } from "@/src/Types/Posts";
import NoResult from "@/src/components/NoResult";

interface PostListProps {
  resultList: Post[];
  postsList: Post[];
  loading: Boolean;
}
const PostsList: FC<PostListProps> = ({ resultList, postsList, loading }) => {
  const posts = useMemo(() => postsList, [postsList]);
  const result = useMemo(() => resultList, [resultList]);
  const getColumn = (width: number) => {
    if (width < 400) return 1;
    if (width < 600) return 2;
    if (width < 900) return 3;
    return 4;
  };
  // Check if result exist return result count else return posts counts
  const chooseData = () => {
    if (result?.length > 0) return result.length;
    else return posts.length;
  };

  return (
    <div className="mt-8 h-full w-full">
      {/*Added virtualization to boost performance since our list is too large*/}
      {loading ? (
        <Loading />
      ) : !result ? (
        <NoResult />
      ) : (
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                columnCount={getColumn(width)}
                rowCount={chooseData() / getColumn(width)}
                columnWidth={width / getColumn(width) - 6}
                rowHeight={530}
                width={width}
                height={height}
              >
                {({ columnIndex, rowIndex, style }) => {
                  const currentIndex =
                    rowIndex * getColumn(width) + columnIndex;
                  let output: Post =
                    result?.length > 0
                      ? result[currentIndex]
                      : posts[currentIndex];
                  return (
                    <div style={style} key={currentIndex}>
                      <PostCard {...output} />
                    </div>
                  );
                }}
              </List>
            );
          }}
        </AutoSizer>
      )}
    </div>
  );
};
export default PostsList;
