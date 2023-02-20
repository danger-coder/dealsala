import Link from 'next/link'
import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center pt-[14px] pb-[12px] gap-[135px] border-b-[1px] border-[#EDEDED] px-[15px]'>
                    <Link href="/categories">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.17978 13.7235L0.247191 7.63991C0.157303 7.54773 0.093483 7.44788 0.0557302 7.34034C0.0185766 7.2328 0 7.11758 0 6.99468C0 6.87178 0.0185766 6.75656 0.0557302 6.64902C0.093483 6.54149 0.157303 6.44163 0.247191 6.34946L6.17978 0.26589C6.34457 0.0969018 6.55041 0.00841395 6.7973 0.000425426C7.04479 -0.00694859 7.25843 0.0815393 7.4382 0.26589C7.61798 0.434878 7.71176 0.645959 7.71955 0.899134C7.72674 1.15292 7.64045 1.37199 7.46067 1.55634L3.05618 6.07293H13.1011C13.3558 6.07293 13.5694 6.16111 13.742 6.33747C13.914 6.51445 14 6.73352 14 6.99468C14 7.25585 13.914 7.47461 13.742 7.65097C13.5694 7.82795 13.3558 7.91643 13.1011 7.91643H3.05618L7.46067 12.433C7.62547 12.602 7.71176 12.8171 7.71955 13.0782C7.72674 13.3394 7.64045 13.5545 7.46067 13.7235C7.29588 13.9078 7.08614 14 6.83146 14C6.57678 14 6.35955 13.9078 6.17978 13.7235Z" fill="#2D2D2D" />
                        </svg>
                    </Link>
                    <h1 className='text-[#2D2D2D] text-[16px] leading-[24px] font-normal font-poppins'>Car Rent</h1>

                </div>
            
                <Link href="categories/subcategory">
                    <div className='pl-[12.5px] py-[14.5px]'>
                        <div className='flex  justify-start items-center   gap-[8px]  cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                            <img src="/../assets/carhire.png" alt="" className='md:w-[47px] md:h-[47px] h-[40px] w-[40px] ' />
                            <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Car Hire</p>
                        </div>
                    </div>
                </Link>
                <div className='h-[1px] w-full bg-[#EDEDED] '>
                </div>
                <div className='pl-[12.5px] py-[14.5px]'>
                    <div className='flex  justify-start items-center   gap-[8px]  cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                        <img src="/../assets/decoration.png" alt="" className='md:w-[47px] md:h-[47px] h-[40px] w-[40px]' />
                        <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Hari Salon</p>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#EDEDED] '>
                </div>
                <div className='pl-[12.5px] py-[14.5px]'>
                    <div className='flex  justify-start items-center   gap-[8px]  cursor-pointer transform hover:translate-y-[-7px] transition duration-300 ease-in-out'>
                        <img src="/../assets/flight.png" alt="" className='md:w-[48px] md:h-[47px] h-[40px] w-[40px]' />
                        <p className='text-[13px] leading-[19.5px] tracking-[0.02em] font-normal text-[#2D2D2D]'>Computer Services</p>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#EDEDED] '>
                </div>

            </div>
        </div>
    )
}

export default index