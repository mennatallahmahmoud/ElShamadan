"use client"

import Link from 'next/link';
import Image from 'next/image';
import data from '../data/data.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const products = data.ProductsImgs;

export default function App() {
    
  return (
    <main className='carousel-sec bg-cover bg-center py-30'>
      <h2 className='text-2xl md:text-4xl text-[#461e04] font-bold tracking-widest uppercase pb-16 mx-5 lg:mx-0 text-center'>
        <span className="block font-normal text-red-600 text-base md:text-lg -mb-[5px] tracking-wider">Dive into a World of</span>
        Delightful Flavors</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={2000}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[ Autoplay]}
        className="mySwiper shadow-lg bg-[#fefbf961]">
        {products && products.map((prd) => (
        <SwiperSlide>
            <Link href={`/products/${prd.id}`} className='p-3' key={prd.id} aria-label='Go To Product'>
                <Image width={1000} height={150} src={prd.src} className='!w-[70%] lg:!w-full mx-auto' loading='lazy' alt={prd.title}/>
            </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
