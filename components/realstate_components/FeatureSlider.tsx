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

const FeatureSlider = () => {
    return (
        <div className='container mx-auto  mb-[50px] md:mb-0'>
            <div className='flex items-center justify-between pb-[16px] px-[12px] md:px-0'>
                <p className='text-[#0E1133] text-[16px] lading-[24px] font-medium'>Featured Properties for Sale</p>
                <p className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium'> &gt; </p>
            </div>
            <Slider {...settings} className="  w-full  realState_slider ">
                <div className='mx-[20px] box   h-[183px]   relative'>
                    <div className='w-full'>
                        <img src="/../realstate/mblview/sofa.png" className='' alt="" />
                    </div>
                    <h2 className='text-[14px] text-black leading-[21px] font-semibold font-poppins mt-[8px]'>$1,200,000</h2>
                    <p className='text-black text-[12px] leading-[18px] font-normal font-poppins'>2 Plough Close, Luton, LU4 0SS</p>
                </div>
                <div className='mx-[20px] box   h-[183px]   relative'>
                    <div className='w-full'>
                        <img src="/../realstate/mblview/sofa.png" className='' alt="" />
                    </div>
                    <h2 className='text-[14px] text-black leading-[21px] font-semibold font-poppins mt-[8px]'>$1,200,000</h2>
                    <p className='text-black text-[12px] leading-[18px] font-normal font-poppins'>2 Plough Close, Luton, LU4 0SS</p>
                </div>
                <div className='mx-[20px] box   h-[183px]   relative'>
                    <div className='w-full'>
                        <img src="/../realstate/mblview/sofa.png" className='' alt="" />
                    </div>
                    <h2 className='text-[14px] text-black leading-[21px] font-semibold font-poppins mt-[8px]'>$1,200,000</h2>
                    <p className='text-black text-[12px] leading-[18px] font-normal font-poppins'>2 Plough Close, Luton, LU4 0SS</p>
                </div>







            </Slider>
        </div>
    )
}

export default FeatureSlider