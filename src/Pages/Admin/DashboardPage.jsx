import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

/* components */
import IndexCard from "../../Components/IndexCard";

function DashboardPage() {
  let [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function get_posts() {
  //     try {
  //       const res = await fetch(
  //         `https://alijonov0901.pythonanywhere.com/api/v1/articles/`,
  //       );
  //       if (!res.ok) {
  //         throw new Error("API da xatolik!");
  //       } else {
  //         toast.success("Ma'lumotlar qabul qilindi");
  //       }
  //       const data = await res.json();

  //       setPosts(data);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   }
  //   get_posts();
  // }, [false]);

  let category = posts.reduce((accumlator, item) => {
    let { category } = item;
    if (!accumlator.includes(category.name)) {
      accumlator.push(category.name);
    }
    return accumlator;
  }, []);

  return (
    <>
      <section>
        <h2 className="text-[32px] text-(--color-title) font-bold">
          Dashboard
        </h2>
        <p className="text-[16px] text-(--color-text) w-full">
          Welcome back! Here's an overview of your blog.
        </p>
        <div className="mt-[32px] flex gap-[24px]">
          <IndexCard totalPosts={posts} category={category} />
        </div>
      </section>
    </>
  );
}

export default DashboardPage;
