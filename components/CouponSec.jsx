"use client"

import { useState } from "react"
import CouponCard from "./CouponCard"

export default function CouponSec() {

  const [showCard, setShowCard] = useState(false)

  return (
    <div id="coupon-sec" className="coupon-sec bg-cover bg-center p-8 md:p-20 min-h-[400px] flex justify-center items-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#0000005b]">
        <div className="card bg-[#fefcf9] w-[90%] md:w-[80%] lg:w-[40%] card-md shadow-sm mx-auto py-3 rounded-3xl">
            <div className="card-body text-center">
                <h2 className="card-title md:text-lg text-[#461e04] tracking-wider mx-auto">It’s Time to taste our Happiness!</h2>
                <img className="w-[40%] md:w-[25%] mx-auto" src="/assets/imgs/wafer-icon.svg" alt="Coupon Icon"/>
                <div className="justify-end card-actions">
                  <button className="btn rounded-3xl uppercase font-semibold mt-6 border-none transition-all duration-500 bg-yellow-300 text-[#461e04] hover:bg-[#461e04] hover:text-white hover:px-10 mx-auto"
                    onClick={() => setShowCard(true)}>Get Your Coupon!</button>
                </div>
            </div>
        </div>
        {showCard && (
          <CouponCard setShowCard={setShowCard}/>
        )}
    </div>
  )
}
