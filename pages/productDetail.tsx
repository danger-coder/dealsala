import React from 'react'
// import ReactStars from "react-rating-stars-component";
import { Rate } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Progress } from 'antd';
import TopBar from '../components/TopBar';

const ratingChanged = (newRating: any) => {
  console.log(newRating);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <div className='w-[184px] bg-[#505056]/[0.1]   pt-[4px] pb-[5px] pl-[62px] pr-[71px] rounded-tr-[5px] rounded-tl-[5px]'><p >Details</p></div>,
    children: <div className='h-[424px] w-full bg-[#F9F9F9] '>
      hello
    </div>,
  },
  {
    key: '2',
    label: <div className='w-[184px] hover:bg-[#24263F] bg-[#505056]/[0.1]   pt-[4px] pb-[5px] pl-[62px] pr-[71px] rounded-tr-[5px] rounded-tl-[5px]'><p >Description</p></div>,
    children: <div className='h-[424px] w-full bg-[#F9F9F9] '>
      hello2
    </div>,
  },
  {
    key: '3',
    label: <div className='w-[184px] hover:bg-[#24263F] bg-[#505056]/[0.1]  pt-[4px] pb-[5px] pl-[62px] pr-[71px] rounded-tr-[5px] rounded-tl-[5px]'><p >Summary</p></div>,
    children: <div className='h-[424px] w-full bg-[#F9F9F9] '>
      hello3
    </div>,
  },
];

const ProductDetailPage = () => {
  return (
    <div>
      <TopBar />
      <div className='border-t-[1px] border-[#EDEDED] border-b-[1px] mt-[22px] mb-[25px]'>
        <div className='container mx-auto '>
          <div className='flex items-center gap-[54px] pt-[15px] pb-[16px]   '>
            <p className='text-[#24263F] text-[14px] leading-[21px] font-semibold cursor-pointer'>ALL CATEGORIES</p>
            <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal cursor-pointer'>Home Appliances</p>
            <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal cursor-pointer'>Category 1</p>
            <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal cursor-pointer'>Lorem ipsum</p>
            <p className='text-[#2D2D2D] text-[14px] leading-[21px] font-normal cursor-pointer'>Appliances</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-normal mb-[28px]'>Home / Online Shop / Electronics & Peripherals / <span className='font-semibold'> Samsung Tablet Mobile</span></p>

        <div className='flex gap-[49px] pb-[70px]'>
          <div>
            <div className='w-[522px] h-[386px] flex items-center justify-center '>
              <img src="/../assets/laptop.png" alt="" />
            </div>
            <div className='flex items-center gap-[15px] mt-[24px]'>
              <div className='w-[56px] h-[56px] bg-[#F9F9F9] cursor-pointer flex items-center justify-center border hover:border-[#24263F]'>
                <img src="/../assets/smLaptop.png" alt="" />
              </div>
              <div className='w-[56px] h-[56px] bg-[#F9F9F9]  cursor-pointer border hover:border-[#24263F]'></div>
              <div className='w-[56px] h-[56px] bg-[#F9F9F9]  cursor-pointer border hover:border-[#24263F]'></div>
              <div className='w-[56px] h-[56px] bg-[#F9F9F9]  cursor-pointer border hover:border-[#24263F]'></div>
            </div>
          </div>
          <div className='pt-[10px]'>
            <p className='text-[#24263F] text-[18px] leading-[28px] font-normal max-w-[540px]'>Mobile with earbuds and smart watch v2.0, foldable tablet convertible</p>
            <div className='flex items-center gap-[9px]'>
              {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={18}
                activeColor="#ffd700"
              /> */}
              <Rate />
              <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-normal'>(120 Reviews)</p>
            </div>
            <h1 className='text-[#3B0E71] text-[28px] leading-[42px] font-light mt-[2px]'>Rs 98599</h1>
            <p className='text-[#24263F] text-[13px] leading-[19.5px] font-normal max-w-[540px]'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <div className='bg-[#FF6868]/[0.1] inline-block mt-[15px] '>
              <p className='text-[#FF5151] text-[13px] leading-[19.5px] font-normal pt-[2px] pl-[6px] pb-[3px] pr-[5px]'>Out of stock</p>
            </div>

            <div className='flex items-center mt-[14px] gap-[48px]'>
              <p>Variant</p>
              <div className='flex gap-[24px]'>
                <div className='bg-[#F9F9F9] pt-[4px] pb-[5px] px-[6px] cursor-pointer border hover:border-[#0E1133]'><p className='text-[#0E1133] text-[13px] leading-[19.5px] font-normal'>6/128</p></div>
                <div className='bg-[#F9F9F9] pt-[4px] pb-[5px] px-[6px] cursor-pointer border hover:border-[#0E1133]'><p className='text-[#0E1133] text-[13px] leading-[19.5px] font-normal'>4/128</p></div>
                <div className='bg-[#F9F9F9] pt-[4px] pb-[5px] px-[6px] cursor-pointer border hover:border-[#0E1133]'><p className='text-[#0E1133] text-[13px] leading-[19.5px] font-normal'>4/64</p></div>
              </div>
            </div>
            <div className='flex items-center gap-[10px] mt-[56px] pb-[28px] pl-[8px]'>
              <div className='bg-[#D9D9D9] w-[56px] h-[56px]'></div>
              <button className='bg-[#F65128] w-[246px] h-[56px] flex justify-center items-center text-white text-[15px] leading-[22.5px] font-normal transform hover:scale-[102%] transition duration-300 ease-out'>Add to Cart</button>
              <button className='bg-[#F65128] w-[246px] h-[56px] flex justify-center items-center text-white text-[15px] leading-[22.5px] font-normal view_btns transform hover:scale-[102%] transition duration-300 ease-out'>Buy Now</button>
            </div>
            <div className='h-[1px] w-[634px] bg-[#EDEDED] mb-[15px]'></div>
            <div className='flex items-center gap-[128px]'>
              <div className='flex items-center flex-col'>
                <div className='w-[76px] h-[33px] bg-[#D9D9D9] pb-[9px]'></div>
                <p>Free Shipping</p>
              </div>
              <div className='flex items-center flex-col'>
                <div className='w-[76px] h-[33px] bg-[#D9D9D9] pb-[9px]'></div>
                <p>Easy Retun</p>
              </div>
              <div className='flex items-center flex-col'>
                <div className='w-[76px] h-[33px] bg-[#D9D9D9] pb-[9px]'></div>
                <p>Check Time</p>
              </div>
            </div>
            <p className='mt-[15px] text-[#2D2D2D] text-[12px] leading-[18px] font-normal max-w-[572px] '>Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc, consequat vel aliquam vitae, porta ac mi. Integer commodo sapien lacus, nec interdum nisi vehicula aliquam. Aliquam enim lorem.</p>

          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Tabs defaultActiveKey="1" items={items} className="product" />
      </div>
      <div className='container mx-auto mt-[91px]'>
        <div className='w-full flex items-center gap-[41px]  pb-[131px]'>
          <div className='basis-[60%] '>
            <div className='flex items-center bg-[#F9F9F9] py-[10px] pl-[13px] gap-[33px] pr-[19px] w-full'>
              <div className='flex items-center flex-col justify-center basis-[20%]'>
                <h2 className='text-[#24263F] text-[16px] leading-[24px] font-normal'>Reviews & Ratings</h2>
                <h1 className='text-[#F65128] text-[52.94px] leading-[79.41px] font-light mt-[5px]'>4.5</h1>
                <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-light mt-[6px]'>(Based on 150 Reviews)</p>
              </div>
              <div className='basis-[80%] pt-[20px]'>
                <div className='flex items-center gap-[9px]'>
                  <p className='text-[12px] leading-[18px] text-[#2D2D2D] font-light whitespace-pre'>5 Star</p> <Progress percent={60} status="active" />
                </div>

                <div className='flex items-center gap-[9px]'>
                  <p className='text-[12px] leading-[18px] text-[#2D2D2D] font-light whitespace-pre'>4 Star</p> <Progress percent={40} status="active" />
                </div>
                <div className='flex items-center gap-[9px]'>
                  <p className='text-[12px] leading-[18px] text-[#2D2D2D] font-light whitespace-pre'>3 Star</p> <Progress percent={50} status="active" />
                </div>
                <div className='flex items-center gap-[9px]'>
                  <p className='text-[12px] leading-[18px] text-[#2D2D2D] font-light whitespace-pre'>2 Star</p> <Progress percent={0} status="active" />
                </div>
                <div className='flex items-center gap-[9px]'>
                  <p className='text-[12px] leading-[18px] text-[#2D2D2D] font-light whitespace-pre'>1 Star</p> <Progress percent={0} status="active" />
                </div>
              </div>
            </div>
            {/* feedbacks */}
            <div className='  mt-[63px] border-b-[1px] border-[#EDEDED] pb-[15px] mb-[51px] w-full'>
              <div className='flex justify-between '>
                <div className='flex items-center gap-[11px]'>
                  <img src="/../assets/johnDoe.png" alt="" />
                  <div>
                    <h2 className=' text-black text-[14px] leading-[21px] font-medium'>John Doe</h2>
                    <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-normal mt-[3px]'>10h ago</p>
                  </div>
                </div>

                <div>
                  {/* <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                /> */}
                  <Rate />
                </div>
              </div>
              <p className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal max-w-[694px] mt-[26px]'>It was indeed very good and fantastic to dine here and stay. The atmosphere electrifying. Prices was also very reasonable and service was awesome.
              </p>
            </div>
            <div className='  mt-[63px] border-b-[1px] border-[#EDEDED] pb-[15px] mb-[51px] w-full'>
              <div className='flex justify-between '>
                <div className='flex items-center gap-[11px]'>
                  <img src="/../assets/johnDoe.png" alt="" />
                  <div>
                    <h2 className=' text-black text-[14px] leading-[21px] font-medium'>John Doe</h2>
                    <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-normal mt-[3px]'>10h ago</p>
                  </div>
                </div>

                <div>
                  {/* <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                /> */}
                  <Rate />

                </div>
              </div>
              <p className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal max-w-[694px] mt-[26px]'>It was indeed very good and fantastic to dine here and stay. The atmosphere electrifying. Prices was also very reasonable and service was awesome.
              </p>
            </div>
            <div className='  mt-[63px] border-b-[1px] border-[#EDEDED] pb-[15px] mb-[51px] w-full'>
              <div className='flex justify-between '>
                <div className='flex items-center gap-[11px]'>
                  <img src="/../assets/johnDoe.png" alt="" />
                  <div>
                    <h2 className=' text-black text-[14px] leading-[21px] font-medium'>John Doe</h2>
                    <p className='text-[#2D2D2D] text-[12px] leading-[18px] font-normal mt-[3px]'>10h ago</p>
                  </div>
                </div>

                <div>
                  {/* <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={18}
                  activeColor="#ffd700"
                /> */}
                  <Rate />
                </div>
              </div>
              <p className='text-[#2D2D2D] text-[13px] leading-[19.5px] font-normal max-w-[694px] mt-[26px]'>It was indeed very good and fantastic to dine here and stay. The atmosphere electrifying. Prices was also very reasonable and service was awesome.
              </p>
            </div>

            <button className='py-[12px] px-[19px] bg-[#D9D9D9] text-black text-[16px] leading-[24px] font-normal inline-block ml-[45%]'>View all Reviews</button>
          </div>
          <div className='basis-[40%]  '>
            <h2 className='text-black text-[16px] leading-[24px] font-normal text-center'>Recommended Products</h2>
            <div className='grid grid-cols-2 gap-[30px] mt-[25px]'>
              <div className=' h-[257px] bg-[#F9F9F9] w-full'></div>
              <div className=' h-[257px] bg-[#F9F9F9] w-full'></div>
              <div className=' h-[257px] bg-[#F9F9F9] w-full'></div>
              <div className=' h-[257px] bg-[#F9F9F9] w-full'></div>
              <div className=' h-[257px] bg-[#F9F9F9] w-full'></div>
              <div className=' h-[257px] bg-[#F9F9F9] w-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage