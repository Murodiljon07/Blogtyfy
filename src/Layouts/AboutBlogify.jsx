import React from "react";
import BlogifyInfo from "../data/aboutBlogify";

function AboutBlogify() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Blogify?
      </h2>

      <p className="text-gray-500 text-lg max-w-2xl mb-12">
        Built with modern technologies and best practices to provide the best
        blogging experience.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BlogifyInfo.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-200 text-white mb-4">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutBlogify;
