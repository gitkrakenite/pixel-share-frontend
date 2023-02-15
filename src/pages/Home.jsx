import React, { useState, useEffect } from "react";

import { Loader, Card, FormField } from "../components";
import axios from "axios";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { categories } from "../categories";
import { useDispatch, useSelector } from "react-redux";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((post) => <Card key={post._id} {...post} />);

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
      No posts found
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://v-ai-image-generator-backend-lu7bl08sy-gitkrakenite.vercel.app/api/v1/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
        // console.log(allPosts);
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = async (e) => {
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <section className="w-[90%] mx-auto">
      <div className="flex justify-between items-center mt-[20px]">
        <div
          className="flex-[0.2] cursor-pointer"
          onClick={() => setSearchText("")}
        >
          <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">
            Pexel - <span className="text-emerald-700">Share</span>
          </h1>
        </div>
        <div className=" flex-[0.6]">
          {/* <FormField
            labelName="Search posts"
            type="text"
            name="text"
            placeholder="Search something..."
            value={searchText}
            handleChange={handleSearchChange}
          /> */}
          <input
            type="text"
            placeholder="Search something"
            className="w-full p-[8px] outline-none"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex-[0.2] flex gap-[20px] items-center justify-end ">
          {user ? (
            <Link to="/profile/34">
              <div className="cursor-pointer">
                <img
                  src={user?.profile}
                  alt=""
                  className="w-[55px] h-[55px] rounded-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <Link to="/auth">
              <div className="cursor-pointer">
                <h1>LOGIN</h1>
              </div>
            </Link>
          )}

          <Link to="/create-post">
            <div
              className="text-2xl bg-zinc-900 text-white p-[13px] rounded-md cursor-pointer"
              title="Create"
            >
              <MdOutlineAdd />
            </div>
          </Link>
        </div>
      </div>
      {/* filters */}
      <div>
        <h1 className="mb-[20px] mt-[20px] text-2xl">
          Hello {user?.name} Apply filters
        </h1>
        <div className="flex gap-[20px] overflow-x-scroll prompt">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex w-[150px] relative items-center gap-[20px] p-[10px] cursor-pointer rounded-md mb-[10px]"
              style={{ border: "1px solid gray" }}
              onClick={() => setSearchText(category.name)}
            >
              <div className="w-[200px]">
                <img
                  className="rounded-full w-[50px] h-[50px] object-cover"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <div>
                <p>{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </div>
            {/* {console.log(allPosts)} */}
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
