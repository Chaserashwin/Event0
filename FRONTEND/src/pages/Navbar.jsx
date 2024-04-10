import React from "react";
import { useState, useContext } from "react";
import ShowModal from "../components/ShowModal";
import { TfiAnnouncement } from "react-icons/tfi";
import { BiSolidToggleRight } from "react-icons/bi";
import Event0 from "/1.svg";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { loginContext } from "../Context/UserContext";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate();
  //to use usecontext
  const { logindata, setLogindata, logingoogle, setLogingoogle } =
    useContext(loginContext);

  //for logout from google
  const logout = () => {
    window.open("http://localhost:2000/logoutgoogle");
  };
  //for logout manually
  const clickHandler = async () => {
    let token = localStorage.getItem("token");
    const res = await axios.get("/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      Credentials: "include",
    });
    const data = res;
    console.log(data);
    if (data.status == 200 || data) {
      console.log("user logout");
      token = localStorage.removeItem("token");
      setLogindata(false);
    } else {
      console.log("error");
    }
  };
  //login Modal
  const [showloginModal, setShowloginModal] = useState(false);
  const closeloginModal = () => setShowloginModal(false);
  const loginModal = (
    <ShowModal
      closeModal={closeloginModal}
      // handleCloseButton={handleCloseloginButton}
    >
      <Login />
    </ShowModal>
  );
  // const handleCloseloginButton = (
  //   <button onClick={closeloginModal}>Accept it</button>
  // );

  //Signup Modal
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

  // const handleClosesignupButton = (
  //   <button onClick={closesignupModal}>Accept it</button>
  // );

  return (
    <>
      <nav className="w-full h-[117px] flex justify-between items-center py-2 px-3 md:px-8 fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 dark:text-white border-b dark:border-black">
        {/* for logo */}
        {/* <div className="logo font-bold text-3xl cursor-pointer md:ml-3 md:block hidden">
          <span className="text-green-500 font-bold">Event</span>
          <span className="font-bold">0</span>
        </div> */}
        <div className="">
          <NavLink className="nav-link" to="/">
            <img src={Event0} alt="Event0" height={100} width={100} cover />
          </NavLink>
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
          {/* <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="#">
              <span className="text-blue">Find</span>
              <span className="text-green">Event</span>
            </a>
          </li> */}
          {/* <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="/createevent">
              <span className="text-blue">CreateEvent</span>
            </a>
          </li> */}
          {/* <li className="mx-1">
            <a className="p-2 " href="#">
              <TfiAnnouncement className="h-7 w-7 " />
            </a>
          </li>
          <li className="mx-1">
            <BiSolidToggleRight className="h-8 w-8 cursor-pointer" />
          </li>*/}
        </ul>  

        {/* for login and signup*/}
        {/*for diplaying user data if loged in*/}
        {logindata.validUser ? (
          <div className="flex ">
            <ul className="md:flex  font-semibold items-center gap-2">
              {/* createevent button */}
              <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <NavLink to="/createevent">
                  <button>CreateEvent</button>
                </NavLink>
              </div>
              {/* logout button */}
              <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <li className="hidden md:block px-2 py-2  bg-[#00798a] dark:bg-indigo-800 text-white rounded font-bold cursor-pointer">
                  <button onClick={clickHandler}>Logout</button>
                </li>
              </div>
              {/* profile icon */}
              <div className="block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <li className="mx-1">
                  {logindata.validUser.name[0].toUpperCase()}
                </li>
              </div>
            </ul>
            {/* <ul className="md:flex block font-semibold items-center gap-2 rounded-full border-2 border-black">
              <div className="block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <li className="mx-1">
                  {logindata.validUser.name[0].toUpperCase()}
                </li>
              </div>
            </ul> */}
          </div>
        ) : logingoogle ? (
          <div>
            <ul className="md:flex hidden font-semibold items-center gap-2">
              <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <NavLink to="/createevent">
                  <button>CreateEvent</button>
                </NavLink>
              </div>
              <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <li className="mx-1">
                  <img src={logingoogle.image} className="w-10 rounded"></img>
                </li>
              </div>
              <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <li className="hidden md:block px-2 py-2  bg-[#00798a] dark:bg-indigo-800 text-white rounded font-bold cursor-pointer">
                  <button onClick={clickHandler}>Logout</button>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="md:flex hidden font-semibold items-center gap-2">
              <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
                <button onClick={() => setShowloginModal(true)}>Log in</button>
                {showloginModal && loginModal}
              </div>
              <div className="hidden md:block px-2 py-2  bg-[#00798a] dark:bg-indigo-800 text-white rounded font-bold cursor-pointer">
                <button onClick={() => setShowsignupModal(true)}>
                  Sign up
                </button>
                {showsignupModal && signupModal}
              </div>
            </ul>
            <div className="md:hidden dark:text-white py-1 items-center">
              {/* <a className="text-4xl" href="#">
            &#8801;
          </a> */}
              <div className="px-2 py-2 dark:text-white rounded font-bold cursor-pointer">
                <button onClick={() => setShowloginModal(true)}>Log in</button>
                {showloginModal && loginModal}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
