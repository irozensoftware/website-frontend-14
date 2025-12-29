"use client"
import React from "react";
import ContactFaqs from "./ContactFaqs";
import CommonPost from "@/components/common/CommonPost";
import Link from "next/link";
import toast from "react-hot-toast";

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Ask a question sent successfully!");
  };

  return (
    <>
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">
          {" "}
          Contact Us
        </h1>
        <div className="flex justify-center gap-2">
          <Link href={"/contact-us"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold"> Contact us</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 md:gap-10">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              Frequently Asked Questions (FAQ)
            </h1>
            <ContactFaqs />
          </div>
          <div>
            <form
              onSubmit={()=>handleSubmit()}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Name */}
              <div>
                <label className="text-base">
                  Your Name <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="global-input"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-base">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="global-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-base">
                  Phone Number <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="global-input"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="text-base">
                  Company <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="global-input"
                  required
                />
              </div>

              {/* Message */}
              <div className="col-span-1 sm:col-span-2">
                <label className="text-base">Your Message</label>
                <textarea
                  placeholder="Write your message..."
                  className="global-input rounded-[40px] p-4"
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1 sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary-base text-white py-2 rounded-full hover:opacity-85 transition"
                >
                  Ask A Question
                </button>
              </div>
            </form>
          </div>
          <CommonPost />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
