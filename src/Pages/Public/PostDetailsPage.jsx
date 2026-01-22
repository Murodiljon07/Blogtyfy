import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

/* icons */
import { BsCalendarEvent } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

/* components */
import Posts from "../../Components/Posts";

const BASE_API = import.meta.env.VITE_BASE_API;

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  console.log(post);

  useEffect(() => {
    async function getPost() {
      try {
        const res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/${id}/`,
        );
        if (!res.ok) throw new Error("Post topilmadi!");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getPost();
  }, [id]);

  if (!post) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="container py-20">
      <div className=" flex items-center py-[24px] px-[32px]">
        <Link
          to="/posts"
          className="font-medium mb-6 inline-block hover:underline text-[#000] text-[14px]"
        >
          &larr; Back to Posts
        </Link>
      </div>

      <div className="bg-white  overflow-hidden max-w-[832px] mx-auto">
        <div className="p-8">
          <span className="px-[10px] py-[2px] rounded-full bg-indigo-500 text-white text-[12px] font-semibold mb-4 inline-block">
            {post.category.name}
          </span>
          <h1 className="text-[36px] font-bold leading-[44px] mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-[16px] leading-[28px] text-gray-600 mb-6">
            {post.content}
          </p>
          <div className="flex items-center gap-[8px]">
            <CiUser size={18} />
            <p className="text-[14px] text-gray-400">{post.author.email}</p>
            <BsCalendarEvent size={16} color="gray" />
            <p className="text-[14px] text-gray-400">
              {post.created_at.slice(0, 10)}
            </p>
          </div>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-b-[32px] mb-[32px] "
        />
        <h1 className="text-[3.6rem] font-[600] ">Lorem, ipsum dolor.</h1>
        <p className="text-[1.8rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          voluptatem aliquam tempore consequuntur placeat porro voluptates qui
          labore, adipisci laboriosam asperiores suscipit neque optio ex minima
          voluptas est maxime ipsum.
        </p>
        <h1 className="text-[3.6rem] font-[600] ">Suscipit neque optio </h1>
        <p className="text-[1.8rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          voluptatem aliquam tempore consequuntur placeat porro voluptates qui
          labore, adipisci laboriosam asperiores suscipit neque optio ex minima
          voluptas est maxime ipsum.
        </p>
        <h1 className="text-[3.6rem] font-[600] ">Adipisicing elit</h1>
        <p className="text-[1.8rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          voluptatem aliquam tempore consequuntur placeat porro voluptates qui
          labore, adipisci laboriosam asperiores suscipit neque optio ex minima
          voluptas est maxime ipsum.
        </p>
        <h1 className="text-[3.6rem] font-[600] ">Voluptatem aliquam</h1>
        <p className="text-[1.8rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          voluptatem aliquam tempore consequuntur placeat porro voluptates qui
          labore, adipisci laboriosam asperiores suscipit neque optio ex minima
          voluptas est maxime ipsum.
        </p>
      </div>

      <section className="my-[64px] px-[32px]">
        <h4 className="text-[3.6rem] font-bold text-[var(--title-color)] ">
          Related Posts
        </h4>
        <Posts slice={3} />
      </section>
    </div>
  );
}

export default PostDetailPage;
