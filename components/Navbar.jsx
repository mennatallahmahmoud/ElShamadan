"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    
    const navIcon = useRef(null);
    
    const router = useRouter()

    const pathname = usePathname();
    const navEffect = pathname === '/'

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
    
    
    const hideDropdown = (e) => {        

        if (navIcon.current && navIcon.current.contains(e.target)) return;

        setTimeout(() => {
            setIsOpen(false);
        }, 200);

    };

    useEffect(() => {

        document.addEventListener("mousedown", hideDropdown)
        return () => document.removeEventListener("mousedown", hideDropdown)

    }, [isOpen])


  return (
    <div className={`fixed w-full z-40 transition-all ease-in-out duration-1000 ${scrolled || !navEffect ? 'top-0' : '-top-[150px]'}`}>
        <div className="navbar bg-[#fefcf9] shadow-md px-5 lg:px-10">
            <div className="navbar-start !w-full lg:!w-[15%] !flex-row-reverse !justify-between">
                <div className="dropdown" onClick={() => setIsOpen((prev) => !prev)}>
                    <div ref={navIcon} tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:text-[#e10024] bg-transparent border-none shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                    {isOpen && (
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#fefcf9] gap-3 font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
                            <li><a href='/products' className="text-[#461e04] hover:bg-transparent"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >Our Products</a></li>
                            <li><a href='/about-us' className="text-[#461e04] hover:bg-transparent"
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                            >Our Story</a></li>
                            <li><a href='/contact' className="text-[#461e04] hover:bg-transparent"
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                            >Contact Us</a></li>
                            <li><a href='/where-to-buy' className="text-[#461e04] hover:bg-transparent"
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                            >Where to Buy</a></li>
                        </ul>
                    )}
                </div>
                <Link href='/'>
                    <img className={`w-16 ${!navEffect ? 'opacity-100' : 'opacity-0'}`} src="/assets/imgs/logo.png" alt="ElShamadan Logo"/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex me-5 relative transition-all ease  duration-1000 delay-300 ">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold !text-[#df0124] gap-5">
                    <li><Link href='/products' className='text-[#461e04] hover:text-[#e10024] hover:bg-transparent shadow-none active:text-[red] focus-visible:bg-transparent focus-visible:text-[#e10024]'
                        >Our Products</Link></li>
                    <li><Link href='/about-us' className='text-[#461e04] hover:text-[#e10024] hover:bg-transparent shadow-none active:text-[red] focus-visible:bg-transparent focus-visible:text-[#e10024]'
                        >Our Story</Link></li>
                    <li><Link href='/contact' className='text-[#461e04] hover:text-[#e10024] hover:bg-transparent shadow-none active:text-[red] focus-visible:bg-transparent focus-visible:text-[#e10024]'
                        >Contact Us</Link></li>
                </ul>
            </div>
            <div className="hidden lg:block mb-auto ms-auto relative transition-all ease  duration-1000 delay-300">
                <Link href='/where-to-buy' className='text-[#461e04] hover:text-[#e10024] hover:bg-transparent border-r-[1px] border-solid border-r-[#461e04] px-3 py-2.5 cursor-pointer font-bold'>Where to Buy</Link>
                <button className='text-[#461e04] hover:text-[#e10024] hover:bg-transparent px-3 py-2.5 cursor-pointer font-bold'
                    onClick={() => {
                        if(pathname === '/') {
                            document.querySelector("#coupon-sec").scrollIntoView({ behavior: 'smooth' })
                        } else {
                            router.push('/#coupon-sec')
                        }
                    }}
                >Get a Coupon</button>
            </div>
        </div>
    </div>
  )
}
