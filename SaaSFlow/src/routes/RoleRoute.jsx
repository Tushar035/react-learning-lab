import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (user?.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RoleRoute;
