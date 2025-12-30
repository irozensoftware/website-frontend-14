import ShopPage from '@/components/pages/shop/Shops'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Shop",
    description:"Learn more Shop",
  };
}
const page = () => {
  return (
    <>
      <ShopPage/>
    </>
  )
}

export default page
