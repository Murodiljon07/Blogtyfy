import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

/* Layouts */
import PublicLayout from "./Layouts/PublicLayout";
import AuthLayout from "./Layouts/AuthLayout";

/* pages */
import HomePage from "./Pages/Public/HomePage";
import PostsPage from "./Pages/Public/PostsPage";
import PostDetailsPage from "./Pages/Public/PostDetailsPage";
import LoginPage from "./Pages/Auth/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/posts",
          element: <PostsPage />,
        },
        {
          path: "/posts/:id",
          element: <PostDetailsPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
