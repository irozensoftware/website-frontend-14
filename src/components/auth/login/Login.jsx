
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
    // add your login API call here
  };

  return (
    <div>
      <div className="bg-black text-white flex py-7 justify-center flex-col items-center">
         <h1 className="text-3xl md:text-5xl mb-2">My account</h1>
      <p className="text-sm text-black-muted">
        Home / <strong>login</strong>
      </p>
      </div>

      <div className="max-w-250 mx-auto py-10">
         <div className="flex flex-col md:flex-row md:space-x-16 w-full max-w-4xl bg-white p-8 rounded">
        {/* Login Form */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">LOGIN</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1">Username or email address *</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <span
                  className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-base text-white py-2 rounded hover:opacity-85 transition"
            >
              LOG IN
            </button>

            <div className="flex justify-between text-sm mt-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Lost your password?
              </a>
            </div>
          </form>
        </div>

        <div className="border-t pt-5 md:pt-0 md:border-t-0 flex flex-col items-center md:border-l border-gray-200 md:pl-8 flex-1">
          {/* Register Section */}
          <h2 className="text-xl  md:text-2xl font-semibold mb-4">Login</h2>
          <p className="text-black-muted text-sm mb-4 text-center">
           {` Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.`}
          </p>
          <Link href={'/register'} className="bg-gray-100 text-black py-2 px-4 rounded hover:bg-gray-200 transition">
            REGISTER
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};



export default Login
