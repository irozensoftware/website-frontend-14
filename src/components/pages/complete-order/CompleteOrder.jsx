"use client";
import { useGetOrderBuyInvoiceQuery } from "@/redux/api/commonApi";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  FaCheckCircle,
  FaShippingFast,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function OrderComplete() {
  const searchParama = useSearchParams();
  const invouce = searchParama.get("order_id");
  const { data } = useGetOrderBuyInvoiceQuery(invouce, { skip: !invouce });
  const orderInfo = data?.order;
  const orderLogs = data?.orderLogs;
  const shipping_address = data?.shipping_address;
  const user = data?.user;

  const orderData = {
    orderNumber: "30108",
    date: "December 28, 2025",
    total: "$39.20",
    paymentMethod: "Direct bank transfer",
    product: {
      name: "Pet Hair Remover Mitt static Deshedding Brush Glove Double-Sided Cleaning Tool for Dog Cat Rabbit with Long/Short/Curly Hair",
      quantity: 1,
      color: "Black",
      shipsFrom: "China",
      price: "$24.20",
    },
    subtotal: "$24.20",
    shipping: "$15.00",
    shippingType: "via Flat rate",
    note: "asdfasdfasfsasf",
    billingAddress: "01991003000010",
    shippingAddress: "01991003000010",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h1>

          {/* Success Message */}
          <div className="bg-white border-2 border-dashed border-green-400 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-2 text-green-600">
              <FaCheckCircle className="text-2xl" />
              <p className="text-lg font-medium">
                Thank you. Your order has been received.
              </p>
            </div>
          </div>

          {/* Order Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Order number:</p>
              <p className="text-lg font-semibold text-gray-900">
                {orderInfo?.invoice}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Date:</p>
              <p className="text-lg font-semibold text-gray-900">
                {moment(orderInfo?.created_at).format("DD MMM yyy")}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Total:</p>
              <p className="text-lg font-semibold text-gray-900">
                ${Number(orderInfo?.total) + Number(orderInfo?.shipping_cost)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-1">Payment method:</p>
              <p className="text-lg font-semibold text-gray-900">
                {orderInfo?.payment_method == "bank"
                  ? "     Direct bank transfer"
                  : orderInfo?.payment_method == "check"
                  ? " Check payments"
                  : " Cash on delivery"}
              </p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Order details
          </h2>

          {/* Product Header */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
            <p className="font-semibold text-gray-900">PRODUCT</p>
            <p className="font-semibold text-gray-900">TOTAL</p>
          </div>

          {/* Product Item */}
          {orderLogs?.map((item, index) => (
            <div className="border-b pb-4 mb-4 border-gray-200" key={index}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-gray-900 mb-2">{item?.product?.name}</p>
                  <p className="text-sm text-gray-600 mb-1">
                    × {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">{item?.notes}</p>
                </div>
                <p className="text-primary-base font-semibold">${item?.total}</p>
              </div>
            </div>
          ))}

          {/* Subtotal */}
          <div className="flex border-gray-200 justify-between items-center py-3 border-b">
            <p className="font-semibold text-gray-900">Subtotal:</p>
            <p className="text-primary-base font-semibold">${orderInfo?.total}</p>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <p className="font-semibold text-gray-900">Shipping:</p>
            <p className="text-primary-base font-semibold">
              ${orderInfo?.shipping_cost}
            </p>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center py-3 border-b  border-gray-200">
            <p className="font-semibold text-gray-900">Total:</p>
            <p className="text-primary-base font-bold text-xl">
              ${Number(orderInfo?.total) + Number(orderInfo?.shipping_cost)}
            </p>
          </div>

          {/* Payment Method */}
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <p className="font-semibold text-gray-900">Payment method:</p>
            <p className="text-lg font-semibold text-gray-900">
              {orderInfo?.payment_method == "bank"
                ? "     Direct bank transfer"
                : orderInfo?.payment_method == "check"
                ? " Check payments"
                : " Cash on delivery"}
            </p>
          </div>

          {/* Note */}
          <div className="flex justify-between items-center py-3">
            <p className="font-semibold text-gray-900">Note:</p>
            <p className="text-gray-600">{orderInfo?.notes || "N/A"}</p>
          </div>
        </div>

        {/* Addresses */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Billing Address */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-3">
              <FaMapMarkerAlt className="text-primary-base text-xl" />
              Billing Address
            </h3>

            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Name:</span> {user?.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {user?.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {shipping_address?.phone}
              </p>
            </div>

            <div className="pt-2 text-sm text-gray-600 space-y-1">
              <p>{shipping_address?.company}</p>
              <p>{shipping_address?.address}</p>
              <p>
                {shipping_address?.city}, {shipping_address?.state}{" "}
                {shipping_address?.zip}
              </p>
              <p>{shipping_address?.country}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 border-b pb-3">
              <FaShippingFast className="text-primary-base text-xl" />
              Shipping Address
            </h3>

            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Name:</span> {user?.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {user?.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {shipping_address?.phone}
              </p>
            </div>

            <div className="pt-2 text-sm text-gray-600 space-y-1">
              <p>{shipping_address?.address}</p>
              <p>{shipping_address?.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
