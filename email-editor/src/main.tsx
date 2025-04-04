import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Provider } from "./Provider";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("failed to find the root element");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
