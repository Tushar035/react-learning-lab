import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateLayout = () => {
  const { logout } = useAuth();
  return (
    <>
      <h2>Dashboard</h2>
      <nav>
        <NavLink to="/dashboard">Home</NavLink> |
        <NavLink to="profile">Profile</NavLink> |
        <NavLink to="settings">Settings</NavLink> |
        <NavLink to="admin">Admin</NavLink>
      </nav>

      <button onClick={logout}>Logout</button>
      <hr />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
