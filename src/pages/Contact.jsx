import React, { useState } from "react";
import { NavLink } from "react-router";
import toast from "react-hot-toast";
import { IoSend } from "react-icons/io5";
import Error from "../components/Error";

const Contact = () => {
  const [error, setError] = useState(null);

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const handleForm = (e) => {
    e.preventDefault();
    setError(null);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (name.length < 3) {
      return setError("Invalid name. Name must be at least 3 characters long.");
    }
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }
    if (message.length < 30) {
      return setError(
        "Invalid name. Message must be at least 30 characters long."
      );
    }
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="hero min-h-[60vh]">
      <title>Contact US - WarmPaws</title>

      <form onSubmit={handleForm}>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-[320px] md:w-lg lg:w-xl shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                Contact US
              </h1>

              {error && <Error message={error} />}

              <fieldset className="fieldset">
                <label className="label font-medium">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter your name"
                  name="name"
                />
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter your email"
                  name="email"
                />
                <label className="label font-medium">Message</label>
                <textarea
                  placeholder="Type your message here..."
                  name="message"
                  className="textarea w-full input"
                ></textarea>

                <button className="btn btn-primary mt-4 w-full" type="submit">
                  <IoSend />
                  Send
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
