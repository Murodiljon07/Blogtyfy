import React from "react";

/* components */
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HomePageMain from "./HomePageMain";

function HomaPage() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <HomePageMain></HomePageMain>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomaPage;
