import React from "react";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import Btns from "./Btns";

function PostCard({ posts }) {
  return posts.map((item) => {
    let { image, title, created_at, category, content } = item;
    return (
      <div
        key={uuidv4()}
        className="relative w-full rounded-2xl bg-white shadow-md"
      >
        <div className="relative h-[192px] overflow-hidden rounded-t-2xl">
          <p
            className="
    absolute top-4 left-4 z-10
    px-3 py-1 bg-(--color-primary)
    rounded-xl text-white text-sm font-bold
  "
          >
            {category.name}
          </p>

          <img src={image} alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center">
          <CiCalendarDate />
          <p>{created_at.slice(0, 10)}</p>
        </div>

        <h3 className="text-xl font-bold line-clamp-2">{title}</h3>

        <p className="text-gray-600 line-clamp-3">{content}</p>

        <Link to={"/posts"}>
          <Btns children={"Read more -->"} style={"style_none"}></Btns>
        </Link>
      </div>
    );
  });
}

export default PostCard;
