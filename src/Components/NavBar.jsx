import React, { useState } from "react";
import { Link } from "react-router-dom";

/* icons & assets */
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import logo from "../assets/icons/Logo.svg";

/* components */
import Btn from "./Btn";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className=" fixed top-0
      h-[65px] z-50 w-full
  bg-white/70 backdrop-blur-md
  border-b border-gray-300"
    >
      <div className="container flex justify-between items-center py-5">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[3.4rem]" />
        </Link>

        <div className="sm:hidden">
          <Btn
            children={
              open ? <MdClose size={22} /> : <MdOutlineMenuOpen size={22} />
            }
            style="none_btn"
            onClick={() => setOpen(!open)}
          />
        </div>

        <ul className="hidden sm:flex items-center gap-8 text-[1.4rem] font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
          <li>
            <Link to="/login">
              <Btn children="Login" style="main_btn" height={"360px"} />
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`
          sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-5 px-6 pb-6 text-[1.4rem] font-medium bg-white ">
          <li className="w-full hover:cursor-pointer">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li className="w-full hover:cursor-pointer">
            <Link to="/posts" onClick={() => setOpen(false)}>
              Posts
            </Link>
          </li>
          <li>
            <Btn children="Login" style="main_btn" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
