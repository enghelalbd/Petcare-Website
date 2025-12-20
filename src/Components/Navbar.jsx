import React, { useContext } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { HiUserCircle } from "react-icons/hi2";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import ThemeSwitcher from "./ThemeSwitcher";
import Icon from "./Icon";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
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
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About US</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary/80 text-primary-content fixed top-0 left-0 z-50 w-full  backdrop-blur-lg shadow-sm transition-all duration-30 px-[3%] md:px-[5%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="text-2xl flex items-center gap-2 font-bold" to="/">
          <Icon classes={"h-7 mr-0.5"} />
          <div>
            <span className="text-accent">Warm</span>Paws
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-gray-50 space-x-0.5">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end items-center">
        {user ? (
          <>
            <div
              className="relative tooltip tooltip-bottom mr-2 hidden md:flex"
              data-tip={user?.displayName || "User"}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="profile picture"
                  className="w-10 h-10 rounded-full border-2 border-secondary cursor-help"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <HiUserCircle className="text-5xl" />
              )}
            </div>
            <Link to="/profile" className="btn mr-1.5 btn-info text-white">
              <HiUserCircle className="text-xl" />{" "}
              <span className="hidden md:flex">Profile</span>
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-error text-white mr-1.5 hidden lg:flex"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn mr-1.5 btn-info ">
              <FaSignInAlt />
              <span className="hidden md:flex">Login</span>
            </Link>
            <Link
              to="/register"
              className="btn mr-1.5 btn-success hidden md:flex"
            >
              <FaUserPlus />
              Register
            </Link>
          </>
        )}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
