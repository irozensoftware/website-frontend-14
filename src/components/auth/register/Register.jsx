"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRegisterMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/utils/authCookie";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data).unwrap();
      if (res?.success) {
        setAuthToken(res.token); // ✅ cookie set
        toast.success("Rgister Success successfully!");
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
      <div className="bg-gray-100 flex py-7 justify-center flex-col items-center">
        <h1 className="text-3xl md:text-5xl mb-2">My account</h1>
        <p className="text-sm text-black-muted">
          Home / <strong>register</strong>
        </p>
      </div>

      <div className="max-w-250 mx-auto py-10">
        <div className="flex flex-col md:flex-row md:space-x-16 w-full max-w-4xl bg-white p-8 rounded">
          {/* Register Form */}
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

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
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base"
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
                {isLoading ? "Loading" : "Sumit"}
              </button>
            </form>
          </div>

          <div className="border-t pt-5 md:pt-0 md:border-t-0 flex flex-col items-center md:border-l border-gray-200 md:pl-8 flex-1">
            {/* Login Section */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Login</h2>
            <p className="text-black-muted text-sm mb-4 text-center">
              {` Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.`}
            </p>
            <Link
              href={"/login"}
              className="bg-gray-100 text-black py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
