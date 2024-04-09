import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const FindEvent = lazy(() => import("./pages/FindEvent"));
const CreateEvent = lazy(()=> import('./pages/CreateEvent'))

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
    {
      path: "createevent",
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <CreateEvent />
        </Suspense>
      ),
    },
  ]);
  return element;
};

export default ProjectRoutes;
