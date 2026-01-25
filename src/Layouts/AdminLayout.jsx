import React from "react";
import { Outlet } from "react-router-dom";

import AdminBar from "../Components/AdminBar";

function AdminLayout() {
  return (
    <section className="flex">
      <AdminBar />
      <main className="container pt-[32px]">
        <Outlet />
      </main>
    </section>
  );
}

export default AdminLayout;
