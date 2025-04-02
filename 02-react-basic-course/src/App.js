import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/UI/Navbar/NavBar";
import { AppRouter } from "./components/AppRouter.jsx";
import { AuthContext } from "./context/index.js";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
