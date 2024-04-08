import React from "react";
import { NavLink } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import Eventsinfo from "../../utils/Eventsinfo";

const [img0, img1, img2, img3, img4, img5, img6, img7] = Eventsinfo;

function EventCollection() {
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
                <div
                  key={Eventinfo?.id}
                  className="flex break-words bg-transparent bg-white bg-cover bg-clip-padding p-0 transition-shadow duration-300 px-4 pt-6 pb-5 sm:px-0 sm:pt-0 sm:flex-row sm:justify-start sm:rounded sm:w-[272px] border-gray-300 border-b-[1px]"
                >
                  <a
                    href=""
                    className="group inline w-full cursor-pointer hover:no-underline "
                  >
                    <div className="h-full w-full flex flex-row sm:flex-col-reverse">
                      {/* content of card */}
                      <div className="grow space-y-2 pr-4 md:mt-3">
                        {/* title container */}
                        <h3 className="text-lg font-semibold  line-clamp-4 group-hover:underline sm:text-xl sm:leading-6 overflow-wrap-anywhere">
                          {Eventinfo?.eventname}
                        </h3>
                        {/* Organizer container */}
                        <p className="text-sm font-medium text-gray-300 line-clamp-2">
                          Hosted by: {Eventinfo?.organiser}
                        </p>
                        {/* date container */}
                        <div>
                          <div className="flex items-center space-x-1.5 text-gray-400">
                            <div>
                              <SlCalender />
                            </div>
                            <div className="flex flex-col text-[12px] sm:text-sm uppercase leading-5 tracking-tight">
                              {Eventinfo?.date} . {Eventinfo?.time}
                            </div>
                          </div>
                        </div>
                        {/* price container */}
                        <div className="flex flex-wrap gap-x-4 lg:pt-1 text-[14px]">
                          <div className="flex items-center space-x-1.5 text-gray7">
                            <TiTickOutline />
                            <span>{Eventinfo?.ticketsize}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-gray7">
                            <div>
                              <IoTicketOutline />
                            </div>
                            <span className="inline">
                              {Eventinfo?.ticketprice}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* image of card */}
                      <div className="ml-3 bg-transparent sm:ml-0 lg:mr-0 sm:min-w-[90px]">
                        <div
                          className="overflow-hidden bg-transparent sm:w-full h-[90px] w-[90px]
                      sm:h-[153px]"
                        >
                          <img
                            src={Eventinfo?.src}
                            alt={Eventinfo?.title}
                            loading="lazy"
                            decoding="async"
                            className="rounded-lg w-full h-full top-0 left-0 object-cover "
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
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
