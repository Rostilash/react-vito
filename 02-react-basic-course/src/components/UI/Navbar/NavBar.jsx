import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__links">
        <Link to="/about">Про сайт</Link>
        <Link to="/posts">Пости</Link>
      </div>
    </div>
  );
};
