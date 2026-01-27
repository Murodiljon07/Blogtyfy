import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  let token = localStorage.getItem("token");

  if (!token) {
    toast.error("Kish uchun login qiling");
    return <Navigate to={"/login"} replace />;
  }

  return children;
}

export default ProtectedRoute;
