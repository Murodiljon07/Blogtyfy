import React from "react";

const Btn_styles = {
  style_none: "cursor-pointer",
  main_btn:
    "cursor-pointer pb-[10.5px] pt-[9.5px] px-4 bg-(--color-primary) rounded-3xl text-white",
};

function Btns({ children, style }) {
  return <button className={Btn_styles[style]}>{children}</button>;
}

export default Btns;
