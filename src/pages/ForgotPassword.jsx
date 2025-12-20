import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router";
import Error from "../components/Error";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaUserPlus } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";

const ForgotPassword = () => {
  const [error, setError] = useState(null);
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const location = useLocation();
  const emailFromLogin = location.state?.email;
  const { passwordResetEmail } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    setError(null);
    let email = e.target.email.value;
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }
    passwordResetEmail(email)
      .then(() => {
        toast.success("Password reset email sent!");
        toast.success("Redirecting to Gmail...");
        setInterval(() => {
          window.location.href = "https://gmail.com/";
        }, 3000);
      })
      .catch(() => {
        /*const match = firebaseErrors.find((err) => err.code === error.code);
        const errMsg = match
          ? match.message
          : "Failed to send password reset email. Please try again.";
        setError(errMsg);*/
      });
  };
  return (
    <div className="hero min-h-[60vh]">
      <title>Password Reset - WarmPaws</title>
      <form onSubmit={handleForm}>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-[320px] md:w-lg lg:w-xl shadow-2xl">
            <div className="card-body">
              <h1>Forgot Password</h1>
              {error && <Error message={error} />}
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                  defaultValue={emailFromLogin}
                />
                <div className="flex flex-col lg:flex-row lg:justify-between mt-3 gap-2">
                  <div>
                    <Link
                      to="/login"
                      className="link link-hover text-lg flex items-center gap-2"
                    >
                      <FaSignInAlt />
                      Login Here
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/register"
                      className="link link-hover text-lg flex items-center gap-2"
                    >
                      <FaUserPlus />
                      Create an account
                    </Link>
                  </div>
                </div>
                <button className="btn btn-primary mt-4" type="submit">
                  <FaUnlockKeyhole className="mb-0.5" />
                  Reset Password
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
