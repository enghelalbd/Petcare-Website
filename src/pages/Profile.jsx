import React, { useContext, useState } from "react";
import { HiUserCircle } from "react-icons/hi2";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import Error from "../components/Error";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";

const Profile = () => {
  const [update, setUpdate] = useState(false);
  const { user, setUser, firebaseErrors, updateUserProfile, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const photoURLRegex =
    /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/i;
  const NameRegex = /([a-z\s]+)/i;
  const defName = user?.displayName || "";
  const defPhotoURL = user?.photoURL || "";

  const handleUpdateButton = () => {
    setUpdate(!update);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setError(null);
    let displayName = e.target.name.value;
    let photoURL = e.target.photoURL.value;

    if (!NameRegex.test(displayName)) {
      return setError("Please enter a valid name");
    }
    if (photoURL && !photoURLRegex.test(photoURL)) {
      return setError("Please enter a valid photo URL");
    }
    updateUserProfile({ displayName, photoURL })
      .then(() => {
        const updatedUser = { ...user, displayName, photoURL };
        setUser(updatedUser);
        setUpdate(false);
        toast.success("Profile Updated Successfully");
        handleUpdateButton();
      })
      .catch((error) => {
        const errMsg = firebaseErrors.find(
          (err) => err.code === error.code
        ).message;
        setError(errMsg);
      });
  };
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => {
      logOut()
        .then(() => setUser(null))
        .catch((error) => {
          toast.error("Logout error: " + error.message);
        });
    }, 2000);
  };

  const formatCustomDate = (dateString) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutesPadded = minutes < 10 ? "0" + minutes : minutes;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;

    const newTimeString = `${hours}:${minutesPadded} ${ampm}`;
    const newDateString = `${day}/${month}/${year}`;

    return `${newTimeString}, ${newDateString}`;
  };

  if (update) {
    return (
      <div className="hero min-h-[60vh]">
        <title>Update Profile - WarmPaws</title>
        <form onSubmit={handleForm}>
          <div className="hero-content flex-col">
            <div className="card bg-base-100 w-[320px] md:w-lg shadow-2xl">
              <div className="card-body">
                <h2 className="text-3xl font-semibold text-center">
                  Update <span className="text-amber-600">Profile</span>
                </h2>
                {error && <Error message={error} />}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Your Name"
                  name="name"
                  defaultValue={defName}
                />
                <label className="label">Photo URL</label>
                <input
                  type="url"
                  className="input w-full"
                  placeholder="Photo URL"
                  name="photoURL"
                  defaultValue={defPhotoURL}
                />
                <div className="flex flex-col mt-2 lg:flex-row gap-2 items-center justify-evenly">
                  <button
                    className="btn btn-primary w-full lg:w-1/2"
                    type="submit"
                  >
                    <FaUserCheck className="mb-0.5" />
                    Update
                  </button>
                  <button
                    className="btn w-full lg:w-1/2"
                    type="button"
                    onClick={handleUpdateButton}
                  >
                    <IoChevronBackCircle />
                    Back to Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="hero min-h-[60vh]">
      <title>Profile - WarmPaws</title>
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-[320px] md:w-lg shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">
              Your <span className="text-amber-600">Profile</span>
            </h2>
            {user && (
              <div className="text-center mb-4">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border-2 border-amber-600 mx-auto"
                  />
                ) : (
                  <HiUserCircle className="w-24 h-24 mx-auto text-gray-400" />
                )}
                <h2 className="text-2xl font-medium mt-2">
                  {user.displayName}
                </h2>
                <p className="text-gray-600 text-lg">{user.email}</p>
                <p className="text-gray-600/80 text-sm mt-1">
                  Created at: {formatCustomDate(user?.metadata?.creationTime)}
                </p>
                <p className="text-gray-600/80 text-sm">
                  Last Login: {formatCustomDate(user?.metadata?.lastSignInTime)}
                </p>
              </div>
            )}
            <div className="flex flex-col lg:flex-row gap-2 justify-evenly">
              <button
                className="btn btn-primary w-full lg:w-1/2"
                type="button"
                onClick={handleUpdateButton}
              >
                <FaUserEdit className="mb-0.5" />
                Update Profile
              </button>

              <button
                onClick={handleLogout}
                className="btn btn-error text-white w-full lg:w-1/2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
