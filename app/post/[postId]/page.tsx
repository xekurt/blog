"use client";
import { FC, useEffect, useState } from "react";
import { postApi } from "@/src/apis/postsApi";
import PostCard from "@/src/components/PostCard";
import { Post } from "@/src/Types/Posts";

interface PostDetailsProps {
  params: { postId: string };
}
const PostDetails: FC<PostDetailsProps> = ({ params }) => {
  const [postDetails, setPostDetails] = useState();
  useEffect(() => {
    if (params.postId) {
      postApi.get(params.postId).then((response) => {
        setPostDetails(response);
      });
    }
  }, [params.postId]);
  console.info(postDetails);
  return (
    <section className="px-56 py-24">
      {postDetails && <PostCard {...(postDetails as Post)} />}
    </section>
  );
};
export default PostDetails;
