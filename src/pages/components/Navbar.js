import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { useState, useEffect } from 'react';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

const navbar = () => {

    // Nav on click
    const [isClick, setIsClick] = useState(false)

    // Scroll Checker
    const [currentScroll, setcurrentScroll] = useState("");
    const handleScroll = () => {
        setcurrentScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    // Get window height
    const [sizeWindow, setsizeWindow] = useState(0)
    useEffect(() => {
        setsizeWindow(window.innerHeight)
    })

    return (
        <nav className={`${currentScroll >= sizeWindow - (sizeWindow * 0.75) ? 'bg-[#ffffffe6]' : 'bg - transparent'} fixed w-screen flex items-center justify-between px-5 pt-2 transition duration-200 z-10`}>
            {/* Logo Gambar */}
            <div>
                <Image src={'/logoKarya.webp'} width={100} height={100} className='w-16 lg:w-24 lg:ml-6'></Image>
            </div>

            {/* Menu */}
            <button className='md:hidden' onClick={() => setIsClick(!isClick)}>

                {/* Hamburger */}
                <div className={`${isClick ? 'hidden' : 'inline-block'}`}>
                    <svg className="w-7 h-5 text-[#1F183C]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </div>
            </button>

            {/* Kotak Hamburger */}
            <button className={`${isClick ? 'block' : 'hidden'} absolute z-20 right-0 mr-8 mt-1 md:hidden`} onClick={() => setIsClick(!isClick)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,255.98959,255.98959">
                    <g fill="#1F183C">
                        <path transform="scale(5.12,5.12)" d="M25,23.5625l17.28125,-17.28125l1.4375,1.4375l-17.28125,17.28125l17.28125,17.28125l-1.4375,1.4375l-17.28125,-17.28125l-17.28125,17.28125l-1.4375,-1.4375l17.28125,-17.28125l-17.28125,-17.28125l1.4375,-1.4375z" id="strokeMainSVG" stroke="#1F183C" stroke-width="2" stroke-linejoin="round">
                        </path><g transform="scale(5.12,5.12)" stroke="none" stroke-width="1" stroke-linejoin="miter"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g>
                </svg>
            </button>
            <div className={`${isClick ? 'block' : 'hidden'} flex justify-center items-center absolute z-10 bg-[#ffffffe6] w-[50%] h-[27.5vh] top-[.5rem] right-0 mr-4 rounded-xl drop-shadow-lg transition-all duration-200`}>
                <ul className='flex flex-col items-center gap-6'>
                    <li>
                        <Link href={'#'} className={`transition-all duration-200 font-medium text-[1em] ${currentScroll < sizeWindow / 2 ? 'text-yellow-400 font-extrabold text-[1.6em]' : 'text-[#1F183C]'}`}>Beranda</Link>
                    </li>
                    <li>
                        <Link href={'#tentangKami'} className={`transition-all duration-200 font-medium text-[1em] ${currentScroll >= sizeWindow / 2 && currentScroll <= sizeWindow * 1.5 ? 'text-yellow-400 font-extrabold text-[1.6em]' : 'text-[#1F183C]'}`}>Profile</Link>
                    </li>
                    <li>
                        <Link href={'#'} className={`transition-all duration-200 font-medium text-[1em] ${currentScroll >= sizeWindow * 1.5 && currentScroll < sizeWindow * 2.5 ? 'text-yellow-400 font-extrabold text-[1.6em]' : 'text-[#1F183C]'}`}>Berita</Link>
                    </li>
                </ul>
            </div>

            {/* Nav Panjang */}
            <div className='box-border hidden md:inline-block lg:mr-16 xl:mr-24'>
                <ul className='flex flex-row gap-6 box-border xl:gap-9'>
                    <li>
                        <Link href={'#'} className={`text-[1.25em] box-border transition-all duration-200 ${currentScroll < sizeWindow / 2 ? 'text-yellow-400 font-extrabold text-[1.5em]' : 'text-[#1F183C]'}`}>Beranda</Link>
                    </li>
                    <li>
                        <Link href={'#tentangKami'} className={`text-[1.25em] box-border transition-all duration-200 ${currentScroll >= sizeWindow / 2 && currentScroll <= sizeWindow * 1.5 ? 'text-yellow-400 font-extrabold text-[1.5em]' : 'text-[#1F183C]'}`}>Tentang Kami</Link>
                    </li>
                    <li>
                        <Link href={'#'} className={`text-[1.25em] box-border transition-all duration-200 ${currentScroll >= sizeWindow * 1.5 && currentScroll < sizeWindow * 2.5 ? 'text-yellow-400 font-extrabold text-[1.5em]' : 'text-[#1F183C]'}`}>Berita</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default navbar