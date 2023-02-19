import React, { useState } from 'react'
import SearchBanner from '../components/SearchBanner'
import Link from 'next/link';
import { Select } from 'antd';
import { Rate } from 'antd';
import { FaThLarge, FaThList } from "react-icons/fa"
// import ReactStars from "react-rating-stars-component";
import RelatedSearch from '../components/RelatedSearch';
import TopBar from '../components/TopBar';

const ratingChanged = (newRating: any) => {
    console.log(newRating);
};


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const Search = () => {

    const [property, setProperty] = useState(false)
    const [furnish, setFurnish] = useState(false)
    const [grid, setGrid] = useState(false)
    const [color, setScolor] = useState(false)
    const [color1, setScolor1] = useState(false)

    const openProperty = () => {
        setProperty(!property)
    }
    const openFurnish = () => {
        setFurnish(!furnish)
    }
    const openGrid = () => {
        setGrid(!grid)
        setScolor1(!color1)
        setScolor(false)
    }
    const closeGrid = () => {
        setGrid(false)
        setScolor(!color)
        setScolor1(false)
    }


    return (
        <div className=' pb-[0px]'>
            <TopBar />
            <SearchBanner />

            <div className='container mx-auto'>
                <p className='mt-[20px] text-[#505056] leading-[18px] font-normal'>Kathmandu &gt; Real Estate &gt; Rental Properties</p>
            </div>
            <div className='container mx-auto mt-[24px] pb-[40px]'>
                <div className='flex gap-[38px]'>
                    <div className='basis-[25%] '>
                        <div className='bg-[#F9F9F9] w-full h-[105px] rounded-[5px] pt-[14px] pl-[16px] pr-[15px]'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#24263F] leading-[22.5px] text-[15px] font-medium'>Filters</p>
                                <p className='text-[#24263F]/[0.8] text-[12px] leading-[18px] font-normal '>Clear all</p>
                            </div>
                            <div className='flex items-center mt-[20px] gap-[12px]'>
                                <button className='bg-[#E9F4FB] w-[142px] h-[32px] rounded-[56px] flex items-center gap-[7px] pt-[7px] pb-[5px] pl-[11px] pr-[13.66px]'><p className='text-[13px] text-[#24263F] font-light leading-[19.3px]'>Recommended</p><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.13185 0.213931C9.06632 0.148266 8.98848 0.09617 8.90279 0.0606248C8.8171 0.0250796 8.72524 0.00678323 8.63247 0.00678323C8.5397 0.00678323 8.44784 0.0250796 8.36215 0.0606248C8.27647 0.09617 8.19863 0.148266 8.1331 0.213931L4.66935 3.6706L1.2056 0.206848C1.14002 0.141269 1.06217 0.0892489 0.976483 0.0537578C0.8908 0.0182668 0.798966 6.90985e-10 0.706223 0C0.613481 -6.90986e-10 0.521646 0.0182668 0.435963 0.0537578C0.35028 0.0892489 0.272427 0.141269 0.206848 0.206848C0.141269 0.272427 0.0892489 0.35028 0.0537578 0.435963C0.0182668 0.521646 -6.90985e-10 0.613481 0 0.706223C6.90986e-10 0.798966 0.0182668 0.8908 0.0537578 0.976483C0.0892489 1.06217 0.141269 1.14002 0.206848 1.2056L3.6706 4.66935L0.206848 8.1331C0.141269 8.19868 0.0892489 8.27653 0.0537578 8.36221C0.0182668 8.4479 0 8.53973 0 8.63247C0 8.72521 0.0182668 8.81705 0.0537578 8.90273C0.0892489 8.98842 0.141269 9.06627 0.206848 9.13185C0.272427 9.19743 0.35028 9.24945 0.435963 9.28494C0.521646 9.32043 0.613481 9.3387 0.706223 9.3387C0.798966 9.3387 0.8908 9.32043 0.976483 9.28494C1.06217 9.24945 1.14002 9.19743 1.2056 9.13185L4.66935 5.6681L8.1331 9.13185C8.19868 9.19743 8.27653 9.24945 8.36221 9.28494C8.4479 9.32043 8.53973 9.3387 8.63247 9.3387C8.72521 9.3387 8.81705 9.32043 8.90273 9.28494C8.98842 9.24945 9.06627 9.19743 9.13185 9.13185C9.19743 9.06627 9.24945 8.98842 9.28494 8.90273C9.32043 8.81705 9.3387 8.72521 9.3387 8.63247C9.3387 8.53973 9.32043 8.4479 9.28494 8.36221C9.24945 8.27653 9.19743 8.19868 9.13185 8.1331L5.6681 4.66935L9.13185 1.2056C9.40101 0.936431 9.40101 0.483098 9.13185 0.213931Z" fill="#2791D6" />
                                </svg>
                                </button>
                                <button className='bg-[#E9F4FB] w-[86px] h-[32px] rounded-[56px] flex items-center gap-[7px] pt-[7px] pb-[5px] pl-[11px] pr-[13.66px]'><p className='text-[13px] text-[#24263F] font-light leading-[19.3px]'>Cheap</p><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.13185 0.213931C9.06632 0.148266 8.98848 0.09617 8.90279 0.0606248C8.8171 0.0250796 8.72524 0.00678323 8.63247 0.00678323C8.5397 0.00678323 8.44784 0.0250796 8.36215 0.0606248C8.27647 0.09617 8.19863 0.148266 8.1331 0.213931L4.66935 3.6706L1.2056 0.206848C1.14002 0.141269 1.06217 0.0892489 0.976483 0.0537578C0.8908 0.0182668 0.798966 6.90985e-10 0.706223 0C0.613481 -6.90986e-10 0.521646 0.0182668 0.435963 0.0537578C0.35028 0.0892489 0.272427 0.141269 0.206848 0.206848C0.141269 0.272427 0.0892489 0.35028 0.0537578 0.435963C0.0182668 0.521646 -6.90985e-10 0.613481 0 0.706223C6.90986e-10 0.798966 0.0182668 0.8908 0.0537578 0.976483C0.0892489 1.06217 0.141269 1.14002 0.206848 1.2056L3.6706 4.66935L0.206848 8.1331C0.141269 8.19868 0.0892489 8.27653 0.0537578 8.36221C0.0182668 8.4479 0 8.53973 0 8.63247C0 8.72521 0.0182668 8.81705 0.0537578 8.90273C0.0892489 8.98842 0.141269 9.06627 0.206848 9.13185C0.272427 9.19743 0.35028 9.24945 0.435963 9.28494C0.521646 9.32043 0.613481 9.3387 0.706223 9.3387C0.798966 9.3387 0.8908 9.32043 0.976483 9.28494C1.06217 9.24945 1.14002 9.19743 1.2056 9.13185L4.66935 5.6681L8.1331 9.13185C8.19868 9.19743 8.27653 9.24945 8.36221 9.28494C8.4479 9.32043 8.53973 9.3387 8.63247 9.3387C8.72521 9.3387 8.81705 9.32043 8.90273 9.28494C8.98842 9.24945 9.06627 9.19743 9.13185 9.13185C9.19743 9.06627 9.24945 8.98842 9.28494 8.90273C9.32043 8.81705 9.3387 8.72521 9.3387 8.63247C9.3387 8.53973 9.32043 8.4479 9.28494 8.36221C9.24945 8.27653 9.19743 8.19868 9.13185 8.1331L5.6681 4.66935L9.13185 1.2056C9.40101 0.936431 9.40101 0.483098 9.13185 0.213931Z" fill="#2791D6" />
                                </svg>
                                </button>
                            </div>
                        </div>
                        {/* location */}
                        <div className='bg-[#F9F9F9] w-full h-[110px] rounded-[2px] pt-[14px] pl-[16px] mt-[18px] pr-[16px]'>
                            <p className='text-[#24263F] text-[15px] leading-[22.5px] font-medium'>Location</p>
                            <Select className='mt-[20px] second'
                                defaultValue="Kathmandu Central Region"
                                style={{ width: "100%" }}
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
                        </div>
                        <div className='w-full mt-[20px]'>
                            <div className='border-b-[1px] border-[#EDEDED]  bg-[#F9F9F9] cursor-pointer'>
                                <div className='flex items-center justify-between px-[20px] bg-[#F9F9F9] py-[20px] ' onClick={openProperty}>
                                    {/* <div className='flex items-center justify-between'> */}
                                    <p className='text-[#24263F] text-[15px] leading-[22.5px] font-medium'>Property Type</p>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 7L6 2L1 7" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    {/* </div> */}

                                </div>
                                {
                                    property &&
                                    <div className='pl-[20px] bg-[#F9F9F9] pb-[21px]'>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Cooperative</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>house</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Investment</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Commercial</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Lot / Land</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Flats</p>
                                        </div>

                                    </div>
                                }
                            </div>
                            <div className='border-b-[1px] border-[#EDEDED]'>
                                <div className='flex items-center justify-between px-[20px] bg-[#F9F9F9] py-[20px]  cursor-pointer' onClick={openFurnish}>
                                    <p className='text-[#24263F] text-[15px] leading-[22.5px] font-medium'>Furnishing</p>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 7L6 2L1 7" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </div>
                                {
                                    furnish &&
                                    <div className='pl-[20px] bg-[#F9F9F9] pb-[21px]'>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Fully Furnished</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Smi-Furnished</p>
                                        </div>
                                        <div className='flex items-center gap-[14px] bg-[#F9F9F9] pt-[14px]'>
                                            <input type="checkbox" className='h-[18px] w-[18px]' />
                                            <p className='text-[#24263F] text-[13px] leading-[20px] font-normal'>Unfurnished</p>
                                        </div>


                                    </div>
                                }
                            </div>
                            <div className='flex items-center justify-between px-[20px] bg-[#F9F9F9] py-[20px] border-b-[1px] border-[#EDEDED] cursor-pointer'>
                                <p className='text-[#24263F] text-[15px] leading-[22.5px] font-medium'>Property Type</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 7L6 2L1 7" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                            </div>
                            <div className='flex items-center justify-between px-[20px] bg-[#F9F9F9] py-[20px] border-b-[1px] border-[#EDEDED] cursor-pointer'>
                                <p className='text-[#24263F] text-[15px] leading-[22.5px] font-medium'>Property Type</p>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 7L6 2L1 7" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='basis-[75%] '>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-[20px] '>
                                <FaThLarge className={color ? "cursor-pointer text-[#F65128]" : "cursor-pointer "} onClick={closeGrid} />
                                <FaThList className={color1 ? "cursor-pointer text-[#F65128]" : "cursor-pointer"} onClick={openGrid} />
                                <Select className=' third'
                                    defaultValue="Default Sorting"
                                    style={{ width: 130 }}
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

                            </div>
                            <p className='text-[#71767A] text-[13px] leading-[19.5px] font-light'>
                                Showing 1-12 of <span className='font-bold'>150</span> results
                            </p>
                        </div>


                        <div className={grid ? "grid grid-cols-3 gap-[30px] " : ""}>
                            <div className={grid ? "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px] flex-col" : "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px]"}>
                                <div className=''>
                                    <img src="/../assets/product.jpg" alt="" className={grid ? "w-full h-[280px]" : ""} />
                                </div>
                                <div>
                                    <p className='text-[#3B0E71] text-[23.833px] font-medium leading-[36px]'>$ 15,000</p>
                                    <p className='text-[#24263F] text-[16px] leading-[24px] font-medium mt-[10px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
                                    {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#ffd700"
                                    /> */}
                                    <Rate />
                                    <p className='text-[#24263F] text-[13px] leading-[20px] font-light mt-[0px]'>3 BHK Apartment, Andheri West, Mumbai</p>
                                    <div className='flex items-center justify-between mt-[18.01px]'>
                                        <div className={grid ? "w-full h-[38px] bg-[#F9F9F9] flex items-center 2xl:gap-[33px] xl:gap-[14px] 2xl:pl-[30.07px] xl:pl-[15px]" : "w-[393.93px] h-[38px] bg-[#F9F9F9] flex items-center gap-[33px] pl-[30.07px]"}>
                                            <div className='flex items-center gap-[5px]'><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.374 2.96809e-08C13.0087 -9.77163e-05 13.6197 0.241233 14.0831 0.67504C14.5464 1.10885 14.8274 1.70265 14.869 2.336L14.874 2.5V5.05C15.4099 5.15959 15.895 5.4418 16.2551 5.85342C16.6153 6.26503 16.8306 6.78336 16.868 7.329L16.874 7.5V13.5C16.8743 13.6249 16.8277 13.7455 16.7435 13.8378C16.6593 13.9301 16.5436 13.9876 16.4192 13.9989C16.2948 14.0102 16.1706 13.9745 16.0712 13.8988C15.9718 13.8231 15.9043 13.7129 15.882 13.59L15.874 13.5V11H1.87402V13.5C1.87425 13.6249 1.82769 13.7455 1.74352 13.8378C1.65934 13.9301 1.54364 13.9876 1.4192 13.9989C1.29477 14.0102 1.17061 13.9745 1.07119 13.8988C0.97177 13.8231 0.904284 13.7129 0.882023 13.59L0.874023 13.5V7.5C0.873906 6.92367 1.07292 6.36501 1.43737 5.91855C1.80183 5.47209 2.30934 5.16527 2.87402 5.05V2.5C2.87393 1.86528 3.11526 1.25429 3.54906 0.790955C3.98287 0.327621 4.57667 0.0466377 5.21002 0.00500014L5.37402 2.96809e-08H12.374ZM14.374 6H3.37402C3.0013 5.99999 2.64192 6.13876 2.36592 6.38925C2.08991 6.63974 1.91705 6.98402 1.88102 7.355L1.87402 7.5V10H15.874V7.5C15.874 7.12727 15.7353 6.7679 15.4848 6.49189C15.2343 6.21589 14.89 6.04303 14.519 6.007L14.374 6ZM12.374 1H5.37402C5.00114 1.00002 4.64163 1.13892 4.3656 1.38962C4.08958 1.64032 3.91682 1.98484 3.88102 2.356L3.87402 2.5V5H4.87402V4.5C4.87402 4.36739 4.9267 4.24021 5.02047 4.14645C5.11424 4.05268 5.24142 4 5.37402 4H7.87402C8.00663 4 8.13381 4.05268 8.22758 4.14645C8.32135 4.24021 8.37402 4.36739 8.37402 4.5V5H9.37402V4.5C9.37402 4.36739 9.4267 4.24021 9.52047 4.14645C9.61424 4.05268 9.74142 4 9.87402 4H12.374C12.5066 4 12.6338 4.05268 12.7276 4.14645C12.8213 4.24021 12.874 4.36739 12.874 4.5V5H13.874V2.5C13.874 2.12727 13.7353 1.7679 13.4848 1.49189C13.2343 1.21589 12.89 1.04303 12.519 1.007L12.374 1Z" fill="#2D2D2D" />
                                            </svg>
                                                <p>3</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8655 5.14286H14.9927V5C14.9927 4.88634 14.9471 4.77733 14.8661 4.69695C14.785 4.61658 14.6751 4.57143 14.5605 4.57143H9.95029C9.83567 4.57143 9.72573 4.61658 9.64468 4.69695C9.56363 4.77733 9.51809 4.88634 9.51809 5V5.14286H4.61979V1.85714C4.61979 1.59193 4.72604 1.33757 4.91516 1.15004C5.10429 0.9625 5.3608 0.857143 5.62826 0.857143C5.89572 0.857143 6.15223 0.9625 6.34136 1.15004C6.53049 1.33757 6.63673 1.59193 6.63673 1.85714C6.63673 1.97081 6.68227 2.07982 6.76332 2.16019C6.84438 2.24056 6.95431 2.28571 7.06894 2.28571C7.18357 2.28571 7.2935 2.24056 7.37455 2.16019C7.45561 2.07982 7.50114 1.97081 7.50114 1.85714C7.50114 1.3646 7.30382 0.892226 6.95259 0.543945C6.60135 0.195663 6.12498 0 5.62826 0C5.13154 0 4.65517 0.195663 4.30393 0.543945C3.9527 0.892226 3.75538 1.3646 3.75538 1.85714V5.14286H1.8825C1.61503 5.14286 1.35852 5.24821 1.1694 5.43575C0.980273 5.62329 0.874023 5.87764 0.874023 6.14286V8.42857C0.874023 9.45155 1.28384 10.4326 2.01333 11.156C2.74281 11.8793 3.73221 12.2857 4.76385 12.2857H4.90792V13.5714C4.90792 13.6851 4.95346 13.7941 5.03451 13.8745C5.11557 13.9548 5.2255 14 5.34013 14C5.45475 14 5.56468 13.9548 5.64574 13.8745C5.72679 13.7941 5.77233 13.6851 5.77233 13.5714V12.2857H12.9757V13.5714C12.9757 13.6851 13.0213 13.7941 13.1023 13.8745C13.1834 13.9548 13.2933 14 13.4079 14C13.5225 14 13.6325 13.9548 13.7135 13.8745C13.7946 13.7941 13.8401 13.6851 13.8401 13.5714V12.2857H13.9842C15.0158 12.2857 16.0052 11.8793 16.7347 11.156C17.4642 10.4326 17.874 9.45155 17.874 8.42857V6.14286C17.874 5.87764 17.7678 5.62329 17.5786 5.43575C17.3895 5.24821 17.133 5.14286 16.8655 5.14286ZM10.3825 5.42857H14.1283V8H10.3825V5.42857ZM17.0096 8.42857C17.0096 9.22422 16.6909 9.98728 16.1235 10.5499C15.5561 11.1125 14.7866 11.4286 13.9842 11.4286H4.76385C3.96146 11.4286 3.19193 11.1125 2.62456 10.5499C2.05718 9.98728 1.73843 9.22422 1.73843 8.42857V6.14286C1.73843 6.10497 1.75361 6.06863 1.78063 6.04184C1.80764 6.01505 1.84429 6 1.8825 6H9.51809V8.42857C9.51809 8.54224 9.56363 8.65125 9.64468 8.73162C9.72573 8.81199 9.83567 8.85714 9.95029 8.85714H14.5605C14.6751 8.85714 14.785 8.81199 14.8661 8.73162C14.9471 8.65125 14.9927 8.54224 14.9927 8.42857V6H16.8655C16.9038 6 16.9404 6.01505 16.9674 6.04184C16.9944 6.06863 17.0096 6.10497 17.0096 6.14286V8.42857Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.22402 14H14.524C14.6168 14 14.7059 13.9631 14.7715 13.8975C14.8371 13.8318 14.874 13.7428 14.874 13.65V0.35C14.874 0.257174 14.8371 0.16815 14.7715 0.102512C14.7059 0.0368748 14.6168 0 14.524 0H9.62402C9.5312 0 9.44217 0.0368748 9.37654 0.102512C9.3109 0.16815 9.27402 0.257174 9.27402 0.35V8.4H1.22402C1.1312 8.4 1.04217 8.43687 0.976536 8.50251C0.910898 8.56815 0.874023 8.65717 0.874023 8.75V13.65C0.874023 13.7428 0.910898 13.8318 0.976536 13.8975C1.04217 13.9631 1.1312 14 1.22402 14ZM1.57402 9.1H4.02402V10.85C4.02402 10.9428 4.0609 11.0318 4.12654 11.0975C4.19217 11.1631 4.2812 11.2 4.37402 11.2C4.46685 11.2 4.55587 11.1631 4.62151 11.0975C4.68715 11.0318 4.72402 10.9428 4.72402 10.85V9.1H6.82402V10.85C6.82402 10.9428 6.8609 11.0318 6.92654 11.0975C6.99217 11.1631 7.0812 11.2 7.17402 11.2C7.26685 11.2 7.35587 11.1631 7.42151 11.0975C7.48715 11.0318 7.52402 10.9428 7.52402 10.85V9.1H9.27402V10.85C9.27402 10.9428 9.3109 11.0318 9.37654 11.0975C9.44217 11.1631 9.5312 11.2 9.62402 11.2C9.71685 11.2 9.80587 11.1631 9.87151 11.0975C9.93715 11.0318 9.97402 10.9428 9.97402 10.85V9.1H11.724C11.8168 9.1 11.9059 9.06313 11.9715 8.99749C12.0371 8.93185 12.074 8.84283 12.074 8.75C12.074 8.65717 12.0371 8.56815 11.9715 8.50251C11.9059 8.43687 11.8168 8.4 11.724 8.4H9.97402V6.65H11.724C11.8168 6.65 11.9059 6.61313 11.9715 6.54749C12.0371 6.48185 12.074 6.39283 12.074 6.3C12.074 6.20717 12.0371 6.11815 11.9715 6.05251C11.9059 5.98687 11.8168 5.95 11.724 5.95H9.97402V3.85H11.724C11.8168 3.85 11.9059 3.81313 11.9715 3.74749C12.0371 3.68185 12.074 3.59283 12.074 3.5C12.074 3.40717 12.0371 3.31815 11.9715 3.25251C11.9059 3.18687 11.8168 3.15 11.724 3.15H9.97402V0.7H14.174V13.3H1.57402V9.1Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>1280 sq ft</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.874 3H11.874V1C11.8738 0.734865 11.7683 0.480665 11.5808 0.293186C11.3934 0.105707 11.1392 0.000264738 10.874 0H1.87402C1.60889 0.000264738 1.35469 0.105707 1.16721 0.293186C0.97973 0.480665 0.874288 0.734865 0.874023 1V10C0.874288 10.2651 0.97973 10.5193 1.16721 10.7068C1.35469 10.8943 1.60889 10.9997 1.87402 11H3.87402V13C3.87429 13.2651 3.97973 13.5193 4.16721 13.7068C4.35469 13.8943 4.60889 13.9997 4.87402 14H13.874C14.1392 13.9997 14.3934 13.8943 14.5808 13.7068C14.7683 13.5193 14.8738 13.2651 14.874 13V4C14.8738 3.73486 14.7683 3.48066 14.5808 3.29319C14.3934 3.10571 14.1392 3.00026 13.874 3ZM10.874 10H6.87402V7.5H10.874V10ZM10.874 6.5H6.87402V4H10.874V6.5ZM5.87402 6.5H1.87402V4H5.87402V6.5ZM10.874 1V3H1.87402V1H10.874ZM1.87402 10V7.5H5.87402V10H1.87402ZM13.874 13H4.87402V11H10.874C11.1392 10.9997 11.3934 10.8943 11.5808 10.7068C11.7683 10.5193 11.8738 10.2651 11.874 10V4H13.874V13Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2 Y</p>
                                            </div>
                                        </div>
                                        <Link href="/productDetail">
                                            <button className={grid ? "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium hidden" : "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium"}>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={grid ? "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px] flex-col" : "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px]"}>
                                <div className=''>
                                    <img src="/../assets/product.jpg" alt="" className={grid ? "w-full h-[280px]" : ""} />
                                </div>
                                <div>
                                    <p className='text-[#3B0E71] text-[23.833px] font-medium leading-[36px]'>$ 15,000</p>
                                    <p className='text-[#24263F] text-[16px] leading-[24px] font-medium mt-[10px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
                                    {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#ffd700"
                                    /> */}

                                    <Rate />
                                    <p className='text-[#24263F] text-[13px] leading-[20px] font-light mt-[0px]'>3 BHK Apartment, Andheri West, Mumbai</p>
                                    <div className='flex items-center justify-between mt-[18.01px]'>
                                        <div className={grid ? "w-full h-[38px] bg-[#F9F9F9] flex items-center 2xl:gap-[33px] xl:gap-[14px] 2xl:pl-[30.07px] xl:pl-[15px]" : "w-[393.93px] h-[38px] bg-[#F9F9F9] flex items-center gap-[33px] pl-[30.07px]"}>
                                            <div className='flex items-center gap-[5px]'><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.374 2.96809e-08C13.0087 -9.77163e-05 13.6197 0.241233 14.0831 0.67504C14.5464 1.10885 14.8274 1.70265 14.869 2.336L14.874 2.5V5.05C15.4099 5.15959 15.895 5.4418 16.2551 5.85342C16.6153 6.26503 16.8306 6.78336 16.868 7.329L16.874 7.5V13.5C16.8743 13.6249 16.8277 13.7455 16.7435 13.8378C16.6593 13.9301 16.5436 13.9876 16.4192 13.9989C16.2948 14.0102 16.1706 13.9745 16.0712 13.8988C15.9718 13.8231 15.9043 13.7129 15.882 13.59L15.874 13.5V11H1.87402V13.5C1.87425 13.6249 1.82769 13.7455 1.74352 13.8378C1.65934 13.9301 1.54364 13.9876 1.4192 13.9989C1.29477 14.0102 1.17061 13.9745 1.07119 13.8988C0.97177 13.8231 0.904284 13.7129 0.882023 13.59L0.874023 13.5V7.5C0.873906 6.92367 1.07292 6.36501 1.43737 5.91855C1.80183 5.47209 2.30934 5.16527 2.87402 5.05V2.5C2.87393 1.86528 3.11526 1.25429 3.54906 0.790955C3.98287 0.327621 4.57667 0.0466377 5.21002 0.00500014L5.37402 2.96809e-08H12.374ZM14.374 6H3.37402C3.0013 5.99999 2.64192 6.13876 2.36592 6.38925C2.08991 6.63974 1.91705 6.98402 1.88102 7.355L1.87402 7.5V10H15.874V7.5C15.874 7.12727 15.7353 6.7679 15.4848 6.49189C15.2343 6.21589 14.89 6.04303 14.519 6.007L14.374 6ZM12.374 1H5.37402C5.00114 1.00002 4.64163 1.13892 4.3656 1.38962C4.08958 1.64032 3.91682 1.98484 3.88102 2.356L3.87402 2.5V5H4.87402V4.5C4.87402 4.36739 4.9267 4.24021 5.02047 4.14645C5.11424 4.05268 5.24142 4 5.37402 4H7.87402C8.00663 4 8.13381 4.05268 8.22758 4.14645C8.32135 4.24021 8.37402 4.36739 8.37402 4.5V5H9.37402V4.5C9.37402 4.36739 9.4267 4.24021 9.52047 4.14645C9.61424 4.05268 9.74142 4 9.87402 4H12.374C12.5066 4 12.6338 4.05268 12.7276 4.14645C12.8213 4.24021 12.874 4.36739 12.874 4.5V5H13.874V2.5C13.874 2.12727 13.7353 1.7679 13.4848 1.49189C13.2343 1.21589 12.89 1.04303 12.519 1.007L12.374 1Z" fill="#2D2D2D" />
                                            </svg>
                                                <p>3</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8655 5.14286H14.9927V5C14.9927 4.88634 14.9471 4.77733 14.8661 4.69695C14.785 4.61658 14.6751 4.57143 14.5605 4.57143H9.95029C9.83567 4.57143 9.72573 4.61658 9.64468 4.69695C9.56363 4.77733 9.51809 4.88634 9.51809 5V5.14286H4.61979V1.85714C4.61979 1.59193 4.72604 1.33757 4.91516 1.15004C5.10429 0.9625 5.3608 0.857143 5.62826 0.857143C5.89572 0.857143 6.15223 0.9625 6.34136 1.15004C6.53049 1.33757 6.63673 1.59193 6.63673 1.85714C6.63673 1.97081 6.68227 2.07982 6.76332 2.16019C6.84438 2.24056 6.95431 2.28571 7.06894 2.28571C7.18357 2.28571 7.2935 2.24056 7.37455 2.16019C7.45561 2.07982 7.50114 1.97081 7.50114 1.85714C7.50114 1.3646 7.30382 0.892226 6.95259 0.543945C6.60135 0.195663 6.12498 0 5.62826 0C5.13154 0 4.65517 0.195663 4.30393 0.543945C3.9527 0.892226 3.75538 1.3646 3.75538 1.85714V5.14286H1.8825C1.61503 5.14286 1.35852 5.24821 1.1694 5.43575C0.980273 5.62329 0.874023 5.87764 0.874023 6.14286V8.42857C0.874023 9.45155 1.28384 10.4326 2.01333 11.156C2.74281 11.8793 3.73221 12.2857 4.76385 12.2857H4.90792V13.5714C4.90792 13.6851 4.95346 13.7941 5.03451 13.8745C5.11557 13.9548 5.2255 14 5.34013 14C5.45475 14 5.56468 13.9548 5.64574 13.8745C5.72679 13.7941 5.77233 13.6851 5.77233 13.5714V12.2857H12.9757V13.5714C12.9757 13.6851 13.0213 13.7941 13.1023 13.8745C13.1834 13.9548 13.2933 14 13.4079 14C13.5225 14 13.6325 13.9548 13.7135 13.8745C13.7946 13.7941 13.8401 13.6851 13.8401 13.5714V12.2857H13.9842C15.0158 12.2857 16.0052 11.8793 16.7347 11.156C17.4642 10.4326 17.874 9.45155 17.874 8.42857V6.14286C17.874 5.87764 17.7678 5.62329 17.5786 5.43575C17.3895 5.24821 17.133 5.14286 16.8655 5.14286ZM10.3825 5.42857H14.1283V8H10.3825V5.42857ZM17.0096 8.42857C17.0096 9.22422 16.6909 9.98728 16.1235 10.5499C15.5561 11.1125 14.7866 11.4286 13.9842 11.4286H4.76385C3.96146 11.4286 3.19193 11.1125 2.62456 10.5499C2.05718 9.98728 1.73843 9.22422 1.73843 8.42857V6.14286C1.73843 6.10497 1.75361 6.06863 1.78063 6.04184C1.80764 6.01505 1.84429 6 1.8825 6H9.51809V8.42857C9.51809 8.54224 9.56363 8.65125 9.64468 8.73162C9.72573 8.81199 9.83567 8.85714 9.95029 8.85714H14.5605C14.6751 8.85714 14.785 8.81199 14.8661 8.73162C14.9471 8.65125 14.9927 8.54224 14.9927 8.42857V6H16.8655C16.9038 6 16.9404 6.01505 16.9674 6.04184C16.9944 6.06863 17.0096 6.10497 17.0096 6.14286V8.42857Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.22402 14H14.524C14.6168 14 14.7059 13.9631 14.7715 13.8975C14.8371 13.8318 14.874 13.7428 14.874 13.65V0.35C14.874 0.257174 14.8371 0.16815 14.7715 0.102512C14.7059 0.0368748 14.6168 0 14.524 0H9.62402C9.5312 0 9.44217 0.0368748 9.37654 0.102512C9.3109 0.16815 9.27402 0.257174 9.27402 0.35V8.4H1.22402C1.1312 8.4 1.04217 8.43687 0.976536 8.50251C0.910898 8.56815 0.874023 8.65717 0.874023 8.75V13.65C0.874023 13.7428 0.910898 13.8318 0.976536 13.8975C1.04217 13.9631 1.1312 14 1.22402 14ZM1.57402 9.1H4.02402V10.85C4.02402 10.9428 4.0609 11.0318 4.12654 11.0975C4.19217 11.1631 4.2812 11.2 4.37402 11.2C4.46685 11.2 4.55587 11.1631 4.62151 11.0975C4.68715 11.0318 4.72402 10.9428 4.72402 10.85V9.1H6.82402V10.85C6.82402 10.9428 6.8609 11.0318 6.92654 11.0975C6.99217 11.1631 7.0812 11.2 7.17402 11.2C7.26685 11.2 7.35587 11.1631 7.42151 11.0975C7.48715 11.0318 7.52402 10.9428 7.52402 10.85V9.1H9.27402V10.85C9.27402 10.9428 9.3109 11.0318 9.37654 11.0975C9.44217 11.1631 9.5312 11.2 9.62402 11.2C9.71685 11.2 9.80587 11.1631 9.87151 11.0975C9.93715 11.0318 9.97402 10.9428 9.97402 10.85V9.1H11.724C11.8168 9.1 11.9059 9.06313 11.9715 8.99749C12.0371 8.93185 12.074 8.84283 12.074 8.75C12.074 8.65717 12.0371 8.56815 11.9715 8.50251C11.9059 8.43687 11.8168 8.4 11.724 8.4H9.97402V6.65H11.724C11.8168 6.65 11.9059 6.61313 11.9715 6.54749C12.0371 6.48185 12.074 6.39283 12.074 6.3C12.074 6.20717 12.0371 6.11815 11.9715 6.05251C11.9059 5.98687 11.8168 5.95 11.724 5.95H9.97402V3.85H11.724C11.8168 3.85 11.9059 3.81313 11.9715 3.74749C12.0371 3.68185 12.074 3.59283 12.074 3.5C12.074 3.40717 12.0371 3.31815 11.9715 3.25251C11.9059 3.18687 11.8168 3.15 11.724 3.15H9.97402V0.7H14.174V13.3H1.57402V9.1Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>1280 sq ft</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.874 3H11.874V1C11.8738 0.734865 11.7683 0.480665 11.5808 0.293186C11.3934 0.105707 11.1392 0.000264738 10.874 0H1.87402C1.60889 0.000264738 1.35469 0.105707 1.16721 0.293186C0.97973 0.480665 0.874288 0.734865 0.874023 1V10C0.874288 10.2651 0.97973 10.5193 1.16721 10.7068C1.35469 10.8943 1.60889 10.9997 1.87402 11H3.87402V13C3.87429 13.2651 3.97973 13.5193 4.16721 13.7068C4.35469 13.8943 4.60889 13.9997 4.87402 14H13.874C14.1392 13.9997 14.3934 13.8943 14.5808 13.7068C14.7683 13.5193 14.8738 13.2651 14.874 13V4C14.8738 3.73486 14.7683 3.48066 14.5808 3.29319C14.3934 3.10571 14.1392 3.00026 13.874 3ZM10.874 10H6.87402V7.5H10.874V10ZM10.874 6.5H6.87402V4H10.874V6.5ZM5.87402 6.5H1.87402V4H5.87402V6.5ZM10.874 1V3H1.87402V1H10.874ZM1.87402 10V7.5H5.87402V10H1.87402ZM13.874 13H4.87402V11H10.874C11.1392 10.9997 11.3934 10.8943 11.5808 10.7068C11.7683 10.5193 11.8738 10.2651 11.874 10V4H13.874V13Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2 Y</p>
                                            </div>
                                        </div>
                                        <button className={grid ? "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium hidden" : "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium"}>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className={grid ? "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px] flex-col" : "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px]"}>
                                <div className=''>
                                    <img src="/../assets/product.jpg" alt="" className={grid ? "w-full h-[280px]" : ""} />
                                </div>
                                <div>
                                    <p className='text-[#3B0E71] text-[23.833px] font-medium leading-[36px]'>$ 15,000</p>
                                    <p className='text-[#24263F] text-[16px] leading-[24px] font-medium mt-[10px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
                                    {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#ffd700"
                                    /> */}

                                    <Rate />
                                    <p className='text-[#24263F] text-[13px] leading-[20px] font-light mt-[0px]'>3 BHK Apartment, Andheri West, Mumbai</p>
                                    <div className='flex items-center justify-between mt-[18.01px]'>
                                        <div className={grid ? "w-full h-[38px] bg-[#F9F9F9] flex items-center 2xl:gap-[33px] xl:gap-[14px] 2xl:pl-[30.07px] xl:pl-[15px]" : "w-[393.93px] h-[38px] bg-[#F9F9F9] flex items-center gap-[33px] pl-[30.07px]"}>
                                            <div className='flex items-center gap-[5px]'><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.374 2.96809e-08C13.0087 -9.77163e-05 13.6197 0.241233 14.0831 0.67504C14.5464 1.10885 14.8274 1.70265 14.869 2.336L14.874 2.5V5.05C15.4099 5.15959 15.895 5.4418 16.2551 5.85342C16.6153 6.26503 16.8306 6.78336 16.868 7.329L16.874 7.5V13.5C16.8743 13.6249 16.8277 13.7455 16.7435 13.8378C16.6593 13.9301 16.5436 13.9876 16.4192 13.9989C16.2948 14.0102 16.1706 13.9745 16.0712 13.8988C15.9718 13.8231 15.9043 13.7129 15.882 13.59L15.874 13.5V11H1.87402V13.5C1.87425 13.6249 1.82769 13.7455 1.74352 13.8378C1.65934 13.9301 1.54364 13.9876 1.4192 13.9989C1.29477 14.0102 1.17061 13.9745 1.07119 13.8988C0.97177 13.8231 0.904284 13.7129 0.882023 13.59L0.874023 13.5V7.5C0.873906 6.92367 1.07292 6.36501 1.43737 5.91855C1.80183 5.47209 2.30934 5.16527 2.87402 5.05V2.5C2.87393 1.86528 3.11526 1.25429 3.54906 0.790955C3.98287 0.327621 4.57667 0.0466377 5.21002 0.00500014L5.37402 2.96809e-08H12.374ZM14.374 6H3.37402C3.0013 5.99999 2.64192 6.13876 2.36592 6.38925C2.08991 6.63974 1.91705 6.98402 1.88102 7.355L1.87402 7.5V10H15.874V7.5C15.874 7.12727 15.7353 6.7679 15.4848 6.49189C15.2343 6.21589 14.89 6.04303 14.519 6.007L14.374 6ZM12.374 1H5.37402C5.00114 1.00002 4.64163 1.13892 4.3656 1.38962C4.08958 1.64032 3.91682 1.98484 3.88102 2.356L3.87402 2.5V5H4.87402V4.5C4.87402 4.36739 4.9267 4.24021 5.02047 4.14645C5.11424 4.05268 5.24142 4 5.37402 4H7.87402C8.00663 4 8.13381 4.05268 8.22758 4.14645C8.32135 4.24021 8.37402 4.36739 8.37402 4.5V5H9.37402V4.5C9.37402 4.36739 9.4267 4.24021 9.52047 4.14645C9.61424 4.05268 9.74142 4 9.87402 4H12.374C12.5066 4 12.6338 4.05268 12.7276 4.14645C12.8213 4.24021 12.874 4.36739 12.874 4.5V5H13.874V2.5C13.874 2.12727 13.7353 1.7679 13.4848 1.49189C13.2343 1.21589 12.89 1.04303 12.519 1.007L12.374 1Z" fill="#2D2D2D" />
                                            </svg>
                                                <p>3</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8655 5.14286H14.9927V5C14.9927 4.88634 14.9471 4.77733 14.8661 4.69695C14.785 4.61658 14.6751 4.57143 14.5605 4.57143H9.95029C9.83567 4.57143 9.72573 4.61658 9.64468 4.69695C9.56363 4.77733 9.51809 4.88634 9.51809 5V5.14286H4.61979V1.85714C4.61979 1.59193 4.72604 1.33757 4.91516 1.15004C5.10429 0.9625 5.3608 0.857143 5.62826 0.857143C5.89572 0.857143 6.15223 0.9625 6.34136 1.15004C6.53049 1.33757 6.63673 1.59193 6.63673 1.85714C6.63673 1.97081 6.68227 2.07982 6.76332 2.16019C6.84438 2.24056 6.95431 2.28571 7.06894 2.28571C7.18357 2.28571 7.2935 2.24056 7.37455 2.16019C7.45561 2.07982 7.50114 1.97081 7.50114 1.85714C7.50114 1.3646 7.30382 0.892226 6.95259 0.543945C6.60135 0.195663 6.12498 0 5.62826 0C5.13154 0 4.65517 0.195663 4.30393 0.543945C3.9527 0.892226 3.75538 1.3646 3.75538 1.85714V5.14286H1.8825C1.61503 5.14286 1.35852 5.24821 1.1694 5.43575C0.980273 5.62329 0.874023 5.87764 0.874023 6.14286V8.42857C0.874023 9.45155 1.28384 10.4326 2.01333 11.156C2.74281 11.8793 3.73221 12.2857 4.76385 12.2857H4.90792V13.5714C4.90792 13.6851 4.95346 13.7941 5.03451 13.8745C5.11557 13.9548 5.2255 14 5.34013 14C5.45475 14 5.56468 13.9548 5.64574 13.8745C5.72679 13.7941 5.77233 13.6851 5.77233 13.5714V12.2857H12.9757V13.5714C12.9757 13.6851 13.0213 13.7941 13.1023 13.8745C13.1834 13.9548 13.2933 14 13.4079 14C13.5225 14 13.6325 13.9548 13.7135 13.8745C13.7946 13.7941 13.8401 13.6851 13.8401 13.5714V12.2857H13.9842C15.0158 12.2857 16.0052 11.8793 16.7347 11.156C17.4642 10.4326 17.874 9.45155 17.874 8.42857V6.14286C17.874 5.87764 17.7678 5.62329 17.5786 5.43575C17.3895 5.24821 17.133 5.14286 16.8655 5.14286ZM10.3825 5.42857H14.1283V8H10.3825V5.42857ZM17.0096 8.42857C17.0096 9.22422 16.6909 9.98728 16.1235 10.5499C15.5561 11.1125 14.7866 11.4286 13.9842 11.4286H4.76385C3.96146 11.4286 3.19193 11.1125 2.62456 10.5499C2.05718 9.98728 1.73843 9.22422 1.73843 8.42857V6.14286C1.73843 6.10497 1.75361 6.06863 1.78063 6.04184C1.80764 6.01505 1.84429 6 1.8825 6H9.51809V8.42857C9.51809 8.54224 9.56363 8.65125 9.64468 8.73162C9.72573 8.81199 9.83567 8.85714 9.95029 8.85714H14.5605C14.6751 8.85714 14.785 8.81199 14.8661 8.73162C14.9471 8.65125 14.9927 8.54224 14.9927 8.42857V6H16.8655C16.9038 6 16.9404 6.01505 16.9674 6.04184C16.9944 6.06863 17.0096 6.10497 17.0096 6.14286V8.42857Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.22402 14H14.524C14.6168 14 14.7059 13.9631 14.7715 13.8975C14.8371 13.8318 14.874 13.7428 14.874 13.65V0.35C14.874 0.257174 14.8371 0.16815 14.7715 0.102512C14.7059 0.0368748 14.6168 0 14.524 0H9.62402C9.5312 0 9.44217 0.0368748 9.37654 0.102512C9.3109 0.16815 9.27402 0.257174 9.27402 0.35V8.4H1.22402C1.1312 8.4 1.04217 8.43687 0.976536 8.50251C0.910898 8.56815 0.874023 8.65717 0.874023 8.75V13.65C0.874023 13.7428 0.910898 13.8318 0.976536 13.8975C1.04217 13.9631 1.1312 14 1.22402 14ZM1.57402 9.1H4.02402V10.85C4.02402 10.9428 4.0609 11.0318 4.12654 11.0975C4.19217 11.1631 4.2812 11.2 4.37402 11.2C4.46685 11.2 4.55587 11.1631 4.62151 11.0975C4.68715 11.0318 4.72402 10.9428 4.72402 10.85V9.1H6.82402V10.85C6.82402 10.9428 6.8609 11.0318 6.92654 11.0975C6.99217 11.1631 7.0812 11.2 7.17402 11.2C7.26685 11.2 7.35587 11.1631 7.42151 11.0975C7.48715 11.0318 7.52402 10.9428 7.52402 10.85V9.1H9.27402V10.85C9.27402 10.9428 9.3109 11.0318 9.37654 11.0975C9.44217 11.1631 9.5312 11.2 9.62402 11.2C9.71685 11.2 9.80587 11.1631 9.87151 11.0975C9.93715 11.0318 9.97402 10.9428 9.97402 10.85V9.1H11.724C11.8168 9.1 11.9059 9.06313 11.9715 8.99749C12.0371 8.93185 12.074 8.84283 12.074 8.75C12.074 8.65717 12.0371 8.56815 11.9715 8.50251C11.9059 8.43687 11.8168 8.4 11.724 8.4H9.97402V6.65H11.724C11.8168 6.65 11.9059 6.61313 11.9715 6.54749C12.0371 6.48185 12.074 6.39283 12.074 6.3C12.074 6.20717 12.0371 6.11815 11.9715 6.05251C11.9059 5.98687 11.8168 5.95 11.724 5.95H9.97402V3.85H11.724C11.8168 3.85 11.9059 3.81313 11.9715 3.74749C12.0371 3.68185 12.074 3.59283 12.074 3.5C12.074 3.40717 12.0371 3.31815 11.9715 3.25251C11.9059 3.18687 11.8168 3.15 11.724 3.15H9.97402V0.7H14.174V13.3H1.57402V9.1Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>1280 sq ft</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.874 3H11.874V1C11.8738 0.734865 11.7683 0.480665 11.5808 0.293186C11.3934 0.105707 11.1392 0.000264738 10.874 0H1.87402C1.60889 0.000264738 1.35469 0.105707 1.16721 0.293186C0.97973 0.480665 0.874288 0.734865 0.874023 1V10C0.874288 10.2651 0.97973 10.5193 1.16721 10.7068C1.35469 10.8943 1.60889 10.9997 1.87402 11H3.87402V13C3.87429 13.2651 3.97973 13.5193 4.16721 13.7068C4.35469 13.8943 4.60889 13.9997 4.87402 14H13.874C14.1392 13.9997 14.3934 13.8943 14.5808 13.7068C14.7683 13.5193 14.8738 13.2651 14.874 13V4C14.8738 3.73486 14.7683 3.48066 14.5808 3.29319C14.3934 3.10571 14.1392 3.00026 13.874 3ZM10.874 10H6.87402V7.5H10.874V10ZM10.874 6.5H6.87402V4H10.874V6.5ZM5.87402 6.5H1.87402V4H5.87402V6.5ZM10.874 1V3H1.87402V1H10.874ZM1.87402 10V7.5H5.87402V10H1.87402ZM13.874 13H4.87402V11H10.874C11.1392 10.9997 11.3934 10.8943 11.5808 10.7068C11.7683 10.5193 11.8738 10.2651 11.874 10V4H13.874V13Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2 Y</p>
                                            </div>
                                        </div>
                                        <button className={grid ? "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium hidden" : "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium"}>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className={grid ? "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px] flex-col" : "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px]"}>
                                <div className=''>
                                    <img src="/../assets/product.jpg" alt="" className={grid ? "w-full h-[280px]" : ""} />
                                </div>
                                <div>
                                    <p className='text-[#3B0E71] text-[23.833px] font-medium leading-[36px]'>$ 15,000</p>
                                    <p className='text-[#24263F] text-[16px] leading-[24px] font-medium mt-[10px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
                                    {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#ffd700"
                                    /> */}
                                    <Rate />
                                    <p className='text-[#24263F] text-[13px] leading-[20px] font-light mt-[0px]'>3 BHK Apartment, Andheri West, Mumbai</p>
                                    <div className='flex items-center justify-between mt-[18.01px]'>
                                        <div className={grid ? "w-full h-[38px] bg-[#F9F9F9] flex items-center 2xl:gap-[33px] xl:gap-[14px] 2xl:pl-[30.07px] xl:pl-[15px]" : "w-[393.93px] h-[38px] bg-[#F9F9F9] flex items-center gap-[33px] pl-[30.07px]"}>
                                            <div className='flex items-center gap-[5px]'><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.374 2.96809e-08C13.0087 -9.77163e-05 13.6197 0.241233 14.0831 0.67504C14.5464 1.10885 14.8274 1.70265 14.869 2.336L14.874 2.5V5.05C15.4099 5.15959 15.895 5.4418 16.2551 5.85342C16.6153 6.26503 16.8306 6.78336 16.868 7.329L16.874 7.5V13.5C16.8743 13.6249 16.8277 13.7455 16.7435 13.8378C16.6593 13.9301 16.5436 13.9876 16.4192 13.9989C16.2948 14.0102 16.1706 13.9745 16.0712 13.8988C15.9718 13.8231 15.9043 13.7129 15.882 13.59L15.874 13.5V11H1.87402V13.5C1.87425 13.6249 1.82769 13.7455 1.74352 13.8378C1.65934 13.9301 1.54364 13.9876 1.4192 13.9989C1.29477 14.0102 1.17061 13.9745 1.07119 13.8988C0.97177 13.8231 0.904284 13.7129 0.882023 13.59L0.874023 13.5V7.5C0.873906 6.92367 1.07292 6.36501 1.43737 5.91855C1.80183 5.47209 2.30934 5.16527 2.87402 5.05V2.5C2.87393 1.86528 3.11526 1.25429 3.54906 0.790955C3.98287 0.327621 4.57667 0.0466377 5.21002 0.00500014L5.37402 2.96809e-08H12.374ZM14.374 6H3.37402C3.0013 5.99999 2.64192 6.13876 2.36592 6.38925C2.08991 6.63974 1.91705 6.98402 1.88102 7.355L1.87402 7.5V10H15.874V7.5C15.874 7.12727 15.7353 6.7679 15.4848 6.49189C15.2343 6.21589 14.89 6.04303 14.519 6.007L14.374 6ZM12.374 1H5.37402C5.00114 1.00002 4.64163 1.13892 4.3656 1.38962C4.08958 1.64032 3.91682 1.98484 3.88102 2.356L3.87402 2.5V5H4.87402V4.5C4.87402 4.36739 4.9267 4.24021 5.02047 4.14645C5.11424 4.05268 5.24142 4 5.37402 4H7.87402C8.00663 4 8.13381 4.05268 8.22758 4.14645C8.32135 4.24021 8.37402 4.36739 8.37402 4.5V5H9.37402V4.5C9.37402 4.36739 9.4267 4.24021 9.52047 4.14645C9.61424 4.05268 9.74142 4 9.87402 4H12.374C12.5066 4 12.6338 4.05268 12.7276 4.14645C12.8213 4.24021 12.874 4.36739 12.874 4.5V5H13.874V2.5C13.874 2.12727 13.7353 1.7679 13.4848 1.49189C13.2343 1.21589 12.89 1.04303 12.519 1.007L12.374 1Z" fill="#2D2D2D" />
                                            </svg>
                                                <p>3</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8655 5.14286H14.9927V5C14.9927 4.88634 14.9471 4.77733 14.8661 4.69695C14.785 4.61658 14.6751 4.57143 14.5605 4.57143H9.95029C9.83567 4.57143 9.72573 4.61658 9.64468 4.69695C9.56363 4.77733 9.51809 4.88634 9.51809 5V5.14286H4.61979V1.85714C4.61979 1.59193 4.72604 1.33757 4.91516 1.15004C5.10429 0.9625 5.3608 0.857143 5.62826 0.857143C5.89572 0.857143 6.15223 0.9625 6.34136 1.15004C6.53049 1.33757 6.63673 1.59193 6.63673 1.85714C6.63673 1.97081 6.68227 2.07982 6.76332 2.16019C6.84438 2.24056 6.95431 2.28571 7.06894 2.28571C7.18357 2.28571 7.2935 2.24056 7.37455 2.16019C7.45561 2.07982 7.50114 1.97081 7.50114 1.85714C7.50114 1.3646 7.30382 0.892226 6.95259 0.543945C6.60135 0.195663 6.12498 0 5.62826 0C5.13154 0 4.65517 0.195663 4.30393 0.543945C3.9527 0.892226 3.75538 1.3646 3.75538 1.85714V5.14286H1.8825C1.61503 5.14286 1.35852 5.24821 1.1694 5.43575C0.980273 5.62329 0.874023 5.87764 0.874023 6.14286V8.42857C0.874023 9.45155 1.28384 10.4326 2.01333 11.156C2.74281 11.8793 3.73221 12.2857 4.76385 12.2857H4.90792V13.5714C4.90792 13.6851 4.95346 13.7941 5.03451 13.8745C5.11557 13.9548 5.2255 14 5.34013 14C5.45475 14 5.56468 13.9548 5.64574 13.8745C5.72679 13.7941 5.77233 13.6851 5.77233 13.5714V12.2857H12.9757V13.5714C12.9757 13.6851 13.0213 13.7941 13.1023 13.8745C13.1834 13.9548 13.2933 14 13.4079 14C13.5225 14 13.6325 13.9548 13.7135 13.8745C13.7946 13.7941 13.8401 13.6851 13.8401 13.5714V12.2857H13.9842C15.0158 12.2857 16.0052 11.8793 16.7347 11.156C17.4642 10.4326 17.874 9.45155 17.874 8.42857V6.14286C17.874 5.87764 17.7678 5.62329 17.5786 5.43575C17.3895 5.24821 17.133 5.14286 16.8655 5.14286ZM10.3825 5.42857H14.1283V8H10.3825V5.42857ZM17.0096 8.42857C17.0096 9.22422 16.6909 9.98728 16.1235 10.5499C15.5561 11.1125 14.7866 11.4286 13.9842 11.4286H4.76385C3.96146 11.4286 3.19193 11.1125 2.62456 10.5499C2.05718 9.98728 1.73843 9.22422 1.73843 8.42857V6.14286C1.73843 6.10497 1.75361 6.06863 1.78063 6.04184C1.80764 6.01505 1.84429 6 1.8825 6H9.51809V8.42857C9.51809 8.54224 9.56363 8.65125 9.64468 8.73162C9.72573 8.81199 9.83567 8.85714 9.95029 8.85714H14.5605C14.6751 8.85714 14.785 8.81199 14.8661 8.73162C14.9471 8.65125 14.9927 8.54224 14.9927 8.42857V6H16.8655C16.9038 6 16.9404 6.01505 16.9674 6.04184C16.9944 6.06863 17.0096 6.10497 17.0096 6.14286V8.42857Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.22402 14H14.524C14.6168 14 14.7059 13.9631 14.7715 13.8975C14.8371 13.8318 14.874 13.7428 14.874 13.65V0.35C14.874 0.257174 14.8371 0.16815 14.7715 0.102512C14.7059 0.0368748 14.6168 0 14.524 0H9.62402C9.5312 0 9.44217 0.0368748 9.37654 0.102512C9.3109 0.16815 9.27402 0.257174 9.27402 0.35V8.4H1.22402C1.1312 8.4 1.04217 8.43687 0.976536 8.50251C0.910898 8.56815 0.874023 8.65717 0.874023 8.75V13.65C0.874023 13.7428 0.910898 13.8318 0.976536 13.8975C1.04217 13.9631 1.1312 14 1.22402 14ZM1.57402 9.1H4.02402V10.85C4.02402 10.9428 4.0609 11.0318 4.12654 11.0975C4.19217 11.1631 4.2812 11.2 4.37402 11.2C4.46685 11.2 4.55587 11.1631 4.62151 11.0975C4.68715 11.0318 4.72402 10.9428 4.72402 10.85V9.1H6.82402V10.85C6.82402 10.9428 6.8609 11.0318 6.92654 11.0975C6.99217 11.1631 7.0812 11.2 7.17402 11.2C7.26685 11.2 7.35587 11.1631 7.42151 11.0975C7.48715 11.0318 7.52402 10.9428 7.52402 10.85V9.1H9.27402V10.85C9.27402 10.9428 9.3109 11.0318 9.37654 11.0975C9.44217 11.1631 9.5312 11.2 9.62402 11.2C9.71685 11.2 9.80587 11.1631 9.87151 11.0975C9.93715 11.0318 9.97402 10.9428 9.97402 10.85V9.1H11.724C11.8168 9.1 11.9059 9.06313 11.9715 8.99749C12.0371 8.93185 12.074 8.84283 12.074 8.75C12.074 8.65717 12.0371 8.56815 11.9715 8.50251C11.9059 8.43687 11.8168 8.4 11.724 8.4H9.97402V6.65H11.724C11.8168 6.65 11.9059 6.61313 11.9715 6.54749C12.0371 6.48185 12.074 6.39283 12.074 6.3C12.074 6.20717 12.0371 6.11815 11.9715 6.05251C11.9059 5.98687 11.8168 5.95 11.724 5.95H9.97402V3.85H11.724C11.8168 3.85 11.9059 3.81313 11.9715 3.74749C12.0371 3.68185 12.074 3.59283 12.074 3.5C12.074 3.40717 12.0371 3.31815 11.9715 3.25251C11.9059 3.18687 11.8168 3.15 11.724 3.15H9.97402V0.7H14.174V13.3H1.57402V9.1Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>1280 sq ft</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.874 3H11.874V1C11.8738 0.734865 11.7683 0.480665 11.5808 0.293186C11.3934 0.105707 11.1392 0.000264738 10.874 0H1.87402C1.60889 0.000264738 1.35469 0.105707 1.16721 0.293186C0.97973 0.480665 0.874288 0.734865 0.874023 1V10C0.874288 10.2651 0.97973 10.5193 1.16721 10.7068C1.35469 10.8943 1.60889 10.9997 1.87402 11H3.87402V13C3.87429 13.2651 3.97973 13.5193 4.16721 13.7068C4.35469 13.8943 4.60889 13.9997 4.87402 14H13.874C14.1392 13.9997 14.3934 13.8943 14.5808 13.7068C14.7683 13.5193 14.8738 13.2651 14.874 13V4C14.8738 3.73486 14.7683 3.48066 14.5808 3.29319C14.3934 3.10571 14.1392 3.00026 13.874 3ZM10.874 10H6.87402V7.5H10.874V10ZM10.874 6.5H6.87402V4H10.874V6.5ZM5.87402 6.5H1.87402V4H5.87402V6.5ZM10.874 1V3H1.87402V1H10.874ZM1.87402 10V7.5H5.87402V10H1.87402ZM13.874 13H4.87402V11H10.874C11.1392 10.9997 11.3934 10.8943 11.5808 10.7068C11.7683 10.5193 11.8738 10.2651 11.874 10V4H13.874V13Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2 Y</p>
                                            </div>
                                        </div>
                                        <button className={grid ? "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium hidden" : "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium"}>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className={grid ? "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px] flex-col" : "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px]"}>
                                <div className=''>
                                    <img src="/../assets/product.jpg" alt="" className={grid ? "w-full h-[280px]" : ""} />
                                </div>
                                <div>
                                    <p className='text-[#3B0E71] text-[23.833px] font-medium leading-[36px]'>$ 15,000</p>
                                    <p className='text-[#24263F] text-[16px] leading-[24px] font-medium mt-[10px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
                                    {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#ffd700"
                                    /> */}
                                    <Rate />
                                    <p className='text-[#24263F] text-[13px] leading-[20px] font-light mt-[0px]'>3 BHK Apartment, Andheri West, Mumbai</p>
                                    <div className='flex items-center justify-between mt-[18.01px]'>
                                        <div className={grid ? "w-full h-[38px] bg-[#F9F9F9] flex items-center 2xl:gap-[33px] xl:gap-[14px] 2xl:pl-[30.07px] xl:pl-[15px]" : "w-[393.93px] h-[38px] bg-[#F9F9F9] flex items-center gap-[33px] pl-[30.07px]"}>
                                            <div className='flex items-center gap-[5px]'><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.374 2.96809e-08C13.0087 -9.77163e-05 13.6197 0.241233 14.0831 0.67504C14.5464 1.10885 14.8274 1.70265 14.869 2.336L14.874 2.5V5.05C15.4099 5.15959 15.895 5.4418 16.2551 5.85342C16.6153 6.26503 16.8306 6.78336 16.868 7.329L16.874 7.5V13.5C16.8743 13.6249 16.8277 13.7455 16.7435 13.8378C16.6593 13.9301 16.5436 13.9876 16.4192 13.9989C16.2948 14.0102 16.1706 13.9745 16.0712 13.8988C15.9718 13.8231 15.9043 13.7129 15.882 13.59L15.874 13.5V11H1.87402V13.5C1.87425 13.6249 1.82769 13.7455 1.74352 13.8378C1.65934 13.9301 1.54364 13.9876 1.4192 13.9989C1.29477 14.0102 1.17061 13.9745 1.07119 13.8988C0.97177 13.8231 0.904284 13.7129 0.882023 13.59L0.874023 13.5V7.5C0.873906 6.92367 1.07292 6.36501 1.43737 5.91855C1.80183 5.47209 2.30934 5.16527 2.87402 5.05V2.5C2.87393 1.86528 3.11526 1.25429 3.54906 0.790955C3.98287 0.327621 4.57667 0.0466377 5.21002 0.00500014L5.37402 2.96809e-08H12.374ZM14.374 6H3.37402C3.0013 5.99999 2.64192 6.13876 2.36592 6.38925C2.08991 6.63974 1.91705 6.98402 1.88102 7.355L1.87402 7.5V10H15.874V7.5C15.874 7.12727 15.7353 6.7679 15.4848 6.49189C15.2343 6.21589 14.89 6.04303 14.519 6.007L14.374 6ZM12.374 1H5.37402C5.00114 1.00002 4.64163 1.13892 4.3656 1.38962C4.08958 1.64032 3.91682 1.98484 3.88102 2.356L3.87402 2.5V5H4.87402V4.5C4.87402 4.36739 4.9267 4.24021 5.02047 4.14645C5.11424 4.05268 5.24142 4 5.37402 4H7.87402C8.00663 4 8.13381 4.05268 8.22758 4.14645C8.32135 4.24021 8.37402 4.36739 8.37402 4.5V5H9.37402V4.5C9.37402 4.36739 9.4267 4.24021 9.52047 4.14645C9.61424 4.05268 9.74142 4 9.87402 4H12.374C12.5066 4 12.6338 4.05268 12.7276 4.14645C12.8213 4.24021 12.874 4.36739 12.874 4.5V5H13.874V2.5C13.874 2.12727 13.7353 1.7679 13.4848 1.49189C13.2343 1.21589 12.89 1.04303 12.519 1.007L12.374 1Z" fill="#2D2D2D" />
                                            </svg>
                                                <p>3</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8655 5.14286H14.9927V5C14.9927 4.88634 14.9471 4.77733 14.8661 4.69695C14.785 4.61658 14.6751 4.57143 14.5605 4.57143H9.95029C9.83567 4.57143 9.72573 4.61658 9.64468 4.69695C9.56363 4.77733 9.51809 4.88634 9.51809 5V5.14286H4.61979V1.85714C4.61979 1.59193 4.72604 1.33757 4.91516 1.15004C5.10429 0.9625 5.3608 0.857143 5.62826 0.857143C5.89572 0.857143 6.15223 0.9625 6.34136 1.15004C6.53049 1.33757 6.63673 1.59193 6.63673 1.85714C6.63673 1.97081 6.68227 2.07982 6.76332 2.16019C6.84438 2.24056 6.95431 2.28571 7.06894 2.28571C7.18357 2.28571 7.2935 2.24056 7.37455 2.16019C7.45561 2.07982 7.50114 1.97081 7.50114 1.85714C7.50114 1.3646 7.30382 0.892226 6.95259 0.543945C6.60135 0.195663 6.12498 0 5.62826 0C5.13154 0 4.65517 0.195663 4.30393 0.543945C3.9527 0.892226 3.75538 1.3646 3.75538 1.85714V5.14286H1.8825C1.61503 5.14286 1.35852 5.24821 1.1694 5.43575C0.980273 5.62329 0.874023 5.87764 0.874023 6.14286V8.42857C0.874023 9.45155 1.28384 10.4326 2.01333 11.156C2.74281 11.8793 3.73221 12.2857 4.76385 12.2857H4.90792V13.5714C4.90792 13.6851 4.95346 13.7941 5.03451 13.8745C5.11557 13.9548 5.2255 14 5.34013 14C5.45475 14 5.56468 13.9548 5.64574 13.8745C5.72679 13.7941 5.77233 13.6851 5.77233 13.5714V12.2857H12.9757V13.5714C12.9757 13.6851 13.0213 13.7941 13.1023 13.8745C13.1834 13.9548 13.2933 14 13.4079 14C13.5225 14 13.6325 13.9548 13.7135 13.8745C13.7946 13.7941 13.8401 13.6851 13.8401 13.5714V12.2857H13.9842C15.0158 12.2857 16.0052 11.8793 16.7347 11.156C17.4642 10.4326 17.874 9.45155 17.874 8.42857V6.14286C17.874 5.87764 17.7678 5.62329 17.5786 5.43575C17.3895 5.24821 17.133 5.14286 16.8655 5.14286ZM10.3825 5.42857H14.1283V8H10.3825V5.42857ZM17.0096 8.42857C17.0096 9.22422 16.6909 9.98728 16.1235 10.5499C15.5561 11.1125 14.7866 11.4286 13.9842 11.4286H4.76385C3.96146 11.4286 3.19193 11.1125 2.62456 10.5499C2.05718 9.98728 1.73843 9.22422 1.73843 8.42857V6.14286C1.73843 6.10497 1.75361 6.06863 1.78063 6.04184C1.80764 6.01505 1.84429 6 1.8825 6H9.51809V8.42857C9.51809 8.54224 9.56363 8.65125 9.64468 8.73162C9.72573 8.81199 9.83567 8.85714 9.95029 8.85714H14.5605C14.6751 8.85714 14.785 8.81199 14.8661 8.73162C14.9471 8.65125 14.9927 8.54224 14.9927 8.42857V6H16.8655C16.9038 6 16.9404 6.01505 16.9674 6.04184C16.9944 6.06863 17.0096 6.10497 17.0096 6.14286V8.42857Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.22402 14H14.524C14.6168 14 14.7059 13.9631 14.7715 13.8975C14.8371 13.8318 14.874 13.7428 14.874 13.65V0.35C14.874 0.257174 14.8371 0.16815 14.7715 0.102512C14.7059 0.0368748 14.6168 0 14.524 0H9.62402C9.5312 0 9.44217 0.0368748 9.37654 0.102512C9.3109 0.16815 9.27402 0.257174 9.27402 0.35V8.4H1.22402C1.1312 8.4 1.04217 8.43687 0.976536 8.50251C0.910898 8.56815 0.874023 8.65717 0.874023 8.75V13.65C0.874023 13.7428 0.910898 13.8318 0.976536 13.8975C1.04217 13.9631 1.1312 14 1.22402 14ZM1.57402 9.1H4.02402V10.85C4.02402 10.9428 4.0609 11.0318 4.12654 11.0975C4.19217 11.1631 4.2812 11.2 4.37402 11.2C4.46685 11.2 4.55587 11.1631 4.62151 11.0975C4.68715 11.0318 4.72402 10.9428 4.72402 10.85V9.1H6.82402V10.85C6.82402 10.9428 6.8609 11.0318 6.92654 11.0975C6.99217 11.1631 7.0812 11.2 7.17402 11.2C7.26685 11.2 7.35587 11.1631 7.42151 11.0975C7.48715 11.0318 7.52402 10.9428 7.52402 10.85V9.1H9.27402V10.85C9.27402 10.9428 9.3109 11.0318 9.37654 11.0975C9.44217 11.1631 9.5312 11.2 9.62402 11.2C9.71685 11.2 9.80587 11.1631 9.87151 11.0975C9.93715 11.0318 9.97402 10.9428 9.97402 10.85V9.1H11.724C11.8168 9.1 11.9059 9.06313 11.9715 8.99749C12.0371 8.93185 12.074 8.84283 12.074 8.75C12.074 8.65717 12.0371 8.56815 11.9715 8.50251C11.9059 8.43687 11.8168 8.4 11.724 8.4H9.97402V6.65H11.724C11.8168 6.65 11.9059 6.61313 11.9715 6.54749C12.0371 6.48185 12.074 6.39283 12.074 6.3C12.074 6.20717 12.0371 6.11815 11.9715 6.05251C11.9059 5.98687 11.8168 5.95 11.724 5.95H9.97402V3.85H11.724C11.8168 3.85 11.9059 3.81313 11.9715 3.74749C12.0371 3.68185 12.074 3.59283 12.074 3.5C12.074 3.40717 12.0371 3.31815 11.9715 3.25251C11.9059 3.18687 11.8168 3.15 11.724 3.15H9.97402V0.7H14.174V13.3H1.57402V9.1Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>1280 sq ft</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.874 3H11.874V1C11.8738 0.734865 11.7683 0.480665 11.5808 0.293186C11.3934 0.105707 11.1392 0.000264738 10.874 0H1.87402C1.60889 0.000264738 1.35469 0.105707 1.16721 0.293186C0.97973 0.480665 0.874288 0.734865 0.874023 1V10C0.874288 10.2651 0.97973 10.5193 1.16721 10.7068C1.35469 10.8943 1.60889 10.9997 1.87402 11H3.87402V13C3.87429 13.2651 3.97973 13.5193 4.16721 13.7068C4.35469 13.8943 4.60889 13.9997 4.87402 14H13.874C14.1392 13.9997 14.3934 13.8943 14.5808 13.7068C14.7683 13.5193 14.8738 13.2651 14.874 13V4C14.8738 3.73486 14.7683 3.48066 14.5808 3.29319C14.3934 3.10571 14.1392 3.00026 13.874 3ZM10.874 10H6.87402V7.5H10.874V10ZM10.874 6.5H6.87402V4H10.874V6.5ZM5.87402 6.5H1.87402V4H5.87402V6.5ZM10.874 1V3H1.87402V1H10.874ZM1.87402 10V7.5H5.87402V10H1.87402ZM13.874 13H4.87402V11H10.874C11.1392 10.9997 11.3934 10.8943 11.5808 10.7068C11.7683 10.5193 11.8738 10.2651 11.874 10V4H13.874V13Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2 Y</p>
                                            </div>
                                        </div>
                                        <button className={grid ? "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium hidden" : "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium"}>View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className={grid ? "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px] flex-col" : "flex  items-center mt-[35px] pl-[17.54px] gap-[18.79px]"}>
                                <div className=''>
                                    <img src="/../assets/product.jpg" alt="" className={grid ? "w-full h-[280px]" : ""} />
                                </div>
                                <div>
                                    <p className='text-[#3B0E71] text-[23.833px] font-medium leading-[36px]'>$ 15,000</p>
                                    <p className='text-[#24263F] text-[16px] leading-[24px] font-medium mt-[10px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
                                    {/* <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#ffd700"
                                    /> */}
                                    <Rate />
                                    <p className='text-[#24263F] text-[13px] leading-[20px] font-light mt-[0px]'>3 BHK Apartment, Andheri West, Mumbai</p>
                                    <div className='flex items-center justify-between mt-[18.01px]'>
                                        <div className={grid ? "w-full h-[38px] bg-[#F9F9F9] flex items-center 2xl:gap-[33px] xl:gap-[14px] 2xl:pl-[30.07px] xl:pl-[15px]" : "w-[393.93px] h-[38px] bg-[#F9F9F9] flex items-center gap-[33px] pl-[30.07px]"}>
                                            <div className='flex items-center gap-[5px]'><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.374 2.96809e-08C13.0087 -9.77163e-05 13.6197 0.241233 14.0831 0.67504C14.5464 1.10885 14.8274 1.70265 14.869 2.336L14.874 2.5V5.05C15.4099 5.15959 15.895 5.4418 16.2551 5.85342C16.6153 6.26503 16.8306 6.78336 16.868 7.329L16.874 7.5V13.5C16.8743 13.6249 16.8277 13.7455 16.7435 13.8378C16.6593 13.9301 16.5436 13.9876 16.4192 13.9989C16.2948 14.0102 16.1706 13.9745 16.0712 13.8988C15.9718 13.8231 15.9043 13.7129 15.882 13.59L15.874 13.5V11H1.87402V13.5C1.87425 13.6249 1.82769 13.7455 1.74352 13.8378C1.65934 13.9301 1.54364 13.9876 1.4192 13.9989C1.29477 14.0102 1.17061 13.9745 1.07119 13.8988C0.97177 13.8231 0.904284 13.7129 0.882023 13.59L0.874023 13.5V7.5C0.873906 6.92367 1.07292 6.36501 1.43737 5.91855C1.80183 5.47209 2.30934 5.16527 2.87402 5.05V2.5C2.87393 1.86528 3.11526 1.25429 3.54906 0.790955C3.98287 0.327621 4.57667 0.0466377 5.21002 0.00500014L5.37402 2.96809e-08H12.374ZM14.374 6H3.37402C3.0013 5.99999 2.64192 6.13876 2.36592 6.38925C2.08991 6.63974 1.91705 6.98402 1.88102 7.355L1.87402 7.5V10H15.874V7.5C15.874 7.12727 15.7353 6.7679 15.4848 6.49189C15.2343 6.21589 14.89 6.04303 14.519 6.007L14.374 6ZM12.374 1H5.37402C5.00114 1.00002 4.64163 1.13892 4.3656 1.38962C4.08958 1.64032 3.91682 1.98484 3.88102 2.356L3.87402 2.5V5H4.87402V4.5C4.87402 4.36739 4.9267 4.24021 5.02047 4.14645C5.11424 4.05268 5.24142 4 5.37402 4H7.87402C8.00663 4 8.13381 4.05268 8.22758 4.14645C8.32135 4.24021 8.37402 4.36739 8.37402 4.5V5H9.37402V4.5C9.37402 4.36739 9.4267 4.24021 9.52047 4.14645C9.61424 4.05268 9.74142 4 9.87402 4H12.374C12.5066 4 12.6338 4.05268 12.7276 4.14645C12.8213 4.24021 12.874 4.36739 12.874 4.5V5H13.874V2.5C13.874 2.12727 13.7353 1.7679 13.4848 1.49189C13.2343 1.21589 12.89 1.04303 12.519 1.007L12.374 1Z" fill="#2D2D2D" />
                                            </svg>
                                                <p>3</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.8655 5.14286H14.9927V5C14.9927 4.88634 14.9471 4.77733 14.8661 4.69695C14.785 4.61658 14.6751 4.57143 14.5605 4.57143H9.95029C9.83567 4.57143 9.72573 4.61658 9.64468 4.69695C9.56363 4.77733 9.51809 4.88634 9.51809 5V5.14286H4.61979V1.85714C4.61979 1.59193 4.72604 1.33757 4.91516 1.15004C5.10429 0.9625 5.3608 0.857143 5.62826 0.857143C5.89572 0.857143 6.15223 0.9625 6.34136 1.15004C6.53049 1.33757 6.63673 1.59193 6.63673 1.85714C6.63673 1.97081 6.68227 2.07982 6.76332 2.16019C6.84438 2.24056 6.95431 2.28571 7.06894 2.28571C7.18357 2.28571 7.2935 2.24056 7.37455 2.16019C7.45561 2.07982 7.50114 1.97081 7.50114 1.85714C7.50114 1.3646 7.30382 0.892226 6.95259 0.543945C6.60135 0.195663 6.12498 0 5.62826 0C5.13154 0 4.65517 0.195663 4.30393 0.543945C3.9527 0.892226 3.75538 1.3646 3.75538 1.85714V5.14286H1.8825C1.61503 5.14286 1.35852 5.24821 1.1694 5.43575C0.980273 5.62329 0.874023 5.87764 0.874023 6.14286V8.42857C0.874023 9.45155 1.28384 10.4326 2.01333 11.156C2.74281 11.8793 3.73221 12.2857 4.76385 12.2857H4.90792V13.5714C4.90792 13.6851 4.95346 13.7941 5.03451 13.8745C5.11557 13.9548 5.2255 14 5.34013 14C5.45475 14 5.56468 13.9548 5.64574 13.8745C5.72679 13.7941 5.77233 13.6851 5.77233 13.5714V12.2857H12.9757V13.5714C12.9757 13.6851 13.0213 13.7941 13.1023 13.8745C13.1834 13.9548 13.2933 14 13.4079 14C13.5225 14 13.6325 13.9548 13.7135 13.8745C13.7946 13.7941 13.8401 13.6851 13.8401 13.5714V12.2857H13.9842C15.0158 12.2857 16.0052 11.8793 16.7347 11.156C17.4642 10.4326 17.874 9.45155 17.874 8.42857V6.14286C17.874 5.87764 17.7678 5.62329 17.5786 5.43575C17.3895 5.24821 17.133 5.14286 16.8655 5.14286ZM10.3825 5.42857H14.1283V8H10.3825V5.42857ZM17.0096 8.42857C17.0096 9.22422 16.6909 9.98728 16.1235 10.5499C15.5561 11.1125 14.7866 11.4286 13.9842 11.4286H4.76385C3.96146 11.4286 3.19193 11.1125 2.62456 10.5499C2.05718 9.98728 1.73843 9.22422 1.73843 8.42857V6.14286C1.73843 6.10497 1.75361 6.06863 1.78063 6.04184C1.80764 6.01505 1.84429 6 1.8825 6H9.51809V8.42857C9.51809 8.54224 9.56363 8.65125 9.64468 8.73162C9.72573 8.81199 9.83567 8.85714 9.95029 8.85714H14.5605C14.6751 8.85714 14.785 8.81199 14.8661 8.73162C14.9471 8.65125 14.9927 8.54224 14.9927 8.42857V6H16.8655C16.9038 6 16.9404 6.01505 16.9674 6.04184C16.9944 6.06863 17.0096 6.10497 17.0096 6.14286V8.42857Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.22402 14H14.524C14.6168 14 14.7059 13.9631 14.7715 13.8975C14.8371 13.8318 14.874 13.7428 14.874 13.65V0.35C14.874 0.257174 14.8371 0.16815 14.7715 0.102512C14.7059 0.0368748 14.6168 0 14.524 0H9.62402C9.5312 0 9.44217 0.0368748 9.37654 0.102512C9.3109 0.16815 9.27402 0.257174 9.27402 0.35V8.4H1.22402C1.1312 8.4 1.04217 8.43687 0.976536 8.50251C0.910898 8.56815 0.874023 8.65717 0.874023 8.75V13.65C0.874023 13.7428 0.910898 13.8318 0.976536 13.8975C1.04217 13.9631 1.1312 14 1.22402 14ZM1.57402 9.1H4.02402V10.85C4.02402 10.9428 4.0609 11.0318 4.12654 11.0975C4.19217 11.1631 4.2812 11.2 4.37402 11.2C4.46685 11.2 4.55587 11.1631 4.62151 11.0975C4.68715 11.0318 4.72402 10.9428 4.72402 10.85V9.1H6.82402V10.85C6.82402 10.9428 6.8609 11.0318 6.92654 11.0975C6.99217 11.1631 7.0812 11.2 7.17402 11.2C7.26685 11.2 7.35587 11.1631 7.42151 11.0975C7.48715 11.0318 7.52402 10.9428 7.52402 10.85V9.1H9.27402V10.85C9.27402 10.9428 9.3109 11.0318 9.37654 11.0975C9.44217 11.1631 9.5312 11.2 9.62402 11.2C9.71685 11.2 9.80587 11.1631 9.87151 11.0975C9.93715 11.0318 9.97402 10.9428 9.97402 10.85V9.1H11.724C11.8168 9.1 11.9059 9.06313 11.9715 8.99749C12.0371 8.93185 12.074 8.84283 12.074 8.75C12.074 8.65717 12.0371 8.56815 11.9715 8.50251C11.9059 8.43687 11.8168 8.4 11.724 8.4H9.97402V6.65H11.724C11.8168 6.65 11.9059 6.61313 11.9715 6.54749C12.0371 6.48185 12.074 6.39283 12.074 6.3C12.074 6.20717 12.0371 6.11815 11.9715 6.05251C11.9059 5.98687 11.8168 5.95 11.724 5.95H9.97402V3.85H11.724C11.8168 3.85 11.9059 3.81313 11.9715 3.74749C12.0371 3.68185 12.074 3.59283 12.074 3.5C12.074 3.40717 12.0371 3.31815 11.9715 3.25251C11.9059 3.18687 11.8168 3.15 11.724 3.15H9.97402V0.7H14.174V13.3H1.57402V9.1Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>1280 sq ft</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.874 3H11.874V1C11.8738 0.734865 11.7683 0.480665 11.5808 0.293186C11.3934 0.105707 11.1392 0.000264738 10.874 0H1.87402C1.60889 0.000264738 1.35469 0.105707 1.16721 0.293186C0.97973 0.480665 0.874288 0.734865 0.874023 1V10C0.874288 10.2651 0.97973 10.5193 1.16721 10.7068C1.35469 10.8943 1.60889 10.9997 1.87402 11H3.87402V13C3.87429 13.2651 3.97973 13.5193 4.16721 13.7068C4.35469 13.8943 4.60889 13.9997 4.87402 14H13.874C14.1392 13.9997 14.3934 13.8943 14.5808 13.7068C14.7683 13.5193 14.8738 13.2651 14.874 13V4C14.8738 3.73486 14.7683 3.48066 14.5808 3.29319C14.3934 3.10571 14.1392 3.00026 13.874 3ZM10.874 10H6.87402V7.5H10.874V10ZM10.874 6.5H6.87402V4H10.874V6.5ZM5.87402 6.5H1.87402V4H5.87402V6.5ZM10.874 1V3H1.87402V1H10.874ZM1.87402 10V7.5H5.87402V10H1.87402ZM13.874 13H4.87402V11H10.874C11.1392 10.9997 11.3934 10.8943 11.5808 10.7068C11.7683 10.5193 11.8738 10.2651 11.874 10V4H13.874V13Z" fill="#2D2D2D" />
                                                </svg>
                                                <p>2 Y</p>
                                            </div>
                                        </div>
                                        <button className={grid ? "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium hidden" : "view_btn py-[8px] px-[31.91px] text-white text-[12px] leading-[18px] font-medium"}>View Details</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
            <RelatedSearch />

        </div>
    )
}

export default Search