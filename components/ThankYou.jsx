"use client"

import Link from "next/link";
import { useEffect } from "react";

export default function ThankYou({ userName }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="py-50 text-center px-5 absolute w-full h-full top-0 lef-0 flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold tracking-wider uppercase text-[#461e04] mb-4">Thanks <span className="normal-case">-{userName.trim()}-</span> for reaching out!</h2>
        <p className="text-[#461e04c0] text-lg tracking-wide w-[90%] lg:w-1/2 mx-auto mb-8">We’re so happy to hear from you.
            Your message made our day a little sweeter—just like our Shamadan!<br/>
            We’ll get back to you as soon as we can.
        </p>
        <Link href='/' className='btn shadow-sm px-8 text-base border-none font-semibold rounded-2xl transition-all duration-700 bg-yellow-300 hover:bg-[#461e04] text-[#461e04] hover:text-[#fefcf9] hover:px-12'>Back Home</Link>
    </div>
  )
}
