import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../button/MyButton";
import { AuthContext } from "../../../context";

export const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navBar">
      <MyButton onClick={logOut}>Вийти</MyButton>
      <div className="navBar__links">
        <Link to="/about">Про сайт</Link>
        <Link to="/posts">Пости</Link>
      </div>
    </div>
  );
};
