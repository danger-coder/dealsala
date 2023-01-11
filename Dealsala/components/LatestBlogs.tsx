import React from 'react'
import { motion } from "framer-motion"
const LatestBlogs = () => {
    return (
        <div className='bg-[#F9F9F9] '>
            <div className='container mx-auto'>
                <h2 className='text-[22px] leading-[33px] font-medium pt-[37px] text-[#0E1133] tracking-[0.02em]'>
                    Latest Blogs
                </h2>
                <div className='mt-[52px] grid grid-cols-3 gap-[24px] pb-[86px]'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='rounded-lg cursor-pointer bg-[#FFFFFF]'>
                        <img src="/../assets/blog.jpg" alt="" className='w-full h-auto  rounded-tl-[15px] rounded-tr-[15px]' />
                        <div className='pl-[16px]'>
                            <h2 className='text-[20px] leading-[39.3px] text-[#222222] font-bold mt-[16px]'>Here are many variations of passages</h2>
                            <p className='text-[14px] leading-[27.51px] text-[#F65128] font-medium my-[6px]'>November 2,  2022 | john doe</p>
                            <p className='text-[15px] leading-[27px] tracking-[0.03em] text-[#444444] inline-block pb-[16px]'>In a professional context it often hapens that private or coprorate clients corder a publication to be ....</p>
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
                        className='cursor-pointer bg-white'>
                        <img src="/../assets/blog.jpg" alt="" className='w-full h-auto rounded-tl-[15px] rounded-tr-[15px]' />
                        <div className='pl-[16px]'>
                            <h2 className='text-[20px] leading-[39.3px] text-[#222222] font-bold mt-[16px]'>Here are many variations of passages</h2>
                            <p className='text-[14px] leading-[27.51px] text-[#F65128] font-medium  my-[6px]'>November 2,  2022 | john doe</p>
                            <p className='text-[15px] leading-[27px] tracking-[0.03em] text-[#444444 ] inline-block pb-[16px]'>In a professional context it often hapens that private or coprorate clients corder a publication to be ....</p>
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
                        className='cursor-pointer bg-white'>
                        <img src="/../assets/blog.jpg" alt="" className='w-full h-auto rounded-tl-[15px] rounded-tr-[15px]' />
                        <div className='pl-[16px]'>
                            <h2 className='text-[20px] leading-[39.3px] text-[#222222] font-bold  mt-[16px]'>Here are many variations of passages</h2>
                            <p className='text-[14px] leading-[27.51px] text-[#F65128] font-medium my-[6px]'>November 2,  2022 | john doe</p>
                            <p className='text-[15px] leading-[27px] tracking-[0.03em] text-[#444444] inline-block pb-[16px]'>In a professional context it often hapens that private or coprorate clients corder a publication to be ....</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs