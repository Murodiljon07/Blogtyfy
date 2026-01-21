import React from "react";

let Btn_style = {
  main_btn:
    "hover:cursor-pointer text-[1.2rem] font-medium py-[10px] px-[18px] bg-(--color-primary) text-white rounded-[12px] w-full",
  none_btn: "hover:cursor-pointer text-[2.6rem]",
};

function Btn({ children, style, onClick }) {
  return (
    <button className={Btn_style[style]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
