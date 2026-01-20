import React from "react";
import { Link } from "react-router-dom";

/* assets && icons*/
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

import Logo_top from "../assets/icons/Logo_Top.svg";

function Footer() {
  return (
    <div className="container ">
      <div className="flex justify-between mb-[32px]">
        <div>
          <img src={Logo_top} alt="Logo" />
          <p className="text-[1.4rem] text-(--color-text)">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          <h3>Quick Links</h3>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h3>Connect</h3>
          <div className="flex gap-3 text-[2rem]">
            <Link className="link_box">
              <CiTwitter />
            </Link>
            <Link className="link_box">
              <FiGithub />
            </Link>
            <Link className="link_box">
              <LuLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 flex items-center justify-center pt-[32px]  text-(--color-text) text-[1.4rem]">
        <p>© 2025 Blogify. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
