import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  if (!user) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default PrivateRoute;
