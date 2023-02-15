import React, { useState } from "react";
import { Link } from "react-router-dom";
import { preview } from "../assets";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ss");
  };
  return (
    <div className="w-[90%] m-auto pt-[1em]">
      <Link to="/">
        <div className="mb-[50px] cursor-pointer">
          <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">
            Pexel<span className="text-emerald-700">Share</span>
          </h1>
        </div>
      </Link>

      <h2 className="font-bold text-2xl mb-[0.5em]">Create</h2>
      <p className="text-zinc-600 text-md">
        Contribute to our community by sharing images
      </p>
      <p className="text-zinc-600 text-md mb-[1em]">
        Images posted are copyright free
      </p>

      <form className="mt-[4em]" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-[20px]">
          <label htmlFor="title">Enter Short Title</label>
          <input
            type="text"
            style={{
              border: "1px solid gray",
              width: "60%",
              marginTop: "15px",
              padding: "8px",
              borderRadius: "5px",
            }}
            required
            maxLength={20}
            id="title"
            placeholder="i.e A large monkey"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-[20px]">
          <label htmlFor="description">Enter Short Description</label>
          <input
            type="text"
            style={{
              border: "1px solid gray",
              width: "60%",
              marginTop: "15px",
              padding: "8px",
              borderRadius: "5px",
            }}
            required
            maxLength={40}
            id="description"
            placeholder="i.e I went to the zoo and found a huge monkey that was called Tom. He eats mangoes and bananas"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-[20px]">
          <label htmlFor="url">Enter image url</label>
          <input
            type="text"
            style={{
              border: "1px solid gray",
              width: "60%",
              marginTop: "15px",
              padding: "8px",
              borderRadius: "5px",
            }}
            required
            // maxLength={40}
            id="url"
            placeholder="Copy your image addess and paste here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div>
          <img
            className="w-[250px] h-[200px] object-cover rounded-md"
            src={url ? url : preview}
            alt=""
          />
        </div>

        <p className="mb-[2em] mt-[1em]">
          ** NOTE that everyone will be able to see your image **
        </p>
        <button
          className="bg-emerald-600 p-[20px] cursor-pointer rounded-md text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Share with the community
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
