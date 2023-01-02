import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col lg:items-center gap-6 border border-black box-border mx-2 lg:mx-14 my-20 p-6 lg:p-16 font-Baskervville'>
      <div className='flex flex-col justify-center lg:items-center gap-2 lg:gap-5'>
        <span className='uppercase text-2xl lg:text-3xl'>Newsletter</span>
        <span className='text-xs lg:text-[32px] lg:leading-10'>Be the first to get updates on new drops &amp; exciting deals </span>
      </div>
      <form className='flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5'>
        <input type="email" id="email" className="p-5 w-96 border border-brand-black h-11 lg:h-14 rounded-md" placeholder="Enter Your Email" required /> 
        <button type="submit" className="text-white bg-brand-black w-fit h-11 lg:h-14 p-5 inline-flex items-center capitalize rounded-md hover:scale-95 active:scale-105">Keep me updated</button>
      </form>
    </div>
  )
}

export default Newsletter