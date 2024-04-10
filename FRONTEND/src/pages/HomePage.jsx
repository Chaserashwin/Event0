import React, { Suspense, lazy, useState } from "react";
import LandingPageDevelopers from "../utils/homepage_second_content";

const First = lazy(() => import("../pages/HomePage_Partials/First"));
const OurCategories = lazy(() =>
  import("../pages/HomePage_Partials/OurCategories")
);
const EventCollection = lazy(() =>
  import("../pages/HomePage_Partials/EventCollection")
);
const FeaturesZigZag = lazy(() =>
  import("../pages/HomePage_Partials/FeaturesZigZag")
);
const Developers = lazy(() => import("../pages/HomePage_Partials/Developers"));

const [cat1, cat2, cat3, mic, dev1, dev2] = LandingPageDevelopers;

function HomePage() {
 

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex flex-col min-h-screen overflow-x-hidden ">
          <main className="grow dark:bg-slate-950">
            <Suspense fallback="loading...">
              <First />
            </Suspense>
            <Suspense fallback="loading...">
              <OurCategories images={[cat1, cat2, cat3]} />
            </Suspense>
            <Suspense fallback="loading...">
              <EventCollection />
            </Suspense>
            {/* <Suspense fallback="loading...">
              <FeaturesZigZag images={[mic]} />
            </Suspense> */}
            <Suspense fallback="loading...">
              <Developers images={[dev1, dev2]} />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}

export default HomePage;
// "overflow-x-hidden
{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>; */
}
