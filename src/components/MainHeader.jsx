import "./MainHeader.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const MainHeader = function () {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink exact to="/home">
            Logo
          </NavLink>
          <div className="navbar-links">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="delivery">
          <h2>
            Fast and free delivery <i>here</i>
          </h2>
        </div>
      </nav>
    </>
  );
};
