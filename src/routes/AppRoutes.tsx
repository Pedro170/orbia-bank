import { Navigate, Route, Routes } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import PublicLayout from "../Pages/Home/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";
import PrivateLayout from "../Pages/Restrito/PrivateLayout";
import Dashboard from "../Pages/Restrito/Dashboard";
import Produtos from "../Pages/Restrito/Produtos";

const AppRoutes = () => {
  const { usuario, authLoading } = useDataContext();

  if (authLoading) {
    return <div className="loading-screen">Carregando...</div>;
  }

  return (
    <Routes>

      <Route
        path="/"
        element={
          usuario ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <PublicLayout />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="produtos" element={<Produtos />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
