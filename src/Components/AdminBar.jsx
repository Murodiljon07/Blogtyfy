import React from "react";
import { NavLink, Link } from "react-router-dom";

/* assets && icons*/
import { MdOutlineDashboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { LuNotepadText } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import logo from "../assets/icons/Logo.svg";

/* components */
import Btn from "./Btn";

function AdminBar() {
  let adminPages = [
    {
      icon: <MdOutlineDashboard />,
      link: "dashboard",
      title: "Dashboard",
    },
    {
      icon: <LuNotepadText />,
      link: "adminPosts",
      title: "Posts",
    },
    {
      icon: <FaPlus />,
      link: "createPosts",
      title: "Create Post",
    },
  ];
  return (
    <nav className="flex flex-col justify-between items-center border-r border-gray-300 h-screen">
      <div className="py-[26px] px-[24px] border-b border-gray-300 w-[255px]">
        <NavLink to={"/admin"}>
          <img src={logo} alt="logo" className="h-" />
          <p className="mt-1 text-[14px] text-(--color-text)">Admin Panel</p>
        </NavLink>
      </div>

      <div className="grow flex flex-col p-4 gap-2 w-full ">
        {adminPages.map((item) => {
          let { link, icon, title } = item;
          return (
            <NavLink
              to={link}
              className={({ isActive }) =>
                `py-3 px-4 text-[14px] rounded-[12px]  font-medium flex items-center gap-3 h-[44px] h-[20px] hover:text-(--color-primary)
              ${isActive ? `bg- text-(--color-primary) bg-[#4346EF1A]` : ""}`
              }
            >
              {icon}
              {title}
            </NavLink>
          );
        })}
      </div>
      <div className="p-4 border-t border-gray-300 w-full flex items-center justify-center">
        <NavLink
          to={"/login"}
          className={
            "py-3 px-4 text-[14px] rounded-[12px]  font-medium flex items-center gap-3 h-[44px] h-[20px] hover:text-(--color-primary) "
          }
        >
          <IoIosLogOut size={20} />
          Logout
        </NavLink>
      </div>
    </nav>
  );
}

export default AdminBar;
