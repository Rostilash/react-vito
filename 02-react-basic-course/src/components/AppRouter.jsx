import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./../router/index";

export const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />

      {/* Генерація маршрутів з масиву */}
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="/login" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
