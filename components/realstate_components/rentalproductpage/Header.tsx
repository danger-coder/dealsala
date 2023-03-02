import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <div className='container mx-auto mt-[33px] '>
                <p className='text-[#24263F] text-[12px] leading-[18px] font-normal font-poppins pl-[40px]'>Home / Online Shop / Electronics & Peripherals / <span className='font-semibold'>Samsung Tablet Mobile</span></p>
                <div className='grid grid-cols-2 gap-[14px] mt-[37px]'>
                    <div>
                        <img src="/../realstate/rentalproduct_banner.jpg" className='w-full' alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-[14px]'>
                        <div>
                            <img src="/../realstate/rentalproduct1.jpg" className='w-full' alt="" />
                        </div>
                        <div><img src="/../realstate/rentalproduct2.jpg" className='w-full' alt="" /></div>
                        <div><img src="/../realstate/rentalproduct3.jpg" className='w-full' alt="" /></div>
                        <div className='relative'><img src="/../realstate/rentalproduct1.jpg" className='w-full' alt="" />
                            <div className='absolute h-[100%] w-full bg-black top-0 opacity-80 flex items-center justify-center'>
                                <h1 className='text-white text-[40.95px] leading-[61.42px] font-normal font-poppins'>+10</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header