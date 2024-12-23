import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../Pages/Auth/Login";
import HomeDashboard from "../Pages/Dashboard/HomeDashboard";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard/home" element={<HomeDashboard/>}/>
        {/* Add specific protected routes here if needed */}
      </Route>
    </Routes>
  );
};

export default MainRoutes;
