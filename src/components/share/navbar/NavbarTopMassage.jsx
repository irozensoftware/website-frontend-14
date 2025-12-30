"use client";
import { useGetAboutUsQuery } from "@/redux/api/orderApi";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiLinkedin, SiYoutube } from "react-icons/si";

const NavbarTopMassage = () => {
  const { data } = useGetAboutUsQuery();
  const about = data?.data;
  console.log(about, "about");
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
              <Link
                target="_blank"
                href={`${
                  about?.facebook ? about?.facebook : "https://www.facebook.com"
                }`}
              >
                <FaFacebookF className="text-[14px] cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href={`${
                  about?.youtube ? about?.youtube : "https://www.youtube.com"
                }`}
              >
                <SiYoutube className="text-[14px] cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href={`${
                  about?.linkedin ? about?.linkedin : "https://www.linkedin.com"
                }`}
              >
                <SiLinkedin className="text-[14px] cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href={`${
                  about?.twitter ? about?.twitter : "https://www.twitter.com"
                }`}
              >
                <FaTwitter className="text-[14px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTopMassage;
