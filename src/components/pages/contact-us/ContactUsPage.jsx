import React from "react";
import ContactFaqs from "./ContactFaqs";
import CommonPost from "@/components/common/CommonPost";
import Link from "next/link";

const ContactUsPage = () => {
  return (<> 
  
  <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold"> Contact Us</h1>
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
          <ContactFaqs/>
        </div>
        <div>
          <form action="" className="space-y-2 md:-space-y-px md:grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-base" htmlFor="name">
                Your Name
                <sup className="text-red-500">*</sup>
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
                Your Email
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
                Phone Number
                <sup className="text-red-500">*</sup>
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
                Company <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter you full name ...."
                className="global-input"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="text-base" htmlFor="name">
                Your Message
              </label>
              <textarea
                type="text"
                placeholder="Enter you full name ...."
                className="global-input rounded-[40px]! p-4"
                rows={5}
              ></textarea>
            </div>
          </form>
        </div>
        <CommonPost/>
      </div>
    </div>
      </>
  );
};

export default ContactUsPage;
