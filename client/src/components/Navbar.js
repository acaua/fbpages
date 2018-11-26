import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ logout, isLoggedIn, name }) => {
  return (
    <nav className="nav-wrapper">
      <Link to="/" className="brand-logo">
        Your Facebook Pages
      </Link>
      {isLoggedIn ? (
        <ul className="right">
          <li>
            <NavLink to="/">All Pages</NavLink>
          </li>
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
