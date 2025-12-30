import TermsConditions from '@/components/pages/terms-conditions/TermsConditions'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Term and conditions",
    description:"Learn more Term and conditions",
  };
}
const page = () => {
  return (
    <>
      <TermsConditions/>
    </>
  )
}

export default page
