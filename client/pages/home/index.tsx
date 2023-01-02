import React, {ReactElement, useEffect} from 'react'
import { Layout, NestedLayout, Header, 
    Carousel, CarouselItem,
    SliderCarousel, SliderCarouselItem,
     ProductCard } from '../../components'
import { NextPageWithLayout } from '../_app'
import { useAppContext } from '../_AppContext'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowForward} from 'react-icons/md'


const Page: NextPageWithLayout = () => {

    return (
        <>
            <Header title="Artemys | Home" />
        
            <main className=''>
                {/*  */}
                <section className='m-[5%] px-6 flex flex-col gap-6 items-center'>
                    <span className='capitalize font-OpenSans text-center font-medium lg:font-bold text-[32px] md:text-5xl lg:text-7xl leading-[150%] lg:leading-[100px]'>
                        Photography is poetry &amp; beautiful stories untold
                    </span>
                    <span className=' max-w-[926px] font-Poppins font-medium leading-normal lg:text-[28px] text-center'>
                        Flip through more than 10,000 vintage shots, old photograghs, 
                        historic images and captures seamlessly in one place. Register to get top access.
                    </span>
                </section>

                {/* Carousel */}
                <section className='my-20'>
                    <Carousel>
                        <CarouselItem >
                            <Image src={'/assets/carousel1.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </CarouselItem>
                        <CarouselItem >
                            <Image src={'/assets/carousel5.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </CarouselItem>
                        <CarouselItem >
                            <Image src={'/assets/carousel4.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </CarouselItem>
                        <CarouselItem >
                            <Image src={'/assets/carousel1.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </CarouselItem>
                        <CarouselItem >
                            <Image src={'/assets/carousel5.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </CarouselItem>
                        <CarouselItem >
                            <Image src={'/assets/carousel4.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </CarouselItem>
                        
                    </Carousel>
                </section>

                {/* featured products */}
                <section className='my-20 mx-[5%]'>
                    <div className='flex flex-grow items-center justify-start mb-9'>
                        <span className=' text-3xl lg:text-5xl font-bold font-Poppins'>Featured Products</span>
                    </div>
                    <ProductCard
                        title={`The Boolean Egyptian`}
                        imageSrc={`/assets/featured_product1.svg`}
                        description={`Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit ut aliquam, 
                            purus sit amet luctus venenatis, 
                            lectus magna fringilla urna, porttitor rhoncus dolor pur`}
                        id={123}
                        creatorsImg={[
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`
                        ]}
                        creatorsCount={64}
                    />
                    <ProductCard
                        title={`The Royal Stones`}
                        imageSrc={`/assets/featured_product2.svg`}
                        description={`Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit ut aliquam, 
                            purus sit amet luctus venenatis, 
                            lectus magna fringilla urna, porttitor rhoncus dolor pur`}
                        id={1234}
                        creatorsImg={[
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`
                        ]}
                        creatorsCount={86}
                    />
                    <ProductCard
                        title={`Are we there yet?`}
                        imageSrc={`/assets/featured_product3.svg`}
                        description={`Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit ut aliquam, 
                            purus sit amet luctus venenatis, 
                            lectus magna fringilla urna, porttitor rhoncus dolor pur`}
                        id={1235}
                        creatorsImg={[
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`,
                            `/assets/carousel1.svg`
                        ]}
                        creatorsCount={64}
                    />
                </section>

                {/* See Upcoming Auctions and Exhibitions */}
                <section className='my-20'>
                    <SliderCarousel>
                        <SliderCarouselItem
                            index={1}
                            title={`Monalisa redefined in style`}
                            description={`GET EXCLUSIVE VIEWING OF CONTEMPORARY ART 
                                AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS 
                                THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.`}
                            time={`09:00PM`} timezone={`GMT`} day={`Monday`}
                            id={`123`}
                        >
                            <Image src={'/assets/carousel1.svg'} width={358} height={444} className="relative object-cover w-full h-full" alt='carousel image' />
                        </SliderCarouselItem>
                        
                        <SliderCarouselItem
                            index={2}
                            title={`Monalisa redefined in style 2`}
                            description={`GET EXCLUSIVE VIEWING OF CONTEMPORARY ART 
                                AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS 
                                THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.`}
                            time={`09:00PM`} timezone={`GMT`} day={`Monday`}
                            id={`123`}
                        >
                            <Image src={'/assets/carousel4.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </SliderCarouselItem>
                        <SliderCarouselItem
                            index={3}
                            title={`Monalisa redefined in style 3`}
                            description={`GET EXCLUSIVE VIEWING OF CONTEMPORARY ART 
                                AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS 
                                THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.`}
                            time={`09:00PM`} timezone={`GMT`} day={`Monday`}
                            id={`123`}
                        >
                            <Image src={'/assets/carousel5.svg'} width={358} height={444} className="object-cover w-full h-full" alt='carousel image' />
                        </SliderCarouselItem>
                    </SliderCarousel>
                </section>

                {/* Explore Marketplace & See Auctions */}
                <section className='my-20'>
                    <Link href={`/marketplace`} className="flex justify-between items-center p-4 lg:p-12 border-t border-b border-brand-black" >
                        <span className='font-Poppins text-2xl lg:text-5xl'>Explore Marketplace</span> <MdArrowForward className=' w-20 h-16 text-[#4693ED]'  />
                    </Link>
                    <Link href={`/auctions`} className="flex justify-between items-center p-4 lg:p-14 border-b border-brand-black" >
                        <span className='font-Poppins text-2xl lg:text-5xl'>See Auctions</span> <MdArrowForward className=' w-20 h-16 text-[#4693ED]'  />
                    </Link>
                </section>

                {/* Top Creator of the week */}
                <section className='my-20  w-full relative bg-[#E2E2E2] p-4 lg:p-24 flex flex-col gap-9 font-Baskervville '>
                    <div className='flex justify-between items-start'>
                        <span className=' font-semibold text-2xl lg:text-6xl max-w-xl uppercase'>Top Creators of the Week</span>
                        <div className='flex gap-2'>
                            <div className='rounded-xl w-2 border-2 bg-gray-500 z-50 hidden lg:flex items-end'>
                                <div className='w-full bg-black h-1/5 rounded-xl'></div>
                            </div>
                            <ul className='flex flex-wrap flex-col gap-2 lg:gap-5 lg:text-4xl'>
                                <li>Editorials</li>
                                <li>Fashion</li>
                                <li>Lifestyle</li>
                                <li>Blueprint</li>
                            </ul>
                        </div>
                    </div>
                    <div className='max-w-6xl backdrop-contrast-150 bg-white/40 rounded-3xl p-6 z-50    '>
                        <span className='w-full text-xs lg:text-3xl lg:leading-10'>
                        “Everything always looked better in black and white. 
                        Everything always  as if it were the first time; there is always more people in 
                        a black and white photograph. It just makes it seem that 
                        there were more people at a gig, more people at a football match, than with colour photography. 
                        Everything looks more exciting.”– Jack Lowden
                        </span>
                    </div>
                    <Image src={'/assets/top_creator.svg'} width={358} height={444} className="absolute top-14 lg:top-[20%] right-[20%] object-cover lg:w-[48vw] lg:h-[90%]" alt='carousel image' />
                </section>
            </main>
        </>
    )
}
  
Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

export default Page
  

