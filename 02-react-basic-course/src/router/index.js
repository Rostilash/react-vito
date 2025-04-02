import { About } from "./../pages/About";
import { Posts } from "./../pages/Posts";
import { Error } from "./../pages/Error";
import { PostIdPage } from "../pages/PostIdPage";

export const privateRoutes = [
  {
    path: "/about",
    element: <About />,
    exact: true,
  },
  {
    path: "/posts",
    element: <Posts />,
    exact: true,
  },
  {
    path: "/posts/:id",
    element: <PostIdPage />,
    exact: true,
  },
  {
    path: "*",
    element: <Error />,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
    exact: true,
  },
];
