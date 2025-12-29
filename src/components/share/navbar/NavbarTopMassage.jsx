"use client"
import { useGetAboutUsQuery } from "@/redux/api/orderApi";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiInstagram, SiYoutube } from "react-icons/si";

const NavbarTopMassage = () => {
    const{data}=useGetAboutUsQuery();
    const about =data?.data
  return (
    <div className="bg-primary-base">
      <div className="container">
        <div className="flex justify-center lg:justify-between gap-2 py-2">
          <div className=" hidden lg:flex items-center gap-3 border-l border-white pl-1">
            <p className="text-white text-xm  md:text-base">
              {about?.support_email}
            </p>
          </div>
          <div className="flex border-r border-white pr-1 items-center justify-center lg:justify-start   gap-2">
            <div className="text-white text-xm  md:text-sm flex items-center gap-2">
              <FaFacebookF className="text-[14px] cursor-pointer" />
              <SiYoutube className="text-[14px] cursor-pointer" />
              <SiInstagram className="text-[14px] cursor-pointer" />
              <FaTwitter className="text-[14px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTopMassage;
