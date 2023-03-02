import Link from 'next/link'
import React from 'react'
import { Select } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const TopBar = () => {


    return (
        <div className=' container mx-auto  pt-[22px] '>

            <div className=' sm:flex'>
                <Link href="/">
                    <div className='w-[154.02px]'>
                    <img src="/../assets/mblview/buyselo.png" className='md:w-full md:h-[55px] transform scale-[120%] h-[55px] mr-[-30px] w-[142px] object-contain cursor-pointer ' alt="" />
                    </div>
                </Link>
                <div className='flex items-center  w-full ml-[36px]'>
                    {/* <div className='flex items-center border   border-[#C9C9C9] border-r-0 py-[10px] pl-[17px] gap-[12px] pr-[24px] cursor-pointer '>
                    <p className='text-[12px] leading-[18px] font-normal text-[#505056]'>Kathmandu</p>
                    <img src="/../assets/arrow_down.png" alt="" />
                </div> */}
                    <Select className=''
                        defaultValue="Kathmandu"
                        style={{ width: 120, }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Kathmandu',
                                label: 'Kathmandu',
                            },
                            {
                                value: 'Kathmandu',
                                label: 'Kathmandu',
                            },

                        ]}
                    />
                    <div className='flex items-center w-full  border-r-0 border border-[#C9C9C9] justify-between pr-[16px]  py-[10px] pl-[17px]'>
                        <input type="text" placeholder='Search for anything ' className='placeholder:text-[12px] leading-[18px]  font-normal placeholder:italic text-[12px] placeholder:text-[#000]/50 outline-none' />
                    </div>
                    <Link href="/search">
                        <div className='flex items-center pl-[31px] pt-[11px] pb-[9px] pr-[24px] gap-[4px] search'>
                            <p className='text-[12px]  leading-[18px] font-medium text-[#FFFFFF]'>Search</p>
                        </div>
                    </Link>
                </div>

                <div className='flex items-center gap-[24px] ml-[35px]'>
                    <div className='w-[81px] ]  cursor-pointer flex justify-center flex-col items-center'>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7471 1.7226C14.6833 1.24864 14.4359 0.812463 14.0512 0.495485C13.6666 0.178506 13.1709 0.00238691 12.6566 0H2.34336C1.83042 0.00213956 1.33576 0.177159 0.951279 0.492542C0.566794 0.807926 0.318626 1.24223 0.25288 1.71477L0 3.64877C0.000334897 4.02823 0.0877144 4.40327 0.256318 4.7489C0.424921 5.09454 0.670878 5.40283 0.977803 5.65324V12.0425C0.977803 12.5617 1.19982 13.0596 1.59503 13.4267C1.99023 13.7938 2.52624 14 3.08514 14H11.9107C12.4696 14 13.0056 13.7938 13.4008 13.4267C13.796 13.0596 14.018 12.5617 14.018 12.0425V5.65324C14.3257 5.40319 14.5724 5.09506 14.7418 4.7494C14.9111 4.40375 14.9991 4.02853 15 3.64877L14.7471 1.7226ZM9.19219 13.217H5.82046V10.0224C5.82046 9.71087 5.95367 9.41214 6.19079 9.19188C6.42791 8.97162 6.74952 8.84787 7.08486 8.84787H7.92779C8.26313 8.84787 8.58473 8.97162 8.82185 9.19188C9.05898 9.41214 9.19219 9.71087 9.19219 10.0224V13.217ZM13.1793 12.0425C13.1793 12.354 13.0461 12.6527 12.8089 12.873C12.5718 13.0933 12.2502 13.217 11.9149 13.217H10.0351V10.0224C10.0351 9.50321 9.8131 9.00531 9.4179 8.63821C9.0227 8.27111 8.48669 8.06488 7.92779 8.06488H7.08486C6.52596 8.06488 5.98995 8.27111 5.59475 8.63821C5.19954 9.00531 4.97752 9.50321 4.97752 10.0224V13.217H3.08514C2.7498 13.217 2.42819 13.0933 2.19107 12.873C1.95395 12.6527 1.82074 12.354 1.82074 12.0425V6.11521C2.1524 6.24127 2.50763 6.30514 2.86597 6.30313C3.27976 6.30492 3.68893 6.22241 4.06467 6.06143C4.44042 5.90044 4.7736 5.66489 5.04074 5.37136C5.07881 5.33617 5.13033 5.31642 5.18404 5.31642C5.23775 5.31642 5.28927 5.33617 5.32734 5.37136C5.59449 5.66489 5.92766 5.90044 6.30341 6.06143C6.67915 6.22241 7.08832 6.30492 7.50211 6.30313C7.9177 6.30477 8.32868 6.22226 8.70645 6.06135C9.08421 5.90043 9.41969 5.66497 9.68952 5.37136C9.70675 5.35412 9.72762 5.34036 9.75082 5.33093C9.77402 5.3215 9.79906 5.31661 9.82439 5.31656C9.85099 5.31641 9.87736 5.32118 9.90197 5.33059C9.92657 5.34 9.94891 5.35386 9.96769 5.37136C10.2348 5.66489 10.568 5.90044 10.9438 6.06143C11.3195 6.22241 11.7287 6.30492 12.1425 6.30313C12.4981 6.30514 12.8505 6.24126 13.1793 6.11521V12.0425ZM12.1425 5.52013C11.8513 5.5214 11.5634 5.46394 11.2985 5.35174C11.0337 5.23953 10.7982 5.07525 10.6083 4.87025C10.5134 4.76487 10.3948 4.68012 10.2608 4.62194C10.1268 4.56377 9.98072 4.5336 9.83282 4.53356H9.82439C9.6771 4.53232 9.5313 4.56113 9.39731 4.61795C9.26331 4.67477 9.14437 4.75823 9.04889 4.86242C8.85337 5.0605 8.61565 5.21866 8.35083 5.32685C8.086 5.43505 7.79985 5.49092 7.51054 5.49092C7.22123 5.49092 6.93507 5.43505 6.67025 5.32685C6.40542 5.21866 6.1677 5.0605 5.97218 4.86242C5.8741 4.7591 5.75347 4.67636 5.61831 4.61969C5.48314 4.56301 5.33655 4.5337 5.18826 4.5337C5.03996 4.5337 4.89337 4.56301 4.7582 4.61969C4.62304 4.67636 4.50241 4.7591 4.40433 4.86242C4.13828 5.15079 3.78459 5.3577 3.38968 5.45599C2.99476 5.55429 2.57708 5.53936 2.19146 5.41319C1.80584 5.28701 1.4703 5.05548 1.22888 4.74898C0.98747 4.44248 0.851463 4.07534 0.838719 3.69575L1.0916 1.81655C1.13163 1.53257 1.28077 1.27158 1.51156 1.08166C1.74235 0.891737 2.03925 0.785672 2.34757 0.782998H12.6566C12.9658 0.782837 13.2644 0.887915 13.4958 1.07836C13.7272 1.26881 13.8755 1.53143 13.9126 1.81655L14.1571 3.66443C14.1522 4.15858 13.9372 4.6309 13.5591 4.9785C13.1809 5.32609 12.6702 5.52077 12.1382 5.52013H12.1425Z" fill="#505056" />
                        </svg>

                        <p className='text-[12px] leading-[18px] font-normal text-[#505056] whitespace-pre'>Become a Seller</p>
                    </div>
                    <div className='w-[81px]   cursor-pointer flex justify-center flex-col items-center'>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1 2.90566H10.785C10.7068 2.11049 10.327 1.37222 9.71956 0.834954C9.11215 0.297689 8.32081 0 7.5 0C6.6792 0 5.88785 0.297689 5.28044 0.834954C4.67304 1.37222 4.29317 2.11049 4.215 2.90566H0.9C0.661305 2.90566 0.432387 2.99794 0.263604 3.1622C0.0948212 3.32645 0 3.54923 0 3.78153V13.1241C0 13.3564 0.0948212 13.5792 0.263604 13.7435C0.432387 13.9077 0.661305 14 0.9 14H14.1C14.3387 14 14.5676 13.9077 14.7364 13.7435C14.9052 13.5792 15 13.3564 15 13.1241V3.78153C15 3.54923 14.9052 3.32645 14.7364 3.1622C14.5676 2.99794 14.3387 2.90566 14.1 2.90566ZM7.5 0.570011C8.16397 0.5712 8.80434 0.809785 9.29938 1.24041C9.79441 1.67104 10.1096 2.26367 10.185 2.90566H4.815C4.89041 2.26367 5.20559 1.67104 5.70062 1.24041C6.19566 0.809785 6.83603 0.5712 7.5 0.570011ZM14.4 13.1241C14.4 13.2016 14.3684 13.2758 14.3121 13.3306C14.2559 13.3853 14.1796 13.4161 14.1 13.4161H0.9C0.820435 13.4161 0.744129 13.3853 0.687868 13.3306C0.631607 13.2758 0.6 13.2016 0.6 13.1241V3.78153C0.6 3.7041 0.631607 3.62984 0.687868 3.57508C0.744129 3.52033 0.820435 3.48957 0.9 3.48957H4.2V5.53327C4.2 5.6107 4.23161 5.68496 4.28787 5.73971C4.34413 5.79446 4.42044 5.82522 4.5 5.82522C4.57957 5.82522 4.65587 5.79446 4.71213 5.73971C4.76839 5.68496 4.8 5.6107 4.8 5.53327V3.48957H10.2V5.53327C10.2 5.6107 10.2316 5.68496 10.2879 5.73971C10.3441 5.79446 10.4204 5.82522 10.5 5.82522C10.5796 5.82522 10.6559 5.79446 10.7121 5.73971C10.7684 5.68496 10.8 5.6107 10.8 5.53327V3.48957H14.1C14.1796 3.48957 14.2559 3.52033 14.3121 3.57508C14.3684 3.62984 14.4 3.7041 14.4 3.78153V13.1241Z" fill="#505056" />
                        </svg>

                        <p className='text-[12px] leading-[18px] font-normal text-[#505056] whitespace-pre'>My Cart</p>
                    </div>
                    <div className='flex items-center gap-[8px] cursor-pointer'>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 15.625C10.9701 15.6237 9.46086 15.9784 8.09173 16.6611C7.43233 16.9899 6.46695 17.504 5.55192 18.0859C4.65379 18.6572 3.74195 19.3319 3.24621 19.9912L2.99691 20.3227L3.27671 20.6289C3.77789 21.1775 4.52149 21.8368 5.29898 22.4291C6.07327 23.0189 6.9136 23.5673 7.61104 23.8743C8.95328 24.4652 11.0107 24.9598 12.5 24.9583M12.5 15.625C14.0299 15.6237 15.5391 15.9784 16.9083 16.6611C17.5677 16.9899 18.533 17.504 19.4481 18.0859C20.3462 18.6572 21.258 19.3319 21.7538 19.9912L22.0031 20.3227L21.7233 20.6289C21.2221 21.1775 20.4785 21.8368 19.701 22.4291C18.9267 23.0189 18.0864 23.5673 17.389 23.8743C16.0467 24.4652 13.9893 24.9598 12.5 24.9583M12.5 15.625C12.4998 15.625 12.4997 15.625 12.4995 15.625L12.5 16.125L12.5005 15.625C12.5003 15.625 12.5001 15.625 12.5 15.625ZM12.5 24.9583C12.4998 24.9583 12.4996 24.9583 12.4995 24.9583L12.5 24.4583L12.5005 24.9583C12.5004 24.9583 12.5002 24.9583 12.5 24.9583ZM24.5 13C24.5 16.1826 23.2357 19.2348 20.9853 21.4853C18.7348 23.7357 15.6826 25 12.5 25C9.3174 25 6.26515 23.7357 4.01472 21.4853C1.76428 19.2348 0.5 16.1826 0.5 13C0.5 9.8174 1.76428 6.76515 4.01472 4.51472C6.26515 2.26428 9.3174 1 12.5 1C15.6826 1 18.7348 2.26428 20.9853 4.51472C23.2357 6.76515 24.5 9.8174 24.5 13ZM15.6157 12.2094C16.442 11.3831 16.9062 10.2624 16.9062 9.09375C16.9062 7.92514 16.442 6.80439 15.6157 5.97806C14.7894 5.15173 13.6686 4.6875 12.5 4.6875C11.3314 4.6875 10.2106 5.15173 9.38431 5.97806C8.55798 6.80439 8.09375 7.92514 8.09375 9.09375C8.09375 10.2624 8.55798 11.3831 9.38431 12.2094C10.2106 13.0358 11.3314 13.5 12.5 13.5C13.6686 13.5 14.7894 13.0358 15.6157 12.2094Z" stroke="#505056" />
                        </svg>
                        <div>
                            <p className="text-[12px] leading-[18px] font-normal whitespace-pre text-start ml-[4px]">Login </p>
                            <p className="text-[12px] leading-[18px] font-normal whitespace-pre text-start"> Sign Up</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar