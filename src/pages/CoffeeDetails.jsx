import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();

  const { photourl, name, category, price, supplier, details } = singleCoffee;

  return (
    <div className="max-w-7xl mx-auto mt-12 space-y-12">
      <Link
        to={"/"}
        className="flex items-center gap-3 font-bold font-secondary"
      >
        <FaArrowLeftLong size={30} />
        <span className="text-xl ">Back To Home</span>
      </Link>
      <div className="w-full grid grid-cols-2 items-center justify-center bg-card rounded-lg">
        <figure className="">
          <img src={photourl} alt={name} className="w-full" />
        </figure>
        <div className="space-y-8">
          <h2 className="text-title text-5xl font-bold font-secondary">
            Niceties
          </h2>
          <div className="space-y-3">
            {[
              {
                name: name,
                category: category,
                price: price,
                supplier: supplier,
                details: details,
              },
            ].map((item, index) => (
              <div key={index} className="text-xl">
                <p>
                  <span className="font-bold">Name</span> : {item.name}
                </p>
                <p>
                  <span className="font-bold">Category</span> : {item.category}
                </p>
                <p>
                  <span className="font-bold">Price</span> : {item.price}
                </p>
                <p>
                  <span className="font-bold">Supplier</span> : {item.supplier}
                </p>
                <p>
                  <span className="font-bold">Details</span> : {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
