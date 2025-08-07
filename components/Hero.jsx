"use client"

import { motion } from "framer-motion";

export default function Hero() {
  
  return (
    <div className="sec bg-cover bg-center h-[450px] flex justify-center md:justify-end items-center text-center overflow-hidden">
      <motion.div className="text-center w-full md:w-1/2 ps-3 pe-3 md:ps-0"
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{
          duration: 2,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.3 }}>
        <p className="text-2xl font-semibold text-[#461e04] mb-5 capitalize">
          A Sweet taste from the past<br/>still here to last!</p>
        <button className="btn border-none rounded-3xl px-10 transition-all font-semibold duration-700 bg-yellow-300 hover:bg-[#461e04] hover:text-white text-[#461e04] hover:px-20 shadow-none" 
        onClick={() => document.querySelector("#categories").scrollIntoView({ behavior: 'smooth' })}>
          <span className="relative z-10">Discover</span></button>
      </motion.div>
    </div>
  )
}
