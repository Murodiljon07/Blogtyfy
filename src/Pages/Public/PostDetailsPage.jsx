import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_API = "https://alijonov0901.pythonanywhere.com";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      try {
        const res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/{id}/`,
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

  //   return (
  //     <div className="container py-20">
  //       <Link
  //         to="/posts"
  //         className="text-indigo-600 font-medium mb-6 inline-block hover:underline"
  //       >
  //         &larr; Back to Posts
  //       </Link>

  //       <div className="bg-white rounded-2xl shadow-md overflow-hidden">
  //         <img
  //           src={post.image}
  //           alt={post.title}
  //           className="w-full h-[400px] object-cover"
  //         />
  //         <div className="p-8">
  //           <span className="px-[10px] py-[2px] rounded-full bg-indigo-500 text-white text-[12px] font-semibold mb-4 inline-block">
  //             {post.category.name}
  //           </span>
  //           <h1 className="text-[36px] font-bold leading-[44px] mt-2 mb-4">
  //             {post.title}
  //           </h1>
  //           <p className="text-[16px] leading-[28px] text-gray-600 mb-6">
  //             {post.content}
  //           </p>
  //           <p className="text-[14px] text-gray-400">
  //             Published: {post.created_at}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return <div>salom</div>;
}

export default PostDetailPage;
