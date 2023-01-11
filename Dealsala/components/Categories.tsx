import React from 'react'
import { motion } from "framer-motion"

const Categories = () => {
    return (
        <div className='w-full grid grid-cols-9 container mx-auto mt-[32px]   pb-[3px]'>
            <div
                className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px]  cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/house.png" alt="" className='w-[47px] h-[47px] object-contain' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Real estate</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/jobs.png" alt="" className='w-[48px] h-[47px] object-cover' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Jobs</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/carhire.png" alt="" className='w-[47px] h-[47px] ' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Car Hire</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/service.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Services</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/apparels.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal text-[#2D2D2D]'>Aparrels</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/decoration.png" alt="" className='w-[47px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Decorations</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/flight.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Flights</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px]  gap-[8px] pb-[13px] cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                <img src="/../assets/hotels.png" alt="" className='w-[47px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Hotels</p>
            </div>
            <div className=' py-[35px] px-[24px]'>
                <p className='text-[13px] leading-[19.5px] font-normal tracking-[0.02em] w-[88px]'><span className='whitespace-pre'>EXPLORE ALL</span> CATEGORIES</p>
            </div>

        </div>
    )
}

export default Categories