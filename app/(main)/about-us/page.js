import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "ElShamadan - Our Story",
  description: "Egyptian local brand for wafer and biscuits",
};

export default function About() {

  return (
    <main className="secondary-bg py-50 bg-contain bg-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000010]">
      <h2 className="relative z-10 text-4xl md:text-6xl opacity-50 tracking-[20px] font-bold text-[#461e04] mx-auto w-[90%] text-center py-3 md:py-8 uppercase">Our Story</h2>
      <div className="relative z-10 grid grid-cols-4 mt-10 mx-auto w-[90%] gap-5">
        <div className="col-span-4 lg:col-span-2 py-8 w-[90%] lg:w-[70%] mx-auto">
            <p className="text-[#461e049f] text-lg leading-9"><span className="text-[#461e04] text-4xl font-bold">Since 1978, ElShamadan has been crafting joy in every bite</span>
                <br/>Starting as a dream to bring high-quality, delicious biscuits and sweets to Egyptian families, 
                ElShamadan quickly grew into one of the country’s most beloved brands. 
                From classic plain biscuits to rich chocolate-filled treats, 
                we’ve become a part of everyday moments—school snacks, tea time, and family gatherings.</p>
            <Link href='/products' aria-label="Go To Products Page" className="btn text-base shadow-sm px-12 border-none font-semibold rounded-3xl transition-all duration-700 bg-[#ffd112] text-[#461e04] mt-5 hover:text-white hover:bg-[#461e04] hover:px-16">Discover</Link>
        </div>
        <div className="col-span-4 lg:col-span-2">
            <Image width={1000} height={200} src="/assets/imgs/about-sec-1.webp" className="rounded-sm shadow-xl" loading="lazy" alt="ElShamadan Story"/>
        </div>
        <div className="hidden lg:block col-span-4 lg:col-span-2">
            <Image width={1000} height={200} src="/assets/imgs/about-sec-2.webp" className="rounded-sm shadow-xl" loading="lazy" alt="ElShamadan Journey"/>
        </div>
        <div className="col-span-4 lg:col-span-2 py-8 w-[90%] lg:w-[70%] mx-auto">
            <p className="text-[#461e049f] text-lg leading-9"><span className="text-[#461e04] text-4xl font-bold">Today, ElShamadan is a name that travels beyond borders</span>
                <br/>With a wide range of biscuits, wafers, cakes, and chocolate, 
                our products are now enjoyed not only in Egypt but also in Saudi Arabia, Lebanon, and Tunisia. 
                What started in 1984 as a local favorite has turned into an international delight, 
                rooted in quality, tradition, and a genuine love for sweet moments.</p>
            <Link href='/where-to-buy' aria-label="Go To Shops Page" className="btn text-base shadow-sm px-12 border-none font-semibold rounded-3xl transition-all duration-700 bg-[#ffd112] text-[#461e04] mt-5 hover:text-white hover:bg-[#461e04] hover:px-16">Find us</Link>
        </div>
      </div>
    </main>
  )
}
