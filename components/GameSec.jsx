"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function GameSec() {
  
  return (
    <main className="game-sec bg-cover bg-center h-[80vh] px-5 flex justify-center items-center">
      <motion.div className="flex justify-center items-center flex-col"
        initial={{ scale: 0.2 }} 
        whileInView={{ scale: 1 }} 
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.4 }}>
        <h2 className="text-2xl md:text-4xl font-bold text-[#461e04] text-center">Challenge Your Memory with 
          <span className="block text-3xl md:text-6xl font-bold text-[#461e04] mt-2">ElShamadan!</span></h2>
        <Link href='/memory-game' aria-label="Play Game" className="btn shadow-sm px-20 text-lg border-none font-semibold rounded-3xl transition-all duration-700 bg-[#fefcf9] text-[#461e04] mt-10 hover:text-white hover:bg-[#461e04] hover:px-28">
          Start Playing</Link>
      </motion.div>
    </main>
  )
}
