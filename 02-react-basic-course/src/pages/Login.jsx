import React from "react";
import { MyInput } from "../components/UI/input/MyInput";
import { MyButton } from "../components/UI/button/MyButton";

export const Login = () => {
  return (
    <div>
      <h1>Сторінка для логіну</h1>
      <form>
        <MyInput type="text" placeholder="Ведіть логін"></MyInput>
        <MyInput type="password" placeholder="Ведіть пароль"></MyInput>
        <MyButton>Увійти</MyButton>
      </form>
    </div>
  );
};
