import React from 'react'
import { motion } from "framer-motion"

const FindYourConformHome = () => {
    return (
        <div className='w-full container mx-auto mt-[76px] mb-[60px] '>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 130
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-full home relative '>
                <img src="/../assets/findhome.jpg" alt="" />
                <img src="/../assets/findhome2.jpg" className='absolute top-0 right-0' alt="" />
                <h2 className='text-[40.61px] leading-[60.92px] font-light absolute top-[18px] right-[136px]'>FIND YOUR CONFORM HOME</h2>
                <h3 className='text-[22.64px] leading-[33.95px] font-normal absolute top-[82.17px] right-[136px] text-[#ABABAB]'>BUY or RENT 1000+ Properties </h3>
                <button className='bg-[#0C0E0B] text-white flex items-center gap-[6px] py-[14.45px] pl-[30px] pr-[15.42px] absolute bottom-[14.27px] right-[136px] group'>
                    FIND YOUR HOME <img src="/../assets/arrow_right.png" alt="" className='transform group-hover:translate-x-1 transition duration-300 ease-in-out' />
                </button>
            </motion.div>

        </div>
    )
}

export default FindYourConformHome