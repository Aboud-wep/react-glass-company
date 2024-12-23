import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = (): boolean => {
  return localStorage.getItem("accessToken") !== null;
};


const ProtectedRoutes: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
