"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import OrderSummaryCard from "./OrderSummaryCard";

const CheckoutPage = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="bg-black py-8 text-white space-y-3 px-2 text-center">
        <div className="text-xl flex justify-center items-center gap-5">
          <Link
            href={`/cart`}
            className={`${
              pathName == "/cart"
                ? "border-b-2 border-primary-base "
                : "text-[#b6b6b6]"
            }  uppercase text-xl   font-semibold`}
          >
            Shopping cart
          </Link>{" "}
          <MdOutlineArrowRightAlt className="text-[25px]" />
          <Link
            href={`/checkout`}
            className={`${
              pathName == "/checkout"
                ? "border-b-2 border-primary-base "
                : "text-[#b6b6b6]"
            }  uppercase text-xl   font-semibold`}
          >
            Checkout
          </Link>{" "}
          <MdOutlineArrowRightAlt className="text-[25px]" />
          <Link
            href={`/order-complete`}
            className={`${
              pathName == "/order-complete"
                ? "border-b-2 border-primary-base "
                : "text-[#b6b6b6]"
            }  uppercase text-xl   font-semibold`}
          >
            Order complete
          </Link>{" "}
        </div>
      </div>
      <div className="container py-10">
        <h1 className="text-2xl text-center text-black-muted font-semibold mb-4">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h1 className="text-2xl font-semibold my-4">Billing details</h1>
            <div>
              <form action="" className="space-y-2">
                <div>
                  <label className="text-base" htmlFor="name">
                    Your full name  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                  Company name (optional) 
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Country / Region <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                    Street address   <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Town / City *  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                  State *  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   ZIP Code   <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Phone  <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                   Email address   <sup  className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  />
                </div>
                 <div>
                  <label className="text-base" htmlFor="name">
                 Order notes (optional) <sup  className="text-red-500">*</sup>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter you full name ...."
                    className="global-input"
                    required
                  ></textarea>
                </div>
                
              </form>
            </div>
          </div>
          <div>
            <OrderSummaryCard/>

          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
