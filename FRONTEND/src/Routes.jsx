import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

// import Login from "./pages/Login";
// import Music from "./pages/Event_Categories/Music";
// import Business from "./pages/Event_Categories/Business";
// import College from "./pages/Event_Categories/College";
// import ShowModal from "./components/ShowModal";
// import CreateEvent from "./pages/CreateEvent";

// import FindEvent from "./pages/FindEvent";

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
      path:"createevent",      
      element: (
      <Suspense fallback={<div>loading...</div>}>
        <CreateEvent />
        </Suspense>
      ),
    }
  ]);
  return element;
};

export default ProjectRoutes;
