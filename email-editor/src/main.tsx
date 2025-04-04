import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.js";
import { AuthProvider } from "./AuthContext.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("failed to find the root element");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: (
      <div>
        About us
        <h3>Go Home</h3>
        <Link to="/">Let`s go!</Link>
      </div>
    ),
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
