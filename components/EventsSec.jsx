import Image from "next/image"

export default function EventsSec() {

  const threeColImgs = ["event.webp", "event-1.webp"]
  const twoColImgs = ["event-2.webp", "event-3.webp", "event-4.webp"]
  
  return (
    <main className="pb-30">
      <h2 className='text-2xl md:text-4xl text-[#461e04] font-bold text-center tracking-widest uppercase mt-16 mb-10 md:mb-16 mx-5 md:mx-0'>
        <span className="block font-normal text-red-600 text-base md:text-lg -mb-[5px] tracking-wider">ElShamadan</span>Events</h2>
      <div className="w-[90%] grid grid-cols-6 px-5 md:px-3 gap-5 mx-auto overflow-hidden">
        {threeColImgs.map((img) => (
          <div key={img} className="col-span-6 md:col-span-3 overflow-hidden rounded-md transition-all duration-500 relative before:absolute before:w-0 lg:before:w-full before:h-full before:top-0 before:left-0 before:bg-[#0000005c] hover:before:w-0">
            <Image width={1000} height={0} src={`/assets/imgs/${img}`} className="rounded-md h transition-all duration-500 hover:scale-[1.1]" loading="lazy" alt={img}/>
          </div>
        ))}
        {twoColImgs.map((img) => (
        <div key={img} className="col-span-6 md:col-span-2 overflow-hidden rounded-md transition-all duration-500 relative before:absolute before:w-0 lg:before:w-full before:h-full before:top-0 before:left-0 before:bg-[#0000005c] hover:before:w-0">
          <Image width={1000} height={0} src={`/assets/imgs/${img}`} className="rounded-md transition-all duration-500 hover:scale-[1.1]" loading="lazy" alt={img}/>
        </div>
        ))}
      </div>
    </main>
  )
}
