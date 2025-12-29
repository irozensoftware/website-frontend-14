"use client"
import CommonPost from '@/components/common/CommonPost'
import { useGetShoppingPolicyQuery } from '@/redux/api/commonApi'
import Link from 'next/link'
import React from 'react'

const ShippingPolicy = () => {
   const { data } = useGetShoppingPolicyQuery();
  return (
    <>
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">
          Privacy Policy
        </h1>
        <div className="flex justify-center gap-2">
          <Link href={"/"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold">Privacy Policy</p>
        </div>
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
    </>
  )
}

export default ShippingPolicy
