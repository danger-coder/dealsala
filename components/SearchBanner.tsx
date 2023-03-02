import React from 'react'

const SearchBanner = () => {
    return (
       
            <div className='relative mt-[21px]'>
                <img src="/../assets/searchbanner.jpg" alt="" className='w-full h-[195px]' />
                <div className='container mx-auto'>
                    <h2 className='text-[32px] leading-[48px] font-light absolute top-[41.2px] xl:right-[41px] 2xl:right-[185px]'>FIND YOUR CONFORM HOME</h2>
                    <h3 className='text-[18px] leading-[27px] font-normal absolute top-[89.42px] xl:right-[41px] 2xl:right-[185px] text-[#ABABAB]'>BUY or RENT 1000+ Properties </h3>
                    <button className='bg-[#0C0E0B] text-[16px] leading-[18.75px] text-white flex items-center gap-[6px] py-[14.45px] pl-[30.11px] pr-[15.42px] absolute bottom-[22.21px] xl:right-[41px] 2xl:right-[185px] group'>
                        FIND YOUR HOME <img src="/../assets/arrow_right.png" alt="" className='transform group-hover:translate-x-1 transition duration-300 ease-in-out' />
                    </button>
                </div>
            </div>
        
    )
}

export default SearchBanner