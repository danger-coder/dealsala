import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion"




const Sliders = () => {
    // var $ = require("jquery");
    // if (typeof window !== "undefined") {
    //     window.$ = window.jQuery = require("jquery");
    // }
    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>

            <div className='mt-[13px] '>
                <Slider {...settings} className=" md:h-[393px] h-[150px] landing">
                    <div className='relative'>
                        <img src="/../assets/mblview/ecommerce.png" className='md:w-[1190px]  md:h-[393px] w-full h-[150px] object-fill' alt="" />
                    </div>
                    <div className='relative'>
                        <img src="/../assets/mblview/ecommerce.png" className='md:w-[1190px]  md:h-[393px] w-full h-[150px] object-fill' alt="" />
                    </div>
                    <div className='relative'>
                        <img src="/../assets/mblview/ecommerce.png" className='md:w-[1190px]  md:h-[393px] w-full h-[150px] object-fill' alt="" />
                    </div>


                </Slider>

            </div>


        </>
    )
}

export default Sliders