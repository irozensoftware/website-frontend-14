// components/OrderList.jsx
"use client";

import { useGetMyAllOrderQuery } from "@/redux/api/orderApi";
import moment from "moment";
import React from "react";
import { FaEye } from "react-icons/fa";

const orders = [
  {
    id: "#30109",
    date: "December 28, 2025",
    status: "On hold",
    total: 19.96,
    items: 1,
  },
  // Add more orders here if needed
];
  
const OrderList = () => {
  const {data, error}=useGetMyAllOrderQuery();
  console.log(data,'data')
  console.log(error,'error')
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left font-medium text-gray-700">ORDER</th>
            <th className="py-3 px-6 text-left font-medium text-gray-700">DATE</th>
            <th className="py-3 px-6 text-left font-medium text-gray-700">STATUS</th>
            <th className="py-3 px-6 text-left font-medium text-gray-700">TOTAL</th>
            <th className="py-3 px-6 text-left font-medium text-gray-700">TRACKING</th>
            <th className="py-3 px-6 text-center font-medium text-gray-700">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data?.order?.map((order) => (
            <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-6">{order.invoice}</td>
              <td className="py-4 px-6 truncate">{moment(order?.created_at).format("DD MMM yyyy")}</td>
              <td className="py-4 px-6 capitalize">{order.status}</td>
              <td className="py-4 px-6 text-primary-base">
                ${Number(order.total).toFixed(2)}  
              </td>
              <td className="py-4 px-6">—</td>
              <td className="py-4 px-6 text-center">
                <button className="bg-primary-base text-white px-4 py-1 rounded-full hover:opacity-65 flex items-center gap-1 justify-center">
                  <FaEye /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
