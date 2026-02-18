import React from "react";
import { Navigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

interface ProtectedRouteProps {
  children: React.JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { usuario } = useDataContext();

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
