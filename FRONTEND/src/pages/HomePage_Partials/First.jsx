import React from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import ShowModal from "../../components/ShowModal";
import Signup from "../Signup";

function First() {
  const [showsignupModal, setShowsignupModal] = useState(false);
  const closesignupModal = () => setShowsignupModal(false);
  const signupModal = (
    <ShowModal
      closeModal={closesignupModal}
      // handleCloseButton={handleClosesignupButton}
    >
      <Signup />
    </ShowModal>
  );

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center sm:mt-[140px] mt-[120px] ">
        <div
          className="flex flex-col items-center sm:flex-row sm:mx-20 md:mx-10 lg:mx-16  mx-5 border-4 dark:border-gray-400 border-black rounded md:p-4 p-3 bg-gradient-to-r 
         from-pink-500 to-yellow-500"
        >
          <div className=" flex w-full flex-col space-y-6 mb-0 md:mr-6 md:ml-6 lg:w-7/12 md:block md:p-4 p-2 items-center">
            <h1 className="sm:text-start text-center text-4xl sm:text-5xl font-extrabold dark:text-white">
              Life is an event-Make it memorable
            </h1>
            <p className="sm:text-start text-center text-lg font-medium font-sans md:pr-10 dark:text-white">
              {/* It's not about the event itself, it's about creating a memorable
              experience for your audience */}
              {/* Life is a series of moments and experiences, and each one is an
              opportunity to create a memory - create memories with us, <br /> */}
              Wanna live life to the fullest, Meet people and create memories
              that lasts forever, Come with us and experience the world of
              events that will make your life eventful...
            </p>
            <div className="mt-0">
              <button
                onClick={() => setShowsignupModal(true)}
                className="bg-gray-500 text-black hover:bg-black hover:text-teal-50 md:text-xl inline-block hover:no-underline rounded-xl border-solid border-2 md:border-4 border-black dark:border-white p-2 font-semibold transition-0.5"
              >
                Join Event0
              </button>
              {showsignupModal && signupModal}
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
