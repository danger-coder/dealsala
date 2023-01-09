import React from 'react'

const FindYourConformHome = () => {
    return (
        <div className='w-full container mx-auto mt-[76px] mb-[60px]'>
            <div className='w-full home relative '>
                <img src="/../assets/findhome.jpg" alt="" />
                <img src="/../assets/findhome2.jpg" className='absolute top-0 right-0' alt="" />
                <h2 className='text-[40.61px] leading-[60.92px] font-light absolute top-[18px] right-[136px]'>FIND YOUR CONFORM HOME</h2>
                <h3 className='text-[22.64px] leading-[33.95px] font-normal absolute top-[82.17px] right-[136px] text-[#ABABAB]'>BUY or RENT 1000+ Properties </h3>
                <button className='bg-[#0C0E0B] text-white flex items-center gap-[6px] py-[14.45px] pl-[30px] pr-[15.42px] absolute bottom-[14.27px] right-[136px]'>
                    FIND YOUR HOME <img src="/../assets/arrow_right.png" alt="" />
                </button>
            </div>

        </div>
    )
}

export default FindYourConformHome