"use client";
import { useGetFaqsQuery } from "@/redux/api/commonApi";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const ContactFaqs = () => {
  const [active, setActive] = useState(null);
  const {data}=useGetFaqsQuery();
  const faqsDatas=data?.data || [];
  console.log("faqsDatas",faqsDatas);

  const toggleFaq = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <div className="mt-5">
      <div className="space-y-4 ">
        {faqsDatas.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg overflow-hidden transition-all duration-300 "
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left bg-gray-100 transition-colors duration-200 hover:bg-gray-200"
            >
              <span className="text-base font-semibold text-gray-800 pr-4">
                {faq.question}
              </span>
              <BsChevronDown
                className={`w-6 h-6 text-primary-base shrink-0 transition-transform duration-300 ${
                  active === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                active === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed">
                {faq.ans}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFaqs;
