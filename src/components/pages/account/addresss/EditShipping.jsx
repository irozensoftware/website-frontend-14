"use client";
import {
  useGetMyAddressQuery,
  useShippingAddressMutation,
} from "@/redux/api/authApi";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const EditShipping = () => {
  const router = useRouter();

  const { data } = useGetMyAddressQuery();
  const shippingAddressData = data?.data;

  const [shippingAddress, { isLoading }] =
    useShippingAddressMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* 🔥 PRE-FILL FORM DATA */
  useEffect(() => {
    if (shippingAddressData) {
      reset({
        full_name: shippingAddressData.full_name || "",
        company: shippingAddressData.company || "",
        country: shippingAddressData.country || "",
        address: shippingAddressData.address || "",
        city: shippingAddressData.city || "",
        state: shippingAddressData.state || "",
        zip: shippingAddressData.zip || "",
        phone: shippingAddressData.phone || "",
        email: shippingAddressData.email || "",
        notes: shippingAddressData.notes || "",
      });
    }
  }, [shippingAddressData, reset]);

  const onSubmit = async (formData) => {
    try {
      const res = await shippingAddress(formData).unwrap();

      if (res?.success) {
        toast.success("Shipping address updated successfully!");
        router.push("/account/edit-address");
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
        <h1 className="text-2xl font-semibold my-4">
          Shipping Address
        </h1>

        <div className="space-y-2 w-full">
          {/* Full Name */}
          <div>
            <label>Your full name *</label>
            <input
              className="global-input"
              {...register("full_name", {
                required: "Full name is required",
              })}
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm">
                {errors.full_name.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label>Company name (optional)</label>
            <input className="global-input" {...register("company")} />
          </div>

          {/* Country */}
          <div>
            <label>Country / Region *</label>
            <input
              className="global-input"
              {...register("country", {
                required: "Country is required",
              })}
            />
          </div>

          {/* Address */}
          <div>
            <label>Street address *</label>
            <input
              className="global-input"
              {...register("address", {
                required: "Address is required",
              })}
            />
          </div>

          {/* City */}
          <div>
            <label>Town / City *</label>
            <input
              className="global-input"
              {...register("city", {
                required: "City is required",
              })}
            />
          </div>

          {/* State */}
          <div>
            <label>State *</label>
            <input
              className="global-input"
              {...register("state", {
                required: "State is required",
              })}
            />
          </div>

          {/* ZIP */}
          <div>
            <label>ZIP Code *</label>
            <input
              className="global-input"
              {...register("zip", {
                required: "ZIP code is required",
              })}
            />
          </div>

          {/* Phone */}
          <div>
            <label>Phone *</label>
            <input
              className="global-input"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
          </div>

          {/* Email */}
          <div>
            <label>Email address *</label>
            <input
              className="global-input"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>

          {/* Notes */}
          <div>
            <label>Order notes (optional)</label>
            <textarea className="global-input" {...register("notes")} />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-base text-white py-2 rounded hover:opacity-85 transition"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditShipping;
