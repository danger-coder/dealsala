import React from 'react'
import { motion } from "framer-motion"

const MostSearchedLocation = () => {
    return (
        <div className='container mx-auto pt-[60px] pb-[60px]'>
            <div className='flex items-center flex-col justify-center '>
                <h2 className='text-black text-[26px] leading-[39px] font-medium mb-[4px]'>Most Searched Locations </h2>
                <p className='text-[#2D2D2D] text-[13px] leading-[15.73px] tracking-[0.02em]'>Choose Properties from different location lorem ipsum dolor.</p>
            </div>
            <div className='grid grid-cols-3 gap-[24px] mt-[53px]'>
                <div className='flex flex-col gap-[20px] group'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1 }}
                        viewport={{ once: true }}
                        className='relative max-h-[200px]  md:h-[200px] cursor-pointer overflow-hidden'>
                        <img src="/../assets/losAngells.jpg" alt="" className='w-full h-[100%] object-cover rounded-[5px] ' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[123px] md:top-[100px] text-center'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>LOS ANGELES</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>250 Properties</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -150
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='relative max-h-[200px] md:h-[200px] cursor-pointer'>
                        <img src="/../assets/miami2.jpg" alt="" className='w-full h-[100%] object-cover rounded-[5px]' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[123px] text-center'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>MIAMI</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>50 Properties</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -200
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        className='relative max-h-[200px] md:h-[200px] cursor-pointer'>
                        <img src="/../assets/connectcut.jpg" alt="" className='w-full h-[100%] object-cover rounded-[5px]' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[123px] text-center'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>CONNECTICUT</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>781 Properties</p>
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='relative max-h-[200px] xl:h-[195px] lg:h-[200px] md:h-[200px] cursor-pointer'>
                        <img src="/../assets/london.jpg" alt="" className='w-full h-[100%]' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[123px] text-center'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>LONDON</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>184 Properties</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='relative max-h-[424px] xl:h-[800px] lg:h-[850px] md:h-[800px] cursor-pointer'>
                        <img src="/../assets/itali.jpg" alt="" className='w-full h-[100%]' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[315px] text-center'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>ITALY</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>12384 Properties</p>
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='relative max-h-[414px] lg:h-[810px] md:h-[810px] cursor-pointer'>
                        <img src="/../assets/tennase.jpg" alt="" className='w-full h-[100%]' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[323px] text-center'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>TENESSE</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>1564 Properties</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='relative max-h-[200px] lg:h-[210px] md:h-[210px] cursor-pointer'>
                        <img src="/../assets/capcarnival.jpg" alt="" className='w-full h-[100%]' />
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[123px] lg:top-[100px] text-center md:top-[100px]'>
                            <h2 className='text-[22px] leading-[33px] font-medium text-white'>CAPE CANAVERAL</h2>
                            <p className='text-white  text-[12px] leading-[18px] font-normal'>1284 Properties</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default MostSearchedLocation