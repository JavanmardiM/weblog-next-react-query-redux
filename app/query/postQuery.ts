"use client";
import { useQuery } from "react-query";
import { Post } from "../models/post";
import getPosts from "../libs/getPosts";

// export const fetchPosts = useQuery<Post[], Error>(
//   "post-list",
//   async () => {
//     const res: any = await getPosts();
//     return res.data.data;
//   },
//   { staleTime: 60000 }
// );

export const fetchPosts = () =>
  useQuery(
    ["lists", "post-list"],
    () => getPosts()
  );