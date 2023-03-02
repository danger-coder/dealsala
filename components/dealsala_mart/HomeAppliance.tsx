import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {}

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

const HomeAppliance = (props: Props) => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#24263F] text-[25px] leading-[37.5px] tracking-[0.02em] font-medium'>Home Appliances </h1>
                    <p className='text-[#2D2D2D] text-[16px] leading-[24px] font-medium'>View All &gt; </p>
                </div>
                <Slider {...settings} className="mt-[28.5px] ">
                    <div className='cursor-pointer '>
                        <div className=' transform hover:scale-[105%] transition-all duration-200 ease-in-out bg-[#F9F9F9]  border border-[#EDEDED] rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%] '>
                            {/* <img src="/../assets/microwave.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>

                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            {/* <img src="/../assets/deepfridge.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            {/* <img src="/../assets/geyser.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            {/* <img src="/../assets/refrigerator.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]'>
                            {/* <img src="/../assets/chimney.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]' >
                            {/* <img src="/../assets/chimney.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]' >
                            {/* <img src="/../assets/homeheater.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className=' border border-[#EDEDED] hover:scale-[105%] transition-all  bg-[#F9F9F9] duration-200 ease-in-out rounded-[5px]  flex items-center justify-center flex-col w-[106px] h-[100px] md:w-[228px] md:h-[228px]  2xl:w-[93%]' >
                            {/* <img src="/../assets/vaccumeCleaner.png" alt='' className='w-[122px] h-[72px] object-cover' /> */}
                        </div>
                        <div className='flex items-center gap-[36.66px] pl-[8px]  justify-between pr-[15px] 2xl:pr-[25px] pt-[6px]'>
                            <div className='flex  flex-wrap'>
                                <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal w-[149px]'>Playstation 3, 4GB RAM, 16GB ROM</p>
                            </div>
                            {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17C9.40868 16.9985 9.31924 16.9737 9.24009 16.9277C9.14151 16.8825 6.91887 15.6078 4.66038 13.5646C1.5684 10.753 1.38863e-06 7.95948 1.38863e-06 5.24733C-0.000811471 4.12521 0.355262 3.03241 1.01588 2.12959C1.6765 1.22676 2.60682 0.561528 3.67008 0.231669C4.73334 -0.0981905 5.87347 -0.0752737 6.92286 0.297051C7.97225 0.669375 8.87556 1.37147 9.5 2.30012C10.1244 1.37147 11.0277 0.669375 12.0771 0.297051C13.1265 -0.0752737 14.2667 -0.0981905 15.3299 0.231669C16.3932 0.561528 17.3235 1.22676 17.9841 2.12959C18.6447 3.03241 19.0008 4.12521 19 5.24733C19 7.95948 17.4316 10.753 14.3396 13.5646C12.0811 15.6078 9.85849 16.8825 9.75991 16.9277C9.68076 16.9737 9.59132 16.9985 9.5 17ZM5.19811 1.08869C4.10472 1.08869 3.05611 1.52683 2.28297 2.30673C1.50982 3.08663 1.07547 4.14439 1.07547 5.24733C1.07547 10.4275 8.04811 14.9478 9.5 15.8247C10.9519 14.9478 17.9245 10.4275 17.9245 5.24733C17.9266 4.2844 17.5974 3.35057 16.993 2.60523C16.3886 1.85988 15.5465 1.34921 14.6104 1.16036C13.6743 0.971514 12.7023 1.1162 11.8602 1.56972C11.0181 2.02324 10.3582 2.75749 9.99292 3.64716C9.95434 3.7474 9.88663 3.83353 9.79867 3.89426C9.7107 3.955 9.6066 3.9875 9.5 3.9875C9.3934 3.9875 9.2893 3.955 9.20133 3.89426C9.11337 3.83353 9.04566 3.7474 9.00708 3.64716C8.6937 2.88888 8.1647 2.24121 7.48681 1.78588C6.80893 1.33055 6.01254 1.08795 5.19811 1.08869Z" fill="#D9D9D9" />
                            </svg> */}
                        </div>
                        <div className='pl-[8px] mt-[13px]
                         '>
                            <p className='text-[#7352E4] text-[18px] leading-[27px] font-semibold'>Rs 120,000</p>
                            {/* <div className='flex items-center
                         '>
                                <p className='text-[#AEAEAE] text-[14px] leading-[21px] font-light line-through pr-[5px]'>Rs 140,000</p> <span className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal'>-20%</span>
                            </div> */}
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default HomeAppliance