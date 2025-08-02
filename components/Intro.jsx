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
      <motion.h1 className="absolute [text-shadow:1px_1px_2px_rgba(0,0,0,0.1),2px_2px_4px_rgba(70,30,4,0.2)] z-10 left-1/2 top-[25%] md:top-[18%] -translate-x-1/2 text-4xl text-[#461e04] tracking-widest font-bold w-full text-center px-5"
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>
    </div>
  )
}
