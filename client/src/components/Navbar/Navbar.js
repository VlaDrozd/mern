import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

export const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="/" class="brand-logo">
          Minilink
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">My Links</NavLink>
          </li>
          <button className="btn logout-btn" onClick={() => logout()}>
            Log out
          </button>
        </ul>
      </div>
    </nav>
  );
};
