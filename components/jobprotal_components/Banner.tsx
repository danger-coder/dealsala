import React from 'react'
import { Select } from 'antd';



const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='relative px-[12px] md:px-0'>
            <div className='mt-[14px]'>
                <img src="/../jobportal/banner.jpg" className='w-full md:h-[297px] h-[144px] object-cover rounded-[5px] md:rounded-none' alt="" />
            </div>
            <div className='absolute top-[18px] left-[50%] transform translate-x-[-50%] flex items-center justify-center flex-col'>
                <h2 className='text-white text-[23.86px] leading-[28.63px] font-semibold text-center max-w-[208px] mb-[17px]'>Hiring & Finding  Job Made easy</h2>
                <p className='text-white/[0.8]  text-[11.93px] leading-[17.9px] font-normal font-poppins text-center w-[305px]'>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi</p>
            </div>
            <img src="/../jobportal/headphone.png" className='absolute right-0 bottom-[-20px] cursor-pointer hidden md:block' alt="" />
            <div className='absolute left-[50%] top-[80%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
                <div>
                    <h2 className='text-white text-[32px] leading-[48px] font-semibold text-center'>Hiring & Finding  Job Made easy</h2>
                    <p className='text-white/[0.8] mt-[5px] text-[16px] leading-[24px] font-normal px-[190px] text-center'>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi</p>
                </div>
                <div className='bg-white  w-[968px] p-[26px] search_container flex items-center gap-[10px] mt-[28px]'>
                    <div>
                        <Select
                            defaultValue="Property Type"
                            style={{ width: 172 }}
                            onChange={handleChange}
                            className="realState_select"
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                    <div><Select
                        defaultValue="Location"
                        style={{ width: 172 }}
                        onChange={handleChange}
                        className="realState_select"
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    /></div>
                    <div>
                        <input type="text" placeholder='Search Something' className='border border-[#D9D9D9] outline-none pl-[12px] w-[367px] h-[42px] placeholder:text-[#2D2D2D] placeholder:text-[14px] placeholder:leading-[16.41px] placeholder:font-medium' />
                    </div>
                    <button className='bg-[#6C3CE6] text-[13px] leading-[19.5px] font-medium py-[11px] px-[65px] text-white'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner