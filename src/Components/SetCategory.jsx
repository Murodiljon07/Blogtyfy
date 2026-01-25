import React, { useState } from "react";

import Btn from "../Components/Btn";

function SetCategory() {
  let [active, setActive] = useState("All");
  let categorys = ["All", "Test 1", "Test 2", "Test 3"];
  return (
    <div className="mb-[32px] flex items-center justify-center gap-2 px-[10px] h-[48px] max-w-[448px] mx-auto  rounded-[10px] bg-[var(--color-bg)]">
      {categorys.map((item) => {
        return (
          <Btn
            style={`${active === item ? "py-[12px] px-[18px] bg-white w-[110px] cursor-pointer rounded-[8px]" : ""} cursor-pointer`}
            onClick={() => setActive(item)}
          >
            {item}
          </Btn>
        );
      })}
    </div>
  );
}

export default SetCategory;
