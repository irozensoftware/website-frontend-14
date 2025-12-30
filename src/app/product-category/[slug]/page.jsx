import ProductCategory from '@/components/pages/product-category/ProductCategory'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Product Category",
    description:"Learn more Product Category",
  };
}
const Page = async ({params}) => {
    const {slug} = await params;
  return (
    <>
       <ProductCategory slug={slug}/>
    </>
  )
}

export default Page
