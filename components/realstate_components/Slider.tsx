import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};

const Sliders = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between pb-[34px] '>
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