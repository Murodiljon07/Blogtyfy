import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

/* components */
import IndexCard from "../../Components/IndexCard";
import PostsTable from "../../PostsTable";

function DashboardPage() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function get_posts() {
      try {
        const res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/`,
        );
        if (!res.ok) {
          throw new Error("API da xatolik!");
        } else {
          toast.success("Ma'lumotlar qabul qilindi");
        }
        const data = await res.json();

        setPosts(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    get_posts();
  }, [false]);

  console.log(posts);

  let category = posts.reduce((accumlator, item) => {
    let { category } = item;
    if (!accumlator.includes(category.name)) {
      accumlator.push(category.name);
    }
    return accumlator;
  }, []);

  return (
    <>
      <section className="mb-[32px]">
        <h2 className="text-[32px] text-(--color-title) font-bold">
          Dashboard
        </h2>
        <p className="text-[16px] text-(--color-text) w-full">
          Welcome back! Here's an overview of your blog.
        </p>
        <div className="mt-[32px] flex gap-[24px]">
          <IndexCard totalPosts={posts.length} category={category.length} />
        </div>
      </section>

      <section className="p-[24px] border border-[#E5E7EB] rounded-[12px]">
        <div className="mb-[24px]">
          <h3 className="text-[20px] font-[600] text-(--color-title)">
            Recent Posts
          </h3>
          <p className="text-[14px] font-[400] text-(--color-text)">
            Manage and monitor your latest content
          </p>
        </div>
        <PostsTable posts={posts} />
      </section>
    </>
  );
}

export default DashboardPage;
