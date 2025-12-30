import PrivacyPolicy from "@/components/pages/privacy-policy/PrivacyPolicy";
import React from "react";
export async function generateMetadata() {
  return {
    title: "Privacy Policy",
    description:"Learn more Privacy Policy",
  };
}
const page = () => {
  return (
   <>
    <PrivacyPolicy/>
   </>
  );
};

export default page;
