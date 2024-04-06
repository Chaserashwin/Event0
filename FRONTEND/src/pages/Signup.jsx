import { useState } from "react";
import ShowModal from "../components/ShowModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Event0 from "/1.svg";
import google from "/google.svg";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    uconpass: "",
  });
  const NameHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const passwordHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const conpassHandler = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { uname, uemail, upassword } = data;
    try {
      const { data } = await axios.post("/register", {
        uname,
        uemail,
        upassword,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
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

  return (
    <>
      <div className="grid pt-9 pb-8 sm:pl-10 sm:pr-10 sm:block relative place-content-center max-h-screen bg-transparent rounded-lg ">
        <div className="flex flex-col items-center">
          <form className="w-full" onSubmit={submitHandler}>
            {/* Upper Container */}
            <div className="flex flex-col mb-1 md:mb-8 items-center">
              <img src={Event0} alt="Event0" height={100} width={100} cover />
              <h1 className="ds-font-title-2 mb-2 font-semibold">Sign up</h1>
              <div className="flex space-x-1">
                <span>Already a member ?</span>
                <button onClick={() => setShowloginModal(true)}>Log in</button>
                {showloginModal && loginModal}
              </div>
            </div>
            {/* lower Container */}
            <div className="flex flex-col-reverse items-center space-y-8 md:flex-col">
              {/* for email and password authentication */}
              <div className="w-full items-center text-center">
                <div className="flex flex-col w-full space-y-6">
                  {/* for name */}
                  <div className="flex flex-col w-full">
                    <div className="w-full flex flex-row items-baseline justify-between">
                      <label className="mb-1 font-medium">Your Name</label>
                    </div>
                    <input
                      className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray-700  focus:border-viridian dark:bg-slate-600"
                      type="text"
                      name="uname"
                      onChange={NameHandler}
                      value={data.uname}
                    />
                    <span className="mt-1 text-[11px] text-gray-400">
                      Your name will be public on your Event0 profile.
                    </span>
                  </div>
                  {/* for email */}
                  <div className="flex flex-col w-full">
                    <div className="w-full flex flex-row items-baseline justify-between">
                      <label className="mb-1 font-medium">Email address</label>
                    </div>
                    <input
                      className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray-700  focus:border-viridian dark:bg-slate-600"
                      type="email"
                      name="uemail"
                      onChange={changeHandler}
                      value={data.uemail}
                    />
                    <span className="mt-1 text-[11px] text-gray-400">
                      We’ll use your email address to send you updates
                    </span>
                  </div>
                  {/* for password */}
                  <div className="flex flex-col w-full">
                    <div className="w-full flex flex-row items-baseline  sm:items-center">
                      <label className="mb-1 font-medium">Password</label>
                    </div>
                    <div className="relative">
                      <input
                        className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray6 focus:border-viridian dark:bg-slate-600 relative"
                        type="password"
                        name="upassword"
                        onChange={passwordHandler}
                        value={data.upassword}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white px-[10px] py-1 "
                >
                  Sign up
                </button>
              </div>
              {/* for OR line */}
              <div className="w-full flex flex-row items-center justify-between">
                <div className="w-full border-b border-gray2"></div>
                <span className="px-3 text-gray6">or</span>
                <div className="w-full border-b border-gray2"></div>
              </div>
              {/* for google Authorization */}
              <div className="w-full flex flex-col items-center space-y-2 p-1">
                <a
                  href="http://localhost:2000/auth/google/callback"
                  className="w-full flex flex-row h-13 cursor-pointer items-center text-center rounded-lg border border-gray6 hover:no-underline justify-evenly font-semibold "
                >
                  <img src={google} width={50} height={50} alt="" />
                  log in with Google
                </a>
              </div>
            </div>
            {/* -------------------------------------------------- */}
            {/* <label className="p-2 font-medium grid ">
              Enter UserName:
              <input
                type="text"
                className="text-black"
                name="uname"
                onChange={NameHandler}
                value={data.uname}
              />
            </label>
            <label className="p-2 font-medium grid">
              Enter Your Email:
              <input
                type="email"
                className="text-black"
                name="uemail"
                onChange={changeHandler}
                value={data.uemail}
              />
            </label>
            <label className="p-2 font-medium grid">
              Create PassWord:
              <input
                type="password"
                className="text-black"
                name="upassword"
                onChange={passwordHandler}
                value={data.upassword}
              />
            </label>
            <label className="p-2 font-medium grid">
              Conform Password:
              <input
                type="password"
                className="text-black"
                name="uconpass"
                onChange={conpassHandler}
                value={data.uconpass}
              />
            </label>
            <div className=" grid justify-center">
              <button
                type="submit"
                className="bg-slate-900 rounded-md font-medium p-2 items-center"
              >
                Create Account
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
