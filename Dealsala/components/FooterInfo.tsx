import React from 'react'

const FooterInfo = () => {
    return (
        <div className='bg-[#F6F8FA]'>
            <div className='container mx-auto flex pt-[54px] pb-[24px] '>
                <div className='flex basis-[100%] justify-between '>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>COMPANY</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li className='cursor-pointer'>About Us</li>
                            <li className='cursor-pointer'>Careers</li>
                            <li className='cursor-pointer'> Support</li>
                            <li className='cursor-pointer'>Testimonials</li>
                            <li className='cursor-pointer'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>SHOP ONLINE</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li className='cursor-pointer'>Products</li>
                            <li className='cursor-pointer'>Services</li>
                            <li className='cursor-pointer'>Electronics</li>
                            <li className='cursor-pointer'>Essentials</li>
                            <li className='cursor-pointer'>Somthing</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>REAL ESTATE</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li className='cursor-pointer'>House</li>
                            <li className='cursor-pointer'>Land</li>
                            <li className='cursor-pointer'> Rental</li>
                            <li className='cursor-pointer'>Host</li>

                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>AIRLINE</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li className='cursor-pointer'>Domestic</li>
                            <li className='cursor-pointer'>Round Trip</li>
                            <li className='cursor-pointer'>Single Trip</li>
                        </ul>
                    </div>

                    <div className=''>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[12px]'>NEWEST LISTING</h2>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex  items-center gap-[16px] cursor-pointer'>
                                <img src="/../assets/newlist1.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                            <div className='flex  items-center gap-[16px] cursor-pointer'>
                                <img src="/../assets/newlist2.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                            <div className='flex  items-center gap-[16px] cursor-pointer'>
                                <img src="/../assets/newlist3.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                            <div className='flex  items-center gap-[16px] cursor-pointery'>
                                <img src="/../assets/newlist4.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo