import React, { useState } from "react";
import Posts from "../../Components/Posts";
import ExploreHero from "../../Components/ExploreHero";

function PostsPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="bg-[var(--color-bg)] h-[376px] mb-[64px]">
        <ExploreHero search={search} setSearch={setSearch} />
      </div>

      <div className="container">
        <Posts search={search} />
      </div>
    </>
  );
}

export default PostsPage;
