"use client";
import React from "react";
import ContactFaqs from "./ContactFaqs";
import CommonPost from "@/components/common/CommonPost";
import Link from "next/link";
import { useGetAboutUsQuery } from "@/redux/api/orderApi";

const ContactUsPage = () => {
  const { data } = useGetAboutUsQuery();
  const about = data?.data;
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
          <div className="max-w-2xl mx-auto p-6">
            <div className="space-y-6">
              {about?.email && (
                <Link
                  href={`mailto:${about?.email}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-all hover:border-blue-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2.5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-900 font-medium break-all">
                        {about?.email}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {about?.phone_number && (
                <Link
                  href={`tel:${about?.phone_number}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-all hover:border-green-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2.5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Phone Number
                      </h3>
                      <p className="text-gray-900 font-medium">
                        {about?.phone_number}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {about?.address && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2.5 rounded-lg">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-900 font-medium">
                        {about?.address}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <CommonPost />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
