import React, { useState, useEffect } from 'react'
import Image from "next/image";

interface CarouselItemProps {
    children: JSX.Element[] | JSX.Element,
    width?: String,
    height?: String,
    hidden?: Boolean
}

export const CarouselItem = ({children}: CarouselItemProps) => {
  return (
    <>
        <div className={`inline-flex w-[100%] h-full items-center justify-center text-white`}>
            {children}
        </div>
    </>
  )
}


interface CarouselProps {
    children: JSX.Element[] | JSX.Element,
}

export const Carousel =  ({children}: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState({
        previous: React.Children.count(children) - 1,
        current: 0,
        next: 1
    })

    const { previous, current, next } = activeIndex

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

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(current+1)
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <>
            <div className='hidden lg:flex items-center justify-around w-full h-[444px] '>
                <div className='shadow-2xl shadow-brand-black  h-[80%] self-end w-1/5 flex items-center justify-around overflow-hidden rounded-2xl'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full `} style={{ transform: `translateX(-${current * 100}%)` }}>
                        {
                            React.Children.map(children, (child, index) => {
                                return previous === index ? React.cloneElement(child) : React.cloneElement(child)
                            })
                        }
                    </div>  
                </div>

                <div className='relative shadow-2xl shadow-brand-black self-start h-[80%] w-1/5 flex items-start justify-around overflow-hidden rounded-2xl'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full`} style={{ transform: `translateX(-${next * 100}%)` }}>
                            {
                                React.Children.map(children, (child, index) => {
                                    return React.cloneElement(child)
                                })
                            }
                    </div>  
                </div>

                <div className='relative shadow-2xl shadow-brand-black self-end h-[90%] w-1/5 flex items-end  overflow-hidden rounded-2xl'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full`} style={{ transform: `translateX(-${previous * 100}%)` }}>
                            {
                                React.Children.map(children, (child, index) => {
                                    return React.cloneElement(child)
                                })
                            }
                    </div>  
                </div>

                <div className='relative shadow-2xl shadow-brand-black self-start h-[75%] w-1/5 flex items-center justify-around overflow-hidden rounded-2xl'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full`} style={{ transform: `translateX(-${(current) * 100}%)` }}>
                        {
                            React.Children.map(children, (child, index) => {
                                return next === index ? React.cloneElement(child) : React.cloneElement(child)
                            })
                        }
                    </div>  
                </div>
            </div>

            <div className='relative flex lg:hidden items-center justify-center w-full h-[302px]'>
                <div className='absolute h-full self-end w-[88%] flex items-center justify-around overflow-hidden rounded-2xl -rotate-[10.1deg]'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full`} style={{ transform: `translateX(-${previous * 100}%)` }}>
                        {
                            React.Children.map(children, (child, index) => {
                                return previous === index ? React.cloneElement(child) : React.cloneElement(child)
                            })
                        }
                    </div>  
                </div>

                <div className='absolute h-full self-end  w-[88%] flex items-center justify-around overflow-hidden rounded-2xl'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full`} style={{ transform: `translateX(-${current * 100}%)` }}>
                        {
                            React.Children.map(children, (child, index) => {
                                return previous === index ? React.cloneElement(child) : React.cloneElement(child)
                            })
                        }
                    </div>  
                </div>

                <div className='absolute h-full self-end w-[88%] flex items-center justify-around overflow-hidden rounded-2xl rotate-[9.75deg]'>
                    <div className={`whitespace-nowrap transition-transform h-full w-full`} style={{ transform: `translateX(-${next * 100}%)` }}>
                        {
                            React.Children.map(children, (child, index) => {
                                return previous === index ? React.cloneElement(child) : React.cloneElement(child)
                            })
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}
