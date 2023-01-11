import React from 'react'
import { motion } from "framer-motion"

const FeaturedCatogories = () => {
    return (
        <div className='featured'>
            <div className=' container mx-auto'>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='text-center text-[36px] leading-[54px] font-bold text-white pt-[40px] tracking-[0.02em]'>Featured Categories</motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    className='text-[16px] leading-[24px] font-normal tracking-[0.02em] text-center text-white mt-[14px]'>Some subheading here for categories, lorem ipsum </motion.p>
                <div className='grid grid-cols-8 mt-[91px] pb-[35px]'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/rentals.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Rentals</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 70
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/jobss.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Jobs</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 90
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/grocery.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Grocery</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 110
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer '>
                        <img src="/../assets/kitchen.png" alt="" />
                        <p className='text-center text-[18px] leading-[21.09px] tracking-[0.02em] font-bold mb-[-20px]'>Kitchen <br></br> Appliances</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 130
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/flights.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Flight</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 150
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/electronics.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Electronics</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 170
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.7 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/f_cars.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Cars </p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 190
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8 }}
                        viewport={{ once: true }}
                       
                        className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer '>
                        <img src="/../assets/vacation.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Vacation </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCatogories