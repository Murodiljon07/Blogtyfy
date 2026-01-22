import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

/* components */
import PostCard from "./PostCard";

const BASE_API = import.meta.env.VITE_BASE_API;

function Posts({ slice }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function get_posts() {
      try {
        const res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/`,
        );

        if (!res.ok) {
          throw new Error("API da xatolik!");
        }

        const data = await res.json();

        let dataSlice = data.slice(0, slice);

        setPosts(dataSlice);
      } catch (error) {
        toast.error(error.message);
      }
    }

    get_posts();
  }, [false]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
      <PostCard data={posts}></PostCard>
    </div>
  );
}

export default Posts;
