import React from 'react'
import Link from 'next/link'

type Props = {}

const FeaturedProducts = (props: Props) => {
    return (
        <div className='mt-[30px] px-[12px] '>
            <h2 className='text-[#2D2D2D] text-[16px] leading-[19.5px] font-medium font-poppins tracking-[0.01em]'>Featured Products</h2>
            <div className=' grid-cols-2 gap-[12px] mt-[18px] hidden'>
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
            <div className='grid grid-cols-2 gap-[10px] mt-[11px] '>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/shoes.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp1.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp2.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp3.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp4.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp4.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp5.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp7.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp7.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp7.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp9.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>
                <Link href="/ecommerce/detail">
                    <div className='bg-[#fff] pb-[5px] border'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp10.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                </Link>

            </div>
        </div >
    )
}

export default FeaturedProducts