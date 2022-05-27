import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className="nav" style={{}}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>

      <NavLink to="timeline">
        {({ isActive }) => (
          <span className={isActive ? activeClassName : undefined}>
            Timeline of Discoveries
          </span>
        )}
      </NavLink>

      <NavLink to="about">
        {({ isActive }) => (
          <span className={isActive ? activeClassName : undefined}>
            About Guyana
          </span>
        )}
      </NavLink>

      <NavLink to="admin-login">
        {({ isActive }) => (
          <span className={isActive ? activeClassName : undefined}>
            Admin Login
          </span>
        )}
      </NavLink>
    </div>
  );
}

export default NavBar;
