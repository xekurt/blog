"use client";
import PostsList from "@/src/components/PostsList";
import Navbar from "@/src/components/Navbar";
import { useData } from "@/src/hooks/useData";

export default function Home() {
  const { posts, result, searchPosts, loading } = useData();

  return (
    <div className="h-screen w-screen p-6 md:p-12 lg:p-24">
      <Navbar searchPosts={searchPosts} />
      <PostsList postsList={posts} resultList={result} loading={loading} />
    </div>
  );
}
