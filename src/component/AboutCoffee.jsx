import React from "react";
import { coffeeFeatures } from "../consents/data";

const AboutCoffee = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-5">
      {coffeeFeatures.map((features, index) => (
        <div key={index} className="space-y-3">
          <img src={features.icon} alt="" height={50} width={50} />
          <h3 className="text-xl font-semibold font-secondary">
            {features.title}
          </h3>
          <p className="text-sm">{features.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCoffee;
