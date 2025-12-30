"use client";
import CommonPost from "@/components/common/CommonPost";
import React, { useState } from "react";
import { FaBoxOpen, FaSearch } from "react-icons/fa";

const OurDisclaimer = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();

    // fake validation (API call er jaygay)
    if (trackingNumber.trim() === "" || trackingNumber !== "123456") {
      setNotFound(true);
    } else {
      setNotFound(false);
      alert("Order Found 🎉");
    }
  };
  return (
    <div>
      <div className="bg-black text-white flex py-7 justify-center flex-col items-center">
        <h1 className="text-3xl md:text-5xl mb-2">Order Tracking</h1>
        <p className="text-sm text-black-muted">
          Home / <strong>Order Tracking</strong>
        </p>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="col-span-2 space-y-3">
            <form
              onSubmit={handleTrack}
              className="flex items-center border border-gray-300 rounded overflow-hidden"
            >
              <input
                type="text"
                placeholder="Tracking number (required)"
                className="flex-1 px-4 py-3 outline-none text-gray-700"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />

              <button
                type="submit"
                className="bg-primary-base hover:opacity-70 text-white px-6 py-3 flex items-center gap-2"
              >
                <FaSearch />
                Track
              </button>
            
            </form>
              {/* Not Found Section */}
              {notFound && (
                <div className="mt-10 flex flex-col items-center justify-center text-center border border-dashed border-gray-300 p-10 rounded">
                  <FaBoxOpen className="text-6xl text-gray-400 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-700">
                    Order Not Found
                  </h2>
                  <p className="text-gray-500 mt-2">
                    We couldn’t find any order with this tracking number.
                    <br />
                    Please check and try again.
                  </p>
                </div>
              )}
          </div>
          <div>
            <CommonPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDisclaimer;
