import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Music from "./pages/Event_Categories/Music";
import Business from "./pages/Event_Categories/Business";
import College from "./pages/Event_Categories/College";

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
