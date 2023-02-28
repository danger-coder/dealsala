import Link from 'next/link'
import React, { useState } from 'react'
import { Select } from 'antd';
import { Button, Drawer } from 'antd';
import { useRouter } from 'next/router';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const RealstateTopbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    const searchClick = () => {
        router.push("/productsearch")
    }



    return (
        <div className=' container mx-auto  pt-[22px] px-[12px] md:px-0 md:hidden'>

            <div className=' sm:flex flex  items-center justify-between'>
                <svg className='sm:hidden' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10301 3.84211H19.8408M1.15869 11.4211H19.8408M1.15869 19H19.8408M1.15869 6.68421L3.70625 3.84211L1.15869 1" stroke="#2D2D2D" strokeWidth="1.69838" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Link href="/">
                    <div className='w-[154.02px] flex items-center justify-center'>
                        {/* <img src="/../assets/logo.png" className='md:w-full md:h-[45.01px] h-[32px] w-[116px] object-contain cursor-pointer' alt="" /> */}
                        <img src="/../assets/mblview/buyselo.png" className='md:w-full md:h-[45.01px] h-[55px] mr-[-30px] w-[142px] object-contain cursor-pointer' alt="" />
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
                    <img src="/../assets/profile.png" className='cursor-pointer' alt="" onClick={showDrawer} />
                </div>
            </div>
            {/* //drawer */}
            <Drawer title="" placement="right" className='close_btn' onClose={onClose} open={open}>
                <div className='ml-[26px] flex items-center gap-[28px]'>
                    <div>
                        <img src="/../assets/mblview/profile.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[13px] leading-[19.5px] font-medium font-poppins mb-[6px]'>John Bretsikyavich</h1>
                        <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>+977-9812345678</p>
                    </div>
                </div>

                <div className='ml-[24px] mt-[47px] space-y-[37px]'>
                    <div className='flex items-center gap-[21px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0625 5.625C7.625 5.625 5.6875 7.5625 5.6875 10C5.6875 12.4375 7.625 14.375 10.0625 14.375C12.5 14.375 14.4375 12.4375 14.4375 10C14.4375 7.5625 12.5 5.625 10.0625 5.625ZM10.0625 13.125C8.3125 13.125 6.9375 11.75 6.9375 10C6.9375 8.25 8.3125 6.875 10.0625 6.875C11.8125 6.875 13.1875 8.25 13.1875 10C13.1875 11.75 11.8125 13.125 10.0625 13.125Z" fill="#2D2D2D" />
                            <path d="M19.25 7.9375L17.5 7.375L17.125 6.4375L18 4.8125C18.1875 4.4375 18.125 3.9375 17.8125 3.625L16.3125 2.125C16 1.8125 15.5 1.75 15.125 1.9375L13.5 2.8125L12.5625 2.4375L12 0.6875C11.875 0.3125 11.5 0 11.0625 0H8.9375C8.5 0 8.125 0.3125 8.0625 0.75L7.5 2.5C7.125 2.5625 6.8125 2.6875 6.5 2.875L4.875 2C4.5 1.8125 4 1.875 3.6875 2.1875L2.1875 3.6875C1.875 4 1.8125 4.5 2 4.875L2.8125 6.4375C2.6875 6.75 2.5625 7.125 2.4375 7.4375L0.6875 8C0.3125 8.125 0 8.5 0 8.9375V11.0625C0 11.5 0.3125 11.875 0.75 12L2.5 12.5625L2.875 13.5L2 15.125C1.8125 15.5 1.875 16 2.1875 16.3125L3.6875 17.8125C4 18.125 4.5 18.1875 4.875 18L6.5 17.125L7.4375 17.5L8 19.3125C8.125 19.6875 8.5 20 8.9375 20H11.0625C11.5 20 11.875 19.6875 12 19.3125L12.5625 17.5L13.5 17.125L15.125 18C15.5 18.1875 16 18.125 16.3125 17.8125L17.8125 16.3125C18.125 16 18.1875 15.5 18 15.125L17.125 13.5L17.5 12.5625L19.3125 12C19.6875 11.875 20 11.5 20 11.0625V8.9375C20 8.5 19.6875 8.0625 19.25 7.9375ZM18.75 10.875L16.5 11.5625L16.4375 11.875L15.875 13.1875L15.6875 13.5L16.8125 15.5625L15.5625 16.8125L13.5 15.6875L13.1875 15.875C12.75 16.125 12.3125 16.3125 11.875 16.4375L11.5625 16.5L10.875 18.75H9.125L8.4375 16.5L8.125 16.4375L6.8125 15.875L6.5 15.6875L4.4375 16.8125L3.1875 15.5625L4.3125 13.5L4.125 13.1875C3.875 12.75 3.6875 12.3125 3.5625 11.875L3.5 11.5625L1.25 10.875V9.125L3.375 8.5L3.5 8.1875C3.625 7.6875 3.8125 7.25 4.0625 6.8125L4.25 6.5L3.1875 4.4375L4.4375 3.1875L6.4375 4.3125L6.75 4.125C7.1875 3.875 7.625 3.6875 8.125 3.5625L8.4375 3.4375L9.125 1.25H10.875L11.5625 3.4375L11.875 3.5625C12.3125 3.6875 12.75 3.875 13.1875 4.125L13.5 4.3125L15.5625 3.1875L16.8125 4.4375L15.6875 6.5L15.875 6.8125C16.125 7.25 16.3125 7.6875 16.4375 8.125L16.5 8.4375L18.75 9.125V10.875Z" fill="#2D2D2D" />
                        </svg>
                        <p className='text-[#2D2D2D] leading-[19.5px] font-normal font-poppins'>Settings</p>
                    </div>
                    <div className='flex items-center gap-[21px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3333 10.0002H19.1666M9.99992 1.66683V0.833496M9.99992 19.1668V18.3335M16.6666 16.6668L15.8333 15.8335M16.6666 3.3335L15.8333 4.16683M3.33325 16.6668L4.16659 15.8335M3.33325 3.3335L4.16659 4.16683M0.833252 10.0002H1.66659M13.9999 12.9168L14.9999 7.0835L11.4999 8.8335L9.99992 7.0835L8.49992 8.8335L4.99992 7.0835L5.99992 12.9168H13.9999Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className='text-[#2D2D2D] leading-[19.5px] font-normal font-poppins'>What's New</p>
                    </div>
                    <div className='flex items-center gap-[21px]'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.21678C17 0.894072 16.8666 0.584579 16.6292 0.356388C16.3918 0.128197 16.0698 0 15.734 0H1.26596C0.930205 0 0.608203 0.128197 0.37079 0.356388C0.133377 0.584579 0 0.894072 0 1.21678V6.31858C0 13.9669 6.75479 16.5135 8.11117 16.9394C8.36357 17.0202 8.63643 17.0202 8.88883 16.9394C10.2452 16.5135 17 13.9669 17 6.31858V1.21678ZM8.55426 15.9486C8.5375 15.9569 8.51889 15.9613 8.5 15.9613C8.48111 15.9613 8.4625 15.9569 8.44574 15.9486C7.21596 15.5574 1.08511 13.2542 1.08511 6.31858V1.21678C1.08511 1.17068 1.10416 1.12647 1.13808 1.09387C1.17199 1.06127 1.21799 1.04296 1.26596 1.04296H15.734C15.782 1.04296 15.828 1.06127 15.8619 1.09387C15.8958 1.12647 15.9149 1.17068 15.9149 1.21678V6.31858C15.9149 13.2542 9.78404 15.5574 8.55426 15.9486ZM12.8676 5.03227C12.9167 5.08111 12.9552 5.13886 12.981 5.20215C13.0067 5.26544 13.0191 5.33301 13.0174 5.40094C13.0157 5.46887 13 5.5358 12.9712 5.59784C12.9423 5.65988 12.901 5.7158 12.8495 5.76234L7.55053 10.6295C7.44738 10.7223 7.31202 10.7749 7.17074 10.7772C7.03167 10.7772 6.89831 10.724 6.8 10.6295L4.15053 8.19591C4.04741 8.1014 3.98757 7.97138 3.98418 7.83447C3.98078 7.69756 4.03412 7.56495 4.13245 7.46584C4.23077 7.36672 4.36604 7.3092 4.50849 7.30594C4.65094 7.30268 4.7889 7.35394 4.89202 7.44845L7.17074 9.53437L12.108 5.01489C12.1588 4.96765 12.2189 4.9306 12.2847 4.90587C12.3506 4.88115 12.4209 4.86925 12.4915 4.87087C12.5622 4.87248 12.6319 4.88759 12.6964 4.91529C12.761 4.943 12.8191 4.98276 12.8676 5.03227Z" fill="black" />
                        </svg>
                        <p className='text-[#2D2D2D] leading-[19.5px] font-normal font-poppins'>Privacy</p>
                    </div>
                </div>
            </Drawer>
            <div className=' flex items-center gap-[9px] mt-[7px] sm:hidden'>
                <Select className='mbl_select'
                    defaultValue="Kathmandu"
                    style={{ width: 120, }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'bhaktapur',
                            label: 'bhaktapur',
                        },
                        {
                            value: 'lalitpur',
                            label: 'lalitpur',
                        },

                    ]}
                />

                <div className='border md:hidden border-[#EDEDED] rounded-[2px]  flex items-center justify-between py-[20px] pl-[10.16px] pr-[15px] h-[36px]  w-full'>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={searchClick}>
                        <path opacity="0.4" d="M5.75957 0C8.93886 0 11.5191 2.58029 11.5191 5.75957C11.5191 8.93886 8.93886 11.5191 5.75957 11.5191C2.58029 11.5191 0 8.93886 0 5.75957C0 2.58029 2.58029 0 5.75957 0ZM5.75957 10.2392C8.23427 10.2392 10.2392 8.23427 10.2392 5.75957C10.2392 3.28424 8.23427 1.27991 5.75957 1.27991C3.28424 1.27991 1.27991 3.28424 1.27991 5.75957C1.27991 8.23427 3.28424 10.2392 5.75957 10.2392ZM11.1896 10.2847L13 12.0945L12.0945 13L10.2847 11.1896L11.1896 10.2847Z" fill="black" />
                    </svg>

                    <input type="text" placeholder='Search products' className='placeholder:text-[#817D79] text-[#817D79] text-[13px] font-normal font-poppins leading-[19.5px] outline-none ' />
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M5 8.8421C4.40476 8.8421 3.89881 8.62719 3.48214 8.19737C3.06548 7.76754 2.85714 7.24561 2.85714 6.63158V2.21053C2.85714 1.59649 3.06548 1.07456 3.48214 0.644737C3.89881 0.214912 4.40476 0 5 0C5.59524 0 6.10119 0.214912 6.51786 0.644737C6.93452 1.07456 7.14286 1.59649 7.14286 2.21053V6.63158C7.14286 7.24561 6.93452 7.76754 6.51786 8.19737C6.10119 8.62719 5.59524 8.8421 5 8.8421ZM4.28571 14V11.7342C3.04762 11.5623 2.02381 10.9912 1.21429 10.0211C0.404762 9.05088 0 7.92105 0 6.63158H1.42857C1.42857 7.65088 1.77691 8.51961 2.47357 9.23779C3.16976 9.95646 4.0119 10.3158 5 10.3158C5.9881 10.3158 6.83048 9.95646 7.52714 9.23779C8.22333 8.51961 8.57143 7.65088 8.57143 6.63158H10C10 7.92105 9.59524 9.05088 8.78571 10.0211C7.97619 10.9912 6.95238 11.5623 5.71429 11.7342V14H4.28571Z" fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default RealstateTopbar