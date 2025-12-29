"use client"
import CommonPost from '@/components/common/CommonPost'
import { useGetReturnAndRefundQuery } from '@/redux/api/commonApi'
import Link from 'next/link'
import React from 'react'

const ReturnAndRefund = () => {
   const { data } = useGetReturnAndRefundQuery();
  return (
    <>
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">
          Return And Refund
        </h1>
        <div className="flex justify-center gap-2">
          <Link href={"/"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold"> Return And Refund</p>
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

export default ReturnAndRefund
