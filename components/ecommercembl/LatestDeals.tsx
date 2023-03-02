import React from 'react'

type Props = {}

const LatestDeals = (props: Props) => {
    return (
        <div className='mt-[30px] px-[12px] '>
            <h2 className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-bold font-poppins tracking-[0.02em]'>Latest Deals</h2>
            <div className='grid grid-cols-2 gap-[12px] mt-[18px]'>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/bag.png" alt="" />
                    </div>
                    <h2 className='text-[13px] leading-[19.5px] font-normal font-poppins mt-[7px]'>$ 250</h2>
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/hat.png" alt="" />
                    </div>
                    <h2 className='text-[13px] leading-[19.5px] font-normal font-poppins mt-[7px]'>$ 250</h2>
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/redjacket.png" alt="" />
                    </div>
                    <h2 className='text-[13px] leading-[19.5px] font-normal font-poppins mt-[7px]'>$ 250</h2>
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/bag2.png" alt="" />
                    </div>
                    <h2 className='text-[13px] leading-[19.5px] font-normal font-poppins mt-[7px]'>$ 250</h2>
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/hat2.png" alt="" />
                    </div>
                    <h2 className='text-[13px] leading-[19.5px] font-normal font-poppins mt-[7px]'>$ 250</h2>
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/redjacket.png" alt="" />
                    </div>
                    <h2 className='text-[13px] leading-[19.5px] font-normal font-poppins mt-[7px]'>$ 250</h2>
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
            </div>
        </div>
    )
}

export default LatestDeals