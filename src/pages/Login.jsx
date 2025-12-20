import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Error from "../components/Error";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa6";

const Login = () => {
  const { signInUsingEmail, signInUsingGoogle, setUser, firebaseErrors } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const emailRef = useRef();

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleForm = (e) => {
    e.preventDefault();
    setError(null);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }
    if (!passRegex.test(password)) {
      return setError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
    }

    signInUsingEmail(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Login Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const match = firebaseErrors.find((err) => err.code === error.code);
        const errMsg = match
          ? match.message
          : "Login failed. Please try again.";
        setError(errMsg);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      return setError("Please enter your email address first.");
    }
    navigate("/forgot-password", { state: { email } });
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const match = firebaseErrors.find((err) => err.code === error.code);
        const errMsg = match
          ? match.message
          : "Login failed. Please try again.";
        setError(errMsg);
      });
  };

  return (
    <div className="hero min-h-[60vh]">
      <title>Login - WarmPaws</title>

      <form onSubmit={handleForm}>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-[320px] md:w-lg lg:w-xl shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl font-semibold mb-2 text-center">Login</h1>

              {error && <Error message={error} />}

              <fieldset className="fieldset">
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter your email"
                  name="email"
                  ref={emailRef}
                />

                <label className="label font-medium mt-2">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="Enter your password"
                    name="password"
                  />
                  <span
                    className="absolute right-2 top-2 cursor-pointer text-2xl text-gray-600"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <IoEye /> : <IoEyeOff />}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between mt-3 gap-2">
                  <button
                    onClick={handleForgotPassword}
                    className="link link-hover text-lg flex items-center gap-2"
                  >
                    <BiSolidHelpCircle />
                    Forgot password?
                  </button>
                  <NavLink
                    to="/register"
                    className="link link-hover text-lg flex items-center gap-2"
                  >
                    <FaUserPlus />
                    Create an account
                  </NavLink>
                </div>

                <button className="btn btn-primary mt-4 w-full" type="submit">
                  <FaSignInAlt />
                  Login
                </button>
                <button
                  className="btn mt-2 w-full"
                  type="button"
                  onClick={handleGoogleSignIn}
                >
                  <FcGoogle />
                  Google Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
