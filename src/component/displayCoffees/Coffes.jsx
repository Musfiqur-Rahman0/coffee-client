import React from "react";
import CoffeeCard from "./CoffeeCard";

const Coffes = ({ coffes }) => {
  console.log(coffes);
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center justify-center">
      <div className="space-y-3 text-center">
        <p className="text-sm ">-- Sip & Savor --</p>
        <h2 className="text-3xl font-semibold font-secondary">
          Our Popular Products
        </h2>
        <button className="mx-auto px-5 py-1 border rounded-full cursor-pointer font-semibold">
          Add Coffee
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 w-full">
        {coffes.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffes;
