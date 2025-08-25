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

    <main className="hero-sec h-screen relative bg-cover bg-center">
      <div>
        <motion.h1 className="absolute z-10 left-1/2 top-[20%] md:top-[18%] -translate-x-1/2 text-4xl text-[#461e04] tracking-[5px] font-bold w-full text-center px-5"
        initial={{ y: -100 }} 
        whileInView={{ y: 0 }} 
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.3 }}>The Flavor You Remember!</motion.h1>
      </div>
      <div className={`fixed transition-all duration-1000 ease-in-out z-50 
        ${scrolled ? 'top-2 left-5 translate-x-0 translate-y-0' : ' left-1/2 top-[40%] md:top-[28%] -translate-x-1/2 '}`}>
        <Link rel="preload" as="image" href='/' aria-label="Go To Home Page">
          <motion.img className={`${scrolled ? 'w-16' : 'w-56 ms-auto'}`} src="/assets/imgs/logo.webp" alt="ElShamadan Logo"
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
        <button className="intro-btn cursor-pointer" aria-label="Scroll Down"
          onClick={() => document.querySelector("#hero").scrollIntoView({ behavior: 'smooth' })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#461e04" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </main>
  )
}
