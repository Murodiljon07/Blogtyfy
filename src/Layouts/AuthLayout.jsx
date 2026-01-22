import React from "react";

import { Outlet } from "react-router-dom";

import LoginPage from "../Pages/Auth/LoginPage";

function AuthLayout() {
  return (
    <section className="flex item-center h-screen justify-center items-center">
      <div>
        <LoginPage />
      </div>
    </section>
  );
}

export default AuthLayout;
