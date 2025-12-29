"use client";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/authApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AccountDetails = () => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { data: profileData } = useGetProfileQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* PRE-FILL DATA */
  useEffect(() => {
    if (profileData) {
      reset({
        name: profileData.name || "",
        email: profileData.email || "",
      });
    }
  }, [profileData, reset]);

  const onSubmit = async (formData) => {
    try {
      const res = await updateProfile(formData).unwrap();

      if (res?.success) {
        toast.success("Profile updated successfully!");
        reset({
          ...formData,
          current_password: "",
          password: "",
          password_confirmation: "",
        });
      } else {
        toast.error(res?.message || "Update failed");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h1 className="text-2xl font-semibold my-4">Account Details</h1>

        <div className="space-y-3 w-full">
          {/* Name */}
          <div>
            <label>Your full name *</label>
            <input
              className="global-input"
              {...register("name", { required: "Name is required" })}
            />
          </div>

          {/* Email */}
          <div>
            <label>Email address *</label>
            <input
              className="global-input"
              {...register("email", { required: "Email is required" })}
            />
          </div>

          <hr className="my-4" />

          <h2 className="text-lg font-semibold">Change Password</h2>

          {/* Current Password */}
          <div>
            <label>Current password</label>
            <input
              type="password"
              className="global-input"
              {...register("current_password")}
            />
          </div>

          {/* New Password */}
          <div>
            <label>New password</label>
            <input
              type="password"
              className="global-input"
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label>Confirm new password</label>
            <input
              type="password"
              className="global-input"
              {...register("password_confirmation")}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-base text-white py-2 rounded hover:opacity-85 transition"
          >
            {isLoading ? "Saving..." : "Save changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
