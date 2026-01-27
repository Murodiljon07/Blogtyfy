import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "./index.css";

/* Layouts */
import PublicLayout from "./Layouts/PublicLayout";
import AuthLayout from "./Layouts/AuthLayout";
import AdminLayout from "./Layouts/AdminLayout";

/* pages */
import HomePage from "./Pages/Public/HomePage";
import PostsPage from "./Pages/Public/PostsPage";
import PostDetailsPage from "./Pages/Public/PostDetailsPage";
import LoginPage from "./Pages/Auth/LoginPage";
import DashboardPage from "./Pages/Admin/DashboardPage";
import CreatePostPage from "./Pages/Admin/CreatePostPage";
import AdminPostsPage from "./Pages/Admin/AdminPostsPage";

/* components */
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";

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
          path: "posts",
          element: <PostsPage />,
        },
        {
          path: "posts/:id",
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
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "adminPosts",
          element: <AdminPostsPage />,
        },
        {
          path: "createPosts",
          element: <CreatePostPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} /> <ToastContainer />
    </>
  );
}

export default App;
