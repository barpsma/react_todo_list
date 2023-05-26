import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload(false);
  };
  return (
    <div>
      <aside className="menu  pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/todo"}>Todo</NavLink>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={handleClick} className="button is-white">
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
