import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='px-[12px] mt-[27px] relative'>
            <img src="/../assets/mblview/e_banner.png" alt="" className='w-full' />
            <div className='absolute top-[14.38px] left-[28.91px]'>
                <h2 className='text-white text-[13px] leading-[19.5px] font-normal font-poppins'>Winter Sale Bananza</h2>
                <h1 className='text-[30.96px] text-white font-bold font-poppins leading-[46.44px]'>30% off</h1>
            </div>
            <img src="/../assets/mblview/cloths.png" className='absolute top-[5px] right-[31.75px]' alt="" />

        </div>
    )
}

export default Banner