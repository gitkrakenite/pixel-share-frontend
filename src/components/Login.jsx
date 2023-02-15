import React, { useState } from "react";
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="bg-zinc-100  mb-[1em] p-[1.1em] rounded-md text-center">
        <h1 className="text-3xl sm:text-5xl text-black font-bold mb-[20px]">
          A Community of Art
        </h1>
        <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">
          Pexel - <span className="text-emerald-700">Share</span>
        </h1>
      </div>
      <form className="flex flex-col gap-[1em] ">
        <input
          className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
          style={{ border: "1px solid gray" }}
          type="text"
          placeholder="Enter your username"
        />

        <div className="flex gap-5 items-center">
          <input
            className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
            style={{ border: "1px solid gray" }}
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
          />
          {show ? (
            <AiFillEyeInvisible
              className="cursor-pointer text-2xl"
              onClick={() => setShow(!show)}
            />
          ) : (
            <AiOutlineEye
              className="cursor-pointer text-2xl"
              onClick={() => setShow(!show)}
            />
          )}
        </div>

        <button
          className="w-full p-[10px] bg-emerald-700 outline-none text-lg rounded-md"
          //   style={{ border: "1px solid gray" }}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
