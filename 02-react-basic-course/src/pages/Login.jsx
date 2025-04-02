import React, { useContext } from "react";
import { MyInput } from "../components/UI/input/MyInput";
import { MyButton } from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Сторінка для логіну</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Ведіть логін"></MyInput>
        <MyInput type="password" placeholder="Ведіть пароль"></MyInput>
        <MyButton>Увійти</MyButton>
      </form>
    </div>
  );
};
