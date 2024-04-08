import React, { useState } from "react";
import { dummy } from "../utils/dummy";
import { IoTicketOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";

function FindEvent() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className=" dark:bg-slate-950">
      <div className="w-full h-auto min-h-screen flex flex-wrap flex-col md:p-10 max-w-10xl mx-auto mt-20 sm:mt-0 px-4 sm:px-6">
        {/* heading of component */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center pt-12 md:pt-20 border-t border-gray-800">
          <p
            className="bg-gradient-to-r 
         from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 font-bold text-3xl md:text-4xl text-center "
          >
            Find Events
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 rounded-2xl md:mt-4 mt-2 mb-12"></div>
        </div>
        <form className="text-center">
          <input
            className="border border-black my-3 mx-3 px-3 py-2 dark:bg-slate-600 dark:text-white rounded-lg"
            type="search"
            placeholder="search Event Name"
            name=""
            id=""
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="mb-2 px-0 lg:mb-10 w-full p-2">
          <div className="flex flex-col flex-wrap gap-2  sm:flex-row sm:gap-16  sm:justify-center">
            {/* event card starts here */}
            {dummy
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.eventname.toLowerCase().includes(search);
              })
              .map((item) => (
                <div
                  key={item?.id}
                  className="flex break-words bg-transparent bg-white dark:bg-slate-700 bg-cover bg-clip-padding p-0 transition-shadow duration-300 px-4 pt-6 pb-5 sm:px-0 sm:pt-0 sm:flex-row sm:justify-start sm:rounded sm:w-[272px] border-gray-300 border-b-[1px]"
                >
                  <a
                    href=""
                    className="group inline w-full cursor-pointer hover:no-underline "
                  >
                    <div className="h-full w-full flex flex-row sm:flex-col-reverse dark:text-gray-200">
                      {/* content of card */}
                      <div className="grow space-y-2 pr-4 md:mt-3">
                        {/* title container */}
                        <h3 className="text-lg font-semibold  line-clamp-4 group-hover:underline sm:text-xl sm:leading-6 overflow-wrap-anywhere">
                          {item?.eventname}
                        </h3>
                        {/* Organizer container */}
                        <p className="text-sm font-medium line-clamp-2">
                          Hosted by: {item?.organiser}
                        </p>
                        {/* date container */}
                        <div>
                          <div className="flex items-center space-x-1.5 ">
                            <div>
                              <SlCalender />
                            </div>
                            <div className="flex flex-col text-[12px] sm:text-sm uppercase leading-5 tracking-tight">
                              {item?.date} . {item?.time}
                            </div>
                          </div>
                        </div>
                        {/* price container */}
                        <div className="flex flex-wrap gap-x-4 lg:pt-1 text-[14px]">
                          <div className="flex items-center space-x-1.5 ">
                            <TiTickOutline />
                            <span>{item?.ticketsize}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <div>
                              <IoTicketOutline />
                            </div>
                            <span className="inline">{item?.ticketprice}</span>
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
                            src={item?.src}
                            alt={item?.title}
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
      </div>
    </div>
  );
}

export default FindEvent;
