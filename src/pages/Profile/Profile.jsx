import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="">
      <div>
        <img
          src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-[50vh] object-cover "
        />
      </div>
      <div>
        <img
          src={user?.profile}
          alt=""
          className="w-[100px] h-[100px] object-cover rounded-full absolute top-[48%] left-[48%] z-50"
        />
      </div>
      {/* user details */}
      <div className="relative flex mt-[6em] pl-[2em] pr-[2em] gap-[1em] ">
        <div className="flex-[0.5]">
          <h1 className="mb-[1em] font-bold text-white bg-emerald-700 p-[10px] rounded-md">
            Here are your current details
          </h1>
          <h1>
            Current username is: <span className="font-bold">{user.name}</span>{" "}
          </h1>
          <h1>
            Current email is: <span className="font-bold">{user.email}</span>{" "}
          </h1>
          <h1>
            Your account was created{" "}
            <span className="font-bold">
              {moment(user.createdAt).fromNow()}
            </span>{" "}
          </h1>

          <Link to="/">
            <h1 className="mt-[1em] text-white bg-emerald-800 cursor-pointer p-[10px] text-center rounded-lg">
              Click to see other people's posts
            </h1>
          </Link>
        </div>
        <div className="flex-[0.5]">
          <h1 className="mb-[1em] font-bold text-white bg-emerald-700 p-[10px] rounded-md">
            Update your Details
          </h1>
          <form>
            {/* first */}
            <div className="flex gap-[15px] justify-between">
              <div className=" flex-[0.5] flex flex-col mb-[20px]">
                <label htmlFor="name">Update username</label>
                <input
                  type="text"
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    marginTop: "15px",
                    padding: "8px",
                    borderRadius: "5px",
                  }}
                  maxLength={20}
                  id="name"
                  placeholder="i.e pics_art"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex-[0.5] flex flex-col mb-[20px]">
                <label htmlFor="email">Update Email</label>
                <input
                  type="email"
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    marginTop: "15px",
                    padding: "8px",
                    borderRadius: "5px",
                  }}
                  id="email"
                  placeholder="Enter new email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* second */}
            <div className="flex gap-[15px] justify-between">
              <div className="flex-[0.5] flex flex-col mb-[20px]">
                <label htmlFor="profile">Update Profile</label>
                <input
                  type="text"
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    marginTop: "15px",
                    padding: "8px",
                    borderRadius: "5px",
                  }}
                  id="profile"
                  placeholder="Enter new profile url"
                  // value={profile}
                  // onChange={(e) => setProfile(e.target.value)}
                />
              </div>
              <div className="flex-[0.5] flex flex-col mb-[20px]">
                <label htmlFor="cover">Update Cover Picture</label>
                <input
                  type="text"
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    marginTop: "15px",
                    padding: "8px",
                    borderRadius: "5px",
                  }}
                  id="cover"
                  placeholder="Enter new cover url"
                  // value={cover}
                  // onChange={(e) => setCover(e.target.value)}
                />
              </div>
            </div>

            <button
              className="bg-emerald-600 p-[20px] cursor-pointer rounded-md text-white"
              type="submit"
              // onClick={handleSubmit}
            >
              Update your details
            </button>
          </form>
        </div>
      </div>
      {/* show your pictures */}
      <div className="mt-[4em] pl-[2em] pr-[2em] gap-[1em]">
        <h1>All your pictures</h1>
        {/* all your images */}
      </div>
    </div>
  );
};

export default Profile;
