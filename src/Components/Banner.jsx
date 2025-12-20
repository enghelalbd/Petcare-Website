import React from "react";
import { Link } from "react-router";

import "animate.css";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-10 border-4 border-dashed border-accent">
        <div className="text-center lg:text-left">
          <h2 className="flex items-center justify-center lg:justify-start gap-3 text-4xl md:text-5xl font-bold">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-12 md:h-14 md:w-14 drop-shadow-lg hover:scale-110 transition-transform duration-300 animate__animated animate__wobble animate__infinite animate__slow"
            />
            <span className="text-gray-800 tracking-wide">
              <span className="text-accent font-bold">Warm</span>
              Paws
            </span>
          </h2>

          <p className="animate__animated animate__fadeInUp text-lg md:text-xl mt-4 text-gray-700 italic font-medium">
            Cozy Care for Your Furry Companion
          </p>

          <div className="mt-6 mx-auto lg:mx-0 w-2/3 h-1 rounded-full bg-accent animate__animated animate__bounceIn hidden lg:block"></div>

          <p className="mt-8 text-gray-600 leading-relaxed text-base hidden xl:block md:text-lg">
            At WarmPaws, we believe pets deserve the same comfort and care as
            their humans. From expert grooming and health tips to winter gear
            that keeps tails wagging, we bring together everything you need to
            protect and pamper your furry friend all season long.
          </p>

          <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">
            <Link
              className="btn btn-primary bg-accent hover:bg-amber-700 border-none text-white px-8"
              to="/services"
            >
              Get Started
            </Link>
            <Link
              className="btn btn-outline border-accent text-accent hover:bg-amber-600 hover:text-white px-8"
              to="/about-us"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
