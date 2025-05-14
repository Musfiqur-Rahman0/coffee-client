import React from "react";
import Herosection from "../component/HeroSection/Herosection";
import AboutCoffee from "../component/AboutCoffee";
import Coffes from "../component/displayCoffees/Coffes";
import InstaGallery from "../component/socialGallery/InstaGallery";

const Home = () => {
  return (
    <div>
      <Herosection />
      <div className="space-y-[120px]">
        <div className="bg-primary py-8">
          <AboutCoffee />
        </div>
        <Coffes />
        <InstaGallery />
      </div>
    </div>
  );
};

export default Home;
