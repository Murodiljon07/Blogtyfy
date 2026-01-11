import React from "react";

/* components */
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function LoginPage() {
  return (
    <>
      <NavBar />

      <main className="container py-12">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mt-4">Login form will go here.</p>
      </main>

      <Footer />
    </>
  );
}

export default LoginPage;
