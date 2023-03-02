import React from 'react'

type Props = {}

const VacationDeals = (props: Props) => {
    return (
        <div>
            <div className='container mx-auto mt-[150px]  mb-[105px] vacation relative'>
                <img src="/../mart/vacationdeals.jpg" className='w-full z-[-1]' alt="" />
                <div className='absolute top-[19px] left-[48px]'>
                    <h2 className='text-[27.07px] leading-[40.61px] font-normal font-poppins text-white'>Best Vacation Deals</h2>
                    <h1 className='text-[#F65128] text-[55.77px] leading-[83.65px] font-bold font-poppins off'>30% off</h1>
                    <h2 className='text-[white] text-[26.83px] leading-[40.24px] font-normal font-poppins'>on Flight Booking</h2>
                </div>
                <img src="/../mart/plane.png" className='absolute left-[33%] top-[-28%]' alt="" />
                <button className='book_now flex items-center gap-[6px] justify-center text-white text-[16px] leading-[18.75px] tracking-[-0.02em] font-bold  absolute bottom-[25px] right-[20%]  transition duration-200 ease-in-out ' >BOOK NOW <svg className='' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 11.5014C9.1 11.3014 9.004 11.0597 9.012 10.7764C9.02067 10.493 9.125 10.2514 9.325 10.0514L12.15 7.22637H1C0.716667 7.22637 0.479 7.13037 0.287 6.93837C0.0956668 6.74703 0 6.5097 0 6.22637C0 5.94303 0.0956668 5.70537 0.287 5.51337C0.479 5.32203 0.716667 5.22637 1 5.22637H12.15L9.3 2.37637C9.1 2.17637 9 1.9387 9 1.66337C9 1.3887 9.1 1.15137 9.3 0.951367C9.5 0.751367 9.73767 0.651367 10.013 0.651367C10.2877 0.651367 10.525 0.751367 10.725 0.951367L15.3 5.52637C15.4 5.62637 15.471 5.7347 15.513 5.85137C15.5543 5.96803 15.575 6.09303 15.575 6.22637C15.575 6.3597 15.5543 6.4847 15.513 6.60137C15.471 6.71803 15.4 6.82637 15.3 6.92637L10.7 11.5264C10.5167 11.7097 10.2877 11.8014 10.013 11.8014C9.73767 11.8014 9.5 11.7014 9.3 11.5014Z" fill="white" />
                </svg></button>

                <p className='text-[10px] leading-[15px] font-normal font-poppins absolute right-[18.85px] bottom-0 text-white'>*conditions applied</p>
            </div>
        </div>
    )
}

export default VacationDeals