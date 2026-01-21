import React from "react";
import CardBox from "./CardBox";
import AbotBlogify from "../data/AboutBlogify";

function AboutBlogifySection() {
  return (
    <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col items-center text-center mb-12 max-w-[672px] mx-auto">
        <h2 className="font-bold text-[36px] leading-[40px] -tracking-[0.9px] text-[var(--color-title)] mb-4 animate-fadeInUp">
          Why Choose Blogify?
        </h2>
        <p className="font-normal text-[18px] leading-[28px] text-[var(--color-text)] animate-fadeInUp delay-100">
          Built with modern technologies and best practices to provide the best
          blogging experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <CardBox data={AbotBlogify} />
      </div>
    </section>
  );
}

export default AboutBlogifySection;
