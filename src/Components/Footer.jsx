import React from "react";

import { Link } from "react-router-dom";

/* assets && icons*/
import { RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import logo from "../assets/icons/Logo.svg";

function Footer() {
  return (
    <div className="container ">
      <div className="flex flex-col sm:flex-row justify-between mb-[32px]">
        <div>
          <img src={logo} alt="logo" className="h-[3.4rem]" />

          <p className="text-(--color-text) font-[400] text-[1.4rem] max-w-[340px] mt-4">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>

        <ul className="text-[1.4rem] font-[400] ">
          <h3 className="text-[2.4rem] text-(--title-color) font-[600]">
            Quick Links
          </h3>
          <li className="hover:text-[1.8rem] text-(--color-text)">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-[1.8rem] text-(--color-text)">
            <Link to={"/posts"}>Posts</Link>
          </li>
          <li className="hover:text-[1.8rem] text-(--color-text)">
            <Link to={"/"}>Login</Link>
          </li>
        </ul>

        <div>
          <h3 className="text-[2.4rem] text-(--color-title) font-[600]">
            Connect
          </h3>
          <div className="flex gap-[1.2rem] text-[1.6rem]">
            <div className="connect_box ">
              <RiTwitterLine size={25} />
            </div>
            <div className="connect_box ">
              <FiGithub size={25} />
            </div>
            <div className="connect_box ">
              <FiLinkedin size={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[53px] border-t border-gray-200 flex justify-center items-end">
        <p className="text-(--color-text) text-[1.4rem] font-[400]">
          © 2025 Blogify. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
