import Link from 'next/link'
import React from 'react'
import { Select } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const TopBar = () => {


    return (
        <div className=' container mx-auto  pt-[22px] px-[12px] md:px-0'>

            <div className=' sm:flex flex  items-center justify-between'>
                <Link href="/">
                    <div className='w-[154.02px]'>
                        <img src="/../assets/logo.png" className='md:w-full md:h-[45.01px] h-[32px] w-[116px] object-contain cursor-pointer' alt="" />
                    </div>
                </Link>
                <div className='md:flex items-center  w-full ml-[36px] hidden'>
                    {/* <div className='flex items-center border   border-[#C9C9C9] border-r-0 py-[10px] pl-[17px] gap-[12px] pr-[24px] cursor-pointer '>
                    <p className='text-[12px] leading-[18px] font-normal text-[#505056]'>Kathmandu</p>
                    <img src="/../assets/arrow_down.png" alt="" />
                </div> */}
                    <Select className=''
                        defaultValue="Kathmandu"
                        style={{ width: 120, }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Kathmandu',
                                label: 'Kathmandu',
                            },
                            {
                                value: 'Kathmandu',
                                label: 'Kathmandu',
                            },

                        ]}
                    />
                    <div className='flex items-center w-full  border-r-0 border border-[#C9C9C9] justify-between pr-[16px]  py-[10px] pl-[17px]'>
                        <input type="text" placeholder='Search for anything ' className='placeholder:text-[12px] leading-[18px]  font-normal placeholder:italic text-[12px] placeholder:text-[#000]/50 outline-none' />
                    </div>
                    <Link href="/search">
                        <div className='flex items-center pl-[31px] pt-[11px] pb-[9px] pr-[24px] gap-[4px] search'>
                            <p className='text-[12px]  leading-[18px] font-medium text-[#FFFFFF]'>Search</p>
                        </div>
                    </Link>
                </div>

                <div className='md:flex items-center gap-[41px] hidden'>
                    <div className='w-[81px] ml-[52px]  cursor-pointer'>
                        <p className='text-[12px] leading-[18px] font-normal text-[#505056] whitespace-pre'>Sell on LOREM</p>
                    </div>
                    <div className='flex items-center gap-[8px] cursor-pointer'>
                        <img src="/../assets/user.png" alt="" className='w-[17px] h-[17px] object-contain' />
                        <Link href={""} className="text-[12px] leading-[18px] font-normal whitespace-pre mr-[16px]">Login / Sign Up</Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center gap-[19.75px]'>
                    <svg className='cursor-pointer' width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0407 15.6339C18.4474 15.1181 17.928 14.5267 17.4965 13.8758C17.0254 12.9773 16.743 11.996 16.6659 10.9896V8.02546C16.6634 7.66541 16.6305 7.30617 16.5675 6.9514C16.0833 6.85699 15.6179 6.68678 15.1894 6.44737C15.3528 6.9603 15.4357 7.49436 15.4355 8.03146V10.9956C15.5109 12.2233 15.8572 13.4207 16.4506 14.5058C16.8754 15.1623 17.3793 15.7666 17.9517 16.3059H2.19615C2.76855 15.7666 3.27252 15.1623 3.69726 14.5058C4.29071 13.4207 4.63696 12.2233 4.71237 10.9956V8.02546C4.70913 7.33103 4.84636 6.6428 5.11622 6.00018C5.38607 5.35755 5.78324 4.77315 6.28498 4.28044C6.78673 3.78773 7.38319 3.39639 8.04022 3.12883C8.69724 2.86126 9.40193 2.72273 10.1139 2.72116C11.156 2.72197 12.1746 3.02252 13.0423 3.5852C12.9467 3.24258 12.893 2.8901 12.8824 2.53514V2.15712C12.24 1.84892 11.5499 1.64619 10.8399 1.55709V0.801046C10.8399 0.588595 10.7534 0.384846 10.5993 0.234621C10.4453 0.0843957 10.2364 0 10.0186 0C9.80075 0 9.59185 0.0843957 9.43782 0.234621C9.2838 0.384846 9.19726 0.588595 9.19726 0.801046V1.58709C7.60738 1.80584 6.15232 2.57819 5.1007 3.76157C4.04908 4.94496 3.47193 6.45945 3.47579 8.02546V10.9896C3.39874 11.996 3.11637 12.9773 2.64525 13.8758C2.2213 14.5252 1.71025 15.1165 1.12568 15.6339C1.06005 15.6901 1.00746 15.7593 0.971392 15.8369C0.935325 15.9145 0.916615 15.9987 0.916504 16.0839V16.9C0.916504 17.0591 0.981321 17.2117 1.0967 17.3243C1.21207 17.4368 1.36855 17.5 1.53172 17.5H18.6346C18.7978 17.5 18.9543 17.4368 19.0696 17.3243C19.185 17.2117 19.2498 17.0591 19.2498 16.9V16.0839C19.2497 15.9987 19.231 15.9145 19.195 15.8369C19.1589 15.7593 19.1063 15.6901 19.0407 15.6339Z" fill="#817D79" />
                        <path d="M17.1667 5.83333C18.7775 5.83333 20.0833 4.5275 20.0833 2.91667C20.0833 1.30584 18.7775 0 17.1667 0C15.5558 0 14.25 1.30584 14.25 2.91667C14.25 4.5275 15.5558 5.83333 17.1667 5.83333Z" fill="#F65128" />
                    </svg>
                    <img src="/../assets/profile.png" className='cursor-pointer' alt="" />
                </div>
            </div>
            <div className='border md:hidden border-[#EDEDED] rounded-[2px] mt-[12px] flex items-center pt-[12px] pl-[10.16px] pb-[11px] gap-[15.16px]'>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10301 3.84211H19.8408M1.15869 11.4211H19.8408M1.15869 19H19.8408M1.15869 6.68421L3.70625 3.84211L1.15869 1" stroke="#2D2D2D" stroke-width="1.69838" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input type="text" placeholder='Search products' className='placeholder:text-[#817D79] text-[#817D79] text-[13px] font-normal font-poppins leading-[19.5px]' />
            </div>
        </div>
    )
}

export default TopBar