import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const singleCoffee = useLoaderData();

  console.log(singleCoffee);
  const { name, category, supplier, details, photourl, price, taste, _id } =
    singleCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const from_entries = new FormData(form);
    const formData = Object.fromEntries(from_entries.entries());

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully updated the coffee",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 space-y-12 ">
      <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
        <FaArrowLeftLong size={30} />
        <h2 className="font-secondary text-2xl font-bold cursor-pointer">
          Back To Home
        </h2>
      </Link>
      <div className="flex flex-col items-center justify-center gap-12 bg-card rounded-lg py-12">
        <div className="max-w-[80%] text-center space-y-4">
          <h2 className="text-4xl font-bold text-title font-secondary">
            Update Existing Coffee Details
          </h2>
          <p className="text-sm ">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee} className="w-[80%] mx-auto">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="coffee_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Coffee Name
              </label>
              <input
                type="text"
                id="coffee_name"
                name="name"
                defaultValue={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hot coffee"
                required
              />
            </div>
            <div>
              <label
                htmlFor="taste"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                defaultValue={taste}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
                htmlFor="supplier"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Supplier
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                defaultValue={supplier}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Supplier name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Details
              </label>
              <input
                type="text"
                id="details"
                name="details"
                defaultValue={details}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="photourl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo url
            </label>
            <input
              type="url"
              id="photourl"
              name="photourl"
              defaultValue={photourl}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@taste.com"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white cursor-pointer w-full text-center bg-[#D2B48C]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm l  px-5 py-2.5  hover:bg-[#D2B48C]/90 dark:hover:bg-[#D2B48C]/90"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
