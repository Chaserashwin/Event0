import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Music from "./pages/OurCategories/Music";
import Business from "./pages/OurCategories/Business";
import College from "./pages/OurCategories/College";
import Navbar from "./pages/Navbar";

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
    {
      path: "music",
      element: <Music />,
    },
    {
      path: "business",
      element: <Business />,
    },
    {
      path: "college",
      element: <College />,
    },
  ]);
  return element;
};

export default ProjectRoutes;
