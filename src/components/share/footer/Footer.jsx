// components/Footer.js
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { categoryData } from "@/utils/db/db_category";

export default function Footer() {
  return (
    <footer className="bg-white py-2">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <Image
              width={150}
              height={150}
                src="https://falaqfood.com/wp-content/uploads/2023/08/cropped-logo-1-1-2048x721.png" // Replace with your logo path
                alt="Falaq Food Logo"
                className="h-14"
              />
            </div>
            <p className="text-sm text-black-muted">
              Welcome to Falaq Food – where purity meets taste, and every bite
              tells a story of authenticity and care.
            </p>
            <div className="mt-4 space-y-2">
              <div className="text-sm text-black-muted flex items-center gap-3">
                <RiSendPlaneFill className="text-[20px]" />
                <span> Bosila Future Town, Mohammadpur, Dhaka-1207</span>
              </div>
              <div className="text-sm text-black-muted flex items-center gap-3">
                <IoCallOutline className="text-[18px]" />
                Phone: +8801617650797
              </div>
              <div className="text-sm text-black-muted flex items-center gap-3">
                <MdOutlineMailOutline className="text-[18px]" />
                Email: support@nexte.com
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium uppercase text-gray-800 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categoryData.map((item,index) => (
                <li key={index}>
                  <Link
                    href={`/product-category/${item?.slug}`}
                    className="text-sm text-black-muted hover:text-primary-base"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Stories */}
          <div>
            <h3 className="text-lg uppercase font-medium text-gray-800 mb-4">
              Our Stories
            </h3>
            <ul className="space-y-2">
           
                  <li >
                    <Link
                      href="/about-us"
                      className="text-sm text-black-muted hover:text-primary-base"
                    >
                      About
                    </Link>
                  </li>
                  <li >
                    <Link
                      href="/about-us#our_Journey"
                      className="text-sm text-black-muted hover:text-primary-base"
                    >
                      Our Journey
                    </Link>
                  </li>
                   <li >
                    <Link
                      href="/about-us#our_mission"
                      className="text-sm text-black-muted hover:text-primary-base"
                    >
                      Our Mission
                    </Link>
                  </li>
                  <li >
                    <Link
                      href="/blogs"
                      className="text-sm text-black-muted hover:text-primary-base"
                    >
                      Blogs
                    </Link>
                  </li>
              
            </ul>
          </div>

          {/* Returns and Policies */}
          <div>
            <h3 className="text-lg uppercase font-medium text-gray-800 mb-4">
              Returns and Policies
            </h3>
            <ul className="space-y-2">
              {[
                {name:"Privacy Policy",path:'privacy-policy'},
                {name:"Returns",path:"returns"},
                {name:"Terms And Conditions",path:"terms-and-conditions"},
                {name:"Contact Us",path:"contact"},
  
               
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={"/"+item?.path}
                    className="text-sm text-black-muted hover:text-primary-base"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* copy right  */}
      <div className="mt-8 border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-black-muted">
          Copyright © Falaq Food 2024 – All Rights Reserved | Trade License No.
          TRADE/DNCC/097112/2022
        </p>
      </div>
    </footer>
  );
}
