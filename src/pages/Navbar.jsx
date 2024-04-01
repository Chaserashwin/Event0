import React from "react";
import { TfiAnnouncement } from "react-icons/tfi";
import { BiSolidToggleRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-14  flex justify-between items-center px-6 md:px-8 fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 dark:text-white">
        {/* for logo */}
        <div className="logo font-bold text-2xl cursor-pointer">
          <span className="text-green-500 font-bold">Event</span>
          <span className="font-bold">0</span>
        </div>
        {/* for searchBar */}
        {/* <div className="mx-2 flex">
          <input
            className="rounded-lg text-slate-800 px-3 py-1 h-8 w-[500px]"
            placeholder="search"
            type="search"
            name=""
            id=""
          />
        </div> */}
        {/* for other links */}
        <ul className="md:flex hidden font-semibold items-center gap-2">
          <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="#">
              <span className="text-blue">Find</span>
              <span className="text-green">Event</span>
            </a>
          </li>
          <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="#">
              <span className="text-blue">Create</span>
              <span className="text-green">Event</span>
            </a>
          </li>
          <li className="mx-1">
            <a className="p-2 " href="#">
              <TfiAnnouncement className="h-7 w-7 " />
            </a>
          </li>
          <li className="mx-1">
            <BiSolidToggleRight className="h-8 w-8 cursor-pointer" />
          </li>
          <div className="hidden md:block px-2 py-2 mx-3 bg-indigo-800 text-white rounded font-bold cursor-pointer">
            Login/Signup
          </div>
        </ul>
        <div className="md:hidden text-white py-1">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
