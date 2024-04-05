import React from "react";
import { NavLink } from "react-router-dom";

function First() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center sm:mt-[140px] mt-[120px]">
        <div
          className="flex flex-col items-center md:flex-row lg:mx-16 sm:mx-20 md:mx-10 mx-5 border-4 dark:border-gray-400 border-black rounded md:p-4 p-3 bg-gradient-to-r 
         from-pink-500 to-yellow-500"
        >
          <div className=" flex w-full flex-col space-y-6 mb-0 md:mr-6 md:ml-6 lg:w-7/12 md:block md:p-4 p-2 items-center">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
              The people platform—Where interests become friendships
            </h1>
            <p className="md:text-justify text-center md:pr-10 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              facere, pariatur deserunt totam neque aspernatur illum fugiat
              alias quidem doloribus maiores magnam aliquam recusandae
              consequuntur, dolore vel id nemo omnis!
            </p>
            <div className="mt-0">
              <NavLink
                className="hover:bg-gray-500 hover:text-black bg-black text-teal-50 md:text-xl inline-block hover:no-underline rounded-xl border-solid border-2 md:border-4 border-black dark:border-white p-2 font-semibold transition-0.5"
                to="Signup"
              >
                Join Event0
              </NavLink>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img alt="Homepage" height="269" src="/images/home.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default First;

{
  /* <div className="w-8/12 lg:w-1/2">
            <img
              alt="Image of a Meetup IRL Event"
              width="379"
              height="269"
              // decoding="async"
              // data-nimg="1"
              // style="color:transparent"
              // srcset="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384 1x, https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=828 2x"
              src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=828"
            />
          </div> */
}

// hover:from-green-400 hover:to-blue-500
{
  /* <div className="w-fit h-80">
          <img
            className="w-full hidden md:block h-auto"
            src="/images/homepagemin.png"
            alt="Homepage"
            cover
          />
          <img
            className="w-full md:hidden"
            src="/images/homepage.png"
            alt="Homepage"
            cover
          />
        </div> */
}
