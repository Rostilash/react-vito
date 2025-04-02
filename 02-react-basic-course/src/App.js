import React from "react";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/UI/Navbar/NavBar";
import { AppRouter } from "./components/AppRouter.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}
