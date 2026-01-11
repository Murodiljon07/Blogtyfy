import React from "react";
import { Link } from "react-router-dom";

/* assets */
import Logo from "../assets/icons/Logo.svg";

function NavBar() {
  return (
    <nav className="bg-[var(--display-color)] backdrop-blur-[16px]">
      <div className="container py-[1.8rem] flex justify-between items-center">
        <Link to="/">
          {" "}
          <img src={Logo} alt="Site logo" />
        </Link>

        <div className="flex align-middle gap-8 items-center">
          <Link
            to="/"
            className="cursor-pointer text-[var(--title-color)] text-[1.4rem] font-[700]"
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="cursor-pointer text-[var(--title-color)] text-[1.4rem] font-[700]"
          >
            Posts
          </Link>
          <Link
            to="/login"
            className="cursor-pointer text-white text-[1.4rem] font-[700] bg-[var(--main-color)] rounded-[12px] py-[10px] px-[16px]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
