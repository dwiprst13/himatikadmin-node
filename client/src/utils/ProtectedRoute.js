// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? (
    children
  ) : (
    window.location.href = "/himatikadmin/login"
  );
};

export default ProtectedRoute;
