import React from 'react'

type Props = {}

const Offer = (props: Props) => {
    return (
        <div>
            <div className='container mx-auto mt-[16px] relative mb-[36px]'>
                <img src="/../mart/offer.png" className='w-full ' alt="" />
                <img src="/../mart/christmas.png" className='absolute left-[42px] bottom-[8px]' alt="" />
                <img src="/../mart/grass.png" className='absolute left-[29px]  bottom-0' alt="" />
                <p className='text-[#24263F] text-[19.33px] leading-[29px] font-normal absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Lorem ipsum dolor something Flat <span className='font-bold'>20% OFF</span></p>
                <button className='text-[15px] leading-[22.5px] font-normal text-white offer_btn py-[9px] px-[28px] absolute right-[44px] top-[50%] transform translate-y-[-50%]'>Button text</button>
            
            </div>
        </div>
    )
}

export default Offer