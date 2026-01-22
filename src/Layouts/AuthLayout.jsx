import React from "react";

import { Outlet } from "react-router-dom";

import LoginPage from "../Pages/Auth/LoginPage";

function AuthLayout() {
  return <LoginPage />;
}

export default AuthLayout;
