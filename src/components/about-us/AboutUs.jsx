"use client";
import React from "react";
import CommonPost from "../common/CommonPost";
import { useGetAboutUsQuery } from "@/redux/api/orderApi";

const AboutUs = () => {
  const { data } = useGetAboutUsQuery();
  const about = data?.data;
  return (
    <>
      <div className="bg-black text-white flex py-7 justify-center flex-col items-center">
        <h1 className="text-3xl md:text-5xl mb-2">About Us</h1>
        <p className="text-sm text-black-muted">
          Home / <strong>About Us</strong>
        </p>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="col-span-2 space-y-3">
            <div dangerouslySetInnerHTML={{ __html: about?.about_info }}></div>
          </div>
          <div>
            <CommonPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
