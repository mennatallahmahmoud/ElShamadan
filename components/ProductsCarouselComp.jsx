"use client"

import dynamic from "next/dynamic";

const ProductsCarousel = dynamic(() => import('@/components/ProductsCarousel'), { ssr: false });

export default function CategoriesComp () {
    return (
        <ProductsCarousel />
    )
}