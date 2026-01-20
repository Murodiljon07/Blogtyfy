import React from "react";
import { Link } from "react-router-dom";

/* data  */
import AboutBlogify from "../../../data/AboutBlogify";

/* asseta */
import Hero_img from "../../../assets/pictures/Hero illustration.png";

/* components */
import Btns from "../../../components/Btns";
import Loyalcard from "../../../components/Loyalcard";

function HomeLayouts() {
  return (
    <>
      <section className="bg-(--color-background-alt) pt-[178px] pb-[128px] mb-[128px]">
        <div className="container flex gap-[48px] px-[128px]">
          <div>
            <h2 className="text-[6rem] font-bold">
              Create, Read,
              <span className="text-(--color-primary)">Inspire.</span>
            </h2>
            <p>
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>
            <div className="flex gap-4">
              <Btns children={"Explore Posts -->"} style={"main_btn"}></Btns>
              <Btns children={"Get Started"}></Btns>
            </div>
          </div>
          <img
            src={Hero_img}
            alt="lernneflleg"
            className="h-[328.5px] h-auto"
          />
        </div>
      </section>

      <section className="container flex flex-col items-center justify-center py-[32px]">
        <div className="text-center mb-16">
          <h3 className=""> Why Choose Blogify?</h3>
          <p>
            Built with modern technologies and best practices to provide the
            best blogging experience.
          </p>
        </div>
        <div className="flex gap-8 wrap">
          <Loyalcard arr={AboutBlogify} />
        </div>
      </section>

      <section className="container py-[32px]">
        <div className="flex justify-between items-center mb-[48px]">
          <div>
            <h3 className="">Latest Posts</h3>
            <p>Check out our most recent articles</p>
          </div>

          <Link to={".posts"}>
            <Btns children={"View All -->"} style={"style_none"}></Btns>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomeLayouts;
