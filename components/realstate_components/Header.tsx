import React from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Select } from 'antd';



const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <div className='py-[11px] md:px-[47px] px-[30px] '>
            <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-medium'>All</p>
        </div>,
        children: <div className='bg-white  md:w-[968px] w-[100vw] md:p-[26px]  pt-[34px] pb-[12px]   search_container flex items-center  md:gap-[10px]'>
            <div>
                <Select
                    defaultValue="Property Type"
                    style={{ width: 172 }}
                    onChange={handleChange}
                    className="realState_select hidden md:block"
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
                className="realState_select hidden md:block"
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            /></div>
            <div className='pl-[7px]'>
                <input type="text" placeholder='Search Something' className='border border-[#D9D9D9] outline-none pl-[18px]  md:w-[367px] w-[95vw]  h-[42px] placeholder:text-[#2D2D2D] placeholder:text-[14px] placeholder:leading-[16.41px] placeholder:font-medium' />
            </div>
            <button className='bg-[#F65128]/[0.7] hidden md:block text-[13px] leading-[19.5px] font-medium py-[11px] px-[65px] text-white'>Search</button>
        </div>,
    },
    {
        key: '2',
        label: <div className='py-[11px] md:px-[47px] px-[14px] bg-[#F65128]/[0.7]'>
            <p className='text-[#fff] text-[14px] leading-[21px] font-medium'>For Sale</p>
        </div>,
        children: <div className='bg-white md:w-[968px] w-[100vw] h-[94px]'>d</div>,
    },
    {
        key: '3',
        label: <div className='py-[11px] md:px-[47px] px-[14px] bg-[#F65128]/[0.7]'>
            <p className='text-[#fff] text-[14px] leading-[21px] font-medium'>For Rent </p>
        </div>,
        children: <div className='bg-white md:w-[968px] w-[100vw] h-[94px]'>d</div>,
    },
];

const Header = () => {
    return (
        <div className='relative w-full'>
            <img src="/../realstate/topBanner.jpg" className='w-full h-[357px] bg-red-600 object-cover md:h-auto banner_img hidden md:block' alt="" />
            <img src="/../assets/mblview/realstate_mblview_banner.png" className='w-full h-[357px] bg-red-600 object-cover md:h-auto banner_img md:hidden' alt="" />

            {/* topbar */}
            <div className='absolute top-[16px] xl:left-[71px] 2xl:left-[180px] text-white flex items-center justify-between w-full container mx-auto px-[14px] md:px-0'>

                <div className=' cursor-pointer'>
                    <img src="/../realstate/realstate.png" className='hidden md:block' alt="" />
                    <img src="/../assets/mblview/dealsalaWhitelogo.png" className='md:hidden' alt="" />
                </div>
                <div className='pr-[107px] hidden md:block'>
                    <ul className='flex items-center gap-[50px]'>
                        <li><a href="" className='text-[16px] leading-[24px] font-normal'>HOME</a></li>
                        <li><a href="" className='text-[16px] leading-[24px] font-normal'>RENTAL</a></li>
                        <li><a href="" className='text-[16px] leading-[24px] font-normal'>BUY PROPERTY</a></li>
                        <li><a href="" className='text-[16px] leading-[24px] font-normal'>LISTING</a></li>
                        <li className=''><a href="" className='text-[16px] leading-[24px] font-normal flex items-center gap-[6px]'>LOGIN <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.64 4.41667C6.56589 4.49294 6.50705 4.58377 6.46689 4.6839C6.42673 4.78404 6.40605 4.89148 6.40605 5C6.40605 5.10852 6.42673 5.21596 6.46689 5.3161C6.50705 5.41623 6.56589 5.50706 6.64 5.58333L8.16 7.16667H0.8C0.36 7.16667 0 7.54167 0 8C0 8.45833 0.36 8.83333 0.8 8.83333H8.16L6.64 10.4167C6.56589 10.4929 6.50705 10.5838 6.46689 10.6839C6.42673 10.784 6.40605 10.8915 6.40605 11C6.40605 11.1085 6.42673 11.216 6.46689 11.3161C6.50705 11.4162 6.56589 11.5071 6.64 11.5833C6.952 11.9083 7.448 11.9083 7.76 11.5833L10.632 8.59167C10.7062 8.51457 10.765 8.423 10.8051 8.32219C10.8453 8.22138 10.866 8.11331 10.866 8.00417C10.866 7.89503 10.8453 7.78696 10.8051 7.68615C10.765 7.58534 10.7062 7.49376 10.632 7.41667L7.76 4.41667C7.68678 4.33947 7.59958 4.27817 7.50345 4.23634C7.40732 4.19451 7.30418 4.17297 7.2 4.17297C7.09582 4.17297 6.99268 4.19451 6.89655 4.23634C6.80042 4.27817 6.71322 4.33947 6.64 4.41667ZM14.4 13.8333H8.8C8.36 13.8333 8 14.2083 8 14.6667C8 15.125 8.36 15.5 8.8 15.5H14.4C15.28 15.5 16 14.75 16 13.8333V2.16667C16 1.25 15.28 0.5 14.4 0.5H8.8C8.36 0.5 8 0.875 8 1.33333C8 1.79167 8.36 2.16667 8.8 2.16667H14.4V13.8333Z" fill="white" />
                        </svg>
                        </a> </li>
                    </ul>
                </div>

                <div className='md:hidden flex items-center gap-[19.75px]'>
                    <svg className='cursor-pointer' width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0407 15.6339C18.4474 15.1181 17.928 14.5267 17.4965 13.8758C17.0254 12.9773 16.743 11.996 16.6659 10.9896V8.02546C16.6634 7.66541 16.6305 7.30617 16.5675 6.9514C16.0833 6.85699 15.6179 6.68678 15.1894 6.44737C15.3528 6.9603 15.4357 7.49436 15.4355 8.03146V10.9956C15.5109 12.2233 15.8572 13.4207 16.4506 14.5058C16.8754 15.1623 17.3793 15.7666 17.9517 16.3059H2.19615C2.76855 15.7666 3.27252 15.1623 3.69726 14.5058C4.29071 13.4207 4.63696 12.2233 4.71237 10.9956V8.02546C4.70913 7.33103 4.84636 6.6428 5.11622 6.00018C5.38607 5.35755 5.78324 4.77315 6.28498 4.28044C6.78673 3.78773 7.38319 3.39639 8.04022 3.12883C8.69724 2.86126 9.40193 2.72273 10.1139 2.72116C11.156 2.72197 12.1746 3.02252 13.0423 3.5852C12.9467 3.24258 12.893 2.8901 12.8824 2.53514V2.15712C12.24 1.84892 11.5499 1.64619 10.8399 1.55709V0.801046C10.8399 0.588595 10.7534 0.384846 10.5993 0.234621C10.4453 0.0843957 10.2364 0 10.0186 0C9.80075 0 9.59185 0.0843957 9.43782 0.234621C9.2838 0.384846 9.19726 0.588595 9.19726 0.801046V1.58709C7.60738 1.80584 6.15232 2.57819 5.1007 3.76157C4.04908 4.94496 3.47193 6.45945 3.47579 8.02546V10.9896C3.39874 11.996 3.11637 12.9773 2.64525 13.8758C2.2213 14.5252 1.71025 15.1165 1.12568 15.6339C1.06005 15.6901 1.00746 15.7593 0.971392 15.8369C0.935325 15.9145 0.916615 15.9987 0.916504 16.0839V16.9C0.916504 17.0591 0.981321 17.2117 1.0967 17.3243C1.21207 17.4368 1.36855 17.5 1.53172 17.5H18.6346C18.7978 17.5 18.9543 17.4368 19.0696 17.3243C19.185 17.2117 19.2498 17.0591 19.2498 16.9V16.0839C19.2497 15.9987 19.231 15.9145 19.195 15.8369C19.1589 15.7593 19.1063 15.6901 19.0407 15.6339Z" fill="white" />
                        <path d="M17.1667 5.83333C18.7775 5.83333 20.0833 4.5275 20.0833 2.91667C20.0833 1.30584 18.7775 0 17.1667 0C15.5558 0 14.25 1.30584 14.25 2.91667C14.25 4.5275 15.5558 5.83333 17.1667 5.83333Z" fill="white" />
                    </svg>
                    <img src="/../assets/profile.png" className='cursor-pointer' alt="" />
                </div>


            </div>

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="realState absolute bottom-[0%] xl:bottom-[-15%] 2xl:bottom-[-10%] left-[50%] transform translate-x-[-50%] " />
            <div className='absolute hidden md:block right-0 xl:bottom-[-9%] 2xl:bottom-[-6%] cursor-pointer bg-[#F65128] p-[11px]'>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9C19 6.87827 18.1571 4.84344 16.6569 3.34315C15.1566 1.84285 13.1217 1 11 1C8.87827 1 6.84344 1.84285 5.34315 3.34315C3.84285 4.84344 3 6.87827 3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 15.9998V16.4998C19 17.0302 18.7893 17.5389 18.4142 17.914C18.0391 18.289 17.5304 18.4998 17 18.4998H13.5M1 13.4378V11.5618C1.00007 11.1158 1.1492 10.6826 1.4237 10.3311C1.69821 9.97958 2.08232 9.72991 2.515 9.62175L4.255 9.18575C4.34342 9.16373 4.43569 9.16214 4.52481 9.18109C4.61393 9.20005 4.69757 9.23905 4.76937 9.29514C4.84118 9.35124 4.89926 9.42295 4.93922 9.50484C4.97918 9.58672 4.99997 9.67664 5 9.76775V15.2308C5.00016 15.3221 4.97947 15.4122 4.93952 15.4943C4.89957 15.5764 4.84141 15.6483 4.76946 15.7045C4.69752 15.7608 4.61369 15.7998 4.52436 15.8188C4.43503 15.8377 4.34257 15.836 4.254 15.8138L2.514 15.3788C2.08151 15.2704 1.69762 15.0207 1.42331 14.6692C1.149 14.3177 1.00001 13.8846 1 13.4388V13.4378ZM21 13.4378V11.5618C20.9999 11.1158 20.8508 10.6826 20.5763 10.3311C20.3018 9.97958 19.9177 9.72991 19.485 9.62175L17.745 9.18575C17.6566 9.16373 17.5643 9.16214 17.4752 9.18109C17.3861 9.20005 17.3024 9.23905 17.2306 9.29514C17.1588 9.35124 17.1007 9.42295 17.0608 9.50484C17.0208 9.58672 17 9.67664 17 9.76775V15.2308C16.9999 15.322 17.0206 15.412 17.0604 15.494C17.1003 15.576 17.1584 15.6478 17.2302 15.7041C17.3021 15.7603 17.3857 15.7994 17.4749 15.8184C17.5641 15.8374 17.6565 15.8358 17.745 15.8138L19.485 15.3788C19.9177 15.2706 20.3018 15.0209 20.5763 14.6694C20.8508 14.3179 20.9999 13.8847 21 13.4388V13.4378Z" stroke="white" strokeWidth="1.5" />
                    <path d="M12.5 20H9.5C9.10218 20 8.72064 19.842 8.43934 19.5607C8.15804 19.2794 8 18.8978 8 18.5C8 18.1022 8.15804 17.7206 8.43934 17.4393C8.72064 17.158 9.10218 17 9.5 17H12.5C12.8978 17 13.2794 17.158 13.5607 17.4393C13.842 17.7206 14 18.1022 14 18.5C14 18.8978 13.842 19.2794 13.5607 19.5607C13.2794 19.842 12.8978 20 12.5 20Z" stroke="white" strokeWidth="1.5" />
                </svg>
            </div>


        </div>
    )
}

export default Header