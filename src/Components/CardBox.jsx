import React from "react";
import { v4 as uuidv4 } from "uuid";

function CardBox({ data }) {
  return (
    <>
      {data.map((item) => {
        const { icon, title, content } = item;
        return (
          <div
            key={uuidv4()}
            className="bg-white border border-gray-200 rounded-[16px] p-6 w-full sm:max-w-[384px] h-[238px] flex flex-col items-start  shadow-sm p-[33px]     transform transition-transform duration-300 ease-out
    hover:shadow-lg 
    hover:-translate-y-2
    hover:cursor-pointer"
          >
            <img src={icon} alt="icon" className="mb-4 h-[48px] " />
            <h4 className="font-semibold text-[20px] leading-[28px] -tracking-[0.5px] text-(--color-title) mb-2">
              {title}
            </h4>
            <p className="font-normal text-[16px] leading-[24px] text-(--color-text)">
              {content}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default CardBox;
