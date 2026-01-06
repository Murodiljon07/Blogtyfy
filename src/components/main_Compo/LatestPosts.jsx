import React from "react";
import latestsPosts from "../../data/latestsPosts";

function LatestPosts() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Posts
          </h2>
          <p className="text-gray-500 mt-2">
            Check out our most recent articles
          </p>
        </div>

        <button className=" px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition cursor-pointer">
          View All <i className="bx bx-right-arrow-alt h-2"></i>
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestsPosts.map(({ id, image, date, title, description }) => (
          <div
            key={id}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />

            <div className="p-5">
              <span className="text-sm text-gray-400">{date}</span>

              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {title}
              </h3>

              <p className="text-gray-500 mt-2 line-clamp-3">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestPosts;
