import Wishlist from '@/components/pages/wishlist/Wishlist'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Wishlist",
    description:"Learn more Wishlist",
  };
}
const page = () => {
  return (
    <>
      <Wishlist/>
    </>
  )
}

export default page
