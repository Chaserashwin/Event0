import React from "react";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Music from "./pages/Event_Categories/Music";
import Business from "./pages/Event_Categories/Business";
import College from "./pages/Event_Categories/College";
import ShowModal from "./components/ShowModal";
import CreateEvent from "./pages/CreateEvent";

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
    {
      path:"createevent",
      element: <CreateEvent />
    }
  ]);
  return element;
};

export default ProjectRoutes;
