import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <section className="max-w-7xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-3">
        {""}
        <div>
          <img
            src="./src/assets/pictures/svg/Link.svg"
            alt="site logo"
            className="mb-4"
          />
          <p className="text-gray-500 max-w-sm">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>

        {""}
        <div>
          <h5 className="font-semibold text-gray-900 mb-4">Quick Links</h5>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Posts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Login
              </a>
            </li>
          </ul>
        </div>

        {""}
        <div>
          <h5 className="font-semibold text-gray-900 mb-4">Connect</h5>
          <div className="flex gap-3">
            {["GitHub", "LinkedIn", "Twitter"].map((item, i) => (
              <button
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-indigo-600 hover:text-white transition"
              >
                <img
                  src={`./src/assets/pictures/svg/connect/Link - ${item}.png`}
                  alt={item}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        © 2025 Blogify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
