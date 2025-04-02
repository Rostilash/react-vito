import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes } from "./../router/index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />

      {/* Генерація маршрутів з масиву */}
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
