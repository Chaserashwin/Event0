import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <ul className="myconatainer flex justify-between items-center px-14 py-5 h-14">
        <li className="logo font-bold text-2xl">
          <span className="text-green-500">Event</span>
          <span>0</span>
        </li>
        <li>
          <ul className="flex gap-1">
            <li className="mx-1">
              <a
                className="p-2 hover:bg-slate-400 hover:rounded-full "
                href="#"
              >
                <span>Find Event</span>
              </a>
            </li>
            <li className="mx-1">
              <a
                className="p-2 hover:bg-slate-400 hover:rounded-full "
                href="#"
              >
                <span>Create Event</span>
              </a>
            </li>
            <li className="mx-1">
              <a
                className="p-2 hover:bg-slate-400 hover:rounded-full "
                href="#"
              >
                <span>Help Center</span>
              </a>
            </li>
            <li className="mx-1">
              <a
                className="p-2 hover:bg-slate-400 hover:rounded-full "
                href="#"
              >
                <span>Login</span>
              </a>
            </li>
            <li className="mx-1">
              <a
                className="p-2 hover:bg-slate-400 hover:rounded-full "
                href="#"
              >
                <span>Signup</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
