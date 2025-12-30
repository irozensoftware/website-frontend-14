import CartPage from '@/components/pages/cart/CartPage'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Cart",
    description:"Learn more cart",
  };
}
const page = () => {
  return (
    <>
      <CartPage/>
    </>
  )
}

export default page
