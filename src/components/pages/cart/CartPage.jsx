"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBackspace } from 'react-icons/fa'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const CartPage = () => {
    const pathName =usePathname();
  return (
    <>
      <div className="bg-black py-8 text-white space-y-3 px-2 text-center">
        <div className="text-xl flex justify-center items-center gap-5">
          <Link href={`/cart`} className={`${pathName=='/cart' ?"border-b-2 border-primary-base " :"text-[#b6b6b6]"}  uppercase text-xl   font-semibold`}>
           Shopping cart
          </Link>{" "}
          <MdOutlineArrowRightAlt className='text-[25px]' />
           <Link href={`/checkout`} className={`${pathName=='/checkout' ?"border-b-2 border-primary-base " :"text-[#b6b6b6]"}  uppercase text-xl   font-semibold`}>
          Checkout
          </Link>{" "}
          <MdOutlineArrowRightAlt className='text-[25px]' />
           <Link href={`/order-complete`} className={`${pathName=='/order-complete' ?"border-b-2 border-primary-base " :"text-[#b6b6b6]"}  uppercase text-xl   font-semibold`}>
         Order complete
          </Link>{" "}
       
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default CartPage
