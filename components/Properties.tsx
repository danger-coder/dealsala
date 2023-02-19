import React from 'react'
import { motion } from "framer-motion"

const Properties = () => {
    return (
        <div>
            <div className=' container mx-auto w-full md:pt-[40px] pt-[20px] px-[12px]'>
                <div className='flex items-center justify-between'>
                    <h2 className='md:text-[22px] text-[14px] leading-[19.5px] md:leading-[33px] font-medium tracking-[0.02em] text-[#0E1133] font-poppins'> Explore Properties</h2>
                    <svg className='md:hidden' width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.9373 6.99996C6.93527 7.14905 6.87759 7.292 6.77558 7.40074L1.15058 13.0257C1.04129 13.1154 0.902537 13.1613 0.76132 13.1543C0.620103 13.1474 0.486515 13.0882 0.386539 12.9882C0.286563 12.8882 0.227348 12.7547 0.220413 12.6134C0.213477 12.4722 0.259316 12.3335 0.349014 12.2242L5.58026 6.99996L0.349014 1.77574C0.259316 1.66645 0.213477 1.5277 0.220412 1.38649C0.227348 1.24527 0.286563 1.11168 0.386539 1.0117C0.486514 0.911728 0.620103 0.852512 0.76132 0.845577C0.902537 0.838641 1.04128 0.884481 1.15058 0.974179L6.77558 6.59918C6.87759 6.70792 6.93527 6.85087 6.9373 6.99996Z" fill="black" />
                    </svg>
                </div>
                <div className='grid grid-cols-4 mt-[25px] md:gap-[24px] gap-[11px]'>

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}

                        className='cursor-pointer'>

                        <div className='relative gradients'>
                            <img src="/../assets/properties1.jpg" alt="" className='md:w-full md:h-auto h-[83px] w-[85px]  rounded-[3px] ' />
                            <p className='absolute bottom-[6px] left-[50%] z-10 transform translate-x-[-50%] inline-block text-center text-white text-[12px] leading-[13.8px] font-normal font-poppins'>Rent</p>
                            <div className='gradient absolute left-0 top-0 h-[83px] w-[83px]'>

                            </div>

                        </div>
                        <div className='hidden md:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Properties to <span className='font-bold'>Rent</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>12938 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
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
                        <div className='relative'>
                            <img src="/../assets/properties2.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px]' />
                            <p className='absolute bottom-[6px]  z-10 left-[50%] transform translate-x-[-50%] inline-block text-center text-white text-[12px] leading-[13.8px] font-normal font-poppins'>Buy</p>
                            <div className='gradient absolute left-0 top-0 h-[83px] w-[83px]'>

                            </div>

                        </div>
                        <div className='hidden md:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Properties to <span className='font-bold'>Buy</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>165800 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
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
                        <div className='relative'>
                            <img src="/../assets/properties3.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px]' />
                            <p className='absolute bottom-[6px]  z-10 left-[50%] transform translate-x-[-50%] inline-block text-center text-white text-[12px] leading-[13.8px] font-normal font-poppins'>Flats</p>
                            <div className='gradient absolute left-0 top-0 h-[83px] w-[83px]'>

                            </div>

                        </div>
                        <div className='hidden md:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>New  <span className='font-bold'>Apartments</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>1200 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
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
                        <div className='relative'>
                            <div className='gradient absolute left-0 top-0 h-[83px] w-[83px]'>

                            </div>
                            <img src="/../assets/properties4.jpg" alt="" className='md:w-full md:h-auto w-[83px] h-[83px] rounded-[3px]' />
                            <p className='absolute bottom-[6px] left-[50%] z-10 transform translate-x-[-50%] inline-block text-center text-white text-[12px] leading-[13.8px] font-normal font-poppins'>Apartments</p>

                        </div>
                        <div className='hidden md:block'>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Flats for  <span className='font-bold'>Rent</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>184520 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Properties