import React from "react";

/* components */
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function PostsPage() {
  return (
    <>
      <NavBar />

      <main className="container py-12">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="mt-4">Here will be the list of posts.</p>
      </main>

      <Footer />
    </>
  );
}

export default PostsPage;
