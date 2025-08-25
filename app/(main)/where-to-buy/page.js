import Link from "next/link";
import Image from "next/image";
import data from "../../../data/data.json";

export const metadata = {
  title: "ElShamadan - Where To Buy",
  description: "Egyptian local brand for wafer and biscuits",
};

const shops = data.Shops;

export default function WhereToBuy() {

  return (

    <main className="secondary-bg py-50 bg-contain bg-center text-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000010]">
      <h2 className="relative z-10 text-2xl md:text-5xl opacity-50 tracking-[15px] font-bold text-[#461e04] mx-2 text-center py-3 md:py-8 uppercase">Where to buy</h2>
        <span className='relative z-10 text-2xl text-[#461e049f]'>Shop ElShamadan Products!</span>
        <div className='relative z-10 mt-10 grid grid-cols-3 px-10 py-20 gap-10'>
            {shops && shops.map((shop) => (
                <Link href={shop.href} target="_blank" key={shop.name} aria-label="Visit Website" className="bg-[#fefcf9] transition-all duration-500 hover:bg-[#ffd112] rounded-md py-5 px-8 shadow-lg col-span-3 md:col-span-1 text-center">
                    <Image width={1000} height={200} src={shop.src} className="mb-5 mx-auto" loading="lazy" alt={shop.name}/>
                    <h4 className="text-[#461e04] text-xl font-semibold">{shop.name}</h4>
                </Link>
            ))}
        </div>
    </main>
    
  )
}
