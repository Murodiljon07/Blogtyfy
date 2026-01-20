import React from "react";

function Loyalcard({ arr }) {
  return (
    <>
      {arr.map((item) => {
        let { id, img, title, text } = item;
        return (
          <div
            key={id}
            className="flex
             flex-col justify-around p-[33px] border
              border-gray-300 rounded-[16px] max-w-[384px] 
              min-w-[250px] h-[238px]"
          >
            <img src={img} alt="icon" />
            <h3 className="">{title}</h3>
            <p>{text}</p>
          </div>
        );
      })}
    </>
  );
}

export default Loyalcard;
