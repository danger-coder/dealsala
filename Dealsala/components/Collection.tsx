import React from 'react'

const Collection = () => {
    return (
        <div className='mt-[138px] container mx-auto pb-[65px]'>
            <div className='grid grid-cols-3 gap-[31.33px]'>
                <div className='winter pt-[16px] pl-[17px] pb-[5px] pr-[27.67px] relative'>
                    <img src="/../assets/winter.png" alt="" className='w-full'/>
                    <div className='p-[10px] bg-[#FFFFFF]/90 flex items-center justify-center absolute bottom-[20px] left-[50%] transform translate-x-[-50%]'>
                        <h2 className='text-[20px] leading-[24.3px] font-normal tracking-[0.02em] text_title whitespace-pre'>WINTER COLLECTION</h2>
                    </div>
                </div>
                <div className='flex flex-col gap-[32px]'>
                    <div className='relative'>
                        <img src="/../assets/holiday.jpg" alt="" className='w-full' />
                        <div className='p-[10px] bg-[#FFFFFF]/90 flex items-center justify-center absolute bottom-[18px] left-[50%] transform translate-x-[-50%]'>
                            <h2 className='text-[20px] leading-[24.3px] font-normal tracking-[0.02em] text_title whitespace-pre'>HOLIDAY PACKAGES</h2>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/../assets/festive.jpg" alt="" className='w-full' />
                        <div className='p-[10px] bg-[#FFFFFF]/90 flex items-center justify-center absolute bottom-[41px] left-[50%] transform translate-x-[-50%]'>
                            <h2 className='text-[20px] leading-[24.3px] font-normal tracking-[0.02em] text_title whitespace-pre'>FESTIVE GRAND OFFER</h2>
                        </div>
                    </div>

                </div>
                <div className='relative'>
                    <img src="/../assets/flashSale.jpg" alt="" className='w-full'/>
                    <div className='w-[192px] h-[192px] rounded-full bg-white/90 absolute top-[40%] cursor-pointer left-[50%] transform translate-x-[-50%] transform-translate-y-[-50%] flex items-center justify-center flex-col'>
                        <img src="/../assets/flash.png" alt="" />
                        <h1 className='text-[12.71px] leading-[15.44px] font-normal tracking-[2%]'>DISCOUNT UPTO</h1>
                        <p className='text-[30.1px] leading-[36.67px] text-[#F65128]  tracking-[0.02em] font-semibold'> 20%</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Collection