import React from 'react'
import FeatureSlider from './FeatureSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FindProperty = () => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className='container mx-auto pb-[0px] px-[12px] md:px-0 md:hidden '>
                <div className=' items-center justify-between   flex'>
                    <p className='text-[#0E1133] text-[16px] lading-[24px] font-medium'>Find Property</p>
                    <p className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium'>&gt; </p>
                </div>

            </div>
            <Slider {...settings} className=" holiday mt-[16px] mb-[37px] px-[12px]">
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9] rounded-[3px] border border-[#EDEDED]   flex items-center  justify-center flex-col w-[83px] h-[83px] md:w-[228px] md:h-[228px]  2xl:w-[93%] relative '>
                        <img src="/../realstate/mblview/prop1.png" alt="" className='w-full h-[100%] object-cover  ' />
                        <p className='text-white text-[12px] leading-[13.8px] font-normal absolute left-[50%] transform translate-x-[-50%] bottom-[6px]'>Rent</p>
                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  rounded-[3px] border border-[#EDEDED]   flex items-center justify-center flex-col w-[83px] h-[83px] md:w-[228px] md:h-[228px]  2xl:w-[93%] relative '>
                        <img src="/../realstate/mblview/prop2.png" alt="" className='w-full h-[100%] object-cover  ' />
                        <p className='text-white text-[12px] leading-[13.8px] font-normal absolute left-[50%] transform translate-x-[-50%] bottom-[6px]'> Buy</p>

                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className='relative transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9] rounded-[3px]  border border-[#EDEDED]   flex items-center justify-center flex-col w-[83px] h-[83px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/prop3.png" alt="" className='w-full h-[100%] object-cover  ' />
                        <p className='text-white text-[12px] leading-[13.8px] font-normal absolute left-[50%] transform translate-x-[-50%] bottom-[6px]'>Flats</p>

                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className='relative transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  rounded-[3px] border border-[#EDEDED]   flex items-center justify-center flex-col w-[83px] h-[83px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/prop4.png" alt="" className='w-full h-[100%] object-cover  ' />
                        <p className='text-white text-[12px] leading-[13.8px] font-normal absolute left-[50%] transform translate-x-[-50%] bottom-[6px]'>Apartments</p>

                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className='relative transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9] rounded-[3px]  border border-[#EDEDED]   flex items-center justify-center flex-col w-[83px] h-[83px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/prop3.png" alt="" className='w-full h-[100%] object-cover  ' />
                        <p className='text-white text-[12px] leading-[13.8px] font-normal absolute left-[50%] transform translate-x-[-50%] bottom-[6px]'>Rent</p>

                    </div>

                </div>


            </Slider>

        </>
    )
}

export default FindProperty