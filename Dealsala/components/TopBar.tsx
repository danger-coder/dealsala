import Link from 'next/link'
import React from 'react'

const TopBar = () => {
    return (
        <div className='flex items-center container mx-auto   py-[8px] w-full  '>
           
                <div>
                    <img src="/../assets/logo.png" className='w-[154.02px] h-[45.01px] object-contain cursor-pointer' alt="" />
                </div>
                <div className='flex items-center  w-full ml-[36px]'>
                    <div className='flex items-center w-full  border-r-0 border border-[#C9C9C9;] justify-between pr-[16px]  py-[10px] pl-[17px]'>
                        <input type="text" placeholder='Search for anything ' className='placeholder:text-[12px] leading-[18px]  font-normal italic placeholder:text-[#000]/50 outline-none' />
                    </div>
                    <div className='flex items-center pl-[31px] pt-[11px] pb-[9px] pr-[24px] gap-[4px] search'>
                        <p className='text-[12px]  leading-[18px] font-medium text-[#FFFFFF]'>Search</p>
                    </div>
                </div>
          
            <div className='flex items-center'>
                <div className='w-[81px] ml-[52px] mr-[41px] cursor-pointer'>
                    <p className='text-[12px] leading-[18px] font-normal text-[#505056] whitespace-pre'>Sell on LOREM</p>
                </div>
                <div className='flex items-center gap-[8px] cursor-pointer'>
                    <img src="/../assets/user.png" alt="" className='w-[17px] h-[17px] object-contain' />
                    <Link href={""} className="text-[12px] leading-[18px] font-normal whitespace-pre">Login / Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar