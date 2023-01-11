import React from 'react'
import { motion } from "framer-motion"
const DailyEssentials = () => {
    return (
        <div>
            <div className=' w-full container mx-auto '>
                <h2 className='text-[22px] leading-[33px] font-medium tracking-[0.02em] text-[#0E1133]'>Daily Essentials</h2>
                <div className='grid  grid-cols-4  mt-[25px] gap-[24px]'>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/essentials1.jpg" alt="" className='w-full' />
                        <div>
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
                        <img src="/../assets/essential2.jpg" alt="" className='w-full' />
                        <div>
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
                        <img src="/../assets/essentials3.jpg" alt="" className='w-full' />
                        <div>
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
                        <img src="/../assets/essential4.jpg" alt="" className='w-full' />
                        <div>
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