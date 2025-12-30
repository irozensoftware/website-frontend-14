import CheckoutPage from '@/components/pages/checkout/CheckoutPage'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Checkout",
    description:"Learn more Checkout",
  };
}
const page = () => {
  return (
    <>
      <CheckoutPage/>
    </>
  )
}

export default page
