import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='h-[144px] w-full realstate_mbl_banner mt-[12px] flex items-center justify-end pr-[20.23px] md:hidden'>
            <div className='flex items-end justify-end flex-col'>
                <h1 className='text-[#0F110E] text-[21.47px] leading-[32.2px] font-light font-poppins'>FIND YOUR CONFORM HOME</h1>
                <p className='text-[#ABABAB] text-[11.97px] font-normal font-poppins leading-[17.95px]'>BUY or RENT 1000+ Properties </p>
            </div>
        </div>
    )
}

export default Banner