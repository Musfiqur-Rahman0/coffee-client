import React from "react";

const Herosection = () => {
  return (
    <div className="relative h-[800px] ">
      <figure className="w-full h-full">
        <img
          src="/src/assets/more/3.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="absolute inset-0 z-10 ">
        <div className="absolute top-1/2 left-1/2  text-white max-w-[724px]">
          <h2 className="font-secondary text-3xl font-semibold">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="mt-4 text-sm text-gray-300">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="mt-6 px-5 py-1 border rounded-full cursor-pointer font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
