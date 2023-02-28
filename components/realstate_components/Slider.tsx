import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

const Sliders = () => {
    return (
        <div className='container mx-auto  mb-[120px] md:mb-0 md:hidden'>
            <div className='flex items-center justify-between pb-[34px] px-[12px] md:px-0'>
                <p className='text-[#0E1133] text-[16px] lading-[24px] font-medium'>POPULAR CONTRACTORS</p>
                <p className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium'>View all &gt; </p>
            </div>
            <Slider {...settings} className="  w-full  realState_slider ">
                <div className='mx-[20px] box border px-[12px] h-[183px]  bg-[#f9f9f9] relative'>
                    <div className='bg-[white]   box2 pt-[10px] pl-[10px] pb-[9px] pr-[12px] absolute bottom-[12px] '>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium inline-block'>Gharsansar: Real Estae</h2>
                        <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-light mt-[8px] inline-block'>14 Total Projects</p>
                    </div>
                </div>
                <div className='mx-[20px] box border px-[12px] h-[183px]  bg-[#f9f9f9] relative'>
                    <div className='bg-[white]   box2 pt-[10px] pl-[10px] pb-[9px] pr-[12px] absolute bottom-[12px] '>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium inline-block'>Gharsansar: Real Estae</h2>
                        <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-light mt-[8px] inline-block'>14 Total Projects</p>
                    </div>
                </div>
                <div className='mx-[20px] box border px-[12px] h-[183px]  bg-[#f9f9f9] relative'>
                    <div className='bg-[white]   box2 pt-[10px] pl-[10px] pb-[9px] pr-[12px] absolute bottom-[12px] '>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium inline-block'>Gharsansar: Real Estae</h2>
                        <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-light mt-[8px] inline-block'>14 Total Projects</p>
                    </div>
                </div>
                <div className='mx-[20px] box border px-[12px] h-[183px]  bg-[#f9f9f9] relative'>
                    <div className='bg-[white]   box2 pt-[10px] pl-[10px] pb-[9px] pr-[12px] absolute bottom-[12px] '>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium inline-block'>Gharsansar: Real Estae</h2>
                        <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-light mt-[8px] inline-block'>14 Total Projects</p>
                    </div>
                </div>
                <div className='mx-[20px] box border px-[12px] h-[183px]  bg-[#f9f9f9] relative'>
                    <div className='bg-[white]   box2 pt-[10px] pl-[10px] pb-[9px] pr-[12px] absolute bottom-[12px] '>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium inline-block'>Gharsansar: Real Estae</h2>
                        <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-light mt-[8px] inline-block'>14 Total Projects</p>
                    </div>
                </div>






            </Slider>
        </div>
    )
}

export default Sliders