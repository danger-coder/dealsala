import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}

const Banner = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='container mx-auto '>
                <Slider {...settings} className="mart">
                    <div>
                        <img src="/../mart/small_banner.png" className='w-full h-[336px] object-cover' alt="" />
                    </div>
                    <div>
                        <img src="/../mart/small_banner.png" className='w-full h-[336px] object-cover' alt="" />
                    </div>
                    <div>
                        <img src="/../mart/small_banner.png" className='w-full h-[336px] object-cover' alt="" />
                    </div>
                    <div>
                        <img src="/../mart/small_banner.png" className='w-full h-[336px] object-cover' alt="" />
                    </div>
                    <div>
                        <img src="/../mart/small_banner.png" className='w-full h-[336px] object-cover' alt="" />
                    </div>
                    <div>
                        <img src="/../mart/small_banner.png" className='w-full h-[336px] object-cover' alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner