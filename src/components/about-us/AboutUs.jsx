import React from "react";
import CommonPost from "../common/CommonPost";

const AboutUs = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="col-span-2 space-y-3">
          <h1 className="text-lg md:text-2xl font-bold text-black">
            About Us – Mukit Ali LLC
          </h1>

          <h2 className="text-base text-black-muted font-semibold">
            Welcome to Mukit Ali LLC – your trusted partner in eCommerce and
            wholesale distribution.
          </h2>
          <p className="text-base text-black-muted font-medium">
            Founded by MD Mukit Ali, our company is dedicated to building a
            strong presence in the global marketplace. We specialize in Amazon
            FBA wholesale and provide high-quality products across multiple
            eCommerce platforms. Our mission is simple – to deliver value,
            reliability, and trust to every customer we serve.
          </p>

          <p className="text-base text-black-muted">
            At Mukit Ali LLC, we believe that success comes from strong
            partnerships, transparency, and consistent service. That’s why we
            carefully source authentic and in-demand products, ensuring that our
            customers always receive genuine quality at the best possible
            prices.
          </p>
          <p className="text-base text-black-muted">
            Our vision is to become a leading eCommerce and wholesale brand in
            the United States and beyond, expanding into every major marketplace
            while maintaining our commitment to integrity and customer
            satisfaction.
          </p>
          <p className="text-base text-black-muted"> 
            Whether you’re a retail customer or a wholesale partner, Mukit Ali
            LLC is here to grow with you.
          </p>
          <ul className="text-base text-black-muted space-y-2" >
            <li>📍<strong> Company Name:</strong> Mukit Ali LLC</li>
            <li>🌐 <strong>Website:</strong> www.mukitalillc.com</li>
            <li>👤 <strong>Founder:</strong> MD Mukit Ali</li>
          </ul>
        </div>
        <div>
          <CommonPost />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
