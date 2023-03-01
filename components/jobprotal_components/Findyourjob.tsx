import React from 'react'
import { motion } from "framer-motion"

const Findyourjob = () => {
    return (
        <div className='w-full container mx-auto md:mt-[76px] mt-[30px] mb-[60px] md:hidden px-[12px]'>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 130
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-full home relative bg-[#F5F5F5] border'>
                <img src="/../jobportal/hiring.png" alt="" className='h-[77px] md:h-auto' />
                <img src="/../assets/findhome2.jpg" className='absolute top-0 right-0 h-[77px] md:h-auto' alt="" />
                <h2 className='md:text-[40.61px] text-[14.67px] text-[#7D44E7] leading-[22px] font-poppins md:leading-[60.92px] font-light absolute md:top-[18px] top-[10px] md:right-[136px] right-[15px]'>FIND YOUR DREAM JOB</h2>
                <h3 className='md:text-[22.64px] md:leading-[33.95px] text-[10.17px] leading-[12.26px] font-normal absolute md:top-[82.17px] top-[30px] md:right-[136px] right-[15px] text-[#817D79]'>Browse over 1000+ Jobs and Compnies </h3>
                <button className='bg-[#7D44E7] text-white flex items-center gap-[6px] md:py-[14.45px] py-[5px] md:pl-[30px] px-[10px] md:pr-[15.42px] absolute md:bottom-[14.27px] bottom-[5px] md:right-[136px] right-[15px] group text-[10px] md:text-[16px]'>
                    SEARCH NOW <img src="/../assets/arrow_right.png" alt="" className='transform group-hover:translate-x-1 transition duration-300 ease-in-out w-[7px] md:w-[15px] ' />
                </button>
            </motion.div>

        </div>
    )
}

export default Findyourjob