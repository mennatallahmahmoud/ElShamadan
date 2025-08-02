"use client";

import Link from "next/link";
import data from "../data/data.json";
import { motion } from "framer-motion";

const cats = data.CatsImgs;

export default function Categories() {

  return (
    <div id="categories" className='mb-20 text-center'>
      <div>
        <img src='/assets/imgs/choco-line.webp' className='mx-auto w-[100%]' loading="lazy" alt="Categories Section"/>
        <div>
          <h2 className='text-2xl md:text-4xl text-[#461e04] font-bold tracking-widest uppercase mb-10 md:mb-16 mx-5 md:mx-0'>
            <span className="block font-normal text-red-600 text-base md:text-lg -mb-[5px] tracking-wider">Explore Our</span>
            World of Happiness</h2>
        </div>
      </div>
      <div className="grid grid-cols-6 mx-auto w-[90%] md:w-[80%] gap-4">
        {cats && cats.map((cat) => (
        <motion.div key={cat.id} className="card cat-card relative col-span-6 md:col-span-3 lg:col-span-2 bg-transparent border-none"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        viewport={{ once: true, amount: 0.2 }}>
          <Link href='/products' className='absolute w-full h-full top-0 left-0 z-10'></Link>
          <figure className="mx-10 mt-10 overflow-hidden rounded-md">
            <img
              src={cat.src}
              alt={cat.title}
              className="transition-all duration-700 rounded-md"/>
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-[#461e04]">{cat.title}</h3>
            <div className="card-actions">
              <Link href='/products' className="btn shadow-sm px-8 relative z-20 border-none font-semibold rounded-3xl transition-all duration-700 bg-yellow-300 text-[#461e04] mt-3 hover:text-white hover:bg-[#461e04] hover:px-12">Discover</Link>
            </div>
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  )
}
