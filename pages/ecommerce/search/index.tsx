import React, { useState } from 'react'
import TopBar from '../../../components/TopBar'
import { Button, Drawer } from 'antd';
import { Slider, Switch } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import Link from 'next/link';
import RealstateTopbar from '../../../components/realstate_components/ReastateTopbar';
import EcommerceTopbar from '../../../components/ecommercembl/EcommerceTopbar';

type Props = {}

const index = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('bottom')
    const showDrawer = () => {
        setOpen(true);
    };
    const showDrawerBottom = () => {
        setOpen1(true)
    }

    const onClose = () => {
        setOpen(false);
    };
    const onClose1 = () => {
        setOpen1(false);
    };
    const [disabled, setDisabled] = useState(false);

    const onChange = (checked: boolean) => {
        setDisabled(checked);
    };
    return (
        <>
            <EcommerceTopbar />
            <div className='pb-[80px] bg-[#F6F6F6]'>
                {/* <div className='container mx-auto px-[13px] flex items-center mt-[0px] justify-between gap-[20px] bg-[#11AFD1]'>
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10811 17L0 8.5L8.10811 0L10 1.98333L3.78378 8.5L10 15.0167L8.10811 17Z" fill="white" />
                    </svg>

                    <div className='flex items-center gap-[9px] bg-[#F9F9F9] pl-[10px] w-full py-[8px] my-[8px]'>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M11.9889 13L7.43889 8.45C7.07778 8.73889 6.6625 8.96759 6.19306 9.13611C5.72361 9.30463 5.22407 9.38889 4.69444 9.38889C3.38241 9.38889 2.27211 8.93461 1.36356 8.02606C0.454519 7.11702 0 6.00648 0 4.69444C0 3.38241 0.454519 2.27187 1.36356 1.36283C2.27211 0.454278 3.38241 0 4.69444 0C6.00648 0 7.11702 0.454278 8.02606 1.36283C8.93461 2.27187 9.38889 3.38241 9.38889 4.69444C9.38889 5.22407 9.30463 5.72361 9.13611 6.19306C8.96759 6.6625 8.73889 7.07778 8.45 7.43889L13 11.9889L11.9889 13ZM4.69444 7.94444C5.59722 7.94444 6.3647 7.62859 6.99689 6.99689C7.62859 6.3647 7.94444 5.59722 7.94444 4.69444C7.94444 3.79167 7.62859 3.02418 6.99689 2.392C6.3647 1.7603 5.59722 1.44444 4.69444 1.44444C3.79167 1.44444 3.02418 1.7603 2.392 2.392C1.7603 3.02418 1.44444 3.79167 1.44444 4.69444C1.44444 5.59722 1.7603 6.3647 2.392 6.99689C3.02418 7.62859 3.79167 7.94444 4.69444 7.94444Z" fill="black" />
                        </svg>
                        <input type="text" placeholder='Search' className='bg-transparent outline-none text-[13px] text-[#2D2D2D] leading-[19.5px] font-normal font-poppins' />
                    </div>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.60196 22C5.99678 22 5.4789 21.7848 5.0483 21.3543C4.61697 20.9231 4.40131 20.405 4.40131 19.8C4.40131 19.195 4.61697 18.6769 5.0483 18.2457C5.4789 17.8152 5.99678 17.6 6.60196 17.6C7.20715 17.6 7.72503 17.8152 8.15563 18.2457C8.58696 18.6769 8.80262 19.195 8.80262 19.8C8.80262 20.405 8.58696 20.9231 8.15563 21.3543C7.72503 21.7848 7.20715 22 6.60196 22ZM17.6052 22C17.0001 22 16.4822 21.7848 16.0516 21.3543C15.6202 20.9231 15.4046 20.405 15.4046 19.8C15.4046 19.195 15.6202 18.6769 16.0516 18.2457C16.4822 17.8152 17.0001 17.6 17.6052 17.6C18.2104 17.6 18.7287 17.8152 19.16 18.2457C19.5906 18.6769 19.8059 19.195 19.8059 19.8C19.8059 20.405 19.5906 20.9231 19.16 21.3543C18.7287 21.7848 18.2104 22 17.6052 22ZM6.60196 16.5C5.77672 16.5 5.1532 16.1377 4.73141 15.4132C4.30962 14.6894 4.29128 13.97 4.67639 13.255L6.16183 10.56L2.20065 2.2H1.07282C0.76106 2.2 0.504317 2.0944 0.30259 1.8832C0.100863 1.67273 0 1.41167 0 1.1C0 0.788333 0.105631 0.5269 0.316894 0.3157C0.527424 0.105233 0.788568 0 1.10033 0H2.88836C3.09009 0 3.28264 0.0550001 3.46603 0.165C3.64942 0.275 3.78696 0.430833 3.87865 0.6325L4.62138 2.2H20.8512C21.3464 2.2 21.6856 2.38333 21.869 2.75C22.0524 3.11667 22.0432 3.50167 21.8415 3.905L17.9353 10.945C17.7336 11.3117 17.4677 11.5958 17.1376 11.7975C16.8075 11.9992 16.4316 12.1 16.0098 12.1H7.81233L6.60196 14.3H18.7331C19.0448 14.3 19.3016 14.4052 19.5033 14.6157C19.705 14.8269 19.8059 15.0883 19.8059 15.4C19.8059 15.7117 19.7003 15.9727 19.489 16.1832C19.2785 16.3944 19.0173 16.5 18.7056 16.5H6.60196Z" fill="white" />
                    </svg>


                </div> */}
                {/* <div className='h-[1px] w-full bg-[#EEEEEE] mt-[8px]'></div> */}
                {/* <div className='flex items-center justify-between pl-[20px] pr-[18.5px] py-[15px] bg-white'>
                    <div className='flex items-center gap-[11px]'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M13.9411 7.11765C15.6305 7.11765 17 5.74817 17 4.05882C17 2.36948 15.6305 1 13.9411 1C12.2518 1 10.8823 2.36948 10.8823 4.05882C10.8823 5.74817 12.2518 7.11765 13.9411 7.11765Z" fill="#D9D9D9" stroke="black" stroke-width="0.941176" />
                                <path d="M13.9411 17C15.6305 17 17 15.6305 17 13.9411C17 12.2518 15.6305 10.8823 13.9411 10.8823C12.2518 10.8823 10.8823 12.2518 10.8823 13.9411C10.8823 15.6305 12.2518 17 13.9411 17Z" fill="#D9D9D9" stroke="black" stroke-width="0.941176" />
                                <path d="M4.05882 7.11765C5.74817 7.11765 7.11765 5.74817 7.11765 4.05882C7.11765 2.36948 5.74817 1 4.05882 1C2.36948 1 1 2.36948 1 4.05882C1 5.74817 2.36948 7.11765 4.05882 7.11765Z" fill="#D9D9D9" stroke="black" stroke-width="0.941176" />
                                <path d="M4.05882 17C5.74817 17 7.11765 15.6305 7.11765 13.9411C7.11765 12.2518 5.74817 10.8823 4.05882 10.8823C2.36948 10.8823 1 12.2518 1 13.9411C1 15.6305 2.36948 17 4.05882 17Z" fill="#D9D9D9" stroke="black" stroke-width="0.941176" />
                            </g>
                        </svg>
                        <p className='text-black opacity-[0.5] text-[13px] leading-[20px] font-normal font-p'>1580 result</p>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <p className='text-black opacity-[0.5] text-[13px] leading-[20px] font-normal font-p'>Newest First</p>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.07143L3.66667 0.5M3.66667 0.5L6.33333 3.07143M3.66667 0.5V9.5M13 6.92857L10.3333 9.5M10.3333 9.5L7.66667 6.92857M10.3333 9.5V0.5" stroke="#808080" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </div> */}
                <Drawer title="Filter" placement="right" className='close_btn product_search pl-[15px]' onClose={onClose} open={open}>
                    <div>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium tracking-[0.01em]'>Location</h2>
                        <div className='border border-[#737378] mt-[18px] pr-[10px] w-full'>
                            <select name="cars" id="cars" className='  h-[46px] w-full px-[20px] outline-none'>
                                <option value="All over Nepal">All over Nepal</option>
                                <option value="All over Nepal">All over Nepal</option>
                                <option value="All over Nepal">Mercedes</option>
                                <option value="All over Nepal">All over Nepal</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-[28px]'>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium tracking-[0.01em]'>Price</h2>
                        <div className='flex items-center justify-between mt-[28px]'>
                            <p className='text-[#2D2D2D] text-[12px] leading-[14.4px] font-normal tracking-[0.01em]'>Min</p>
                            <p className='text-[#2D2D2D] text-[12px] leading-[14.4px] font-normal tracking-[0.01em]'>Max</p>
                        </div>
                        <Slider range defaultValue={[0, 50]} disabled={disabled} />
                        {/* Disabled: <Switch size="small" checked={disabled} onChange={onChange} /> */}
                        <div className='flex items-center justify-between '>
                            <p className='text-[#11AFD1] text-[12px] leading-[14.4px] font-medium tracking-[0.01em]'>Rs 100</p>

                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium tracking-[0.01em]'>Brands</h2>
                        <div className='grid grid-cols-2 mt-[19px] gap-y-[29px]'>
                            <div className='flex items-center gap-[12px]'>
                                <input type="checkbox" name="" id="" className='border border-[red]' />
                                <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.02em]'>Adidas</p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <input type="checkbox" name="" id="" />
                                <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.02em]'>Jordan</p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <input type="checkbox" name="" id="" className='border border-[red]' />
                                <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.02em]'>Nike</p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <input type="checkbox" name="" id="" />
                                <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.02em]'>PUMA</p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <input type="checkbox" name="" id="" className='border border-[red]' />
                                <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.02em]'>GoldStar</p>
                            </div>
                            <div className='flex items-center gap-[12px]'>
                                <input type="checkbox" name="" id="" />
                                <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.02em]'>Orion</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[43px]'>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium tracking-[0.01em]'>Ratings & Reviews</h2>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium tracking-[0.01em] mt-[37px]'>Tags</h2>
                        <div className='grid grid-cols-4 gap-[15px] mt-[27px]'>
                            <button className='bg-[#11AFD1] h-[30px] w-[65px] rounded-[5px] text-white text-[12px] leading-[14.4px] font-medium tracking-[0.02em] flex items-center justify-center'>Tag1</button>
                            <button className='border w-[65px] hover:bg-[#11AFD1] hover:text-white h-[30px] rounded-[5px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-medium '>Tag1</button>
                            <button className='border w-[65px] h-[30px] hover:bg-[#11AFD1] hover:text-white rounded-[5px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-medium '>Tag1</button>
                            <button className='border w-[65px] h-[30px] hover:bg-[#11AFD1] hover:text-white rounded-[5px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-medium '>Tag1</button>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-[12px] mt-[76px]'>
                        <button className='bg-[#11AFD1]/[0.1] h-[45px] flex items-center justify-center text-[#2E0066] text-[13px] leading-[15.6px] font-medium tracking-[0.02em] flex-grow rounded-[5px]'>Reset</button>
                        <button className='bg-[#11AFD1] h-[45px] flex items-center justify-center text-[#fff] text-[13px] leading-[15.6px] font-medium tracking-[0.02em] flex-grow rounded-[5px]'>Apply</button>
                    </div>
                </Drawer>
                <Drawer
                    title=""
                    placement={placement}
                    closable={false}
                    onClose={onClose1}
                    open={open1}
                    key={placement}
                >
                    <div className='space-y-[25px]'>
                        <div className='flex items-center pl-[20px] gap-[18px]'>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.48879 9.1414L11.8969 0.884839C12.1271 0.628279 12.42 0.5 12.7758 0.5C13.1315 0.5 13.4245 0.628279 13.6547 0.884839C13.8849 1.1414 14 1.46793 14 1.86443C14 2.26093 13.8849 2.58746 13.6547 2.84402L5.36771 12.0802C5.11659 12.3601 4.82362 12.5 4.48879 12.5C4.15396 12.5 3.86099 12.3601 3.60987 12.0802L0.345291 8.44169C0.115097 8.18513 0 7.8586 0 7.4621C0 7.0656 0.115097 6.73907 0.345291 6.48251C0.575485 6.22595 0.86846 6.09767 1.22422 6.09767C1.57997 6.09767 1.87294 6.22595 2.10314 6.48251L4.48879 9.1414Z" fill="#11AFD1" />
                            </svg> <h2 className='text-[#11AFD1] text-[16px] leading-[19.2px] font-medium  tracking-[0.01em]'>Recommended</h2>
                        </div>
                        <div className='flex items-center pl-[20px] gap-[18px]'>
                            <svg className='opacity-0' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.48879 9.1414L11.8969 0.884839C12.1271 0.628279 12.42 0.5 12.7758 0.5C13.1315 0.5 13.4245 0.628279 13.6547 0.884839C13.8849 1.1414 14 1.46793 14 1.86443C14 2.26093 13.8849 2.58746 13.6547 2.84402L5.36771 12.0802C5.11659 12.3601 4.82362 12.5 4.48879 12.5C4.15396 12.5 3.86099 12.3601 3.60987 12.0802L0.345291 8.44169C0.115097 8.18513 0 7.8586 0 7.4621C0 7.0656 0.115097 6.73907 0.345291 6.48251C0.575485 6.22595 0.86846 6.09767 1.22422 6.09767C1.57997 6.09767 1.87294 6.22595 2.10314 6.48251L4.48879 9.1414Z" fill="#11AFD1" />
                            </svg> <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium  tracking-[0.01em]'>Oldest First</h2>
                        </div>
                        <div className='flex items-center pl-[20px] gap-[18px]'>
                            <svg className='opacity-0' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.48879 9.1414L11.8969 0.884839C12.1271 0.628279 12.42 0.5 12.7758 0.5C13.1315 0.5 13.4245 0.628279 13.6547 0.884839C13.8849 1.1414 14 1.46793 14 1.86443C14 2.26093 13.8849 2.58746 13.6547 2.84402L5.36771 12.0802C5.11659 12.3601 4.82362 12.5 4.48879 12.5C4.15396 12.5 3.86099 12.3601 3.60987 12.0802L0.345291 8.44169C0.115097 8.18513 0 7.8586 0 7.4621C0 7.0656 0.115097 6.73907 0.345291 6.48251C0.575485 6.22595 0.86846 6.09767 1.22422 6.09767C1.57997 6.09767 1.87294 6.22595 2.10314 6.48251L4.48879 9.1414Z" fill="#11AFD1" />
                            </svg> <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium  tracking-[0.01em]'>Newest First</h2>
                        </div>
                        <div className='flex items-center pl-[20px] gap-[18px]'>
                            <svg className='opacity-0' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.48879 9.1414L11.8969 0.884839C12.1271 0.628279 12.42 0.5 12.7758 0.5C13.1315 0.5 13.4245 0.628279 13.6547 0.884839C13.8849 1.1414 14 1.46793 14 1.86443C14 2.26093 13.8849 2.58746 13.6547 2.84402L5.36771 12.0802C5.11659 12.3601 4.82362 12.5 4.48879 12.5C4.15396 12.5 3.86099 12.3601 3.60987 12.0802L0.345291 8.44169C0.115097 8.18513 0 7.8586 0 7.4621C0 7.0656 0.115097 6.73907 0.345291 6.48251C0.575485 6.22595 0.86846 6.09767 1.22422 6.09767C1.57997 6.09767 1.87294 6.22595 2.10314 6.48251L4.48879 9.1414Z" fill="#11AFD1" />
                            </svg> <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium  tracking-[0.01em]'>Price Low to High</h2>
                        </div>
                        <div className='flex items-center pl-[20px] gap-[18px]'>
                            <svg className='opacity-0' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.48879 9.1414L11.8969 0.884839C12.1271 0.628279 12.42 0.5 12.7758 0.5C13.1315 0.5 13.4245 0.628279 13.6547 0.884839C13.8849 1.1414 14 1.46793 14 1.86443C14 2.26093 13.8849 2.58746 13.6547 2.84402L5.36771 12.0802C5.11659 12.3601 4.82362 12.5 4.48879 12.5C4.15396 12.5 3.86099 12.3601 3.60987 12.0802L0.345291 8.44169C0.115097 8.18513 0 7.8586 0 7.4621C0 7.0656 0.115097 6.73907 0.345291 6.48251C0.575485 6.22595 0.86846 6.09767 1.22422 6.09767C1.57997 6.09767 1.87294 6.22595 2.10314 6.48251L4.48879 9.1414Z" fill="#11AFD1" />
                            </svg> <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium  tracking-[0.01em]'>Price High to Low</h2>
                        </div>
                    </div>
                </Drawer>
                <div className='flex items-center justify-between pl-[20px] pr-[18.5px] mt-[15px] bg-[#F9F9F9] py-[11px]'>
                    <div className='flex items-center gap-[11px]' onClick={showDrawer}>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2.52693H11.95C11.7 1.50014 10.7 0.741211 9.5 0.741211C8.3 0.741211 7.3 1.50014 7.05 2.52693H0V3.41978H7.05C7.3 4.44657 8.3 5.2055 9.5 5.2055C10.7 5.2055 11.7 4.44657 11.95 3.41978H14V2.52693ZM9.5 4.31264C8.65 4.31264 8 3.73228 8 2.97335C8 2.21443 8.65 1.63407 9.5 1.63407C10.35 1.63407 11 2.21443 11 2.97335C11 3.73228 10.35 4.31264 9.5 4.31264ZM0 9.66978H2.05C2.3 10.6966 3.3 11.4555 4.5 11.4555C5.7 11.4555 6.7 10.6966 6.95 9.66978H14V8.77692H6.95C6.7 7.75014 5.7 6.99121 4.5 6.99121C3.3 6.99121 2.3 7.75014 2.05 8.77692H0V9.66978ZM4.5 7.88407C5.35 7.88407 6 8.46442 6 9.22335C6 9.98228 5.35 10.5626 4.5 10.5626C3.65 10.5626 3 9.98228 3 9.22335C3 8.46442 3.65 7.88407 4.5 7.88407Z" fill="#808080" />
                            <path d="M14 14.5806H11.95C11.7 13.5539 10.7 12.7949 9.5 12.7949C8.3 12.7949 7.3 13.5539 7.05 14.5806H0V15.4735H7.05C7.3 16.5003 8.3 17.2592 9.5 17.2592C10.7 17.2592 11.7 16.5003 11.95 15.4735H14V14.5806ZM9.5 16.3664C8.65 16.3664 8 15.786 8 15.0271C8 14.2681 8.65 13.6878 9.5 13.6878C10.35 13.6878 11 14.2681 11 15.0271C11 15.786 10.35 16.3664 9.5 16.3664Z" fill="#808080" />
                        </svg>
                        <p className='text-black opacity-[0.5] text-[13px] leading-[20px] font-normal font-p'>Filters</p>
                    </div>
                    <div className='flex items-center gap-[6px]' onClick={showDrawerBottom}>
                        <p className='text-black opacity-[0.5] text-[13px] leading-[20px] font-normal font-p'>Newest First</p>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.07143L3.66667 0.5M3.66667 0.5L6.33333 3.07143M3.66667 0.5V9.5M13 6.92857L10.3333 9.5M10.3333 9.5L7.66667 6.92857M10.3333 9.5V0.5" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
                {/* //products */}
                <div className='grid grid-cols-2 gap-[10px] mt-[11px] px-[12px]'>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/shoes.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp1.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp2.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp3.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp4.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp4.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp5.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp7.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp7.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp7.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp9.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>
                    <div className='bg-[#fff]'>
                        <div className='bg-[#fff] h-[172px] w-full flex items-center justify-center'>
                            <img src="/../assets/mblview/sp10.png" alt="" />
                        </div>
                        <h2 className='text-[13px] leading-[19.5px] font-bold font-poppins mt-[7px] pl-[5px]'>$ 250</h2>
                        <p className='text-[12px] leading-[19.5px] font-normal font-poppins px-[5px]'>Travel Backpack, Sturdy and Comfy for all purpose</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default index