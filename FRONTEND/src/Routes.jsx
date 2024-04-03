import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: "login",
    //   element: <Login />,
    // },
    // {
    //   path: "Signup",
    //   element: <Signup />,
    // },
  ]);
  return element;
};

export default ProjectRoutes;
