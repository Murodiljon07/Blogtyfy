import React from "react";

import About_Blogify from "../../data/BlogifyInfo";

function AboutBlogify() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[3.6rem] font-bold">Why Choose Blogify?</h2>
        <p className="max-w-[70rem] text-center text-[1.8rem]">
          Built with modern technologies and best practices to provide the best
          blogging experience.
        </p>
      </div>

      <div className="flex">
        {About_Blogify.map((item) => {
          let { id, icon, title, text } = item;
          return (
            <div>
              <img src={icon} alt="icon" />
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutBlogify;
