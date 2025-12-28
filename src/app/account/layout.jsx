import AccountLayout from "@/components/pages/account/AccountLayout";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <AccountLayout>{children}</AccountLayout>
    </>
  );
};

export default layout;
