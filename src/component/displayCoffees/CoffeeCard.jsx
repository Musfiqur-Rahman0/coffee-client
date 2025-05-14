import React from "react";
import { FaEye } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const CoffeeCard = () => {
  const icons = [
    { icon: FaEye, color: "#D1B188" }, // Light brown/tan
    { icon: HiPencilAlt, color: "#3A3738" }, // Dark gray
    { icon: MdDelete, color: "#E84542" }, // Red
  ];
  return (
    <div className="p-8 rounded-lg bg-card grid grid-cols-3 items-center gap-3">
      <figure>
        <img src="/src/assets/6.png" alt="" />
      </figure>
      <div className="col-span-2 flex items-center justify-between">
        <div className="text-lg space-y-2">
          <p>
            <span className="font-semibold">Name</span> : Americano Coffee
          </p>
          <p>
            <span className="font-semibold">Chef</span> : Mr. Matin Paul
          </p>
          <p>
            <span className="font-semibold">Price</span> : 890 Taka
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          {icons.map((icon, index) => {
            const Icon = icon.icon;
            const color = icon.color;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                }}
                className={`cursor-pointer p-3 rounded-lg text-white`}
              >
                <Icon size={24} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
