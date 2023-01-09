import React from 'react'

const Categories = () => {
    return (
        <div className='w-full flex items-center mx-auto container mt-[32px] justify-between  pb-[3px]'>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px]  cursor-pointer'>
                <img src="/../assets/house.png" alt="" className='w-[47px] h-[47px] ' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Real estate</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/jobs.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Jobs</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/carhire.png" alt="" className='w-[47px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Car Hire</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/service.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Services</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/apparels.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Aparrels</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/decoration.png" alt="" className='w-[47px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Decorations</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/flight.png" alt="" className='w-[48px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Flights</p>
            </div>
            <div className='flex flex-col justify-center items-center pt-[22px] px-[45px] gap-[8px] pb-[13px] cursor-pointer'>
                <img src="/../assets/hotels.png" alt="" className='w-[47px] h-[47px]' />
                <p className='text-[13px] leading-[19.5px] tracking-[2%] font-normal'>Hotels</p>
            </div>
            <div className=' py-[35px] px-[24px]'>
                <p className='text-[13px] leading-[19.5px] font-normal tracking-[2%] w-[88px]'><span className='whitespace-pre'>EXPLORE ALL</span> CATEGORIES</p>
            </div>

        </div>
    )
}

export default Categories