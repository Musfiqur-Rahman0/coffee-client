import React from "react";
import Herosection from "../component/HeroSection/Herosection";
import AboutCoffee from "../component/AboutCoffee";
import Coffes from "../component/displayCoffees/Coffes";
import InstaGallery from "../component/socialGallery/InstaGallery";
import { useLoaderData } from "react-router";

const Home = () => {
  const initailCoffe = useLoaderData();

  return (
    <div>
      <Herosection />
      <div className="space-y-[120px]">
        <div className="bg-primary py-8">
          <AboutCoffee />
        </div>
        <Coffes coffes={initailCoffe} />
        <InstaGallery />
      </div>
    </div>
  );
};

export default Home;
