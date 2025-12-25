"use client"
import React from "react";
import ProductInfo from "./ProductInfo";
import { useGetProductBySlugQuery } from "@/redux/api/commonApi";

const ProductDetails = ({ slug }) => {
  console.log(slug,'slug')
  const {data,error}=useGetProductBySlugQuery(slug);
  console.log(data,'data')
  console.log(error,'error')
  return (
    <>
      <ProductInfo  product={data?.data} relatedProduct={data?.relatedProduct} />
    </>
  );
};

export default ProductDetails;
