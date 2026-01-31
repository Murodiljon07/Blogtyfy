import React from "react";
import Btn from "../../Components/Btn";
import { useState } from "react";
/* icons */
import { MdOutlineFileUpload } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { toast } from "react-toastify";

function CreatePostPage() {
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("1", title);
    formData.append("2", content);
    formData.append("3", category);
    formData.append("4", image);

    async function publishPost() {
      try {
        let res = await fetch(
          "https://alijonov0901.pythonanywhere.com/api/v1/articles/",

          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token.access}`,
            },
            body: formData,
          },
        );

        if (!res.ok) {
          throw new Error("Server bilan muammo!");
        }

        toast.success("Post Published");
      } catch (error) {
        console.log(error);
        toast(error);
      }
    }
    publishPost();
  }

  return (
    <div className="container mx-auto px-[16px] py-[40px]">
      <div className="mb-[40px]">
        <h2 className="text-[30px] leading-[36px] tracking-[-0.75px] font-[600] text-[#1F2937]">
          Create New Post
        </h2>
        <p className="mt-[8px] text-[14px] leading-[14px] font-[500] text-[#6B7280]">
          Fill in the details to create a new blog post
        </p>
      </div>

      <form className="flex gap-[32px]">
        <div className="bg-white w-[589.33px] h-[570px] p-[24px] rounded-[12px] shadow-sm space-y-[24px]">
          <div>
            <label className="mb-[8px] block text-[14px] leading-[14px] font-[500] text-[#374151]">
              Post Title
            </label>
            <input
              type="text"
              placeholder="Enter post title..."
              className="
                w-[539.33px] h-[40px]
                rounded-[10px]
                border border-[#D1D5DB]
                px-[16px]
                text-[14px] leading-[14px] font-[500] text-[#111827]
                placeholder:font-[400]
                placeholder:text-[14px]
                placeholder:leading-[20px]
                placeholder:text-[#9CA3AF]
                focus:outline-none focus:ring-2 focus:ring-[#3B82F6]
              "
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-[8px] block text-[14px] leading-[14px] font-[500] text-[#374151]">
              Content
            </label>
            <textarea
              placeholder="Write your post content..."
              className="
                w-[539.33px] h-[400px]
                rounded-[10px]
                border border-[#D1D5DB]
                px-[16px] py-[12px]
                resize-none
                text-[14px] leading-[20px] font-[500] text-[#111827]
                placeholder:font-[400]
                placeholder:text-[#9CA3AF]
                focus:outline-none focus:ring-2 focus:ring-[#3B82F6]
              "
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="bg-white w-[282.66px] p-[24px] rounded-[12px] shadow-sm h-[174px]">
            <h3 className="mb-[16px] text-[16px] leading-[20px] font-[600] text-[#1F2937]">
              Post Settings
            </h3>

            <label className="mb-[8px] block text-[14px] leading-[14px] font-[500] text-[#374151]">
              Category
            </label>

            <select
              className="
                w-full h-[40px]
                rounded-[10px]
                border border-[#D1D5DB]
                px-[16px]
                text-[14px] leading-[14px] font-[500] text-[#111827]
                focus:outline-none focus:ring-2 focus:ring-[#3B82F6]
              "
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Technology</option>
              <option>Productivity</option>
              <option>Design</option>
              <option>Business</option>
              <option>Lifestyle</option>
            </select>
          </div>

          <div className="bg-white w-[282.66px] h-[300px] p-[24px] rounded-[12px] shadow-sm">
            <h3 className="mb-[16px] text-[16px] leading-[20px] font-[600] text-[#1F2937]">
              Featured Image
            </h3>

            <label
              className="
      w-full h-[212px]
      rounded-[12px]
      border-[2px] border-dashed border-[#D1D5DB]
      flex flex-col items-center justify-center
      text-[14px] leading-[20px] font-[400]
      text-[#6B7280]
      cursor-pointer
      hover:border-[#3B82F6]
      hover:text-[#3B82F6]
      transition
    "
            >
              {image ? (
                <FcApproval size={32} />
              ) : (
                <MdOutlineFileUpload size={32} />
              )}
              <span className="mt-[8px] text-center">
                Click to upload or drag and <br /> drop <br />
                PNG, JPG or WEBP
              </span>

              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>

          <div className="flex gap-[12px]">
            <Btn
              style="main_btn"
              width="w-[171.66px]"
              height="h-[44px]"
              type="submit"
              onClick={handleSubmit}
            >
              Publish Post
            </Btn>

            <Btn style="bordered_btn" width="w-[99px]" height="h-[44px]">
              Cancel
            </Btn>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
