import React from 'react'
import { motion } from "framer-motion"

const FindYourConformHome = () => {
    return (
        <div className='w-full container mx-auto md:mt-[76px] mt-[40px] mb-[60px] '>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 130
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-full home relative bg-[#F5F5F5]'>
                <img src="/../assets/findhome.jpg" alt="" className='h-[77px] md:h-auto' />
                <img src="/../assets/findhome2.jpg" className='absolute top-0 right-0 h-[77px] md:h-auto' alt="" />
                <h2 className='md:text-[40.61px] text-[14.67px] leading-[22px] font-poppins md:leading-[60.92px] font-light absolute md:top-[18px] top-[10px] md:right-[136px] right-[15px]'>FIND YOUR CONFORM HOME</h2>
                <h3 className='md:text-[22.64px] md:leading-[33.95px] text-[10.17px] leading-[12.26px] font-normal absolute md:top-[82.17px] top-[30px] md:right-[136px] right-[15px] text-[#ABABAB]'>BUY or RENT 1000+ Properties </h3>
                <button className='bg-[#0C0E0B] text-white flex items-center gap-[6px] md:py-[14.45px] py-[5px] md:pl-[30px] px-[10px] md:pr-[15.42px] absolute md:bottom-[14.27px] bottom-[5px] md:right-[136px] right-[15px] group text-[10px] md:text-[16px]'>
                    FIND YOUR HOME <img src="/../assets/arrow_right.png" alt="" className='transform group-hover:translate-x-1 transition duration-300 ease-in-out w-[7px] md:w-[15px] ' />
                </button>
            </motion.div>

        </div>
    )
}

export default FindYourConformHome