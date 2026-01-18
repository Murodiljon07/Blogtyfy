import React from "react";

const Btn_style = {
  main_btn: "bg-(--main-color) rounded-2xl py-[10px] px-[16px] text-[#fff]",
};

function Btn({ children, style }) {
  return <button className={Btn_style[style]}>{children}</button>;
}

export default Btn;
