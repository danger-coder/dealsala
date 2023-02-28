import React, { useState } from 'react'
import TopBar from '../../../components/TopBar'
import { Button, Drawer } from 'antd';
import { Slider, Switch } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import Link from 'next/link';

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
        <div className='container mx-auto pb-[80px]'>
            {/* //drawer */}
            <Drawer title="Filter" placement="right" className='close_btn product_search' onClose={onClose} open={open}>
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
            <TopBar />
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

            {/* search product results */}
            <div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment1.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment2.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment3.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment4.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment5.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment6.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[6px] mt-[22px] px-[12px]'>
                    <div>
                        <div className='bg-[#F9F9F9] h-[96px] w-[105px] '>
                            <img src="/../realstate/mblview/appartment7.png" alt="" />
                        </div>
                        <h2 className='text-black text-[15px] bg-[#F9F9F9] pt-[3px] pb-[4px] leading-[18px] font-bold tracking-[0.02em] mt-[13px] text-center'>Rs 120,000</h2>
                    </div>
                    <div>
                        <h1 className='text-[#505056] text-[16px] leading-[19.2px] font-bold tracking-[0.02em] max-w-[255px] mb-[8px]'>Paradise Apartments</h1>
                        <p className='text-[#505056] text-[13px] leading-[13.2px] font-normal'><span className='text-[#11AFD1]'>4BHK</span> - Kathmandu - Unfurnished </p>
                        <div className='flex items-center mt-[8px] gap-[8px]'>
                            <img src="/../realstate/mblview/nepalawash.png" alt="" />
                            <p className='text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em]'>Nepal Awash</p>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[32px]'>
                            <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center justify-center text-[#505056] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#D9D9D9]'>Chat</button>
                            <Link href="/singleproductview">
                                <button className='w-[122.5px] h-[26px] rounded-[2px] flex items-center gap-[10px] justify-center text-[#11AFD1] text-[12px] leading-[14.4px] font-normal tracking-[0.02em] border border-[#11AFD1]'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75051 8.52832L9.78383 7.49459C9.923 7.35708 10.0991 7.26296 10.2907 7.22363C10.4823 7.18431 10.6812 7.20149 10.8633 7.27307L12.1226 7.77609C12.3066 7.8508 12.4643 7.97831 12.576 8.14256C12.6876 8.30681 12.7482 8.50045 12.75 8.69907V11.0065C12.7489 11.1416 12.7205 11.2751 12.6665 11.399C12.6125 11.5228 12.534 11.6345 12.4358 11.7272C12.3375 11.8199 12.2215 11.8917 12.0948 11.9384C11.968 11.985 11.8331 12.0056 11.6982 11.9987C2.87352 11.4495 1.09289 3.97343 0.756143 1.11221C0.740511 0.971699 0.754794 0.829474 0.798052 0.694886C0.84131 0.560298 0.912563 0.436399 1.00712 0.331338C1.10168 0.226277 1.21741 0.142436 1.34668 0.0853313C1.47596 0.0282263 1.61585 -0.00084875 1.75717 1.88606e-05H3.98526C4.18408 0.000607621 4.37819 0.0606895 4.5426 0.172537C4.70702 0.284384 4.83422 0.442881 4.90786 0.627643L5.41068 1.88751C5.48461 2.0689 5.50347 2.26807 5.46491 2.46013C5.42635 2.65218 5.33208 2.82862 5.19387 2.96739L4.16055 4.00112C4.16055 4.00112 4.75563 8.02991 8.75051 8.52832Z" fill="#11AFD1" />
                                </svg>Call Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index