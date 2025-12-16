"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";

const ReviewContent = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div>
            <h1 className="text-black-muted text-sm">
              2 reviews for সুক্কারি খেজুর (Sukkari Dates) – 1KG
            </h1>
          </div>
          <div className="pt-5 space-y-5">
            <div className="flex justify-between items-start gap-3">
              <div className="flex items-start gap-4">
                <div className="w-[60px]  rounded-full overflow-hidden">
                  <Image
                    src={
                      "https://secure.gravatar.com/avatar/75d23af433e0cea4c0e45a56dba18b30?s=60&d=mm&r=g"
                    }
                    alt=""
                    className="w-[60px]  object-cover"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div>
                  <h1 className="text-sm md:text-base  lg:text-lg text-black-muted">
                    Shamim Hossain{" "}
                    <span className="text-sm text-black-muted opacity-65">
                      {" "}
                      – February 19, 2025
                    </span>{" "}
                  </h1>
                  <p className="text-sm text-black-muted">
                    আলহামদুলিল্লাহ অনেক ভালো খেজুর, আল্লাহ আপনাদের ব্যবসায়
                    বারাকা দান করুক আমিন।
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start gap-3">
              <div className="flex items-start gap-4">
                <div className="w-[60px]  rounded-full overflow-hidden">
                  <Image
                    src={
                      "https://secure.gravatar.com/avatar/75d23af433e0cea4c0e45a56dba18b30?s=60&d=mm&r=g"
                    }
                    alt=""
                    className="w-[60px]  object-cover"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div>
                  <h1 className="text-sm md:text-base  lg:text-lg text-black-muted">
                    Shamim Hossain{" "}
                    <span className="text-sm text-black-muted opacity-65">
                      {" "}
                      – February 19, 2025
                    </span>{" "}
                  </h1>
                  <p className="text-sm text-black-muted">
                    আলহামদুলিল্লাহ অনেক ভালো খেজুর, আল্লাহ আপনাদের ব্যবসায়
                    বারাকা দান করুক আমিন।
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                  <GoStarFill></GoStarFill>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-sm text-black-muted">Add a review</p>
            <p className="text-sm text-black-muted py-3">
              Your email address will not be published. Required fields are
              marked <span className="text-red-500 ">*</span>
            </p>
            <form action="">
              <div className="py-2 flex items-center gap-3">
                <label htmlFor="name" className="text-sm text-black-muted">
                  Your rating <span className="text-red-500">*</span>
                </label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                      }
                      onClick={() => setRating(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="py-2 space-y-1">
                <label htmlFor="name" className="text-sm text-black-muted">
                  Your review <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="review"
                  id="review"
                  cols="30"
                  rows="6"
                  className="global-input"
                ></textarea>
              </div>
              <div className="py-2 space-y-1">
                <label htmlFor="name" className="text-sm text-black-muted">
                  Your review <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="review"
                  id="review"
                  cols="30"
                  rows="6"
                  className="global-input"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
