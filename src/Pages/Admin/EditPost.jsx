import { useParams, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import { toast } from "react-toastify";

/* icons */
import { MdOutlineFileUpload } from "react-icons/md";
import Btn from "../../Components/Btn";
let Base = import.meta.env.VITE_BASE_URL;

function EditPage() {
  let { id } = useParams();
  let navigate = useNavigate();

  let token = JSON.parse(localStorage.getItem("token"));

  let titleRef = useRef();
  let contentRef = useRef();
  let categoryRef = useRef();
  let isActiveRef = useRef();
  let [isActive, setIsActive] = useState(false);
  let imageRef = useRef();

  useEffect(() => {
    async function getPostByID() {
      try {
        let res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/${id.slice(1)}/`,
        );

        if (!res.ok) {
          throw new Error("Ma'lumot olishda xatolik");
        }

        let data = await res.json();

        console.log(data);

        titleRef.current.value = data.title;
        contentRef.current.value = data.content;
        setIsActive(data.is_active);
        categoryRef.current.value = data.category.id;
      } catch (error) {
        toast(error);
      }
    }
    getPostByID();
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("content", contentRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("image", imageRef.current.files[0]);

    async function updatedPost() {
      try {
        let res = await fetch(
          `https://alijonov0901.pythonanywhere.com/api/v1/articles/${id.slice(1)}/`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token.access}`,
            },
            body: formData,
          },
        );

        if (!res.ok) {
          throw new Error("O'zgartirib bo'lmadi");
        } else {
          toast.success("Post updated");
        }
      } catch (error) {
        toast.warning(error.message);
      }
    }

    updatedPost();
  }

  return (
    <div className="container mx-auto px-[16px] py-[40px]">
      <div className="mb-[40px]">
        <h2 className="text-[30px] leading-[36px] tracking-[-0.75px] font-[600] text-[#1F2937]">
          Edit Post {id}
        </h2>
        <p className="mt-[8px] text-[14px] leading-[14px] font-[500] text-[#6B7280]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <form className="flex gap-[32px]" onSubmit={handleSubmit}>
        <div className="bg-white w-[589.33px] h-[570px] p-[24px] rounded-[12px] shadow-sm space-y-[24px]">
          <div>
            <label className="mb-[8px] block text-[14px] leading-[14px] font-[500] text-[#374151]">
              Post Title
            </label>
            <input
              ref={titleRef}
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
            />
          </div>

          <div>
            <label className="mb-[8px] block text-[14px] leading-[14px] font-[500] text-[#374151]">
              Content
            </label>
            <textarea
              ref={contentRef}
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
              ref={categoryRef}
              className="
                w-full h-[40px]
                rounded-[10px]
                border border-[#D1D5DB]
                px-[16px]
                text-[14px] leading-[14px] font-[500] text-[#111827]
                focus:outline-none focus:ring-2 focus:ring-[#3B82F6]
              "
            >
              <option value={1}>Technology</option>
              <option value={2}>Productivity</option>
              <option value={3}>Design</option>
              <option value={4}>Business</option>
              <option value={5}>Lifestyle</option>
            </select>

            <label className="flex font-medium text-2xl items-center gap-[10px] mt-[10px]">
              isActive{" "}
              <div
                onClick={() => setIsActive(!isActive)}
                ref={isActiveRef}
                className={`${isActive ? "bg-green-600" : "bg-red-600"} w-[15px] h-[15px] rounded-[50%]`}
              ></div>
            </label>
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
              {imageRef.length ? (
                <FcApproval size={32} />
              ) : (
                <MdOutlineFileUpload size={32} />
              )}

              <span className="mt-[8px] text-center">
                Click to upload or drag and <br /> drop <br />
                PNG, JPG or WEBP
              </span>

              <input ref={imageRef} type="file" className="hidden" />
            </label>
          </div>

          <div className="flex gap-[12px]">
            <Btn
              style="main_btn"
              width="w-[171.66px]"
              height="h-[44px]"
              type="submit"
            >
              Publish Post
            </Btn>

            <button
              className="py-3 px-8.5
    border-2
    border-gray-200
    rounded-[12px] 
    bg-white
    text-[#000] 
    font-medium 
    text-[1.6rem] 
    leading-[24px] 
    text-center 
    cursor-pointer 
    transition-all 
    duration-300 
    hover:opacity-90"
              onClick={() => navigate("/admin/dashboard")}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditPage;
