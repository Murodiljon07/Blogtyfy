import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

/* pictures */
import Hero_img from "../../assets/pictures/Hero.png";

/* components */
import Btn from "../../components/Btn";
import NavBar from "../../components/NavBar";

function Header() {
  return (
    <header className="bg-(--bg-color) min-h-full">
      <NavBar />
      <section className="container flex items-center justify-baseline">
        <div className="flex flex-col gap-6 w-[584px]">
          <h2 className="text-[4rem] font-bold leading-[6rem] ">
            Create, Read,{" "}
            <span className="text-(--main-color-alt)">Inspire.</span>
          </h2>
          <p className="text-[rem] text-(--text-color)">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div>
            <Btn children={"Explore Posts -->"} style={"main_btn"}></Btn>
            <Btn children={"Get Started"}></Btn>
          </div>
        </div>

        <div>
          <img src={Hero_img} alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
