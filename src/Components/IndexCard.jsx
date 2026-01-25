import React from "react";
import { GrDocumentText } from "react-icons/gr";
import { PiChartLineUpLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";

function IndexCard({ totalPosts, category }) {
  let cardInfoType = [
    {
      icon: <GrDocumentText color="#4346EF" />,
      degree: "+12%",
      title: "Total Posts",
      index: totalPosts,
    },
    {
      icon: <GrDocumentText color="#8524E5" />,
      degree: "+2%",
      title: "Total Posts",
      index: category,
    },
    {
      icon: <PiChartLineUpLight color="#21C45D" />,
      degree: "+23%",
      title: "Total Posts",
      index: "12.5K",
    },
    {
      icon: <FiUsers color="#4346EF" />,
      degree: "+8%",
      title: "Total Posts",
      index: "1.2K",
    },
  ];

  return cardInfoType.map((item) => {
    let { icon, degree, title, index } = item;
    return (
      <div className="border border-gray-300 rounded-[12px] w-[302px] h-[170px] p-[25px]">
        <div className="flex w-full justify-between items-center">
          <div className="h-[48px] w-[48px] text-[20px] bg-[#4346EF1A] flex items-center justify-center rounded-[12px] mb-[12px]">
            {icon}
          </div>
          <span className="text-[12px] font-medium text-green-600">
            {degree}
          </span>
        </div>
        <h4 className="text-[24px] font-[700] text-(--color-title) mb-[4px]">
          {index}
        </h4>
        <p className="text-[14px] text-(--color-text) font-[400]">{title}</p>
      </div>
    );
  });
}

export default IndexCard;
