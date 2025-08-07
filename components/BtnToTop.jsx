"use client"

import { useEffect, useRef } from "react"

export default function BtnToTop() {

    const btnRef = useRef()

    useEffect(() => {

        const handleBtn = () => {
            if (window.scrollY > 1500) {
                btnRef.current.classList.add("bottom-10")
                btnRef.current.classList.remove("-bottom-20")
            } else {
                btnRef.current.classList.add("-bottom-20")
                btnRef.current.classList.remove("bottom-10")
            }
        }

        document.addEventListener("scroll", handleBtn)

        return () => document.removeEventListener("scroll", handleBtn)

    }, [])

  return (
    <div ref={btnRef} className="scroll-btn fixed -bottom-20 right-10 cursor-pointer transition-all duration-500 z-30"
        onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ff0000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff0000" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
    </div>
  )
}
