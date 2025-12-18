import CommonPost from '@/components/common/CommonPost'
import Link from 'next/link'
import React from 'react'

const ShippingPolicy = () => {
  return (
    <>
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">
          Privacy Policy
        </h1>
        <div className="flex justify-center gap-2">
          <Link href={"/"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold">Privacy Policy</p>
        </div>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="col-span-2 space-y-3">
            <div className="text-black-muted">
              <p>
                {" "}
                <strong>Effective Date:</strong> 9/19/2025
              </p>
              <p>
                {" "}
                <strong>Company Name: </strong>Mukit Ali LLC
              </p>
              <p>
                {" "}
                <strong>Website:</strong> www.mukitalillc.com
              </p>
            </div>

            <h2 className="text-sm text-black-muted font-semibold">
              At <strong>Mukit Ali LLC</strong> we value your trust and are
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your personal information when
              you visit our website or interact with our services.
            </h2>
            <div className="border-b-2 border-black-muted"></div>
            <div>
              <h1 className="text-base md:text-xl  text-black font-bold">
                Information We Collect
              </h1>
            </div>

            <p className="text-base text-black-muted">
              At Mukit Ali LLC, we believe that success comes from strong
              partnerships, transparency, and consistent service. That’s why we
              carefully source authentic and in-demand products, ensuring that
              our customers always receive genuine quality at the best possible
              prices.
            </p>
            <p className="text-base text-black-muted">
              Our vision is to become a leading eCommerce and wholesale brand in
              the United States and beyond, expanding into every major
              marketplace while maintaining our commitment to integrity and
              customer satisfaction.
            </p>
            <p className="text-base text-black-muted">
              Whether you’re a retail customer or a wholesale partner, Mukit Ali
              LLC is here to grow with you.
            </p>
            <ul className="text-base text-black-muted space-y-2">
              <li>
                📍<strong> Company Name:</strong> Mukit Ali LLC
              </li>
              <li>
                🌐 <strong>Website:</strong> www.mukitalillc.com
              </li>
              <li>
                👤 <strong>Founder:</strong> MD Mukit Ali
              </li>
            </ul>
          </div>
          <div>
            <CommonPost />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShippingPolicy
