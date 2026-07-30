import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Check local storage directly
  const isAuthenticated = localStorage.getItem("user");

  // If no user is found, boot them back to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, let them see the page
  return children;
}

export default ProtectedRoute;
