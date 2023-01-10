import React from 'react'

const FeaturedCatogories = () => {
    return (
        <div className='featured'>
            <div className=' container mx-auto'>
                <h1 className='text-center text-[36px] leading-[54px] font-bold text-white pt-[40px] tracking-[0.02em]'>Featured Categories</h1>
                <p className='text-[16px] leading-[24px] font-normal tracking-[0.02em] text-center text-white mt-[14px]'>Some subheading here for categories, lorem ipsum </p>
                <div className='flex items-center justify-between mt-[91px] pb-[35px]'>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/rentals.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Rentals</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/jobss.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/grocery.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Grocery</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer '>
                        <img src="/../assets/kitchen.png" alt="" />
                        <p className='text-center text-[18px] leading-[21.09px] tracking-[0.02em] font-bold mb-[-20px]'>Kitchen <br></br> Appliances</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/flights.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Flight</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/electronics.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Electronics</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/f_cars.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Cars </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[30px] text-white cursor-pointer'>
                        <img src="/../assets/vacation.png" alt="" />
                        <p className='text-[18px] leading-[21.09px] tracking-[0.02em] font-bold'>Vacation </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCatogories