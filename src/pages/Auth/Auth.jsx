import React, { useState } from "react";
// import "./auth.css";
import bgVideo from "../../assets/bg5.mp4";
import Register from "../../components/Register";
import Login from "../../components/Login";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="w-full h-[100vh]">
      <video
        className="w-full h-[100vh] object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>
      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)]" />
      <div className="absolute w-full h-full top-0 pl-[20px] pt-[20px] flex ">
        <h1 className="text-4xl text-zinc-50 font-bold">
          Pexel - <span className="text-emerald-300">Share</span>
        </h1>
      </div>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        {/* Auth Wrapper */}
        <div className=" w-[99%] sm:w-[80%] m-auto">
          {/* conditional rendering */}
          {show ? <Register /> : <Login />}

          {/* options */}
          {show ? (
            <div className="bg-zinc-100  mt-[1em] p-[10px] rounded-md text-left flex justify-between items-center">
              <div>
                <p className="text-xl text-black font-bold">
                  Not new here ?{" "}
                  <span
                    className="text-emerald-700 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    Log in
                  </span>
                </p>
              </div>

              <div className="text-black font-bold flex items-center gap-[10px] cursor-pointer">
                <p className="text-xl">Use Google</p>
                <FcGoogle className="text-2xl" />
              </div>
            </div>
          ) : (
            <div className="bg-zinc-100  mt-[1em] p-[10px] rounded-md text-left flex justify-between items-center">
              <div>
                <p className="text-xl text-black font-bold">
                  New here ?{" "}
                  <span
                    className="text-emerald-700 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    Create Account
                  </span>
                </p>
              </div>

              <div className="text-black font-bold flex items-center gap-[10px] cursor-pointer">
                <p className="text-xl">Use Google</p>
                <FcGoogle className="text-2xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
