import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const role = localStorage.getItem("role");
  if (role === "admin") {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
