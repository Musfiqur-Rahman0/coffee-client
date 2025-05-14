import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const AddCoffee = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 space-y-[50px]">
      <Link to={"/"} className="flex items-center gap-3">
        <FaArrowLeftLong size={25} />
        <span className="font-secondary font-bold">Back To Home </span>
      </Link>
      <div className="px-5 py-20 rounded-lg bg-card flex flex-col gap-8 items-center justify-center">
        <div className="text-center space-y-3 max-w-[80%] mx-auto">
          <h2 className="text-title text-3xl font-semibold font-secondary">
            Add New Coffee
          </h2>
          <p className="text-sm text-gray-400">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form className="w-[80%] mx-auto">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@taste.com"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white cursor-pointer w-full text-center bg-[#D2B48C]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm l  px-5 py-2.5  hover:bg-[#D2B48C]/90 dark:hover:bg-[#D2B48C]/90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
