"use client"

import ThankYou from "@/components/ThankYou"
import { useEffect, useState } from "react"


export default function Contact() {

  useEffect(() => {
    document.title = "ElShamadan - Contact Us";
  }, []);

  const [userName, setUserName] = useState("")
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    
    <div className='py-50 secondary-bg bg-cover bg-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#00000010] min-h-[100vh]'>
        {submitted ? (
          <ThankYou userName={userName}/>
        ) : (
          <>
            <h2 className="relative z-10 text-4xl md:text-6xl opacity-50 tracking-[20px] font-bold text-[#461e04] mx-auto w-[90%] text-center py-3 md:py-8 uppercase">Contact us</h2>
            <form onSubmit={handleSubmit} className='w-[80%] lg:w-[60%] mx-auto mt-12 text-[#461e04] relative z-10'>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-base text-[#461e04]">Reason for Contact</legend>
                <select defaultValue="--Select an item--" className="select select-warning bg-[#fefcf9] w-full focus-within:outline-none border-yellow-200 focus-within:border-[#461e04]" required>
                  <option disabled={true}>--Select an item--</option>
                  <option>General Question</option>
                  <option>Coupons or Samples</option>
                  <option>Advertising/Promotion</option>  
                  <option>Ideas/Suggestions</option>
                  <option>Product Quality Concern</option>
                </select>
              </fieldset>
              <div className='grid grid-cols-2 mt-5 gap-3'>
                <fieldset className="fieldset col-span-2 lg:col-span-1">
                  <legend className='fieldset-legend text-base text-[#461e04]'>First Name</legend>
                  <input type="text" className="input bg-[#fefcf9] w-full caret-[#461e04] focus-within:outline-none border-yellow-200 focus-within:border-[#461e04]" placeholder="Type here" required
                    onChange={(e) => setUserName(e.target.value)}/>
                </fieldset>
                <fieldset className="fieldset col-span-2 lg:col-span-1">
                  <legend className='fieldset-legend text-base text-[#461e04]'>Second Name</legend>
                  <input type="text" className="input bg-[#fefcf9] w-full caret-[#461e04] focus-within:outline-none border-yellow-200 focus-within:border-[#461e04]" placeholder="Type here" required/>
                </fieldset>
              </div>
              <fieldset className="fieldset mt-5">
                <legend className='fieldset-legend text-base text-[#461e04]'>Email Address</legend>
                <input type="email" className="input bg-[#fefcf9] w-full caret-[#461e04] focus-within:outline-none border-yellow-200 focus-within:border-[#461e04]" placeholder="Type here" required/>
              </fieldset>
              <fieldset className="fieldset mt-5">
                <legend className="fieldset-legend text-base text-[#461e04]">Your Feedback</legend>
                <textarea className="textarea bg-[#fefcf9] caret-[#461e04] h-[150px] resize-none textarea-warning w-full focus-within:outline-none border-yellow-200 focus-within:border-[#461e04]" placeholder="Type here" required></textarea>
              </fieldset>
              <fieldset className="fieldset mt-5">
                <legend className="fieldset-legend text-base text-[#461e04]">Upload a Photo or File</legend>
                <input type="file" className="file-input file-input-warning bg-[#fefcf9] focus-within:outline-none border-yellow-200 focus-within:border-[#461e04]" />
                <label className="label">Max size 2MB</label>
              </fieldset>
              <button type="submit" className="btn block w-full lg:w-[50%] text-base rounded-3xl uppercase font-semibold mt-10 border-none transition-all duration-500 bg-[#ffd112] text-[#461e04] hover:bg-[#461e04] hover:text-white hover:px-10 mx-auto"
              >Send</button>
            </form>
          </>
        )}
    </div>
  )
}
