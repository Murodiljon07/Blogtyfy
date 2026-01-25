import React from "react";

const Btn_style = {
  main_btn: `
    text-[1.2rem] 
    font-medium 
    py-3 px-5 
    rounded-[12px] 
    bg-[var(--color-primary)] 
    text-white 
    cursor-pointer 
    hover:opacity-90 
    transition-all 
    duration-300
  `,
  none_btn: `
    text-[2.6rem] 
    cursor-pointer
  `,
  gradient_btn: `
    py-3 px-8.5
    rounded-[12px] 
    bg-gradient-to-r from-[#4346EF] to-[#8524E5] 
    text-white 
    font-medium 
    text-[1.6rem] 
    leading-[24px] 
    text-center 
    cursor-pointer 
    transition-all 
    duration-300 
    hover:opacity-90
  `,
  bordered_btn: `
    py-3 px-8.5
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
    hover:opacity-90
  `,
};

function Btn({ children, style, onClick, width = "w-full", height, type }) {
  return (
    <button
      type={type}
      className={`${Btn_style[style]} ${width} ${height} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
