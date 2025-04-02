import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/UI/Navbar/NavBar";
import { AppRouter } from "./components/AppRouter.jsx";
import { AuthContext } from "./context/index.js";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
