import React, { useState } from "react";
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <div className="bg-zinc-100  mb-[1em] p-[2em] rounded-md text-center">
        <h1 className="text-3xl sm:text-5xl text-black font-bold mb-[20px]">
          Hello Welcome to
        </h1>
        <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">
          Pexel - <span className="text-emerald-700">Share</span>
        </h1>
      </div>
      <form className="flex flex-col gap-[1em] " onSubmit={handleSubmit}>
        <input
          className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
          style={{ border: "1px solid gray" }}
          type="text"
          placeholder="Create a username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
          style={{ border: "1px solid gray" }}
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
          style={{ border: "1px solid gray" }}
          type="text"
          placeholder="Paste profile url"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          required
        />
        <div className="flex gap-5 items-center">
          <input
            className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
            style={{ border: "1px solid gray" }}
            type={show ? "text" : "password"}
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
        <input
          className="w-full p-[10px] bg-transparent outline-none text-lg rounded-md"
          style={{ border: "1px solid gray" }}
          type={show ? "text" : "password"}
          placeholder="Confirm password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          required
        />
        <button
          className="w-full p-[10px] bg-emerald-700 outline-none text-lg rounded-md"
          //   style={{ border: "1px solid gray" }}
          onClick={handleSubmit}
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Register;
