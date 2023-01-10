import React from 'react'

const FooterInfo = () => {
    return (
        <div className='bg-[#F6F8FA]'>
            <div className='container mx-auto flex pt-[54px] pb-[24px]'>
                <div className='flex basis-[100%] justify-between '>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>COMPANY</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Support</li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>SHOP ONLINE</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li>Products</li>
                            <li>Services</li>
                            <li>Electronics</li>
                            <li>Essentials</li>
                            <li>Somthing</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>REAL ESTATE</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li>House</li>
                            <li>Land</li>
                            <li>Rental</li>
                            <li>Host</li>

                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[8px]'>AIRLINE</h2>
                        <ul className='text-[16px] leading-[18.75px space-y-[4px] font-roboto'>
                            <li>Domestic</li>
                            <li>Round Trip</li>
                            <li>Single Trip</li>
                        </ul>
                    </div>

                    <div className=''>
                        <h2 className='text-[18px] leading-[21.09px] font-semibold mb-[12px]'>NEWEST LISTING</h2>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex  items-center gap-[16px]'>
                                <img src="/../assets/newlist1.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                            <div className='flex  items-center gap-[16px]'>
                                <img src="/../assets/newlist2.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                            <div className='flex  items-center gap-[16px]'>
                                <img src="/../assets/newlist3.jpg" alt="" />
                                <div>
                                    <p className='text-[18px] leading-[18.75px] text-[#696969] font-normal'>Lorem Ipsum Dolor</p>
                                    <p className='text-[14px] leading-[16.41px] font-bold mt-[7px]'>category</p>
                                </div>
                            </div>
                            <div className='flex  items-center gap-[16px]'>
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