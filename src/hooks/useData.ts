"use client";
import { useCallback, useEffect, useState } from "react";
import { postApi } from "@/src/apis/postsApi";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;

export const useData = () => {
  const [posts, setPosts] = useState([]);
  const [result, setResult] = useState([] || null);
  const [loading, setLoading] = useState(false);
  // Get all posts initially
  useEffect(() => {
    setLoading(true);
    postApi.getAll().then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  const searchPosts = useCallback((q: string) => {
    setLoading(true);
    postApi.getAll(q).then((res) => {
      if (res.length === 0) setResult((prevState) => null);
      else setResult(res);
      setLoading(false);
    });
  }, []);

  return { posts, result, searchPosts, loading };
};
