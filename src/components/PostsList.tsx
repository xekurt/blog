"use client";
import { useEffect } from "react";
import { postApi } from "@/src/apis/postsApi";
export default function PostsList() {
  useEffect(() => {
    postApi.getAll().then((posts) => {
      console.info(posts);
    });
  }, []);
  return <>PostsList</>;
}
