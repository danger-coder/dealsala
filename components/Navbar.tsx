import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full border border-[#EDEDED] border-l-0 border-r-0'>
            <ul className='flex items-center gap-[64px] pl-[63.5px] pt-[15px] pb-[16px] text-[14px] leading-[21px] font-normal text-[#2D2D2D]'>
                <li><Link href={""}>Home Appliances</Link></li>
                <li><Link href={""}>Jobs</Link></li>
                <li><Link href={""}>Online Shops</Link></li>
                <li><Link href={""}>Flight  Tickets</Link></li>
                <li><Link href={""}>Classified</Link></li>
                <li><Link href={""}>Property for Rent</Link></li>
                <li><Link href={""}>Property for Rent</Link></li>
            </ul>
        </div>
    )
}

export default Navbar