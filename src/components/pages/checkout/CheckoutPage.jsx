"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import OrderSummaryCard from "./OrderSummaryCard";
import { useForm } from "react-hook-form";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const pathName = usePathname();
  const [createOrder,{isLoading}]=useCreateOrderMutation();
  const { totalPrice, products } = useSelector((state) => state.carts);
  console.log("Products in CheckoutPage:", products);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    try{
       const total_quantity = products.reduce(
        (acc, item) => acc + item.quantities || 1,
        0
      );
        const newData= {
          ...data,
          total: totalPrice,
          shipping_cost: 15,
          total_quantity,
          products: products,
        }
        console.log("Order Data to be sent:", newData);
      const res = await createOrder(newData).unwrap();
      console.log("Order creation response:", res,'rder creation response:');

      if(res?.success){
        toast.success("Order placed successfully!");
        reset();
      }else{
        toast.error(res?.message || "Failed to place order. Please try again.");
      }
    }catch(err){
      toast.error(err.message || "Failed to place order. Please try again.");
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black py-8 text-white space-y-3 px-2 text-center">
        <div className="text-xl flex justify-center items-center gap-5">
          <Link
            href="/cart"
            className={`${
              pathName === "/cart"
                ? "border-b-2 border-primary-base"
                : "text-[#b6b6b6]"
            } uppercase text-xl font-semibold`}
          >
            Shopping cart
          </Link>
          <MdOutlineArrowRightAlt className="text-[25px]" />

          <Link
            href="/checkout"
            className={`${
              pathName === "/checkout"
                ? "border-b-2 border-primary-base"
                : "text-[#b6b6b6]"
            } uppercase text-xl font-semibold`}
          >
            Checkout
          </Link>
          <MdOutlineArrowRightAlt className="text-[25px]" />

          <Link
            href="/order-complete"
            className={`${
              pathName === "/order-complete"
                ? "border-b-2 border-primary-base"
                : "text-[#b6b6b6]"
            } uppercase text-xl font-semibold`}
          >
            Order complete
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="container py-10">
        <h1 className="text-2xl text-center text-black-muted font-semibold mb-4">
          Checkout
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Billing Form */}
          <div>
            <h1 className="text-2xl font-semibold my-4">Billing details</h1>
            <div  className="space-y-2">
              {/* Full Name */}
              <div>
                <label>Your full name *</label>
                <input
                  className="global-input"
                  {...register("full_name", { required: "Full name is required" })}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm">{errors.full_name.message}</p>
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
                  {...register("country", { required: "Country is required" })}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country.message}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label>Street address *</label>
                <input
                  className="global-input"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address.message}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label>Town / City *</label>
                <input
                  className="global-input"
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label>State *</label>
                <input
                  className="global-input"
                  {...register("state", { required: "State is required" })}
                />
                 {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state.message}</p>
                )}
              </div>

              {/* ZIP */}
              <div>
                <label>ZIP Code *</label>
                <input
                  className="global-input"
                  {...register("zip", {
                    required: "ZIP code is required",
                    pattern: {
                      value: /^[0-9]{4,6}$/,
                      message: "Invalid ZIP code",
                    },
                  })}
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label>Phone *</label>
                <input
                  className="global-input"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s]{8,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label>Email address *</label>
                <input
                  className="global-input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label>Order notes (optional)</label>
                <textarea
                  className="global-input"
                  {...register("notes")}
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummaryCard products={products} totalPrice={totalPrice} isLoading={isLoading} watch={watch} register={register} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutPage;
