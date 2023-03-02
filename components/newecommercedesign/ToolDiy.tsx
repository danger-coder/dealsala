import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {
    name: string
    data: any
}

const ToolDiy = (props: Props) => {
    const settings2 = {
        dots: false,
        autoplay: false,
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
        <div className='mt-[30px] px-[12px]'>
            <h1 className='text-[#2D2D2D] text-[16px] leading-[19.5px] font-medium font-poppins tracking-[0.01em]'>{props.name}</h1>
            <Slider {...settings2} className=" holiday mt-[19px] ">

                {
                    props?.data?.map((data: any) => (
                        <div className='cursor-pointer relative'>
                            <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[88%] h-[67px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                                <img src={data.img} alt="" className='    ' />
                            </div>
                            <h2 className='text-black text-[11px] font-normal leading-[15px] tracking-[0.02em] text-center mt-[5px]'>{data.name}</h2>
                        </div>
                    ))
                }

                {/* <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[88%] h-[67px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../assets/mblview/lamp.png" alt="" className='    ' />
                    </div>
                    <h2 className='text-black text-[11px] font-normal leading-[15px] tracking-[0.02em] text-center mt-[5px]'>Electronic &
                        Appliances</h2>
                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[88%] h-[67px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../assets/mblview/cap.png" alt="" className='' />
                    </div>
                    <h2 className='text-black text-[11px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>Kids Wears</h2>
                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[88%] h-[67px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../assets/mblview/machinary.png" alt="" className='    ' />
                    </div>
                    <h2 className='text-black text-[11px] font-normal leading-[15px] tracking-[0.02em] text-center mt-[5px]'>Machinery Parts</h2>
                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[88%] h-[67px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/shoes.png" alt="" className='w-full    ' />
                    </div>
                    <h2 className='text-black text-[11px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>White Tees</h2>
                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[88%] h-[67px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/shoes.png" alt="" className='w-full    ' />
                    </div>
                    <h2 className='text-black text-[11px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>White Tees</h2>
                </div> */}




            </Slider>
        </div>
    )
}

export default ToolDiy