"use client"

import Link from 'next/link';
import data from '../../../../data/data.json'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Product() {

    const [product, setProduct] = useState({})
    const [suggestedPrds, setSuggestedPrds] = useState([])

    
    const params = useParams()
    const allPrds = data.ProductsImgs;
    

    useEffect(() => {
        
        setProduct(allPrds.find((prd) => prd.id === +(params.product)))

    }, [params.product]);

    useEffect(() => {
        
        document.title = `ElShamadan - ${product.title}`;

        const restOfPrds = allPrds.filter((p) => p.id !== product.id )

        function shufflePrds(arr) {
            return arr.sort(() => 0.5 - Math.random())
        }

        setSuggestedPrds(shufflePrds(restOfPrds).slice(0, 3))

    }, [product]);

    return (
        
    <div className="secondary-bg py-40 bg-contain bg-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000010]" >
        <h2 className="lg:hidden text-center text-2xl lg:text-4xl px-5 text-[#461e04] font-bold tracking-wider mb-5">{product.title}</h2>
        <div className="card w-full lg:w-[80%] lg:card-side gap-3 mb-50 px-5 lg:flex-row-reverse mx-auto">
            <figure className='flex-1/2'>
                <img
                src={product.src}
                alt={product.title} className='!w-[60%]'/>
            </figure>
            <div className="card-body flex-1/2 flex justify-center items-center">
                <div>
                    <h2 className="hidden lg:block mb-5 text-2xl lg:text-3xl text-[#461e04] font-bold tracking-wider">{product.title}</h2>
                    <p className='text-[#461e04b5] text-base leading-8'>{product.desc}</p>
                </div>
            </div>
        </div>
        <div>
            <h3 className="text-center text-xl lg:text-3xl opacity-50 text-[#461e04] font-bold tracking-[10px] mb-10 uppercase">More Products</h3>
            <div className='grid grid-cols-3 gap-5 p-6 w-[80%] md:w-[90%] mx-auto'>
                {suggestedPrds && suggestedPrds.map((prd) => (
                   <div key={prd.id} className="products-card card rounded-2xl relative bg-[#fefcf9] shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-yellow-300 col-span-3 md:col-span-1 border-none">
                        <Link href={`/products/${prd.id}`} className='absolute w-full h-full top-0 left-0 z-10'></Link>
                        <figure className="mt-5 overflow-hidden rounded-none">
                            <img
                                src={prd.src}
                                alt={prd.title}
                                className="w-[60%] transition-all duration-700" loading='lazy'/>
                        </figure>
                        <div className="card-body items-center text-center">
                        <h3 className="card-title text-[#461e04]">{prd.title}</h3>
                        <div className="card-actions mt-auto">
                            <Link href={`/products/${prd.id}`} className="btn shadow-sm px-8 border-none font-semibold rounded-3xl transition-all duration-700 bg-yellow-300 text-[#461e04] mt-3">Discover</Link>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
