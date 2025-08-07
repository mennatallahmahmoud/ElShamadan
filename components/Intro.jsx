"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Intro() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

    const scrollToBottom = () => {
      window.scrollBy({
        top: '500',
        behavior: 'smooth'
      })
    }
  
  return (

    <div className="hero-sec h-screen relative bg-cover bg-center">
      <motion.h1 className="absolute [text-shadow:1px_1px_2px_#ffffff,2px_2px_4px_#ffffff] z-10 left-1/2 top-[20%] md:top-[18%] -translate-x-1/2 text-4xl text-[#461e04] tracking-widest font-bold w-full text-center px-5"
        initial={{ y: -100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.3 }}>The Flavor You Remember!</motion.h1>
      <div className={`fixed transition-all duration-1000 ease-in-out z-50 
        ${scrolled ? 'top-2 left-5 translate-x-0 translate-y-0' : ' left-1/2 top-[40%] md:top-[28%] -translate-x-1/2 '}`}>
        <Link href='/'>
          <motion.img className={`${scrolled ? 'w-16' : 'w-56 ms-auto'}`} src="/assets/imgs/logo.png" alt="ElShamadan Logo"
            initial={{ scale: 0.3 }} 
            whileInView={{ scale: 1 }} 
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }} />
        </Link>
      </div>
      <div className="scroll-icon absolute top-[85%] left-1/2 -translate-x-1/2 cursor-pointer" onClick={scrollToBottom}>
        <button className="btn border-none rounded-3xl px-10 transition-all font-semibold duration-700 bg-[#ffd112] hover:bg-[#461e04] hover:text-white text-[#461e04] hover:px-20 shadow-none" 
        onClick={() => document.querySelector("#hero").scrollIntoView({ behavior: 'smooth' })}>
          <span className="relative z-10 text-lg">Explore</span></button>
      </div>
    </div>
  )
}
