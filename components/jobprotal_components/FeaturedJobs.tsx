import React from 'react'

type Props = {}

const FeaturedJobs = (props: Props) => {
    return (
        <div>
            <div className='container mx-auto pt-[125px]'>
                <h1 className='text-black text-[30px] leading-[45px] font-medium font-poppins text-center'>Featured Job Vaccancies</h1>
                <div className='grid grid-cols-3 gap-x-[31px] gap-y-[24px] mt-[50px] mb-[80px]'>
                    <div className='border rounded-[5px] border-[#D9D9D9] pt-[16px] pl-[14px] pr-[18px] cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out '>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='text-black text-[16px] leading-[24px] font-medium font-poppins'>Desiginer Team Lead</h1>
                                <p className='text-[#3B0E71] text-[12px] leading-[18px] font-light font-poppins mt-[3px]'>Atlassian</p>
                                <div className='flex items-center gap-[9px]  mt-[3px]'>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 6.875C4.74375 6.875 4.125 6.25625 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125C6.25625 4.125 6.875 4.74375 6.875 5.5C6.875 6.25625 6.25625 6.875 5.5 6.875ZM9.625 5.6375C9.625 3.14187 7.80312 1.375 5.5 1.375C3.19688 1.375 1.375 3.14187 1.375 5.6375C1.375 7.24625 2.71562 9.3775 5.5 11.9213C8.28438 9.3775 9.625 7.24625 9.625 5.6375ZM5.5 0C8.3875 0 11 2.21375 11 5.6375C11 7.92 9.16438 10.6219 5.5 13.75C1.83563 10.6219 0 7.92 0 5.6375C0 2.21375 2.6125 0 5.5 0Z" fill="#24263F" />
                                    </svg>
                                    <p className='text-[#0E1133] text-[12px] leading-[18px] font-light font-poppins'>NSW Australia</p>
                                </div>
                            </div>
                            <div>
                                <img src="/../jobportal/company1.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[13px] pb-[16px]'>
                            <div className='flex gap-[6px] pt-[20px]'>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Part-Time</p>
                                </div>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Fulltime</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[#000000]/[0.4] text-[12px] leading-[18px] font-normal font-poppins'>Seniority Level</h2>
                                <p className='text-[#000000] text-[12px] leading-[18px] tracking-[0.01em] font-poppins font-medium mt-[5px]'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-[5px] border-[#D9D9D9] pt-[16px] pl-[14px] pr-[18px] cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out '>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='text-black text-[16px] leading-[24px] font-medium font-poppins'>Desiginer Team Lead</h1>
                                <p className='text-[#3B0E71] text-[12px] leading-[18px] font-light font-poppins mt-[3px]'>Atlassian</p>
                                <div className='flex items-center gap-[9px]  mt-[3px]'>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 6.875C4.74375 6.875 4.125 6.25625 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125C6.25625 4.125 6.875 4.74375 6.875 5.5C6.875 6.25625 6.25625 6.875 5.5 6.875ZM9.625 5.6375C9.625 3.14187 7.80312 1.375 5.5 1.375C3.19688 1.375 1.375 3.14187 1.375 5.6375C1.375 7.24625 2.71562 9.3775 5.5 11.9213C8.28438 9.3775 9.625 7.24625 9.625 5.6375ZM5.5 0C8.3875 0 11 2.21375 11 5.6375C11 7.92 9.16438 10.6219 5.5 13.75C1.83563 10.6219 0 7.92 0 5.6375C0 2.21375 2.6125 0 5.5 0Z" fill="#24263F" />
                                    </svg>
                                    <p className='text-[#0E1133] text-[12px] leading-[18px] font-light font-poppins'>NSW Australia</p>
                                </div>
                            </div>
                            <div>
                                <img src="/../jobportal/twitter.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[13px] pb-[16px]'>
                            <div className='flex gap-[6px] pt-[20px]'>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Part-Time</p>
                                </div>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Fulltime</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[#000000]/[0.4] text-[12px] leading-[18px] font-normal font-poppins'>Seniority Level</h2>
                                <p className='text-[#000000] text-[12px] leading-[18px] tracking-[0.01em] font-poppins font-medium mt-[5px]'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-[5px] border-[#D9D9D9] pt-[16px] pl-[14px] pr-[18px] cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out '>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='text-black text-[16px] leading-[24px] font-medium font-poppins'>Desiginer Team Lead</h1>
                                <p className='text-[#3B0E71] text-[12px] leading-[18px] font-light font-poppins mt-[3px]'>Atlassian</p>
                                <div className='flex items-center gap-[9px]  mt-[3px]'>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 6.875C4.74375 6.875 4.125 6.25625 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125C6.25625 4.125 6.875 4.74375 6.875 5.5C6.875 6.25625 6.25625 6.875 5.5 6.875ZM9.625 5.6375C9.625 3.14187 7.80312 1.375 5.5 1.375C3.19688 1.375 1.375 3.14187 1.375 5.6375C1.375 7.24625 2.71562 9.3775 5.5 11.9213C8.28438 9.3775 9.625 7.24625 9.625 5.6375ZM5.5 0C8.3875 0 11 2.21375 11 5.6375C11 7.92 9.16438 10.6219 5.5 13.75C1.83563 10.6219 0 7.92 0 5.6375C0 2.21375 2.6125 0 5.5 0Z" fill="#24263F" />
                                    </svg>
                                    <p className='text-[#0E1133] text-[12px] leading-[18px] font-light font-poppins'>NSW Australia</p>
                                </div>
                            </div>
                            <div>
                                <img src="/../jobportal/googel.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[13px] pb-[16px]'>
                            <div className='flex gap-[6px] pt-[20px]'>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Part-Time</p>
                                </div>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Fulltime</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[#000000]/[0.4] text-[12px] leading-[18px] font-normal font-poppins'>Seniority Level</h2>
                                <p className='text-[#000000] text-[12px] leading-[18px] tracking-[0.01em] font-poppins font-medium mt-[5px]'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-[5px] border-[#D9D9D9] pt-[16px] pl-[14px] pr-[18px] cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out '>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='text-black text-[16px] leading-[24px] font-medium font-poppins'>Desiginer Team Lead</h1>
                                <p className='text-[#3B0E71] text-[12px] leading-[18px] font-light font-poppins mt-[3px]'>Atlassian</p>
                                <div className='flex items-center gap-[9px]  mt-[3px]'>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 6.875C4.74375 6.875 4.125 6.25625 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125C6.25625 4.125 6.875 4.74375 6.875 5.5C6.875 6.25625 6.25625 6.875 5.5 6.875ZM9.625 5.6375C9.625 3.14187 7.80312 1.375 5.5 1.375C3.19688 1.375 1.375 3.14187 1.375 5.6375C1.375 7.24625 2.71562 9.3775 5.5 11.9213C8.28438 9.3775 9.625 7.24625 9.625 5.6375ZM5.5 0C8.3875 0 11 2.21375 11 5.6375C11 7.92 9.16438 10.6219 5.5 13.75C1.83563 10.6219 0 7.92 0 5.6375C0 2.21375 2.6125 0 5.5 0Z" fill="#24263F" />
                                    </svg>
                                    <p className='text-[#0E1133] text-[12px] leading-[18px] font-light font-poppins'>NSW Australia</p>
                                </div>
                            </div>
                            <div>
                                <img src="/../jobportal/company1.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[13px] pb-[16px]'>
                            <div className='flex gap-[6px] pt-[20px]'>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Part-Time</p>
                                </div>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Fulltime</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[#000000]/[0.4] text-[12px] leading-[18px] font-normal font-poppins'>Seniority Level</h2>
                                <p className='text-[#000000] text-[12px] leading-[18px] tracking-[0.01em] font-poppins font-medium mt-[5px]'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-[5px] border-[#D9D9D9] pt-[16px] pl-[14px] pr-[18px] cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out '>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='text-black text-[16px] leading-[24px] font-medium font-poppins'>Desiginer Team Lead</h1>
                                <p className='text-[#3B0E71] text-[12px] leading-[18px] font-light font-poppins mt-[3px]'>Atlassian</p>
                                <div className='flex items-center gap-[9px]  mt-[3px]'>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 6.875C4.74375 6.875 4.125 6.25625 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125C6.25625 4.125 6.875 4.74375 6.875 5.5C6.875 6.25625 6.25625 6.875 5.5 6.875ZM9.625 5.6375C9.625 3.14187 7.80312 1.375 5.5 1.375C3.19688 1.375 1.375 3.14187 1.375 5.6375C1.375 7.24625 2.71562 9.3775 5.5 11.9213C8.28438 9.3775 9.625 7.24625 9.625 5.6375ZM5.5 0C8.3875 0 11 2.21375 11 5.6375C11 7.92 9.16438 10.6219 5.5 13.75C1.83563 10.6219 0 7.92 0 5.6375C0 2.21375 2.6125 0 5.5 0Z" fill="#24263F" />
                                    </svg>
                                    <p className='text-[#0E1133] text-[12px] leading-[18px] font-light font-poppins'>NSW Australia</p>
                                </div>
                            </div>
                            <div>
                                <img src="/../jobportal/twitter.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[13px] pb-[16px]'>
                            <div className='flex gap-[6px] pt-[20px]'>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Part-Time</p>
                                </div>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Fulltime</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[#000000]/[0.4] text-[12px] leading-[18px] font-normal font-poppins'>Seniority Level</h2>
                                <p className='text-[#000000] text-[12px] leading-[18px] tracking-[0.01em] font-poppins font-medium mt-[5px]'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-[5px] border-[#D9D9D9] pt-[16px] pl-[14px] pr-[18px] cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out '>
                        <div className='flex justify-between '>
                            <div>
                                <h1 className='text-black text-[16px] leading-[24px] font-medium font-poppins'>Desiginer Team Lead</h1>
                                <p className='text-[#3B0E71] text-[12px] leading-[18px] font-light font-poppins mt-[3px]'>Atlassian</p>
                                <div className='flex items-center gap-[9px]  mt-[3px]'>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 6.875C4.74375 6.875 4.125 6.25625 4.125 5.5C4.125 4.74375 4.74375 4.125 5.5 4.125C6.25625 4.125 6.875 4.74375 6.875 5.5C6.875 6.25625 6.25625 6.875 5.5 6.875ZM9.625 5.6375C9.625 3.14187 7.80312 1.375 5.5 1.375C3.19688 1.375 1.375 3.14187 1.375 5.6375C1.375 7.24625 2.71562 9.3775 5.5 11.9213C8.28438 9.3775 9.625 7.24625 9.625 5.6375ZM5.5 0C8.3875 0 11 2.21375 11 5.6375C11 7.92 9.16438 10.6219 5.5 13.75C1.83563 10.6219 0 7.92 0 5.6375C0 2.21375 2.6125 0 5.5 0Z" fill="#24263F" />
                                    </svg>
                                    <p className='text-[#0E1133] text-[12px] leading-[18px] font-light font-poppins'>NSW Australia</p>
                                </div>
                            </div>
                            <div>
                                <img src="/../jobportal/googel.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-[13px] pb-[16px]'>
                            <div className='flex gap-[6px] pt-[20px]'>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Part-Time</p>
                                </div>
                                <div className='part_time_btn flex justify-center items-center text-white h-[24px] w-[73px] cursor-pointer'>
                                    <p className='text-[12px] leading-[18px] font-normal font-poppins tracking-[0.01em]'>Fulltime</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[#000000]/[0.4] text-[12px] leading-[18px] font-normal font-poppins'>Seniority Level</h2>
                                <p className='text-[#000000] text-[12px] leading-[18px] tracking-[0.01em] font-poppins font-medium mt-[5px]'>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs