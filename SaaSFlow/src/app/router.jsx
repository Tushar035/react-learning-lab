import { Routes, Route } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout"
import PublicLayout from "../layouts/PublicLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import RoleRoute from "../routes/RoleRoute";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

import Dashboard from "../pages/private/Dashboard";
import Profile from "../pages/private/Profile";
import Settings from "../pages/private/Settings";
import AdminPanel from "../pages/private/AdminPanel";

import NotFound from "../pages/shared/NotFound";
import Unauthorized from "../pages/shared/Unauthorized";

const Router = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Private */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="admin"
          element={
            <RoleRoute role="admin">
              <AdminPanel />
            </RoleRoute>
          }
        />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
