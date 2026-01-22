import React from "react";

import { Link } from "react-router-dom";

/* components */
import InspireHero from "../../Components/InspireHero";
import AboutBlogifySection from "../../Components/AboutBlogifySection";
import Posts from "../../Components/Posts";
import Btn from "../../Components/Btn";

function HomePage() {
  return (
    <>
      <InspireHero></InspireHero>
      <AboutBlogifySection></AboutBlogifySection>
      <section className="px-[3.2rem] py-[4.8rem] container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="font-inter font-bold text-[36px] leading-[40px] tracking-[-0.9px] text-gray-900">
              Latest Posts
            </h3>
            <p className="font-inter text-[18px] leading-[28px] text-gray-600 mt-2">
              Check out our most recent articles
            </p>
          </div>

          <Link to={"/posts"}>
            <Btn style="bordered_btn" width="130px">
              View All →
            </Btn>
          </Link>
        </div>

        <Posts slice={3} />
      </section>
    </>
  );
}

export default HomePage;
