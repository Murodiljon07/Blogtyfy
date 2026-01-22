import React from "react";

import { Link } from "react-router-dom";

/* assets */
import Hero_img from "../assets/pictures/Hero illustration.png";

/* components */
import Btn from "./Btn";

function InspireHero() {
  return (
    <section className="bg-[var(--color-bg)] h-[584px] flex mb-[128px]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-16 px-4 sm:px-6 lg:px-20 gap-12">
        <div className="max-w-[584px] flex flex-col justify-between text-center lg:text-left">
          <h2 className="font-bold text-[60px] leading-[60px] -tracking-[1.5px] text-[var(--color-title)] mb-6">
            Create, Read,{" "}
            <span className="text-[var(--color-primary)]">Inspire.</span>
          </h2>
          <p className="font-normal text-[20px] leading-[28px] text-[var(--color-text)] mb-6">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full ">
            <Link to={"/posts"}>
              <Btn
                children={"Explore Posts →"}
                style={"gradient_btn"}
                width="w-[193px]"
                height={"48px"}
              />
            </Link>
            <Link to={"/posts"}>
              <Btn
                children={"Get Started"}
                style={"bordered_btn"}
                width="w-[150px]"
                height={"48px"}
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={Hero_img}
            alt="hero illustration"
            className="w-full max-w-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default InspireHero;
