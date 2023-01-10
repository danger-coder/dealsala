import React from 'react'

const Newsletter = () => {
    return (
        <div className='newsletter mt-[325px]'>
            <div className='relative'>
                <div className='container mx-auto pt-[39px] pb-[41px] pl-[60px] '>
                    <h2 className='text-[32px] leading-[62.88px] tracking-[-0.02em] text-white font-bold'>Join Our Newsletter And Get</h2>
                    <p className='text-[18px] leading-[35.37px] font-normal text-white'>alerts about new products and services</p>
                    <div className='flex items-center w-[494px] h-[54px] mt-[11px]'>
                        <input type="text" className='h-full outline-none border-none w-full pl-[10px] ' />
                        <div className='flex items-center bg-[#7D2AE7] py-[18px] pl-[22px] justify-center gap-[6px] pr-[22.43px] cursor-pointer '>
                            <p className='p-0 m-0 text-[16px] leading-[18.75px] text-white'>Subscribe</p>
                            <img src="/../assets/arrow_right.png" alt="" />
                        </div>
                    </div>
                    <img src="/../assets/mail.png" className='absolute left-[20px] bottom-0' alt="" />
                    <img src="/../assets/halfcircle.png" className='absolute top-0 right-[403px]' alt="" />
                    <img src="/../assets/newsletter.png" className='absolute top-[34px] right-[191px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Newsletter