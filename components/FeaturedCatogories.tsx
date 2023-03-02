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
                    className='text-center md:text-[36px] text-[20px] md:leading-[54px] leading-[30px]  font-bold text-white pt-[40px] tracking-[0.02em]'>Featured Categories</motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    className='md:text-[16px] text-[12px] leading-[18px] md:leading-[24px] font-normal tracking-[0.02em] text-center text-white md:mt-[14px] mt-[5px]'>Some subheading here for categories, lorem ipsum </motion.p>
                <div className='grid md:grid-cols-8 grid-cols-4 md:mt-[91px] mt-[40px] pb-[35px] gap-y-[40px]'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer'>
                        <img src="/../assets/rentals.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Rentals</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 70
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer'>
                        <img src="/../assets/jobss.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Jobs</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 90
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer'>
                        <img src="/../assets/grocery.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Grocery</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 110
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer '>
                        <img src="/../assets/kitchen.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-center text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold mb-[-20px]'>Kitchen <br></br> Appliances</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 130
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer'>
                        <img src="/../assets/flights.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Flight</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 150
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer'>
                        <img src="/../assets/electronics.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Electronics</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 170
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.7 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer'>
                        <img src="/../assets/f_cars.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Cars </p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 190
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8 }}
                        viewport={{ once: true }}

                        className='flex flex-col justify-center items-center md:gap-[30px] gap-[14px] text-white cursor-pointer  '>
                        <img src="/../assets/vacation.png" alt="" className='w-[74px] h-[74px] md:h-auto md:w-auto' />
                        <p className='md:text-[18px] text-[12.56px] md:leading-[21.09px] leading-[13.55px] tracking-[0.02em] font-bold'>Vacation </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCatogories