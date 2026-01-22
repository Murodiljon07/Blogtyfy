import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function ExploreHero({ search, setSearch }) {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 ">
      <h1 className="text-[60px] leading-[60px] font-bold tracking-[-1.5px] text-center text-gray-900 mb-6">
        Explore Our Posts
      </h1>

      <p className="text-[20px] leading-[28px] font-normal text-center text-gray-600 mb-8 max-w-[640px]">
        Discover amazing content from talented writers across various topics
      </p>

      <div className="flex items-center w-full max-w-[576px] h-[48px] border border-gray-300 rounded-[10px] px-4 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-300">
        <BiSearchAlt className="text-gray-400 text-2xl mr-2" />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-full outline-none text-gray-900 placeholder-gray-400 text-base"
        />
      </div>
    </section>
  );
}

export default ExploreHero;
