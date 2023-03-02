import React from 'react'
import { motion } from "framer-motion"
const DailyEssentials = () => {
    return (
        <div>
            <div className=' w-full container mx-auto px-[12px] pb-[40px] md:mb-0'>
                {/* <h2 className='text-[22px] leading-[33px] font-medium tracking-[0.02em] text-[#0E1133]'>Daily Essentials</h2> */}
                <div className='flex items-center justify-between'>
                    <h2 className='md:text-[22px] text-[14px] leading-[19.5px] md:leading-[33px] font-medium tracking-[0.02em] text-[#0E1133] font-poppins'> Daily Essentials</h2>
                    <svg className='md:hidden' width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.9373 6.99996C6.93527 7.14905 6.87759 7.292 6.77558 7.40074L1.15058 13.0257C1.04129 13.1154 0.902537 13.1613 0.76132 13.1543C0.620103 13.1474 0.486515 13.0882 0.386539 12.9882C0.286563 12.8882 0.227348 12.7547 0.220413 12.6134C0.213477 12.4722 0.259316 12.3335 0.349014 12.2242L5.58026 6.99996L0.349014 1.77574C0.259316 1.66645 0.213477 1.5277 0.220412 1.38649C0.227348 1.24527 0.286563 1.11168 0.386539 1.0117C0.486514 0.911728 0.620103 0.852512 0.76132 0.845577C0.902537 0.838641 1.04128 0.884481 1.15058 0.974179L6.77558 6.59918C6.87759 6.70792 6.93527 6.85087 6.9373 6.99996Z" fill="black" />
                    </svg>
                </div>
                <div className='grid  grid-cols-4  mt-[25px] md:gap-[24px] gap-[11px]'>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/essentials1.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px] border ' />
                        <div className='hidden sm:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Grocery</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>12938 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 200
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/essential2.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px]' />
                        <div className='hidden sm:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Kitchen </p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>1600 Products</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 250
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/essentials3.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px]' />
                        <div className='hidden sm:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Bathroom Essentials</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>1200 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 300
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/essential4.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px]' />
                        <div className='hidden sm:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>lorem ipsum</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>184520 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default DailyEssentials