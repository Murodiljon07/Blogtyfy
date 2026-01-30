import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

function PostCard({ data }) {
  return data.map((post) => {
    const { id, category, image, created_at, title, content } = post;

    return (
      <div
        className="
            group border-gray-300 rounded-2xl duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl
            relative
         
          "
      >
        <span
          className="
              absolute
              top-4
              left-4
              z-10
              px-[10px]
              py-[2px]
              rounded-full
              bg-[var(--color-primary)]
              text-[12px]
              font-semibold
              leading-[16px]
              text-white
              transition-all
              duration-300
              group-hover:bg-white
              group-hover:text-[var(--color-primary)]
            "
        >
          {category.name}
        </span>

        <div className="overflow-hidden rounded-t-2xl ">
          <img
            src={image}
            alt={title}
            className="
                w-full
                h-[192px]
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
                
              "
          />
        </div>

        <div className="p-6">
          <span className="text-[14px] leading-[20px] text-gray-500 block mb-2 flex items-center gap-2">
            <CiCalendarDate size={16} /> {created_at.slice(0, 10)}
          </span>

          <h4
            className="
                font-semibold
                text-[20px]
                leading-[28px]
                tracking-[-0.5px]
                text-gray-900
                mb-2
                transition-colors
                duration-300
                group-hover:text-indigo-600
              "
          >
            {title}
          </h4>

          <p className="text-[14px] leading-[20px] text-gray-600 line-clamp-3">
            {content}
          </p>
          <Link
            to={`/posts/${id}`}
            className="
    inline-block
    mt-4
    text-[14px]
    font-medium
    text-indigo-600
    hover:text-indigo-500
    hover:underline
    transition-colors
    duration-300
    group-hover:gap-3
  "
          >
            Read more Next &copy;
          </Link>
        </div>
      </div>
    );
  });
}

export default PostCard;
