import React, { Suspense, lazy, useState } from "react";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../Context/UserContext";
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
 
  //using usercontext
  const { logindata, setLogindata, logingoogle, setLogingoogle } =
    useContext(loginContext);
  //   console.log(logindata.validUser);
  const navigate = useNavigate();

  // function to authenticate user manually
  const Validate = async () => {
    let token = localStorage.getItem("token");
    const res = await axios.get("/myprofile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = res;
    // console.log(data);
    if (data.status == 200 || data) {
      // console.log("user Verified");
      setLogindata(data.data);
      // window.location.reload()
      navigate("/");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    Validate();
  }, []);

  //function to authenticate user with google
  const getUser = async () => {
    try {
      const res = await axios.get("/login/success", { withCredentials: true });
      // console.log(res.data);
      setLogingoogle(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

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
