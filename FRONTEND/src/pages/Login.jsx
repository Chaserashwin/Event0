import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Event0 from "/1.svg";
import google from "/google.svg";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const passwordHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.info.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid pl-12 pr-10 pt-9 pb-8 sm:pl-10 sm:pr-10 sm:block relative place-content-center max-h-screen overflow-y-auto bg-transparent rounded-lg ">
        <div className="flex flex-col items-center">
          <form className="w-full" onSubmit={submitHandler}>
            {/* Upper Container */}
            <div className="flex flex-col mb-1 md:mb-8 items-center">
              <img src={Event0} alt="Event0" height={100} width={100} cover />
              <h1 className="ds-font-title-2 mb-2 font-semibold">Log in</h1>
              <div className="flex space-x-1">
                <span>Not a member yet?</span>
                <a href="">Sign up</a>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center space-y-8 md:flex-col">
              {/* for email and password authentication */}
              <div className="w-full items-center text-center">
                <div className="flex flex-col w-full space-y-6">
                  {/* for email */}
                  <div className="flex flex-col w-full">
                    <div className="w-full flex flex-row items-baseline justify-between">
                      <label className="mb-1 font-medium">Email</label>
                    </div>
                    <input
                      className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray-700  focus:border-viridian dark:bg-slate-600"
                      type="email"
                      name="email"
                      onChange={changeHandler}
                      value={data.email}
                    />
                  </div>
                  {/* for password */}
                  <div className="flex flex-col w-full">
                    <div className="w-full flex flex-row items-baseline justify-between">
                      <label className="mb-1 font-medium">Password</label>
                      <a href="" className="text-blue-500 hover:no-underline">
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray6 focus:border-viridian dark:bg-slate-600 relative"
                        type="password"
                        name="password"
                        onChange={passwordHandler}
                        value={data.password}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white px-[10px] py-1 "
                >
                  Log In
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* for Show Password */
}
{
  /* <span
                        className="absolute right-[3px] top-[3px] cursor-pointer"
                        onClick={showpassword}
                      >
                        <img
                          ref={ref}
                          className="p-1"
                          width={27}
                          src="icons/eye.jpg"
                          alt="eye"
                        />
                      </span> */
}
