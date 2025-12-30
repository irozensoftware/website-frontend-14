import ShippingPolicy from '@/components/pages/shipping-policy/ShippingPolicy'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Shipping Policy",
    description:"Learn more Shipping Policy",
  };
}
const page = () => {
  return (
    <>
      <ShippingPolicy/>
    </>
  )
}

export default page
