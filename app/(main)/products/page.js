import Link from 'next/link';
import data from '../../../data/data.json';

const prds = data.ProductsImgs;

export const metadata = {
  title: "ElShamadan - Our Products",
  description: "Egyptian local brand for wafer and biscuits",
};

export default function Products() {
  
  return (
    <div className="secondary-bg py-50 bg-contain bg-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000010]">
      <h2 className="text-2xl md:text-5xl opacity-50 tracking-[20px] font-bold text-[#461e04] mx-2 text-center py-3 md:py-8 uppercase">Our Products</h2>
      <div className="grid grid-cols-6 mx-auto w-[90%] md:w-[80%] gap-6 lg:gap-10 mt-10">
        {prds && prds.map((prd) => (
        <div key={prd.id} className="products-card card relative bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-yellow-300 col-span-6 md:col-span-3 lg:col-span-2 border-none">
          <Link href={`/products/${prd.id}`} className='absolute w-full h-full top-0 left-0 z-10'></Link>
          <figure className="mx-10 mt-10 overflow-hidden rounded-none">
            <img
              src={prd.src}
              alt={prd.title}
              className="w-[80%] transition-all duration-700" loading='lazy'/>
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-[#461e04]">{prd.title}</h3>
            <div className="card-actions">
              <Link href={`/products/${prd.id}`} className="btn shadow-sm px-8 border-none font-semibold rounded-3xl transition-all duration-700 bg-yellow-300 text-[#461e04] mt-3">Discover</Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
