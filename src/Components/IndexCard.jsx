import React from "react";
import { GrDocumentText } from "react-icons/gr";
import { PiChartLineUpLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";

function IndexCard({ totalPosts, category }) {
  let cardInfoType = [
    {
      icon: <GrDocumentText />,
      degree: "12%",
      title: "Total Posts",
      index: totalPosts,
    },
    {
      icon: <GrDocumentText />,
      degree: "12%",
      title: "Total Posts",
      index: totalPosts,
    },
    {
      icon: <PiChartLineUpLight />,
      degree: "12%",
      title: "Total Posts",
      index: totalPosts,
    },
    {
      icon: <FiUsers />,
      degree: "12%",
      title: "Total Posts",
      index: totalPosts,
    },
  ];

  return cardInfoType.map((item) => {
    let { icon, degree, title, index } = item;
    return (
      <div className="border border-gray-300 rounded-[12px] w-[302px] h-[170px] p-[25px]">
        <div className="flex w-full justify-between items-center">
          <div className="h-[48px] w-[48px] text-[20px] bg-[#4346EF1A] flex items-center justify-center rounded-[12px]">
            {icon}
          </div>
          <span className="text-[12px] font-medium text-green-600">
            {degree}
          </span>
        </div>
        <h4>{index}</h4>
        <p>{title}</p>
      </div>
    );
  });
}

export default IndexCard;
