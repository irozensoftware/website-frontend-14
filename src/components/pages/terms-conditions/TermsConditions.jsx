"use client";
import CommonPost from "@/components/common/CommonPost";
import { useGetConditionsQuery } from "@/redux/api/commonApi";
import React from "react";
const TermsConditions = () => {
  const { data } = useGetConditionsQuery();
  return (
    <div>
      <div className="bg-black text-white flex py-7 justify-center flex-col items-center">
        <h1 className="text-3xl md:text-5xl mb-2">Terms Conditions</h1>
        <p className="text-sm text-black-muted">
          Home / <strong>Terms Conditions</strong>
        </p>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="col-span-2 space-y-3">
            <div
              dangerouslySetInnerHTML={{ __html: data?.data?.content }}
            ></div>
          </div>
          <div>
            <CommonPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
