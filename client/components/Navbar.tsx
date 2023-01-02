import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import LogoText from './LogoText'
import { RiCloseLine } from 'react-icons/ri'
import { MdShoppingCart, MdSearch, MdNotifications, MdMenu } from "react-icons/md";
import { useAppContext } from '../pages/_AppContext';
import { useRouter } from 'next/router';

const INITIAL_MENU_STATE = {
    home: false,
    auctions: false,
    marketplace: false,
    drop: false
}

const Navbar = () => {
    const router = useRouter()
    const pathname = router.pathname
    
    const [navbar, setNavbar] = useState(false);   
    const [menu, setMenu] = useState(INITIAL_MENU_STATE) 
    const { home, auctions, marketplace, drop } = menu
    
    const setMenuActive = () => {
        if(pathname.includes('/home')){
            setMenu({...INITIAL_MENU_STATE, home:true })
        } else if(pathname.includes('/auctions')){
            setMenu({...INITIAL_MENU_STATE, auctions:true })
        } else if(pathname.includes('/marketplace')){
            setMenu({...INITIAL_MENU_STATE, marketplace:true })
        } else if(pathname.includes('/drop')){
            setMenu({...INITIAL_MENU_STATE, drop:true })
        } 
    }

    useEffect(() => {
        setMenuActive()
    }, [pathname])
    

    return (
        <>
            <nav className={`p-2 sm:p-6 lg:px-28 w-full z-50 shadow-md`}>
                <div className="flex justify-between items-center gap-6 lg:gap-16 ">
                    <button onClick={() => setNavbar(!navbar)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm brand-text rounded-lg md:hidden hover:scale-95 active:scale-105 cursor-pointer" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <MdMenu className=' w-7 h-7' />
                    </button>
                    <Link href="/home"  className="flex flex-grow items-center">
                        <LogoText className=" text-[32px]" />
                    </Link>
                    <div className="hidden md:flex justify-around gap-6 lg:gap-12 font-Roboto text-xl lg:text-2xl text-brand-black">
                        <Link href="/home" className={`hover:scale-95 active:scale-105 border-black ${ home && 'scale-110 border-b-2'}`}>Home</Link>
                        <Link href="/marketplace" className={`hover:scale-95 active:scale-105 border-black ${ marketplace && 'scale-110 border-b-2'}`}>Marketplace</Link>
                        <Link href="/auctions" className={`hover:scale-95 active:scale-105 border-black ${ auctions && 'scale-110 border-b-2'}`}>Auctions</Link>
                        <Link href="/drop" className={`hover:scale-95 active:scale-105 border-black ${ drop && 'scale-110 border-b-2'}`}>Drop</Link>
                    </div>
                    <div className="flex flex-grow justify-around items-center gap-2 ">
                        <MdSearch className=' w-5 h-5 cursor-pointer' />
                        <MdShoppingCart className='w-5 h-5 cursor-pointer' />
                        <MdNotifications className='w-5 h-5 hidden md:block cursor-pointer' /> 
                    </div>
                </div>
            </nav>
            
            <nav className={`${navbar ? "translate-x-0" : "-translate-x-[150%]"} transition-transform absolute w-4/5 z-50 top-0 left-0 bg-white shadow-lg shadow-brand-black h-screen`}>
                <ul className="flex flex-col gap-6  p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                    <li className='flex justify-between items-center'>
                        <Link href="/"  className="flex items-center">
                            <LogoText className=" text-[32px]" />
                        </Link>
                        <button onClick={() => setNavbar(!navbar)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm brand-text rounded-lg md:hidden hover:scale-95 active:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">close main menu</span>
                            <RiCloseLine className='w-7 h-7' />
                        </button>
                    </li>
                    <li>
                        <Link href="/home" className={`text-xl text-black hover:scale-95 active:scale-105 border-black ${home && 'border-b-2 scale-110'} font-Roboto hover:font-bold`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/marketplace" className={`text-xl text-black hover:scale-95 active:scale-105 border-black ${marketplace && 'border-b-2 scale-110'} font-Roboto hover:font-bold`}>Marketplace</Link>
                    </li>
                    <li>
                        <Link href="/auctions" className={`text-xl text-black hover:scale-95 active:scale-105 border-black ${auctions && 'border-b-2 scale-110'} font-Roboto hover:font-bold`}>Auctions</Link>
                    </li>
                    <li>
                        <Link href="/drop" className={`text-xl text-black hover:scale-95 active:scale-105 border-black ${drop && 'border-b-2 scale-110'} font-Roboto hover:font-bold`}>Drop</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar