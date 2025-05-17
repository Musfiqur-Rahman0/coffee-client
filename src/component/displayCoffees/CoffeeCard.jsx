import React from "react";
import { FaEye } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setAllCoffes, allCoffes }) => {
  const icons = [
    { icon: FaEye, color: "#D1B188" }, // Light brown/tan
    { icon: HiPencilAlt, color: "#3A3738" }, // Dark gray
    { icon: MdDelete, color: "#E84542" }, // Red
  ];

  const { name, category, photourl, price, supplier, _id } = coffee;
  const navigate = useNavigate();

  const handleViewcoffee = (id) => {
    console.log(id);
    navigate(`/coffee/${id}`);
  };

  const handleEdit = (id) => {
    console.log("clicked", id);
    navigate(`/update-coffee/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes delete it.",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-kappa-three.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCoffes = allCoffes.filter(
                (coffee) => coffee._id !== id
              );
              setAllCoffes(remainingCoffes);
              Swal.fire({
                title: "Deleted!",
                icon: "success",
                draggable: true,
              });
            }
          });
      }
    });
  };

  return (
    <div className="p-8 rounded-lg bg-card grid grid-cols-3 items-center gap-3">
      <figure>
        <img src={photourl} alt={name} />
      </figure>
      <div className="col-span-2 flex items-center justify-between">
        <div className="text-lg space-y-2">
          <p>
            <span className="font-semibold">Name</span> : {name}
          </p>
          <p>
            <span className="font-semibold">Chef</span> : {supplier}
          </p>
          <p>
            <span className="font-semibold">Price</span> : ${price}
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
                onClick={
                  (index === 0 && (() => handleViewcoffee(_id))) ||
                  (index === 1 && (() => handleEdit(_id))) ||
                  (index === 2 && (() => handleDelete(_id)))
                }
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
