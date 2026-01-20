import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layouts */
import HomeLayouts from "./Layouts/HomeLayouts";
import PostsLayout from "./Layouts/PostsLayout";

/* components */
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function PublikPage() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main className="flex-1 ">
        <Routes>
          <Route path="/" element={<HomeLayouts></HomeLayouts>} />
          <Route path="/posts" element={<PostsLayout></PostsLayout>}></Route>
        </Routes>
      </main>
      <footer className="border-t border-gray-200 py-[48px]">
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default PublikPage;
