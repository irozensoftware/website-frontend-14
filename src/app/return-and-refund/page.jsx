import ReturnAndRefund from '@/components/pages/return-and-refund/ReturnAndRefund'
export async function generateMetadata() {
  return {
    title: "Return and refund page",
    description:"Learn more Register",
  };
}
const page = () => {
  return (
    <>
      <ReturnAndRefund/>
    </>
  )
}

export default page
