import React from 'react'

const Products = () => {
    return (
        <div>
            <div className=' w-full pt-[89.5px] container mx-auto'>
                <h2 className='text-[22px] leading-[33px] font-medium tracking-[2%]'>Products</h2>
                <div className='grid grid-cols-4 mt-[25px] gap-[24px]'>

                    <div>
                        <img src="/../assets/products1.png" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Fashion</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>12938 Categories</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/../assets/products2.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Beauty & Accessories </p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>60 Categories</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/../assets/product3.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Children Apparels</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>250 Categories</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/../assets/products4.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Grooming Essentials</p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>90 Categories</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products