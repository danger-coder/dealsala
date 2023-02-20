import React from 'react'
import { motion } from "framer-motion"
import HomeAppliance from './dealsala_mart/HomeAppliance'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HolidayDestination = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className='container mx-auto md:pt-[60px] pt-[40px] md:pb-[60px] pb-[120px] px-[12px] '>
                {/* <h2 className='text-[22px] leading-[33px] font-medium'>Holiday Destinations</h2> */}
                <div className='flex items-center justify-between'>
                    <h2 className='md:text-[22px] text-[14px] leading-[19.5px] md:leading-[33px] font-medium tracking-[0.02em] text-[#0E1133] font-poppins'> Holiday Destinations</h2>
                    <svg className='md:hidden' width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.9373 6.99996C6.93527 7.14905 6.87759 7.292 6.77558 7.40074L1.15058 13.0257C1.04129 13.1154 0.902537 13.1613 0.76132 13.1543C0.620103 13.1474 0.486515 13.0882 0.386539 12.9882C0.286563 12.8882 0.227348 12.7547 0.220413 12.6134C0.213477 12.4722 0.259316 12.3335 0.349014 12.2242L5.58026 6.99996L0.349014 1.77574C0.259316 1.66645 0.213477 1.5277 0.220412 1.38649C0.227348 1.24527 0.286563 1.11168 0.386539 1.0117C0.486514 0.911728 0.620103 0.852512 0.76132 0.845577C0.902537 0.838641 1.04128 0.884481 1.15058 0.974179L6.77558 6.59918C6.87759 6.70792 6.93527 6.85087 6.9373 6.99996Z" fill="black" />
                    </svg>
                </div>
                <div className='md:grid md:grid-cols-3 grid-cols-1 hidden gap-[24px] mt-[31px]'>
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
                <Slider {...settings} className="mt-[28.5px] holiday">
                    <div className='cursor-pointer relative'>
                        <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED] rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                            <img src="/../assets/losAngells.jpg" alt="" className='w-full h-[100%] object-cover rounded-[5px] ' />
                        </div>
                        <div className='absolute left-[45%] transform translate-x-[-50%] top-[76px] md:top-[100px] text-center'>
                            <h2 className='text-[15px] leading-[27px] font-medium text-white font-poppins'>LOS ANGELES</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-poppins font-normal'>250 Properties</p>
                        </div>


                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            <img src="/../assets/miami2.jpg" alt="" className='w-full h-[100%] object-cover rounded-[5px]' />
                        </div>
                        <div className='absolute left-[45%] transform translate-x-[-50%] top-[100px] text-center'>
                            <h2 className='text-[15px] leading-[27px] font-poppins font-medium text-white'>MIAMI</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-poppins font-normal'>50 Properties</p>
                        </div>

                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            <img src="/../assets/connectcut.jpg" alt="" className='w-full h-[100%] object-cover rounded-[5px]' />
                        </div>
                        <div className='absolute left-[50%] transform translate-x-[-50%] top-[100px] text-center'>
                            <h2 className='text-[15px] leading-[27px] font-medium text-white font-poppins'>CONNECTICUT</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-poppins font-normal'>781 Properties</p>
                        </div>

                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            <img src="/../assets/london.jpg" alt="" className='w-full h-[100%] object-cover' />
                        </div>
                        <div className='absolute left-[45%] transform translate-x-[-50%] top-[100px] text-center'>
                            <h2 className='text-[15px] leading-[27px] font-medium text-white font-poppins'>LONDON</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-poppins font-normal'>184 Properties</p>
                        </div>

                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            <img src="/../assets/itali.jpg" alt="" className='w-full h-[100%] object-cover' />
                        </div>
                        <div className='absolute left-[45%] transform translate-x-[-50%] top-[100px] text-center'>
                            <h2 className='text-[15px] leading-[33px] font-medium text-white'>ITALY</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-normal font-poppins'>12384 Properties</p>
                        </div>

                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%]' >
                            <img src="/../assets/tennase.jpg" alt="" className='w-full h-[100%] object-cover' />
                        </div>
                        <div className='absolute left-[45%] transform translate-x-[-50%] top-[100px] text-center'>
                            <h2 className='text-[15px] leading-[27px] font-medium text-white font-poppins'>TENESSE</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-poppins font-normal'>1564 Properties</p>
                        </div>

                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[110px] h-[162px] md:w-[228px] md:h-[228px]  2xl:w-[93%]' >
                            <img src="/../assets/capcarnival.jpg" alt="" className='w-full h-[100%] object-cover' />
                        </div>
                        <div className='absolute left-[45%] transform translate-x-[-50%] top-[76px] lg:top-[100px] text-center md:top-[100px]'>
                            <h2 className='text-[15px] leading-[27px] font-medium text-white font-poppins'>CAPE CANAVERAL</h2>
                            <p className='text-white  text-[8px] leading-[12px] font-normal font-poppins'>1284 Properties</p>
                        </div>

                    </div>

                </Slider>


            </div>
        </div>
    )
}

export default HolidayDestination