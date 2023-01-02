import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'
import { MdArrowForward } from 'react-icons/md'

interface ProductCardProps {
    title: String,
    description: String,
    imageSrc: string,
    creatorsImg: string[],
    creatorsCount?: number,
    id: number
}

const ProductCard = ({ title, imageSrc, description, creatorsImg, creatorsCount, id, }: ProductCardProps) => {
  return (
    <div key={id} className='flex flex-col items-center justify-around py-4 lg:py-10 border-t-2 border-brand-black rounded-lg shadow-md md:flex-row gap-9  '>
        <div className='w-full lg:w-1/2 h-full relative'>
            <Image src={imageSrc} width={610} height={305} alt="featured product" className='h-full w-full object-cover'  />

            <div className='absolute top-0 left-0 backdrop-contrast-150 bg-black/60 w-full h-full flex lg:hidden flex-col items-center justify-center gap-12 '>
                <span className='text-white font-STIX font-semibold text-4xl'>{ title }</span>
                <Link href={{ pathname: '/product/[id]', query: { id: id }}} className=" ml-[50%] rounded-full w-20 h-20 shadow shadow-gray-400 hover:scale-95 active:scale-105">
                    <MdArrowForward className='w-full h-full text-white' />
                </Link>
            </div>
        </div>
        <div className='flex flex-col justify-between gap-9 text-brand-black w-full lg:w-1/2'>
            <span className='font-bold hidden lg:flex text-base lg:text-[40px] leading-[23px] lg:leading-[50px] font-STIX capitalize'>{title}</span>
            <span className='font-Poppins text-2xl'>{ description }</span>
            <div className='flex justify-between items-end'>
                <div className='flex items-center'>
                    <div className='flex items-center relative'>
                        {
                            creatorsImg && creatorsImg.map((src, index) => (
                                <>
                                    <div className='w-12 h-12 rounded-full relative' key={index} style={{  left: `-${index * 16}px`}}>
                                        <Image src={src} width={51} height={51} className="relative object-cover w-full h-full rounded-full" alt='product image' />
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    {
                        creatorsCount && (<span className='relative font-medium lg:text-2xl'>{ creatorsCount } Major Creators </span>)
                    }

                </div>

                <Link href={{ pathname: '/product/[id]', query: { id: id }}} className="rounded-full hidden lg:block w-20 h-20 shadow shadow-brand-black hover:scale-95 active:scale-105">
                    <MdArrowForward className='w-full h-full' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
