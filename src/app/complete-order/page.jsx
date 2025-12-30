import OrderComplete from '@/components/pages/complete-order/CompleteOrder'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Order Complete",
    description:"Learn more Order Complete",
  };
}
const page = () => {
  return (
    <>
    <OrderComplete/>
    </>
  )
}

export default page
