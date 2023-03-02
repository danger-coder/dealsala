import React from 'react'

type Props = {}

const Btn_nav = (props: Props) => {
    return (
        <div>
            <div className='fixed left-0 bottom-0 h-[72px] w-full bg-white border-t-[1px] border-[#EDEDED] flex items-center pl-[12px] gap-[12px] pr-[18px]'>
                <div className='w-[35px] h-[35px] bg-[#D9D9D9]'>

                </div>
                <div className='w-[35px] h-[35px] bg-[#D9D9D9]'>

                </div>
                <button className='bg-[#555555] rounded-[2px] flex items-center justify-center h-[43px] flex-grow text-[13px] font-normal font-poppins text-white leading-[19.5px]'>Button Text</button>
            </div>
        </div>
    )
}

export default Btn_nav