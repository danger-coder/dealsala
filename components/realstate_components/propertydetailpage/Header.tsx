import React from 'react'
import { Collapse } from 'antd';

type Props = {}
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Header = (props: Props) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <div>
            <div className='container mx-auto mt-[33px] mb-[45px]'>
                <p className='text-[#24263F] text-[12px] leading-[18px] font-normal font-poppins pl-[40px]'>Home / Online Shop / Electronics & Peripherals / <span className='font-semibold'>Samsung Tablet Mobile</span></p>
                <div className='flex   gap-[40px] mt-[28px]'>
                    <div className='basis-[60%]'>
                        <img src="/../realstate/rentalproduct_banner.jpg" className='w-full h-[387px]' alt="" />
                    </div>
                    <div className=' basis-[40%]'>
                        <h2 className='text-[#24263F] text-[26px] leading-[39px] font-medium font-poppins mb-[3.5px]'>Honda CB Shine - 2020</h2>
                        <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-normal font-poppins flex items-center'>220 Views <span className='h-[21px] w-[1px] bg-[#2D2D2D] mx-[10px]'></span> Posted 10 Days ago</p>
                        <h1 className='text-[#3B0E71] text-[28px] leading-[42px] font-light font-poppins mt-[14px]'>Rs 75000.00</h1>
                        <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-bold font-poppins'>15,000 KMS</p>
                        <div className='flex items-center gap-[14px] mt-[45px]'>
                            <button className='bg-[#7252E4] h-[56px] w-[208px] flex items-center justify-center text-white text-[15px] leading-[22.5px] font-poppins'>Call User</button>
                            <button className='border-[#7252E4] border h-[56px] w-[208px] flex items-center justify-center text-[#7B47E6] text-[15px] leading-[22.5px] font-poppins'>Request Information</button>
                        </div>
                        <div className='mt-[24px]'>
                            <button className='bg-[#2791D6]/[0.1] w-[425px] h-[121px] flex  items-center justify-center text-black text-[18px] leading-[36px] font-normal font-poppins tracking-[0.02em]'>SELLER DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* //product details */}
            <div className='container mx-auto'>
                <div className='border rounded-[5px] max-w-[704px] pl-[27px] pt-[15px] pb-[47px]'>
                    <h2 className='text-[#24263F] text-[30px] leading-[45px] font-medium font-poppins tracking-[0.01em]'>Product Details</h2>
                    <p className='text-[#24263F] text-[18px] leading-[36px] font-normal tracking-[0.02em] font-poppins mt-[26px]'>Brand <span className='mr-[26px] ml-[76px]'>:</span>HONDA</p>
                    <p className='text-[#24263F] text-[18px] leading-[36px] font-normal tracking-[0.02em] font-poppins'>Model <span className='mr-[26px] ml-[75px]'>:</span>CBS Shine</p>
                    <p className='text-[#24263F] text-[18px] leading-[36px] font-normal tracking-[0.02em] font-poppins'>KMS  Driven <span className='mr-[26px] ml-[30px]'>:</span>15,000</p>
                    <div className='mt-[50px] pr-[27px]'>
                        <h1 className='text-[#24263F] text-[30px] leading-[45px] font-medium font-poppins tracking-[0.01em]'>Description</h1>
                        <p className='text-[#24263F] text-[18px] leading-[36px] mt-[26px] '>Honda CB Shine - 2018 for Sale.It is a well maintained two-wheeler that has been less driven.Please contact me for further details.</p>
                    </div>
                </div>
            </div>
            {/* //faq  */}
            <div className='container mx-auto mt-[30px] '>
                <div className='border rounded-[5px] max-w-[704px] pt-[27px] pl-[27px]'>
                    <h1 className='text-[#24263F] text-[30px] leading-[45px] font-medium tracking-[0.01em] font-poppins'>FAQs</h1>
                    <Collapse defaultActiveKey={['1']} onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>


        </div>
    )
}

export default Header