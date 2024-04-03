import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  const conpassHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
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

  return (
    <>
      <div className="grid place-content-center h-screen">
        <div className="p-6 mx-auto rounded-xl items-center bg-red-500">
          <h1 className="text-4xl text-white font-bold text-center">
            Sign Up here!!
          </h1>
          <form
            className="text-2xl m-5 p-2xl block text-white "
            onSubmit={submitHandler}
          >
            <label className="p-2 font-medium grid ">
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
