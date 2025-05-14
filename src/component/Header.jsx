import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center text-white justify-center gap-5 h-[120px] relative">
      <img
        src="/src/assets/Rectangle 1 (2).png"
        alt=""
        className="absolute inset-0 h-full w-full -z-10"
      />
      <figure>
        <img src="/src/assets/more/logo1.png" alt="" height={60} width={60} />
      </figure>
      <h2 className="text-4xl font-semibold font-secondary ">
        Espresso Emporium
      </h2>
    </nav>
  );
};

export default Header;
