import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
console.log("user for private route",user)
  if (!user) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default PrivateRoute;
