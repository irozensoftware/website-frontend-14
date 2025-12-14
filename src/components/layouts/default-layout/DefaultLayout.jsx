import MainNavbar from "@/components/share/navbar/MainNavbar";
import Footer from "@/components/share/footer/Footer";
import Toolbar from "@/components/share/footer/Toolbar";
import React from "react";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div>
        <MainNavbar />
        {children}
        <Footer />
      </div>
      <Toolbar />
    </div>
  );
};

export default DefaultLayout;
