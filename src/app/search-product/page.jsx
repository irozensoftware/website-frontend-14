import SearchProduct from '@/components/pages/search-product/SearchProduct'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Search product",
    description:"Learn more Register",
  };
}
const page = () => {
  return (
    <>
      <SearchProduct/>
    </>
  )
}

export default page
