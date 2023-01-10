import React from 'react'

const DailyEssentials = () => {
    return (
        <div>
            <div className=' w-full container mx-auto'>
                <h2 className='text-[22px] leading-[33px] font-medium tracking-[2%]'>Daily Essentials</h2>
                <div className='grid  grid-cols-4  mt-[25px] gap-[24px]'>

                    <div>
                        <img src="/../assets/essentials1.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Grocery</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>12938 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/../assets/essential2.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Kitchen </p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>1600 Products</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/../assets/essentials3.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Bathroom Essentials</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>1200 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/../assets/essential4.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>lorem ipsum</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px] cursor-pointer'>184520 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyEssentials