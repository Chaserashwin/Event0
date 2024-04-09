import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import Eventsinfo from "../../utils/Eventsinfo";
// import EventCard from "../../components/EventCard";
import Card from "../../components/Card";
// import { useState } from "react";

const [img0, img1, img2, img3, img4, img5, img6, img7] = Eventsinfo;

function EventCollection() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="w-full h-auto flex flex-wrap flex-col md:p-10 max-w-10xl mx-auto md:mb-8 mt-20 px-4 sm:px-6">
        {/* heading of component */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center pt-12 md:pt-20 border-t border-gray-800">
          <p
            className="bg-gradient-to-r 
         from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 font-bold text-3xl md:text-4xl text-center "
          >
            Ongoing Events
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 rounded-2xl md:mt-4 mt-2 mb-12"></div>
        </div>
        {/* events cllection container starts */}
        <div className="mb-2 px-4 sm:px-0 md:mb-6 mx-3 lg:mx-16">
          {/* heading of container */}
          <div className="flex items-baseline justify-between border ">
            <h2 className="flex flex-wrap items-baseline gap-x-1 gap-y-2 font-semibold sm:gap-x-[1.5rem] xl:text-[1.75rem] xl:leading-9">
              Events Near{" "}
              <div className="rounded-lg px-3 py-2 xl:py-1">
                <NavLink to="findevent">Amritsar</NavLink>
              </div>
            </h2>
            <NavLink
              to="findevent"
              className="font-medium text-indigo-300 hidden md:block"
            >
              See all events
            </NavLink>
          </div>
          {/* event collection starts */}
          <div className="mb-2 px-0 lg:mb-10 w-full  p-2">
            <div className="flex flex-col flex-wrap gap-2  sm:flex-row sm:gap-16  sm:justify-center">
              {/* event card starts here */}
              {Eventsinfo?.map((Eventinfo) => (
                <Card item={Eventinfo} />
              ))}
            </div>
          </div>
          <div className="sm:max-w-screen px-4">
            <NavLink
              to="findevent"
              className="font-medium text-indigo-300 block md:hidden"
            >
              See all events
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCollection;
