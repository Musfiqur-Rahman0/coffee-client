import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
// import useInputValue from "../hooks/useInputValue";
// import Button from "../UI/Button";

// import useAuth from "../hook/useAuth";

const Register = () => {
  const { singUP } = useAuth();
  const navigate = useNavigate();

  const handleSingInForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const form_entries = new FormData(form);

    const { email, password, ...rest } = Object.fromEntries(
      form_entries.entries()
    );

    singUP(email, password, navigate);
    // navigate("/auth/login");
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="bg-white shadow-md border border-gray-100 rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="block text-gray-700 text-xl font-bold mb-6 text-center">
          Register your account
        </h2>
        <form onSubmit={handleSingInForm}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photo"
            >
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="url"
              name="photourl"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" className="mr-2 leading-tight" id="terms" />
            <label className="text-sm" htmlFor="terms">
              Accept Term & Conditions
            </label>
          </div>
          <div className="flex items-center justify-between">
            {/* <Button
              type="submit"
              text="Register"
              variant="contained"
              clasName="w-full flex items-center justify-center rounded-md"
            /> */}

            <button className="bg-gray-400 text-3xl font-semibold px-4 py-1 rounded-lg">
              Register
            </button>
          </div>
        </form>
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-blue-500 hover:text-blue-800"
              href="#"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
