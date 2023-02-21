import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Rate } from 'antd';

type Props = {}

const index = (props: Props) => {
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
    const settings2 = {
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
    return (
        < div className='bg-[#F6F6F6] pb-[120px]' >
            <div className='container mx-auto property_detail h-[295px] pt-[20px]'>
                <div className='flex items-center justify-between pl-[22px] pr-[18px] '>
                    <svg className='cursor-pointer' width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10811 17L0 8.5L8.10811 0L10 1.98333L3.78378 8.5L10 15.0167L8.10811 17Z" fill="white" />
                    </svg>
                    <h2 className='text-white text-[13px] leading-[19.5px] font-normal font-poppins'>Product Name</h2>
                    <svg className='cursor-pointer' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.60196 22C5.99678 22 5.4789 21.7848 5.0483 21.3543C4.61697 20.9231 4.40131 20.405 4.40131 19.8C4.40131 19.195 4.61697 18.6769 5.0483 18.2457C5.4789 17.8152 5.99678 17.6 6.60196 17.6C7.20715 17.6 7.72503 17.8152 8.15563 18.2457C8.58696 18.6769 8.80262 19.195 8.80262 19.8C8.80262 20.405 8.58696 20.9231 8.15563 21.3543C7.72503 21.7848 7.20715 22 6.60196 22ZM17.6052 22C17.0001 22 16.4822 21.7848 16.0516 21.3543C15.6202 20.9231 15.4046 20.405 15.4046 19.8C15.4046 19.195 15.6202 18.6769 16.0516 18.2457C16.4822 17.8152 17.0001 17.6 17.6052 17.6C18.2104 17.6 18.7287 17.8152 19.16 18.2457C19.5906 18.6769 19.8059 19.195 19.8059 19.8C19.8059 20.405 19.5906 20.9231 19.16 21.3543C18.7287 21.7848 18.2104 22 17.6052 22ZM6.60196 16.5C5.77672 16.5 5.1532 16.1377 4.73141 15.4132C4.30962 14.6894 4.29128 13.97 4.67639 13.255L6.16183 10.56L2.20065 2.2H1.07282C0.76106 2.2 0.504317 2.0944 0.30259 1.8832C0.100863 1.67273 0 1.41167 0 1.1C0 0.788333 0.105631 0.5269 0.316894 0.3157C0.527424 0.105233 0.788568 0 1.10033 0H2.88836C3.09009 0 3.28264 0.0550001 3.46603 0.165C3.64942 0.275 3.78696 0.430833 3.87865 0.6325L4.62138 2.2H20.8512C21.3464 2.2 21.6856 2.38333 21.869 2.75C22.0524 3.11667 22.0432 3.50167 21.8415 3.905L17.9353 10.945C17.7336 11.3117 17.4677 11.5958 17.1376 11.7975C16.8075 11.9992 16.4316 12.1 16.0098 12.1H7.81233L6.60196 14.3H18.7331C19.0448 14.3 19.3016 14.4052 19.5033 14.6157C19.705 14.8269 19.8059 15.0883 19.8059 15.4C19.8059 15.7117 19.7003 15.9727 19.489 16.1832C19.2785 16.3944 19.0173 16.5 18.7056 16.5H6.60196Z" fill="white" />
                    </svg>
                </div>
            </div>
            {/* //slider */}
            <Slider {...settings} className=" holiday">
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center items-center justify-center flex-col w-[103px] h-[74px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/property2.png" alt="" className='w-full h-[100%] object-cover  ' />
                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center justify-center flex-col w-[103px] h-[74px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/property3.png" alt="" className='w-full h-[100%] object-cover  ' />
                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center justify-center flex-col w-[103px] h-[74px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/property4.png" alt="" className='w-full h-[100%] object-cover  ' />
                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center justify-center flex-col w-[103px] h-[74px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/property5.png" alt="" className='w-full h-[100%] object-cover  ' />
                    </div>

                </div>
                <div className='cursor-pointer relative'>
                    <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center justify-center flex-col w-[103px] h-[74px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                        <img src="/../realstate/mblview/property5.png" alt="" className='w-full h-[100%] object-cover  ' />
                    </div>

                </div>


            </Slider>
            <div className='pt-[14px] pl-[12px]   pb-[5px] bg-white' >
                <h2 className='text-[12px] text-black leading-[15.84px] font-normal font-poppins '>Wayfairer Unisex Rimless Bottom oval Sunglasses </h2>
                <div className='flex items-center justify-between pr-[8px] mt-[14px]'>
                    <div>
                        <p className='text-[#2D2D2D] opacity-[0.3] text-[13px] leading-[17.16px] font-medium font-poppins'>$ 1800</p>
                        <p className='text-[#F65128] text-[15px] leading-[19.8px] font-medium font-poppins'>$ 1499.00</p>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <Rate />
                        <p className='text-[#2D2D2D] text-[10px] leading-[13.2px] opacity-[0.4] font-medium font-poppins'>(1203)</p>
                    </div>
                </div>
            </div>

            <div className='pl-[12px] bg-white border-b-[0px]  py-[14px] mt-[8px]'>
                <h2 className='text-black text-[12px] leading-[15.84px] font-medium font-poppins '>Select Color</h2>
                <div className='flex items-center gap-[16px] mt-[21px]'>
                    <div>
                        <div className='bg-[#F2F2F2] pt-[12px] pb-[11px] px-[7px] border hover:border-[#000] border-[#fff]'>
                            <img src="/../realstate/mblview/sunglass.png" alt="" />
                        </div>
                        <p className='text-[12px] leading-[15.84px] font-normal font-poppins mt-[2px] text-center'>BLack</p>
                    </div>
                    <div>
                        <div className='bg-[#F2F2F2] pt-[12px] pb-[11px] px-[7px] border hover:border-[#000] border-[#fff]'>
                            <img src="/../realstate/mblview/tuttoise.png" alt="" />
                        </div>
                        <p className='text-[12px] leading-[15.84px] font-normal font-poppins mt-[2px] text-center'>Tortoise</p>
                    </div>
                    <div>
                        <div className='bg-[#F2F2F2] pt-[12px] pb-[11px] px-[7px] border hover:border-[#000] border-[#fff]'>
                            <img src="/../realstate/mblview/brown.png" alt="" />
                        </div>
                        <p className='text-[12px] leading-[15.84px] font-normal font-poppins mt-[2px] text-center'>Brown</p>
                    </div>
                </div>
            </div>
            <div className='bg-white pb-[20px]'>
                <div className='flex items-center justify-between px-[12px] pt-[14px]'>
                    <p className='text-[12px] leading-[15.84px] font-medium font-poppins'>Size</p>
                    <div className='flex items-center gap-[4px]'>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.6 5.2H4.4V6H3.6V5.2ZM3.6 2H4.4V4.4H3.6V2ZM4 0C1.788 0 0 1.8 0 4C0 5.06087 0.421427 6.07828 1.17157 6.82843C1.54301 7.19986 1.98396 7.4945 2.46927 7.69552C2.95457 7.89654 3.47471 8 4 8C5.06087 8 6.07828 7.57857 6.82843 6.82843C7.57857 6.07828 8 5.06087 8 4C8 3.47471 7.89654 2.95457 7.69552 2.46927C7.4945 1.98396 7.19986 1.54301 6.82843 1.17157C6.45699 0.800139 6.01604 0.505501 5.53073 0.304482C5.04543 0.103463 4.52529 0 4 0ZM4 7.2C3.15131 7.2 2.33737 6.86286 1.73726 6.26274C1.13714 5.66263 0.8 4.84869 0.8 4C0.8 3.15131 1.13714 2.33737 1.73726 1.73726C2.33737 1.13714 3.15131 0.8 4 0.8C4.84869 0.8 5.66263 1.13714 6.26274 1.73726C6.86286 2.33737 7.2 3.15131 7.2 4C7.2 4.84869 6.86286 5.66263 6.26274 6.26274C5.66263 6.86286 4.84869 7.2 4 7.2Z" fill="#808080" />
                        </svg>
                        <p className='text-black opacity-[0.5] text-[12px] leading-[15.84px] font-normal font-poppins'>Size Guide</p>
                    </div>
                </div>
                <div className='flex items-center pl-[15px] gap-[10px] mt-[22px]'>
                    <div className='bg-[#2D2D2D] rounded-[2px] border h-[30px] w-[56px] flex text-center items-center justify-center'>
                        <p className='text-[white] text-[12px] leading-[15.84px] font-bold font-poppins '>XS</p>
                    </div>
                    <div className='hover:bg-[#2D2D2D] border border-[#808080]  h-[30px] w-[56px] flex text-center items-center justify-center group'>
                        <p className='group-hover:text-[white] text-[#808080] text-[12px] leading-[15.84px] hover:font-bold font-normal font-poppins '>SM</p>
                    </div>
                    <div className='hover:bg-[#2D2D2D] border border-[#808080]  h-[30px] w-[56px] flex text-center items-center justify-center group'>
                        <p className='group-hover:text-[white] text-[#808080] text-[12px] leading-[15.84px] hover:font-bold font-normal font-poppins '>M</p>
                    </div>
                    <div className='hover:bg-[#2D2D2D] border border-[#808080]  h-[30px] w-[56px] flex text-center items-center justify-center group'>
                        <p className='group-hover:text-[white] text-[#808080] text-[12px] leading-[15.84px] hover:font-bold font-normal font-poppins '>L</p>
                    </div>
                    <div className='hover:bg-[#2D2D2D] border border-[#808080]  h-[30px] w-[56px] flex text-center items-center justify-center group'>
                        <p className='group-hover:text-[white] text-[#808080] text-[12px] leading-[15.84px] hover:font-bold font-normal font-poppins '>XL</p>
                    </div>

                </div>
            </div>
            <div className='bg-white mt-[8px] pt-[14px] px-[12px] pb-[16px]'>
                <h2 className='text-black text-[12px] leading-[15.84px] font-medium font-poppins mb-[14px]'>Product Details</h2>
                <p className='text-black opacity-[0.8] text-[12px] leading-[15.84px] font-normal font-poppins max-w-[366px]'> Ray-Ban ® RB4173 sunglasses are sporty and effortless. Think comfort with 100% UV protection, stop click hinges, and an interchangeable lens frame. Change up your look anytime with polar/gradient or polar/mirrored lenses.</p>
                <p className='text-black opacity-[0.8] text-[12px] leading-[15.84px] font-normal font-poppins max-w-[366px] mt-[20px]'>The propionate plastic sunglasses come with one set of additional lenses, comfortable rubber inserts on temples, and silicone nose pads to adjust the frame perfectly to the curves of your face.</p>
            </div>
            <div className='bg-white mt-[8px] pl-[11px] pr-[10px]'>
                <div className='py-[14px]  border-b-[1px] border-[#EDEDED]'>
                    <p className='text-black text-[14px] leading-[18.48px] font-medium font-poppins'>Reviews (1504)</p>
                </div>
                <div className='mt-[14px] mb-[16px] flex items-center justify-between'>
                    <div className='flex items-center gap-[7px]'>
                        <img src="/../realstate/mblview/reviews.png" alt="" />
                        <p>John Denver</p>
                        <Rate />
                    </div>
                    <div>
                        <p className='text-black opacity-[0.5] text-[12px] leading-[15.84px] font-normal font-poppins'>1d ago</p>

                    </div>
                </div>
                <p className='text-[#000000] opacity-[0.8] text-[12px] leading-[15.84px] font-normal font-poppins'>comfortable and best in price</p>
                <div className='flex items-center gap-[6px] mt-[16px]'>
                    <div>
                        <img src="/../realstate/mblview/profile1.png" alt="" />
                    </div>
                    <div>
                        <img src="/../realstate/mblview/profile2.png" alt="" />
                    </div>
                    <div>
                        <img src="/../realstate/mblview/profile3.png" alt="" />
                    </div>
                </div>
                <div className='h-[1px] w-[60%] bg-[#EDEDED] mt-[16px] mb-[23px] mx-auto'></div>

                {/* //second review */}
                <div className='mt-[14px] mb-[16px] flex items-center justify-between'>
                    <div className='flex items-center gap-[7px]'>
                        <img src="/../realstate/mblview/reviews.png" alt="" />
                        <p>John Denver</p>
                        <Rate />
                    </div>
                    <div>
                        <p className='text-black opacity-[0.5] text-[12px] leading-[15.84px] font-normal font-poppins'>5d ago</p>

                    </div>
                </div>
                <p className='text-[#000000] opacity-[0.8] text-[12px] leading-[15.84px] font-normal font-poppins'>Best for gifting friends and families 3 truly the best deal</p>
                <div className='flex items-center gap-[6px] mt-[16px]'>
                    <div>
                        <img src="/../realstate/mblview/profile4.png" alt="" />
                    </div>
                    {/* <div>
                        <img src="/../realstate/mblview/profile2.png" alt="" />
                    </div>
                    <div>
                        <img src="/../realstate/mblview/profile3.png" alt="" />
                    </div> */}
                </div>
                <div className='h-[1px] w-[60%] bg-[#EDEDED] mt-[16px] mb-[23px] mx-auto'></div>
            </div>
            <div className='bg-white mt-[8px] pt-[16px] pb-[21px]'>
                <p className='text-black text-[14px] leading-[18.48px] pl-[12px] font-medium font-poppins'>Other Products</p>
                <Slider {...settings2} className=" holiday mt-[21px]">
                    <div className='cursor-pointer relative'>
                        <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[95%] h-[153px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                            <img src="/../realstate/mblview/shoes.png" alt="" className='w-full    ' />
                        </div>
                        <h2 className='text-black text-[12px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>Best Confy Shoes</h2>
                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[95%] h-[153px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                            <img src="/../realstate/mblview/tshirt.png" alt="" className='w-full    ' />
                        </div>
                        <h2 className='text-black text-[12px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>Cotton Blue Shirts</h2>
                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[95%] h-[153px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                            <img src="/../realstate/mblview/tshirt.png" alt="" className='w-full' />
                        </div>
                        <h2 className='text-black text-[12px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>White Tees</h2>
                    </div>
                    <div className='cursor-pointer relative'>
                        <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED]   flex items-center  justify-center flex-col w-[95%] h-[153px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                            <img src="/../realstate/mblview/shoes.png" alt="" className='w-full    ' />
                        </div>
                        <h2 className='text-black text-[12px] font-normal leading-[18px] tracking-[0.02em] text-center mt-[5px]'>White Tees</h2>
                    </div>




                </Slider>
            </div>
        </ div>
    )
}

export default index