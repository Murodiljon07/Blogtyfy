import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const BASE_API = import.meta.env.VITE_BASE_API;

function RelatedPost({ id }) {
  const [posts, setPosts] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${BASE_API}/api/v1/articles/`);
        if (!res.ok) throw new Error("Posts topilmadi!");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <PostCard data={posts}></PostCard>
    </div>
  );
}

export default RelatedPost;
