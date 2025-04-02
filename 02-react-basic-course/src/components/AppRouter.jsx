import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./../router/index";
import { AuthContext } from "../context";

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />

      {/* Генерація маршрутів з масиву */}
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} exact={route.exact} />
      ))}
      <Route path="/login" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} exact={route.exact} />
      ))}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
