import React from "react";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/* components */
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function PublicLayout() {
  return (
    <>
      <ToastContainer />
      <header>
        <NavBar />
        <div className="h-[6rem] w-full"></div>
      </header>
      <main className="mb-[64px]">
        <Outlet />
      </main>
      <footer className="py-[4.8rem] px-[3.2rem] border-t border-gray-300">
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
