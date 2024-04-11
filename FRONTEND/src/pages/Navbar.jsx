import React from "react";
import { useState, useContext, useEffect } from "react";
import ShowModal from "../components/ShowModal";
import Event0 from "/1.svg";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { loginContext } from "../Context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";

const Navbar = () => {
  //to use usecontext
  const { logindata, setLogindata, logingoogle, setLogingoogle } =
    useContext(loginContext);
  //using usercontext
  // const { logindata, setLogindata, logingoogle, setLogingoogle } =
  // useContext(loginContext);
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
      // navigate("/");
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

  //for logout from google
  const logout = () => {
    window.open("http://localhost:2000/logoutgoogle", "_self");
    window.location.origin;
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

  // for toggling the submenu
  let subMenu = document.getElementById("subMenu");
  function toggleMenu() {
    subMenu.classList.toggle("open-menu");
  }

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
        {/* <ul className="md:flex hidden font-semibold items-center gap-2">
          <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="#">
              <span className="text-blue">Find</span>
              <span className="text-green">Event</span>
            </a>
          </li>
          <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="/createevent">
              <span className="text-blue">CreateEvent</span>
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
        </ul> */}

        {/* for login and signup*/}
        {/*for diplaying user data if loged in*/}
        {logindata.validUser ? (
          <div className="flex relative">
            <ul className="md:flex  font-semibold items-center gap-2">
              {/* profile icon */}
              <div
                onClick={toggleMenu}
                className="mx-2 block dark:text-white font-bold cursor-pointer bg-orange-500 h-[50px] w-[50px] text-center pt-[9px] border-4 border-black
                dark:border-white"
              >
                <p>{logindata.validUser.name[0].toUpperCase()}</p>
              </div>
              {/* submenu for profile toggle */}
              <div className="sub-menu-wrap" id="subMenu">
                <div className="sub-menu">
                  <div className="user-info">
                    <div className="w-[50px] h-[50px] mr-[15px] items-center pt-3 text-center border-4 border-black">
                      {logindata.validUser.name[0].toUpperCase()}
                    </div>
                    <h3 className="font-extrabold">
                      {logindata.validUser.name}
                    </h3>
                  </div>
                  <hr className="border-0 h-[1px] w-[100%] bg-slate-400 mt-[15px] mb-[10px]" />
                  <NavLink to="createevent" className="sub-menu-link">
                    <IoCreateOutline className="sub-menu-link-icon" />
                    <p>Create Event</p>
                    <span>></span>
                  </NavLink>
                  <NavLink to="findevent" className="sub-menu-link">
                    <MdOutlineFindInPage className="sub-menu-link-icon" />
                    <p>Find Event</p>
                    <span>></span>
                  </NavLink>
                  <a href="#" className="sub-menu-link">
                    <CgProfile className="sub-menu-link-icon" />
                    <p>Edit Profile</p>
                    <span>></span>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <MdOutlineSettingsSuggest className="sub-menu-link-icon" />
                    <p>Settings & Privacy</p>
                    <span>></span>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <IoMdHelpCircleOutline className="sub-menu-link-icon" />
                    <p>Help & Support</p>
                    <span>></span>
                  </a>
                  <a onClick={clickHandler} href="#" className="sub-menu-link">
                    <GrLogout className="sub-menu-link-icon" />
                    <p>Logout</p>
                    <span>></span>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        ) : logingoogle ? (
          <div className="flex relative">
            <ul className="md:flex  font-semibold items-center gap-2">
              {/* profile icon */}
              <div
                onClick={toggleMenu}
                className="dark:text-white font-bold cursor-pointer bg-orange-500 h-[50px] w-[50px] border-4 border-black
                dark:border-white"
              >
                <img
                  src={logingoogle.image}
                  className="h-[44px] w-[48px] object-cover"
                ></img>
              </div>
              {/* submenu for profile toggle */}
              <div className="sub-menu-wrap" id="subMenu">
                <div className="sub-menu">
                  <div className="user-info">
                    <div className="w-[50px] h-[50px]  mr-[15px] items-center text-center border-4 border-black">
                      <img
                        src={logingoogle.image}
                        className="h-[44px] w-[48px] object-cover"
                      ></img>
                    </div>
                    <h3 className="font-extrabold">
                      {logingoogle.displayName}
                    </h3>
                  </div>
                  <hr className="border-0 h-[1px] w-[100%] bg-slate-400 mt-[15px] mb-[10px]" />
                  <NavLink to="createevent" className="sub-menu-link">
                    <IoCreateOutline className="sub-menu-link-icon" />
                    <p>Create Event</p>
                    <span>></span>
                  </NavLink>
                  <NavLink to="findevent" className="sub-menu-link">
                    <MdOutlineFindInPage className="sub-menu-link-icon" />
                    <p>Find Event</p>
                    <span>></span>
                  </NavLink>
                  <a href="#" className="sub-menu-link">
                    <CgProfile className="sub-menu-link-icon" />
                    <p>Edit Profile</p>
                    <span>></span>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <MdOutlineSettingsSuggest className="sub-menu-link-icon" />
                    <p>Settings & Privacy</p>
                    <span>></span>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <IoMdHelpCircleOutline className="sub-menu-link-icon" />
                    <p>Help & Support</p>
                    <span>></span>
                  </a>
                  <a onClick={logout} href="#" className="sub-menu-link">
                    <GrLogout className="sub-menu-link-icon" />
                    <p>Logout</p>
                    <span>></span>
                  </a>
                </div>
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
