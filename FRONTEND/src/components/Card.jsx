import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";

function Card({ item }) {
  return (
    <div
      key={item?.id}
      className="flex break-words bg-transparent bg-white dark:bg-slate-700 bg-cover bg-clip-padding p-0 px-2 pt-2 pb-5 sm:px-1 sm:pt-1 sm:flex-row sm:justify-start sm:rounded sm:w-[272px] border-gray-300 border-b-[1px]"
    >
      <a
        href=""
        className="group inline w-full cursor-pointer hover:no-underline "
      >
        <div className="h-full w-full flex flex-row sm:flex-col-reverse">
          {/* content of card */}
          <div className="grow space-y-2 pr-4 md:mt-3">
            {/* title container */}
            <h3 className="text-lg font-semibold  line-clamp-4 group-hover:underline sm:text-xl sm:leading-6 overflow-wrap-anywhere dark:text-indigo-400">
              {item?.eventname}
            </h3>
            {/* Organizer container */}
            <p className="text-sm font-medium text-gray-400 line-clamp-2">
              Hosted by: {item?.organiser}
            </p>
            {/* date container */}
            <div>
              <div className="flex items-center space-x-1.5 text-gray-400">
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
              <div className="flex items-center space-x-1.5 text-gray7">
                <TiTickOutline />
                <span>{item?.ticketsize}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-gray7">
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
  );
}

export default Card;
