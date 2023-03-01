import React from 'react'

type Props = {}

const WomenAccessories = (props: Props) => {
    return (
        <div className='mt-[30px] px-[12px]'>
            <h2 className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-bold tracking-[0.02em] mt-[27px] '>Women’s Accessories</h2>
            <div className='grid grid-cols-2 gap-[12px] mt-[18px]'>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/womenaccessories1.png" alt="" />
                    </div>
                   
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/womenaccessories2.png" alt="" />
                    </div>
                   
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
                <div>
                    <div className='bg-[#F6F6F6] h-[172px] w-full flex items-center justify-center'>
                        <img src="/../assets/mblview/womenaccessories3.png" alt="" />
                    </div>
                   
                    <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>Lorem ipsum Dolor sit</p>
                </div>
              
        
            </div>
        </div>
    )
}

export default WomenAccessories