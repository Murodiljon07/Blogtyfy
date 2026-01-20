import React from "react";
import { Link } from "react-router-dom";

/* assets && icons*/
import logo_top from "../assets/icons/Logo_Top.svg";

/* components */
import { MdMenuOpen } from "react-icons/md";
import Btns from "./Btns";

function NavBar() {
  return (
    <nav className="fixed bg-(--color-background)  w-full border-b border-gray-200 py-[14px] ">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img src={logo_top} alt="Logo" />
          </Link>
        </div>

        <div className=" sm:hidden text-5xl ">
          <Btns
            children={<MdMenuOpen></MdMenuOpen>}
            style={"style_none"}
          ></Btns>
        </div>
        <ul className="hidden sm:flex items-center justify-center gap-8 text-(--color-title) text-[1.4rem] font-medium">
          <li>
            <Link to={"/"} className="pb-[10.5px] pt-[9.5px] px-4 ">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/posts"} className="pb-[10.5px] pt-[9.5px] px-4 ">
              Posts
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Btns children={"Login"} style={"main_btn"}></Btns>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
