import React, { Suspense, lazy, useContext } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const FindEvent = lazy(() => import("./pages/FindEvent"));
const CreateEvent = lazy(() => import("./pages/CreateEvent"));
import { loginContext } from "./Context/UserContext";

const ProjectRoutes = () => {
  const { logindata, setLogindata, logingoogle, setLogingoogle } =
    useContext(loginContext);
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
          {logindata.validUser ? (
            <CreateEvent />
          ) : logingoogle ? (
            <CreateEvent />
          ) : (
            <NotFound />
          )}
        </Suspense>
      ),
    },
  ]);

  return element;
};

export default ProjectRoutes;
