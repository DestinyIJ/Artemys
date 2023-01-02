import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { MdArrowLeft, MdArrowRight, MdCircle } from 'react-icons/md'

interface CarouselItemProps {
    children: JSX.Element[] | JSX.Element,
    index: number,
    title?: string,
    time?: string,
    timezone?: string,
    day?: string,
    description?: string,
    id: string
}

export const SliderCarouselItem = ({children, title, index, time, day, description, id, timezone }: CarouselItemProps) => {
  return (
    <>
        <div className={`relative inline-flex w-full h-full items-center justify-center text-white `}>
            {children}
            <div className='absolute p-4 lg:px-8 lg:py-14 backdrop-contrast-125 backdrop-blur-[0.5px] bg-black/60 w-full h-full gap-7 flex lg:items-end lg:justify-between'>
                <div className='flex flex-col items-end gap-7'>
                    <MdCircle className='w-6 h-6' />
                    <span className=' font-Bellefair text-6xl'>{ index < 10 && '0'} {index}</span>
                </div>

                <div className='relative flex flex-col lg:flex-row justify-between lg:items-end w-full h-full whitespace-normal'>
                    <div className='flex flex-col gap-4 lg:w-3/5'>
                        <div><span className='text-xl lg:text-3xl font-Bellefair uppercase'>{title}</span></div>
                        <div className='text-xs lg:text-sm font-Poppins inline-flex items-center justify-start gap-2'>
                            <span>STARTS ON:</span>
                            <span>{time}</span>
                            <span>{timezone}</span>
                            <span>{day}</span>
                        </div>
                        <span className='font-Poppins text-xs'>{ description }</span>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Link href={{ pathname: '/auction/[id]', query: { id: id }}} className="border-b-2 hover:scale-95 active:scale-105">
                            <span className='text-2xl'>See More</span>
                        </Link>
                        <button className='border-2 border-white shadow-lg shadow-brand-black/80 p-2 lg:p-4 rounded-2xl lg:rounded max-h-16 hover:scale-95 active:scale-105'>
                            <span className='text-white lg:text-2xl capitalize bg-transparent w-full h-full'>set a reminder</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


interface CarouselProps {
    children: JSX.Element[] | JSX.Element,
}

export const SliderCarousel =  ({children}: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState({
        previous: React.Children.count(children) - 1,
        current: 0,
        next: 1
    })

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(current+1)
        }, 6000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const { previous, current, next} = activeIndex

    const updateIndex = (newCurrentIndex:any) => {
        let newPreviousIndex, newNextIndex
        newPreviousIndex = (newCurrentIndex - 1 < 0) ? React.Children.count(children) - 1 : newCurrentIndex - 1
        newNextIndex = (newCurrentIndex + 1 >= React.Children.count(children)) ? 0 : newCurrentIndex + 1
        
        if(newCurrentIndex < 0) {
            newCurrentIndex = React.Children.count(children) - 1
            newPreviousIndex =  0
            newNextIndex = newCurrentIndex - 1
        } else if (newCurrentIndex == React.Children.count(children)) {
            newCurrentIndex = 0
            newNextIndex =  newCurrentIndex + 1
            newPreviousIndex = React.Children.count(children) - 1
        } 
        
        setActiveIndex({previous: newPreviousIndex, current: newCurrentIndex , next:newNextIndex})
    }

    return (
        <div className='z-40 relative w-full h-full flex flex-col justify-between gap-6 overflow-hidden px-[8%] py-12' 
            style={{ background: 'linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)'}}
        >
            <div className='hidden lg:flex'>
                <span className='pb-2 capitalize text-[40px] leading-[54px] border-b-2 rounded font-medium text-white font-STIX'>See Upcoming Auctions and Exhibitions</span>
            </div>
            
            <div className='relative shadow-lg shadow-brand-black self-start h-[269px] lg:h-[76vh] w-full flex items-start justify-around overflow-hidden rounded-2xl'>
                <div className={`z-0 whitespace-nowrap transition-transform h-full w-full `} style={{ transform: `translateX(-${current * 100}%)` }} data-carousel-item>
                    {
                        React.Children.map(children, (child, index) => {
                            return React.cloneElement(child)
                        })
                    }
                </div> 
            </div>

            <div className='hidden lg:flex items-center justify-between'>
                <div className="min-w-max min-h-max flex justify-between items-center gap-2">
                    
                    {
                        React.Children.map(children, (child, index) => (
                            <button type="button" onClick={() => updateIndex(index)} className={`${current === index && 'bg-white'} w-6 h-6 border-2 border-gray-400 rounded-full`} aria-current="true" aria-label="Slide 1" data-carousel-slide-to={index}></button>
                        ))
                    }
                </div>

                <div className='flex items-center  justify-between gap-4'>
                    <button type="button" className=" cursor-pointer group  focus:outline-none" onClick={() => updateIndex(current - 1)}>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/20 hover:scale-95 active:scale-105">
                            <MdArrowLeft className='text-white  w-full h-full' />
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="cursor-pointer group focus:outline-none" onClick={() => updateIndex(current + 1)}>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/20 hover:scale-95 active:scale-105">
                            <MdArrowRight className='text-white w-full h-full' />
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div> 

            {/* <div className='absolute top-0 left-0 z-50 flex items-center justify-center h-full w-[15%] px-4 bg-gradient-to-r from-black to-[#42424200] rounded-md '>
                <button type="button" className=" cursor-pointer group focus:outline-none" onClick={() => updateIndex(current - 1)}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-brand-orange">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
            </div>
            <div className='absolute top-0 right-0 z-50 flex items-center justify-center h-full w-[15%] px-4 bg-gradient-to-l from-black to-[#42424200] '>
                <button type="button" className="cursor-pointer group focus:outline-none" onClick={() => updateIndex(current + 1)}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-brand-orange ">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div> */}
            
        </div>
    )
}
