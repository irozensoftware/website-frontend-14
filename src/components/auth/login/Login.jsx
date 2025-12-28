"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/utils/authCookie";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      if (res?.success) {
        setAuthToken(res.token); // ✅ cookie set
        toast.success("Login Success successfully!");
        reset();
        router.push(`/complete-order?order_id=${res?.order?.invoice}`);
      } else {
        toast.error(res?.message || "Failed to place order. Please try again.");
      }
    } catch (err) {
      console.log(err, "errerr");
      toast.error(err.message || "Failed to place order. Please try again.");
    }
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1">Email address *</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1">Password *</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base"
                  />
                  <span
                    className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer bg-primary-base text-white py-2 rounded hover:opacity-85 transition"
              >
                {isLoading ? "Loading..." : "LOG IN"}
              </button>

              <div className="flex justify-between text-sm mt-2">
                <label className="flex items-center gap-1">
                  <input type="checkbox" {...register("rememberMe")} /> Remember
                  me
                </label>
                <a href="#" className="text-primary-base hover:underline">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          <div className="border-t pt-5 md:pt-0 md:border-t-0 flex flex-col items-center md:border-l border-gray-200 md:pl-8 flex-1">
            {/* Register Section */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Register</h2>
            <p className="text-black-muted text-sm mb-4 text-center">
              {` Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.`}
            </p>
            <Link
              href={"/register"}
              className="bg-gray-100 text-black py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
