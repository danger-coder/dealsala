import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const HeroSection = () => {
    // var $ = require("jquery");
    // if (typeof window !== "undefined") {
    //     window.$ = window.jQuery = require("jquery");
    // }
    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>



            <div className='flex w-full container mx-auto gap-[24px] mt-[15px] md:flex md:flex-col  lg:flex-row'>
                <div className='basis-[65%] md:basis-[100%]'>
                    <Slider {...settings} className=" h-[393px]">
                        <div className='relative'>
                            <img src="/../assets/slide.jpg" className='w-[1190px]  h-[393px] object-fill' alt="" />
                            <img src="/../assets/plane.png" alt="" className='absolute top-[48px] left-[30%]' />
                            <div className='absolute top-[53.08px] left-[67.07px]'>
                                <h2 className='text-[22.2px] leading-[33.3px] text-white font-normal'>Best Vacation Deals</h2>
                                <p className='text-[45.73px] leading-[68.6px] font-bold text-white'>30% off</p>
                                <p className='text-[22.2px] leading-[33.3px] text-white font-normal'>on Flight Booking</p>
                            </div>
                            <div className='absolute bottom-[46px] right-[29.43px] flex items-center gap-[6px]'>
                                <h2 className='text-[16px] leading-[18.75px] text-white'>BOOK NOW</h2>
                                <img src="/../assets/arrow_right.png" alt="" />
                            </div>
                            <p className='absolute'>*conditions applied</p>
                        </div>
                        <div>
                            <img src="/../assets/slide.jpg" className='w-[1190px]  h-[393px] object-fill' alt="" />
                        </div>
                        <div>
                            <img src="/../assets/slide.jpg" className='w-[1190px]  h-[393px] object-fill' alt="" />
                        </div>

                    </Slider>

                </div>
                <div className='basis-[35%]'>
                    <div className='bg-[#F5F5F5] relative'>
                        <img src="/../assets/findyourhome.png" className='' alt="" />
                        <div className='absolute top-[30px] right-[23px] text-right'>
                            <p className='text-[18px] leading-[27px] font-light'>FIND YOUR CONFORM HOME</p>
                            <div className='text-[14px] leading-[21px] font-normal mt-[15px]'>
                                <p>BUY or RENT</p>
                                <p>1000+ Properties</p>
                            </div>
                        </div>
                        <button className='flex items-center bg-[#0C0E0B] rounded-[2px] text-white pt-[11.95px] pb-[12.05px] pl-[9px] gap-[6px] pr-[16.42px] absolute right-[23px] bottom-[16px] cursor-pointer'>FIND YOUR HOME <img src="/../assets/arrow_right.png" alt="" /></button>
                    </div>
                    <div className='bg-[#F9F9F9] mt-[20px] pt-[23px] pl-[33px] relative h-[187px]'>
                        <p className='text-[23.67px]  leading-[35.5px] font-light w-[326.06px] tracking-[-2%]'>Christmas Home Décor & Accessories</p>
                        <img src="/../assets/grass.png" className='absolute right-0 bottom-0' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection