"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const faqsDatas = [
  {
    id: 1,
    question: "What kind of products does Mukit Ali LLC sell?",
    ans: "We specialize in Amazon FBA wholesale and also provide a variety of products across major eCommerce marketplaces. All our products are authentic, high-quality, and sourced from trusted suppliers.",
  },
  {
    id: 2,
    question: "How do I place an order?",
    ans: "You can place an order directly through our website or contact our sales team. We accept various payment methods and provide detailed order tracking for your convenience.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    ans: "We offer a 30-day return policy for most products. Items must be in original condition with all packaging. Please contact our customer service team to initiate a return.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    ans: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Contact us for specific international shipping rates and details.",
  },
];

const ContactFaqs = () => {
  const [active, setActive] = useState(null);

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
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
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
