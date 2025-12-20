import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Tips from "../components/Tips";
import Experts from "../components/Experts";

const Home = () => {
  return (
    <div>
      <title>Home - WarmPaws</title>
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-xl">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Banner />
            <Slider />
          </div>
        </div>
      </div>
      <Services button={true} />
      <Experts />
      <Stats />
      <Tips />
    </div>
  );
};

export default Home;
