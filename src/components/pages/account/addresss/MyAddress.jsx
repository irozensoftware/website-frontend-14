"use client";
import { useGetMyAddressQuery } from "@/redux/api/authApi";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const MyAddress = () => {
  const { data } = useGetMyAddressQuery();
  const shippingAddress = data?.data;
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-8">
          The following addresses will be used on the checkout page by default.
        </p>

        <div className="grid md:grid-cols-1 gap-16">
          {/* Billing Address */}
          {/* <div>
          <h2 className="text-xl font-semibold uppercase mb-4">
            Billing Address
          </h2>

          <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-black mb-6">
            <FaRegEdit />
            Edit Billing address
          </button>

          <div className="space-y-1 text-gray-600">
            <p>24 234234</p>
            <p>234234</p>
            <p>2342</p>
            <p>2342</p>
            <p>23423</p>
            <p>Navassa Island</p>
            <p>10004</p>
            <p>United States (US) Minor Outlying Islands</p>
          </div>
        </div> */}

          {/* Shipping Address */}
          <div>
            <h2 className="text-xl font-semibold uppercase mb-4">
              Shipping Address
            </h2>

            <Link href={'/account/edit-address/shipping'} className="flex items-center gap-2 text-sm text-gray-700 hover:text-black mb-6">
              <FaRegEdit />
              Edit Shipping address
            </Link>

            {shippingAddress ? (
              <div className="space-y-1 text-gray-600">
                <p className="font-medium text-gray-900">
                  {shippingAddress?.full_name}
                </p>

                {shippingAddress?.company && <p>{shippingAddress?.company}</p>}

                <p>{shippingAddress?.address}</p>
                <p>
                  {shippingAddress?.city}, {shippingAddress?.state}
                </p>
                <p>{shippingAddress?.zip}</p>
                <p>{shippingAddress?.country}</p>

                <p className="pt-2">
                  <span className="font-medium">Phone:</span>{" "}
                  {shippingAddress?.phone}
                </p>

                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {shippingAddress?.email}
                </p>
              </div>    
            ) : (
              <p className="text-gray-500">No shipping address found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
