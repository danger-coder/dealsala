import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='flex w-full container mx-auto gap-[24px] mt-[15px]'>
            <div className='basis-[70%] bg-red-400 h-[393px]'>

               
            </div>
            <div className='basis-[30%]'>
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
    )
}

export default HeroSection