"use client"

import dynamic from "next/dynamic";

const Categories = dynamic(() => import('../components/Categories'), { ssr: false });

export default function CategoriesComp () {
    return (
        <Categories />
    )
}