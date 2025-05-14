import React from "react";
import Herosection from "../component/HeroSection/Herosection";
import AboutCoffee from "../component/AboutCoffee";

const Home = () => {
  return (
    <div>
      <Herosection />
      <div className="bg-primary py-8">
        <AboutCoffee />
      </div>
    </div>
  );
};

export default Home;
