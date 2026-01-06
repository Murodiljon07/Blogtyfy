import React from "react";

import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {""}
        <a href="#" className="flex items-center gap-2">
          <img
            src="./src/assets/pictures/svg/Link.svg"
            alt="site logo"
            className="h-8"
          />
        </a>

        {""}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-xl text-gray-600 hover:text-indigo-600 transition">
            Home
          </button>
          <button className="px-4 py-2 rounded-xl text-gray-600 hover:text-indigo-600 transition">
            Posts
          </button>
          <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Login
          </button>
        </div>

        {""}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-gray-300"
        >
          {open ? (
            <i className="bx bx-x text-2xl"></i>
          ) : (
            <i className="bx bx-menu text-2xl"></i>
          )}
        </button>
      </div>

      {""}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4 flex flex-col gap-3">
          <button className="text-left px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer">
            Home
          </button>
          <button className="text-left px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer">
            Posts
          </button>
          <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 cursor-pointer ">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
