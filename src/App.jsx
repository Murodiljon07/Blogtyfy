import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

/* Layouts */
import PublicLayout from "./Layouts/PublicLayout";

/* pages */
import HomePage from "./Pages/Public/HomePage";
import PostsPage from "./Pages/Public/PostsPage";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
