import { Outlet, Link } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default PublicLayout;
