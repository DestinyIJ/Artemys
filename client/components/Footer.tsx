import React from 'react'
import LogoText from './LogoText'
import Link from 'next/link'
import  { MdEmail, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const email = `ighedodestiny11@gmail.com`
  const location = `Lagos, Nigeria`
 
  return (
    <>
      <div className='hidden lg:flex justify-between items-center text-brand-black p-8 border-t-2'>
        <div className='w-full h-full flex items-center justify-center'>
          <LogoText className=" text-[48px]" />
        </div>
        <div className='flex flex-col justify-between items-center gap-12'>
          {/* footer tags */}
          <div className='flex flex-wrap lg:flex-nowrap justify-between gap-12 font-Poppins'>
            <ul className='flex flex-col justify-between gap-8 min-w-max'>
              <li>
                  <Link href="/home" className=' text-[26px] leading-8'>Home</Link>
              </li>
              <li>
                  <Link href="/marketplace" className=' text-[26px] leading-8'>Marketplace</Link>
              </li>
              <li>
                  <Link href="/auctions" className=' text-[26px] leading-8'>Auctions</Link>
              </li>
              <li>
                  <Link href="/drop" className=' text-[26px] leading-8'>Drop</Link>
              </li>
            </ul>

            <ul className='flex flex-col justify-between gap-8 min-w-max'>
              <li>
                  <Link href="/blog" className=' text-[26px] leading-8'>Blog</Link>
              </li>
              <li>
                  <Link href="/wallets" className=' text-[26px] leading-8'>Wallets</Link>
              </li>
              <li>
                  <Link href="/rates" className=' text-[26px] leading-8'>Rates</Link>
              </li>
              <li>
                  <Link href="/high-bids" className=' text-[26px] leading-8'>High Bids</Link>
              </li>
            </ul>

            <ul className='flex flex-col gap-8'>
              <li className='flex items-center justify-start gap-2 text-[26px] leading-8'>
                <MdEmail className=' w-10 h-10' />
                <span>{email}</span>
              </li>
              <li className='flex items-center justify-start gap-2 text-[26px] leading-8'>
                <MdLocationOn className=' w-10 h-10' />
                <span>{location}</span>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <span className=' text-2xl font-medium font-Rubik'>Artemys &copy;{currentYear}. All Rights Reserved.</span>
          </div>
        </div>
      </div>

      <div className='flex lg:hidden flex-wrap md:items-center md:justify-around gap-4 font-Poppins p-6 border-t-2'>
        <div className='flex items-center justify-center'>
          <LogoText className=" text-[32px]" />
        </div>
        <div className='flex flex-col gap-4 justify-between items-start'>
          <span className=' uppercase font-light leading-4'>Reach us</span>
          <div className='flex items-center gap-2 text-xs leading-4'>
            <MdEmail className='w-5 h-5' />
            <span>{email}</span>
          </div>
          <div className='flex items-center gap-2 text-xs leading-4'>
            <MdLocationOn className='w-5 h-5' />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer