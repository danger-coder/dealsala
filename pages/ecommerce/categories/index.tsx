import React, { useState } from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';


type Props = {}

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Mens Fashion</p>
        </div>,
        children: <div>
            <img src="/../assets/category_view.png" alt="" />
            hgjhjjh
        </div>,
    },
    {
        key: '2',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Electronic & <br></br> Home
                Appliances</p>
        </div>,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Daily Essentials</p>
        </div>,
        children: `Content of Tab Pane 3`,
    },
    {
        key: '4',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Kids Fashion</p>
        </div>,
        children: `Content of Tab Pane 4`,
    },
    {
        key: '5',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Accessories</p>
        </div>,
        children: `Content of Tab Pane 5`,
    },
    {
        key: '6',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Machinery Parts</p>
        </div>,
        children: `Content of Tab Pane 6`,
    },
    {
        key: '7',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>DIY Tools & Crafts</p>
        </div>,
        children: `Content of Tab Pane 7`,
    },
    {
        key: '8',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Home <br></br> Improvements</p>
        </div>,
        children: `Content of Tab Pane 8`,
    },
    {
        key: '9',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Women’s Fashion</p>
        </div>,
        children: `Content of Tab Pane 9`,
    },
    {
        key: '10',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Lorem ipsum</p>
        </div>,
        children: `Content of Tab Pane 10`,
    },
    {
        key: '11',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Lorem ipsum</p>
        </div>,
        children: `Content of Tab Pane 11`,
    },
    {
        key: '12',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Lorem ipsum</p>
        </div>,
        children: `Content of Tab Pane 12`,
    },
    {
        key: '13',
        label: <div className='w-[130px]'>
            <p className='w-[129px] text-[black]/[0.5] text-[13px] leading-[16.5px] font-poppins'>Lorem ipsum</p>
        </div>,
        children: `Content of Tab Pane 13`,
    },
];
const index = (props: Props) => {

    return (
        <div>
            <div className='container mx-auto px-[13px] flex items-center mt-[0px] justify-between gap-[20px] bg-[#11AFD1]'>
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


            </div>
            {/* //categories */}
            <Tabs defaultActiveKey="1" className='category mt-[8px]' items={items} onChange={onChange} tabPosition={'left'} />

        </div>
    )
}

export default index