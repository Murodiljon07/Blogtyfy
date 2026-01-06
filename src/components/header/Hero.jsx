import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-200 to-indigo-500">
      <div className="max-w-7xl mx-auto px-5 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 py-20">
        {""}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Create, Read,
            <span className="block text-indigo-800"> Inspire.</span>
          </h2>

          <p className="text-indigo-100 text-lg max-w-xl">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className=" px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition cursor-pointer">
              Explore Posts <i className="bx bx-right-arrow-alt"></i>
            </button>

            <button className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {""}
        <div className="cursor-pointer transform hover:scale-105 transition duration-300">
          <img
            src="./src/assets/pictures/Hero illustration.png"
            alt="Hero Illustration"
            className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
