import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogInform = (e) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const email = formdata.get("email");
    const password = formdata.get("password");
    login(email, password, navigate);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleLogInform} className="flex flex-col gap-3">
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
            required
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
            required
            placeholder="Enter your password"
          />
        </div>
        <input
          type="submit"
          value="login"
          className="bg-gray-100 py-2 rounded-lg cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
