import React from "react";
import Btn from "../../Components/Btn";
import { MdOutlineFileUpload } from "react-icons/md";

function CreatePostPage() {
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
              <MdOutlineFileUpload size={32} />
              <span className="mt-[8px] text-center">
                Click to upload or drag and <br /> drop <br />
                PNG, JPG or WEBP
              </span>

              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>

          <div className="flex gap-[12px]">
            <Btn style="main_btn" width="w-[171.66px]" height="h-[44px]">
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
