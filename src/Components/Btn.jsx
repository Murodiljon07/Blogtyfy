import React from "react";

const Btn_style = {
  main_btn: `
    text-[1.2rem] 
    font-medium 
    py-2 px-4 
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
    py-2 px-4 
    rounded-[12px] 
    bg-gradient-to-r from-[#4346EF] to-[#8524E5] 
    text-white 
    font-medium 
    text-[16px] 
    leading-[24px] 
    text-center 
    cursor-pointer 
    transition-all 
    duration-300 
    hover:opacity-90
  `,
};

function Btn({
  children,
  style = "main_btn",
  onClick,
  width = "w-full",
  height,
}) {
  return (
    <button className={`${Btn_style[style]} ${width} `} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
