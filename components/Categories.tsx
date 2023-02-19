import React, { useState } from 'react'
// import { motion } from "framer-motion"

import Link from 'next/link'

const Categories = () => {

    return (
        <>

            <div className='w-full grid md:grid-cols-9 grid-cols-4 container mx-auto md:mt-[32px] mt-[15px] px-[5px]  pb-[3px] '>
                <Link href="" >
                    <div
                        className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px]  cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                        <img src="/../assets/house.png" alt="" className='md:w-[47px] md:h-[47px] h-[40px] w-[40px] object-contain' />
                        <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Real estate</p>
                    </div>
                </Link>
                <Link href="/jobportal">
                    <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                        <img src="/../assets/jobs.png" alt="" className='md:w-[48px] md:h-[47px] h-[40px] w-[40px] object-cover' />
                        <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Jobs</p>
                    </div>
                </Link>
                <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                    <img src="/../assets/carhire.png" alt="" className='md:w-[47px] md:h-[47px] h-[40px] w-[40px] ' />
                    <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Car Hire</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                    <img src="/../assets/service.png" alt="" className='md:w-[48px] md:h-[47px] h-[40px] w-[40px]' />
                    <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Services</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                    <img src="/../assets/apparels.png" alt="" className='md:w-[48px] md:h-[47px] h-[40px] w-[40px]' />
                    <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal text-[#2D2D2D]'>Aparrels</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                    <img src="/../assets/decoration.png" alt="" className='md:w-[47px] md:h-[47px] h-[40px] w-[40px]' />
                    <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Decorations</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                    <img src="/../assets/flight.png" alt="" className='md:w-[48px] md:h-[47px] h-[40px] w-[40px]' />
                    <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Flights</p>
                </div>
                <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                    <img src="/../assets/hotels.png" alt="" className='md:w-[47px] md:h-[47px] h-[40px] w-[40px]' />
                    <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Hotels</p>
                </div>
                <div className=' py-[35px] px-[24px] hidden md:block'>
                    <p className='text-[13px] leading-[19.5px] font-normal tracking-[0.02em] w-[88px]'><span className='whitespace-pre'>EXPLORE ALL</span> CATEGORIES</p>
                </div>

            </div>
            <div className='container mx-auto pt-[17.2px] md:hidden'>
                <p className='text-center text-[#F65128] text-[12px] leading-[18px] font-normal cursor-pointer tracking-[0.02em] font-poppins'>ALL CATEGORIES</p>
            </div>
        </>
    )
}

export default Categories