"use client"

import { useEffect, useState } from "react";
import data from "../data/data.json"

const coupons = data.Coupons;
const coupon = coupons[Math.floor(Math.random() * coupons.length)]

export default function CouponCard({setShowCard}) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <div className="fixed inset-0 bg-[#00000045] z-50 flex justify-center items-center">
      {loading ? (
        <div className="bg-[#fefcf9] w-[90%] lg:w-1/2 h-1/2 flex justify-center items-center rounded-3xl">
          <div className="loader mx-auto"></div>
        </div>
      ) : (
      <div className="bg-[#fefcf9] rounded-3xl relative w-[80%]">
        <button className="btn absolute top-4 right-4 bg-transparent border-none shadow-none" onClick={() => setShowCard(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:stroke-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="flex-[25%]">
            <img className="w-1/2 mx-auto my-3 md:my-0" src="/assets/imgs/logo.png" alt="ElShamadan Logo"/>
          </div>
          <div className="flex-[75%] py-3 my-auto border-t-2 md:border-l-2 md:border-t-0 border-dashed border-[#8080806b] mx-[10px] text-center">
            <p className="text-lg lg:text-2xl font-bold p-2 lg:p-5">{coupon.title}</p>
            <span className="text-gray-600 text-sm lg:text-base">Scan me to claim your Coupon</span>
            <img className="w-2/5 mx-auto" src="/assets/imgs/qr-code.svg" alt="Coupon QR Code"/> 
            <span className="text-gray-400 text-xs lg:text-sm">valid until -{coupon.expiryDate}-</span>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
