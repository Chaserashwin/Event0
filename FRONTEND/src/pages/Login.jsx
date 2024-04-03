import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Event0 from "/1.svg";

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
        toast.success("Registration Successful");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid place-content-center h-screen">
        <div className="flex flex-col items-center">
          <form className="w-full" onSubmit={submitHandler}>
            <div class="flex flex-col mb-1 md:mb-8 items-center">
              <img src={Event0} alt="Event0" height={100} width={100} cover />
              <h1 class="ds-font-title-2 mb-2 font-semibold">Log in</h1>
              <div class="flex space-x-1">
                <span>Not a member yet?</span>
                <a href="">Sign up</a>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center space-y-8 md:flex-col">
              <div className="w-full">
                <div className="flex flex-col w-full space-y-6">
                  {/* for email */}
                  <div className="flex flex-col w-full">
                    <div className="w-full flex flex-row items-baseline justify-between">
                      <label className="mb-1 font-medium">Email</label>
                    </div>
                    <input
                      className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray6 focus:border-viridian"
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
                    </div>
                    <input
                      className="h-10 w-full rounded-lg border border-gray2 px-3 py-2 outline-none transition-colors hover:border-gray6 focus:border-viridian"
                      type="password"
                      name="password"
                      onChange={passwordHandler}
                      value={data.password}
                    />
                  </div>
                </div>
              </div>
              <div>line breaker</div>
              <div className=" grid justify-center">
                <button
                  type="submit"
                  className="bg-slate-900 rounded-md font-medium p-2 items-center text-white"
                >
                  Log In
                </button>
                <a href="/signup" className="text-sm">
                  {" "}
                  Don't have account? register here
                </a>
                <button className="login-with-gogle-btn">
                  Login with google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
