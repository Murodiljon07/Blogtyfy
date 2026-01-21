import React from "react";

import { Outlet } from "react-router-dom";

/* components */
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

/* pages */
import HomePage from "../Pages/Public/HomePage";

function PublicLayout() {
  return (
    <>
      <header>{/* <NavBar /> */}</header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
