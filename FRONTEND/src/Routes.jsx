import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
// import FindEvent from "./pages/FindEvent";

const HomePage = lazy(() => import("./pages/HomePage"));
const FindEvent = lazy(() => import("./pages/FindEvent"));

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "findevent",
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <FindEvent />
        </Suspense>
      ),
    },
  ]);
  return element;
};

export default ProjectRoutes;
