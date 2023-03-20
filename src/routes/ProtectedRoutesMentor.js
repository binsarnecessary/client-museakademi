import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useMentor = () => {
  const role = localStorage.getItem("role");
  if (role === "mentor") {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const authMentor = useMentor();

  return authMentor ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
