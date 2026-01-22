import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostCard from "./PostCard";

const BASE_API = import.meta.env.VITE_BASE_API;

function Posts({ slice, search }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function get_posts() {
      try {
        const res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/`,
        );
        if (!res.ok) {
          throw new Error("API da xatolik!");
        } else {
          toast("Ma'lumotlar qabul qilindi");
        }
        const data = await res.json();
        const dataSlice = slice ? data.slice(0, slice) : data;
        console.log(dataSlice);

        setPosts(dataSlice);
      } catch (error) {
        toast.error(error.message);
      }
    }
    get_posts();
  }, [slice]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.content.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }
  }, [search, posts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
      <PostCard data={filteredPosts} />
    </div>
  );
}

export default Posts;
