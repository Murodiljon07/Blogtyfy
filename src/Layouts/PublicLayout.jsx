import React from "react";

import { Outlet } from "react-router-dom";

/* components */
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function PublicLayout() {
  return (
    <>
      <header>
        <NavBar />
        <div className="h-[6.2rem] w-full"></div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="py-[4.8rem] px-[3.2rem] border-t border-gray-300">
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
