import React from "react";

const BtnStyles = {
  stBtn:
    "cursor-pointer text-white text-[1.4rem] font-[700] bg-[var(--main-color)] rounded-[12px] py-[10px] px-[16px]",
  ndBTn: "cursor-pointer text-[var(--title-color)] text-[1.4rem] font-[700] ",
  linkBtn: "cursor-pointer text-[var(--title-color)] text-[1.4rem] font-[700]",
  linkAltBtn:
    "cursor-pointer text-[var(--title-color)] text-[1.4rem] font-[400]",
};

function Button({ children, type = "button", BtnStyle }) {
  return (
    <>
      <button type={type} className={BtnStyles[BtnStyle]}>
        {children}
      </button>
    </>
  );
}

export default Button;
