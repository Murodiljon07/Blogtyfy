import React from "react";

import { useState, useEffect } from "react";
/* API */
const Posts_API = "https://alijonov0901.pythonanywhere.com";
/* assets && icons */
import { BiSearchAlt } from "react-icons/bi";

/* components */
import PostCard from "../../../components/PostCard";

function PostsLayout() {
  let [posts, serPosts] = useState([]);

  useEffect(() => {
    async function get_Posts() {
      try {
        let res;
      } catch (error) {}
    }
  }, []);

  return (
    <>
      <section className="bg-(--color-background-alt) pt-[178px] pb-[128px] mb-[128px]">
        <div className="container flex justify-center items-center gap-[48px] px-[128px]">
          <div className="text-center">
            <h2 className="text-[6rem] font-bold">Explore Our Posts</h2>
            <p>
              Discover amazing content from talented writers across various
              topics
            </p>
            <div className="flex items-center justify-center border border-gray-300 py-[15.5px] px-[13px] gap-[15px] text-2xl bg-amber-50 rounded-2xl">
              <BiSearchAlt></BiSearchAlt>
              <input
                type="text"
                placeholder="Search post..."
                className="w-full focus:outline-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostsLayout;
