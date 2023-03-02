import Link from 'next/link'
import React, { useState } from 'react'
import { Select } from 'antd';
import { Rate } from 'antd';

import { useRouter } from 'next/router';
import { Button, Drawer } from 'antd';
import { Slider, Switch } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const EcommerceTopbar = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left')
    const router = useRouter()

    const showDrawerBottom = () => {
        setOpen1(true)
    }
    const onClose1 = () => {
        setOpen1(false);
    };
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    const searchClick = () => {
        router.push("/ecommerce/search")
    }



    return (
        <div className=' container mx-auto  pt-[22px] px-[12px] md:px-0 md:hidden'>
            <Drawer
                title=""
                placement={placement}
                closable={false}
                onClose={onClose1}
                open={open1}
                key={placement}
            >
                <div className='space-y-[22px]'>
                    <div className='flex items-center gap-[10px]'>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.106 10.2131C12.4081 10.6687 12.7716 11.0826 13.1869 11.4437C13.2329 11.4831 13.2697 11.5315 13.2949 11.5859C13.3202 11.6402 13.3333 11.6991 13.3333 11.7587V12.33C13.3333 12.4414 13.288 12.5482 13.2072 12.627C13.1264 12.7057 13.0169 12.75 12.9027 12.75H0.930649C0.816434 12.75 0.706896 12.7057 0.626134 12.627C0.545372 12.5482 0.5 12.4414 0.5 12.33V11.7587C0.500077 11.6991 0.513175 11.6402 0.538421 11.5859C0.563668 11.5315 0.600484 11.4831 0.646421 11.4437C1.05562 11.0816 1.41336 10.6677 1.71012 10.2131C2.0399 9.58409 2.23756 8.89721 2.2915 8.19274V6.11782C2.2888 5.02162 2.69281 3.96147 3.42894 3.1331C4.16507 2.30474 5.18361 1.76408 6.29653 1.61096V1.06073C6.29653 0.912017 6.3571 0.769392 6.46492 0.664235C6.57274 0.559077 6.71897 0.5 6.87145 0.5C7.02393 0.5 7.17016 0.559077 7.27798 0.664235C7.38579 0.769392 7.44637 0.912017 7.44637 1.06073V1.58996C7.94339 1.65233 8.42646 1.79424 8.87612 2.00999V2.2746C8.88354 2.52307 8.92112 2.7698 8.98809 3.00964C8.38066 2.61577 7.66762 2.40538 6.9382 2.40481C6.4398 2.40591 5.94652 2.50288 5.4866 2.69018C5.02668 2.87747 4.60915 3.15141 4.25793 3.49631C3.90671 3.84121 3.6287 4.25028 3.4398 4.70012C3.2509 5.14996 3.15484 5.63172 3.1571 6.11782V8.19694C3.10432 9.05632 2.86194 9.89446 2.44653 10.6541C2.14921 11.1136 1.79643 11.5366 1.39575 11.9142H12.4247C12.024 11.5366 11.6712 11.1136 11.3739 10.6541C10.9585 9.89446 10.7161 9.05632 10.6633 8.19694V6.12202C10.6635 5.74605 10.6054 5.37221 10.4911 5.01316C10.791 5.18075 11.1167 5.29989 11.4557 5.36598C11.4998 5.61432 11.5229 5.86579 11.5246 6.11782V8.19274C11.5785 8.89721 11.7762 9.58409 12.106 10.2131ZM7.69589 14.158C7.48645 14.3714 7.21829 14.4926 6.93885 14.5C6.65176 14.5048 6.37294 14.3892 6.15425 14.1746C5.93557 13.96 5.79191 13.6611 5.75 13.3335H8.08333C8.04258 13.6524 7.90534 13.9445 7.69589 14.158Z" fill="#505056" />
                            <path d="M11.875 4.58333C13.0026 4.58333 13.9167 3.66925 13.9167 2.54167C13.9167 1.41409 13.0026 0.5 11.875 0.5C10.7475 0.5 9.83337 1.41409 9.83337 2.54167C9.83337 3.66925 10.7475 4.58333 11.875 4.58333Z" fill="#F65128" />
                        </svg>
                        <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Notifications</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H12C12.663 0.5 13.2989 0.763392 13.7678 1.23223C14.2366 1.70107 14.5 2.33696 14.5 3V3.5H14.503V4.5H14.5V12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5H3C2.33696 14.5 1.70107 14.2366 1.23223 13.7678C0.763392 13.2989 0.5 12.663 0.5 12V3ZM13.5 3.5V3C13.5 2.60218 13.342 2.22064 13.0607 1.93934C12.7794 1.65804 12.3978 1.5 12 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V3.5H13.5ZM1.5 4.5V12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5H12C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12V4.5H1.5ZM3.003 5.5C2.87039 5.5 2.74321 5.55268 2.64945 5.64645C2.55568 5.74021 2.503 5.86739 2.503 6V10C2.503 10.1326 2.55568 10.2598 2.64945 10.3536C2.74321 10.4473 2.87039 10.5 3.003 10.5H7.003C7.13561 10.5 7.26279 10.4473 7.35655 10.3536C7.45032 10.2598 7.503 10.1326 7.503 10V6C7.503 5.86739 7.45032 5.74021 7.35655 5.64645C7.26279 5.55268 7.13561 5.5 7.003 5.5H3.003ZM6.503 6.5V9.5H3.503V6.5H6.503Z" fill="#505056" />
                        </svg>

                        <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>My Ads</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.20637 11.9582C6.20637 12.13 6.15544 12.2979 6.06003 12.4407C5.96461 12.5835 5.82899 12.6948 5.67032 12.7605C5.51164 12.8262 5.33705 12.8434 5.1686 12.8099C5.00016 12.7764 4.84543 12.6937 4.72399 12.5723C4.60254 12.4508 4.51984 12.2961 4.48633 12.1276C4.45283 11.9592 4.47003 11.7846 4.53575 11.6259C4.60147 11.4673 4.71277 11.3316 4.85557 11.2362C4.99838 11.1408 5.16626 11.0899 5.33801 11.0899C5.56831 11.0899 5.78918 11.1814 5.95203 11.3442C6.11488 11.5071 6.20637 11.7279 6.20637 11.9582ZM11.7887 11.0899C11.6169 11.0899 11.4491 11.1408 11.3063 11.2362C11.1635 11.3316 11.0522 11.4673 10.9864 11.6259C10.9207 11.7846 10.9035 11.9592 10.937 12.1276C10.9705 12.2961 11.0532 12.4508 11.1747 12.5723C11.2961 12.6937 11.4508 12.7764 11.6193 12.8099C11.7877 12.8434 11.9623 12.8262 12.121 12.7605C12.2797 12.6948 12.4153 12.5835 12.5107 12.4407C12.6061 12.2979 12.6571 12.13 12.6571 11.9582C12.6571 11.7279 12.5656 11.5071 12.4027 11.3442C12.2399 11.1814 12.019 11.0899 11.7887 11.0899ZM14.4868 3.12577L12.8493 8.85695C12.7664 9.14201 12.5936 9.39265 12.3566 9.57149C12.1197 9.75033 11.8313 9.8478 11.5344 9.84936H5.59232C5.29544 9.8478 5.00702 9.75033 4.77006 9.57149C4.5331 9.39265 4.36028 9.14201 4.27737 8.85695L2.63989 3.13817V3.11956L2.03204 1.01069C2.02627 0.983897 2.01136 0.959952 1.98985 0.942971C1.96834 0.925991 1.94158 0.917036 1.91419 0.917649H0.872155C0.773453 0.917649 0.678794 0.87844 0.609002 0.808648C0.539209 0.738855 0.5 0.644196 0.5 0.545494C0.5 0.446793 0.539209 0.352134 0.609002 0.282341C0.678794 0.212549 0.773453 0.17334 0.872155 0.17334H1.91419C2.10342 0.17401 2.28733 0.236038 2.43831 0.350112C2.58929 0.464187 2.6992 0.624154 2.75154 0.806003L3.27875 2.65437H14.1271C14.1848 2.65437 14.2418 2.66782 14.2935 2.69366C14.3452 2.7195 14.3901 2.75701 14.4248 2.80323C14.4591 2.84867 14.4826 2.90137 14.4933 2.95729C14.5041 3.0132 14.5018 3.07084 14.4868 3.12577ZM13.6371 3.39868H3.48964L4.99687 8.65226C5.03332 8.78225 5.11119 8.8968 5.21865 8.97852C5.32612 9.06024 5.45731 9.10466 5.59232 9.10505H11.5344C11.6694 9.10466 11.8006 9.06024 11.908 8.97852C12.0155 8.8968 12.0934 8.78225 12.1298 8.65226L13.6371 3.39868Z" fill="#505056" />
                        </svg>

                        <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Cart  Items</p>
                    </div>
                    <div className='h-[1px] w-full bg-[#EDEDED]'>

                    </div>
                    <div>
                        <h2 className='text-[#2D2D2D] text-[16px] leading-[19.2px] font-medium tracking-[0.01em]'>Categories</h2>
                        <div className='flex items-center gap-[8px] mt-[18px]'>
                            <div>
                                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.5" width="28" height="27" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_36_1755" transform="matrix(0.015625 0 0 0.0162037 0 -0.0185185)" />
                                        </pattern>
                                        <image id="image0_36_1755" width="64" height="64" xlinkHref="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </div>
                            <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Jobs</p>
                        </div>
                        <div className='flex items-center gap-[8px] mt-[15px]'>
                            <div>
                                <img src="/../ecommerce/realstate.png" alt="" />
                            </div>
                            <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Real estate</p>
                        </div>
                        <div className='flex items-center gap-[8px] mt-[15px]'>
                            <div>
                                <img src="/../ecommerce/hotels.png" alt="" />
                            </div>
                            <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Hotels</p>
                        </div>
                        <div className='flex items-center gap-[8px] mt-[15px]'>
                            <div>
                                <img src="/../ecommerce/flights.png" alt="" />
                            </div>
                            <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Flights</p>
                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#EDEDED]'>

                    </div>
                    <div className='flex items-center gap-[8px] mt-[15px]'>
                        <div>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.92219 0.5C9.03081 0.500003 9.13663 0.533604 9.2244 0.595963C9.31218 0.658321 9.37738 0.74622 9.41062 0.847L9.97498 2.556C10.212 2.669 10.4388 2.796 10.6553 2.939L12.4571 2.561C12.5634 2.53889 12.6741 2.55022 12.7733 2.59335C12.8725 2.63648 12.9551 2.70919 13.0092 2.801L14.4314 5.2C14.4857 5.29176 14.5087 5.39795 14.4971 5.50327C14.4854 5.60859 14.4398 5.70759 14.3667 5.786L13.1303 7.116C13.1483 7.37103 13.1483 7.62697 13.1303 7.882L14.3667 9.214C14.4398 9.29241 14.4854 9.39141 14.4971 9.49673C14.5087 9.60205 14.4857 9.70824 14.4314 9.8L13.0092 12.2C12.9549 12.2916 12.8723 12.3641 12.7731 12.4071C12.6739 12.45 12.5633 12.4612 12.4571 12.439L10.6553 12.061C10.4398 12.203 10.212 12.331 9.976 12.444L9.41062 14.153C9.37738 14.2538 9.31218 14.3417 9.2244 14.404C9.13663 14.4664 9.03081 14.5 8.92219 14.5H6.07781C5.96919 14.5 5.86337 14.4664 5.7756 14.404C5.68782 14.3417 5.62262 14.2538 5.58938 14.153L5.02605 12.445C4.78966 12.3323 4.56164 12.2037 4.34369 12.06L2.54287 12.439C2.43663 12.4611 2.32593 12.4498 2.22672 12.4066C2.12751 12.3635 2.04491 12.2908 1.99082 12.199L0.568632 9.8C0.514325 9.70824 0.491322 9.60205 0.50294 9.49673C0.514558 9.39141 0.560198 9.29241 0.633277 9.214L1.86974 7.882C1.85183 7.62763 1.85183 7.37237 1.86974 7.118L0.633277 5.786C0.560198 5.70759 0.514558 5.60859 0.50294 5.50327C0.491322 5.39795 0.514325 5.29176 0.568632 5.2L1.99082 2.8C2.04506 2.70837 2.12773 2.63587 2.22692 2.59293C2.32612 2.54998 2.43674 2.5388 2.54287 2.561L4.34369 2.94C4.56122 2.797 4.78902 2.668 5.02605 2.555L5.59041 0.847C5.62354 0.746545 5.68843 0.658879 5.77579 0.59655C5.86316 0.534221 5.96852 0.500426 6.07679 0.5H8.92116H8.92219ZM8.54663 1.5H6.45337L5.87054 3.267L5.47754 3.454C5.28434 3.54614 5.09784 3.65105 4.91934 3.768L4.55609 4.008L2.69268 3.616L1.64605 5.384L2.92355 6.762L2.89277 7.186C2.87803 7.39509 2.87803 7.60491 2.89277 7.814L2.92355 8.238L1.64399 9.616L2.69165 11.384L4.55507 10.993L4.91831 11.232C5.09681 11.349 5.28331 11.4539 5.47651 11.546L5.86951 11.733L6.45337 13.5H8.54868L9.13357 11.732L9.52554 11.546C9.71853 11.4541 9.9047 11.3492 10.0827 11.232L10.4449 10.993L12.3094 11.384L13.356 9.616L12.0775 8.238L12.1083 7.814C12.123 7.60458 12.123 7.39442 12.1083 7.185L12.0775 6.761L13.357 5.384L12.3094 3.616L10.4449 4.006L10.0827 3.768C9.90472 3.65081 9.71854 3.54589 9.52554 3.454L9.13357 3.268L8.54766 1.5H8.54663ZM7.5 4.5C8.31642 4.5 9.09941 4.81607 9.67671 5.37868C10.254 5.94129 10.5783 6.70435 10.5783 7.5C10.5783 8.29565 10.254 9.05871 9.67671 9.62132C9.09941 10.1839 8.31642 10.5 7.5 10.5C6.68358 10.5 5.90059 10.1839 5.32329 9.62132C4.746 9.05871 4.42167 8.29565 4.42167 7.5C4.42167 6.70435 4.746 5.94129 5.32329 5.37868C5.90059 4.81607 6.68358 4.5 7.5 4.5ZM7.5 5.5C6.95572 5.5 6.43373 5.71071 6.04886 6.08579C5.664 6.46086 5.44778 6.96957 5.44778 7.5C5.44778 8.03043 5.664 8.53914 6.04886 8.91421C6.43373 9.28929 6.95572 9.5 7.5 9.5C8.04428 9.5 8.56627 9.28929 8.95114 8.91421C9.336 8.53914 9.55222 8.03043 9.55222 7.5C9.55222 6.96957 9.336 6.46086 8.95114 6.08579C8.56627 5.71071 8.04428 5.5 7.5 5.5Z" fill="#505056" />
                            </svg>
                        </div>
                        <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Settings</p>
                    </div>
                    <div className='flex items-center gap-[8px] mt-[15px]'>
                        <div>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.791451 14.2068C0.97782 14.3943 1.23052 14.4997 1.49408 14.5H6.46449V13.5H1.49408V1.5H9.44674V3.5H10.4408V1.5C10.4406 1.23486 10.3357 0.980665 10.1494 0.793186C9.963 0.605707 9.71031 0.500265 9.44674 0.5H1.49408C1.23052 0.500265 0.97782 0.605707 0.791451 0.793186C0.605081 0.980665 0.500263 1.23486 0.5 1.5V13.5C0.500263 13.7651 0.605081 14.0193 0.791451 14.2068ZM13.0636 7.06603C13.3005 7.50636 13.4241 7.99933 13.4231 8.5C13.4228 8.92117 13.3342 9.33754 13.1629 9.72184C12.9916 10.1061 12.7415 10.4497 12.429 10.73V14.5L10.4408 13.5535L8.45266 14.5V10.73C8.08169 10.3962 7.79966 9.97434 7.63228 9.50283C7.4649 9.03131 7.41749 8.52515 7.49438 8.03049C7.57127 7.53582 7.77001 7.06838 8.07248 6.67077C8.37495 6.27316 8.77153 5.95802 9.22609 5.75409C9.68064 5.55015 10.1787 5.4639 10.6749 5.50319C11.1711 5.54248 11.6496 5.70608 12.0668 5.97905C12.484 6.25203 12.8267 6.62571 13.0636 7.06603ZM10.4408 12.4465L11.4349 12.92V11.325C10.7925 11.5584 10.0892 11.5584 9.44674 11.325V12.92L10.4408 12.4465ZM9.33626 10.1629C9.66321 10.3827 10.0476 10.5 10.4408 10.5C10.9679 10.4993 11.4732 10.2884 11.8459 9.91348C12.2187 9.53855 12.4283 9.03023 12.429 8.5C12.429 8.10444 12.3124 7.71776 12.0939 7.38886C11.8755 7.05996 11.565 6.80362 11.2017 6.65224C10.8384 6.50087 10.4386 6.46126 10.053 6.53843C9.66729 6.6156 9.31303 6.80608 9.03498 7.08579C8.75693 7.36549 8.56757 7.72186 8.49086 8.10982C8.41415 8.49778 8.45352 8.89991 8.604 9.26537C8.75448 9.63082 9.00931 9.94318 9.33626 10.1629ZM6.46449 6.5H2.98521V7.5H6.46449V6.5ZM7.95562 3.5H2.98521V4.5H7.95562V3.5Z" fill="#505056" />
                            </svg>
                        </div>
                        <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>Privacy Policy</p>
                    </div>
                    <div className='flex items-center gap-[8px] mt-[15px]'>
                        <div>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.8 5.4H8.2V4H6.8M7.5 13.1C4.413 13.1 1.9 10.587 1.9 7.5C1.9 4.413 4.413 1.9 7.5 1.9C10.587 1.9 13.1 4.413 13.1 7.5C13.1 10.587 10.587 13.1 7.5 13.1ZM7.5 0.5C6.58075 0.5 5.67049 0.68106 4.82122 1.03284C3.97194 1.38463 3.20026 1.90024 2.55025 2.55025C1.2375 3.86301 0.5 5.64348 0.5 7.5C0.5 9.35651 1.2375 11.137 2.55025 12.4497C3.20026 13.0998 3.97194 13.6154 4.82122 13.9672C5.67049 14.3189 6.58075 14.5 7.5 14.5C9.35651 14.5 11.137 13.7625 12.4497 12.4497C13.7625 11.137 14.5 9.35651 14.5 7.5C14.5 6.58075 14.3189 5.67049 13.9672 4.82122C13.6154 3.97194 13.0998 3.20026 12.4497 2.55025C11.7997 1.90024 11.0281 1.38463 10.1788 1.03284C9.3295 0.68106 8.41925 0.5 7.5 0.5ZM6.8 11H8.2V6.8H6.8V11Z" fill="#505056" />
                            </svg>
                        </div>
                        <p className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em]'>About Us</p>
                    </div>


                    <div className='pt-[90px] flex items-center justify-center flex-col'>
                        <h2 className='text-[#505056] text-[14px] leading-[16.8px] font-medium tracking-[0.01em] mb-[11px] text-center'>Rate Us</h2>
                        <Rate />
                    </div>
                </div>
            </Drawer>

            <div className=' sm:flex flex  items-center justify-between'>
                <svg onClick={showDrawerBottom} className='sm:hidden' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10301 3.84211H19.8408M1.15869 11.4211H19.8408M1.15869 19H19.8408M1.15869 6.68421L3.70625 3.84211L1.15869 1" stroke="#2D2D2D" strokeWidth="1.69838" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Link href="/ecommerce">
                    <div className='w-[154.02px] flex items-center justify-center'>
                        {/* <img src="/../assets/logo.png" className='md:w-full md:h-[45.01px] h-[32px] w-[116px] object-contain cursor-pointer' alt="" /> */}
                        <img src="/../assets/mblview/buyselo.png" className='md:w-full md:h-[45.01px] h-[55px] mr-[-30px] w-[142px] object-contain cursor-pointer' alt="" />
                    </div>
                </Link>
                <div className='md:flex items-center  w-full ml-[36px] hidden'>
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

                <div className='md:flex items-center gap-[41px] hidden'>
                    <div className='w-[81px] ml-[52px]  cursor-pointer'>
                        <p className='text-[12px] leading-[18px] font-normal text-[#505056] whitespace-pre'>Sell on LOREM</p>
                    </div>
                    <div className='flex items-center gap-[8px] cursor-pointer'>
                        <img src="/../assets/user.png" alt="" className='w-[17px] h-[17px] object-contain' />
                        <Link href={""} className="text-[12px] leading-[18px] font-normal whitespace-pre mr-[16px]">Login / Sign Up</Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center gap-[19.75px]'>
                    <svg className='cursor-pointer' width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0407 15.6339C18.4474 15.1181 17.928 14.5267 17.4965 13.8758C17.0254 12.9773 16.743 11.996 16.6659 10.9896V8.02546C16.6634 7.66541 16.6305 7.30617 16.5675 6.9514C16.0833 6.85699 15.6179 6.68678 15.1894 6.44737C15.3528 6.9603 15.4357 7.49436 15.4355 8.03146V10.9956C15.5109 12.2233 15.8572 13.4207 16.4506 14.5058C16.8754 15.1623 17.3793 15.7666 17.9517 16.3059H2.19615C2.76855 15.7666 3.27252 15.1623 3.69726 14.5058C4.29071 13.4207 4.63696 12.2233 4.71237 10.9956V8.02546C4.70913 7.33103 4.84636 6.6428 5.11622 6.00018C5.38607 5.35755 5.78324 4.77315 6.28498 4.28044C6.78673 3.78773 7.38319 3.39639 8.04022 3.12883C8.69724 2.86126 9.40193 2.72273 10.1139 2.72116C11.156 2.72197 12.1746 3.02252 13.0423 3.5852C12.9467 3.24258 12.893 2.8901 12.8824 2.53514V2.15712C12.24 1.84892 11.5499 1.64619 10.8399 1.55709V0.801046C10.8399 0.588595 10.7534 0.384846 10.5993 0.234621C10.4453 0.0843957 10.2364 0 10.0186 0C9.80075 0 9.59185 0.0843957 9.43782 0.234621C9.2838 0.384846 9.19726 0.588595 9.19726 0.801046V1.58709C7.60738 1.80584 6.15232 2.57819 5.1007 3.76157C4.04908 4.94496 3.47193 6.45945 3.47579 8.02546V10.9896C3.39874 11.996 3.11637 12.9773 2.64525 13.8758C2.2213 14.5252 1.71025 15.1165 1.12568 15.6339C1.06005 15.6901 1.00746 15.7593 0.971392 15.8369C0.935325 15.9145 0.916615 15.9987 0.916504 16.0839V16.9C0.916504 17.0591 0.981321 17.2117 1.0967 17.3243C1.21207 17.4368 1.36855 17.5 1.53172 17.5H18.6346C18.7978 17.5 18.9543 17.4368 19.0696 17.3243C19.185 17.2117 19.2498 17.0591 19.2498 16.9V16.0839C19.2497 15.9987 19.231 15.9145 19.195 15.8369C19.1589 15.7593 19.1063 15.6901 19.0407 15.6339Z" fill="#817D79" />
                        <path d="M17.1667 5.83333C18.7775 5.83333 20.0833 4.5275 20.0833 2.91667C20.0833 1.30584 18.7775 0 17.1667 0C15.5558 0 14.25 1.30584 14.25 2.91667C14.25 4.5275 15.5558 5.83333 17.1667 5.83333Z" fill="#F65128" />
                    </svg>
                    <img src="/../assets/profile.png" className='cursor-pointer' alt="" onClick={showDrawer} />
                </div>
            </div>
            {/* //drawer */}
            <Drawer title="" placement="right" className='close_btn' onClose={onClose} open={open}>
                <div className='ml-[26px] flex items-center gap-[28px]'>
                    <div>
                        <img src="/../assets/mblview/profile.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[13px] leading-[19.5px] font-medium font-poppins mb-[6px]'>John Bretsikyavich</h1>
                        <p className='text-[13px] leading-[19.5px] font-normal font-poppins'>+977-9812345678</p>
                    </div>
                </div>

                <div className='ml-[24px] mt-[47px] space-y-[37px]'>
                    <div className='flex items-center gap-[21px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0625 5.625C7.625 5.625 5.6875 7.5625 5.6875 10C5.6875 12.4375 7.625 14.375 10.0625 14.375C12.5 14.375 14.4375 12.4375 14.4375 10C14.4375 7.5625 12.5 5.625 10.0625 5.625ZM10.0625 13.125C8.3125 13.125 6.9375 11.75 6.9375 10C6.9375 8.25 8.3125 6.875 10.0625 6.875C11.8125 6.875 13.1875 8.25 13.1875 10C13.1875 11.75 11.8125 13.125 10.0625 13.125Z" fill="#2D2D2D" />
                            <path d="M19.25 7.9375L17.5 7.375L17.125 6.4375L18 4.8125C18.1875 4.4375 18.125 3.9375 17.8125 3.625L16.3125 2.125C16 1.8125 15.5 1.75 15.125 1.9375L13.5 2.8125L12.5625 2.4375L12 0.6875C11.875 0.3125 11.5 0 11.0625 0H8.9375C8.5 0 8.125 0.3125 8.0625 0.75L7.5 2.5C7.125 2.5625 6.8125 2.6875 6.5 2.875L4.875 2C4.5 1.8125 4 1.875 3.6875 2.1875L2.1875 3.6875C1.875 4 1.8125 4.5 2 4.875L2.8125 6.4375C2.6875 6.75 2.5625 7.125 2.4375 7.4375L0.6875 8C0.3125 8.125 0 8.5 0 8.9375V11.0625C0 11.5 0.3125 11.875 0.75 12L2.5 12.5625L2.875 13.5L2 15.125C1.8125 15.5 1.875 16 2.1875 16.3125L3.6875 17.8125C4 18.125 4.5 18.1875 4.875 18L6.5 17.125L7.4375 17.5L8 19.3125C8.125 19.6875 8.5 20 8.9375 20H11.0625C11.5 20 11.875 19.6875 12 19.3125L12.5625 17.5L13.5 17.125L15.125 18C15.5 18.1875 16 18.125 16.3125 17.8125L17.8125 16.3125C18.125 16 18.1875 15.5 18 15.125L17.125 13.5L17.5 12.5625L19.3125 12C19.6875 11.875 20 11.5 20 11.0625V8.9375C20 8.5 19.6875 8.0625 19.25 7.9375ZM18.75 10.875L16.5 11.5625L16.4375 11.875L15.875 13.1875L15.6875 13.5L16.8125 15.5625L15.5625 16.8125L13.5 15.6875L13.1875 15.875C12.75 16.125 12.3125 16.3125 11.875 16.4375L11.5625 16.5L10.875 18.75H9.125L8.4375 16.5L8.125 16.4375L6.8125 15.875L6.5 15.6875L4.4375 16.8125L3.1875 15.5625L4.3125 13.5L4.125 13.1875C3.875 12.75 3.6875 12.3125 3.5625 11.875L3.5 11.5625L1.25 10.875V9.125L3.375 8.5L3.5 8.1875C3.625 7.6875 3.8125 7.25 4.0625 6.8125L4.25 6.5L3.1875 4.4375L4.4375 3.1875L6.4375 4.3125L6.75 4.125C7.1875 3.875 7.625 3.6875 8.125 3.5625L8.4375 3.4375L9.125 1.25H10.875L11.5625 3.4375L11.875 3.5625C12.3125 3.6875 12.75 3.875 13.1875 4.125L13.5 4.3125L15.5625 3.1875L16.8125 4.4375L15.6875 6.5L15.875 6.8125C16.125 7.25 16.3125 7.6875 16.4375 8.125L16.5 8.4375L18.75 9.125V10.875Z" fill="#2D2D2D" />
                        </svg>
                        <p className='text-[#2D2D2D] leading-[19.5px] font-normal font-poppins'>Settings</p>
                    </div>
                    <div className='flex items-center gap-[21px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3333 10.0002H19.1666M9.99992 1.66683V0.833496M9.99992 19.1668V18.3335M16.6666 16.6668L15.8333 15.8335M16.6666 3.3335L15.8333 4.16683M3.33325 16.6668L4.16659 15.8335M3.33325 3.3335L4.16659 4.16683M0.833252 10.0002H1.66659M13.9999 12.9168L14.9999 7.0835L11.4999 8.8335L9.99992 7.0835L8.49992 8.8335L4.99992 7.0835L5.99992 12.9168H13.9999Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className='text-[#2D2D2D] leading-[19.5px] font-normal font-poppins'>What's New</p>
                    </div>
                    <div className='flex items-center gap-[21px]'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.21678C17 0.894072 16.8666 0.584579 16.6292 0.356388C16.3918 0.128197 16.0698 0 15.734 0H1.26596C0.930205 0 0.608203 0.128197 0.37079 0.356388C0.133377 0.584579 0 0.894072 0 1.21678V6.31858C0 13.9669 6.75479 16.5135 8.11117 16.9394C8.36357 17.0202 8.63643 17.0202 8.88883 16.9394C10.2452 16.5135 17 13.9669 17 6.31858V1.21678ZM8.55426 15.9486C8.5375 15.9569 8.51889 15.9613 8.5 15.9613C8.48111 15.9613 8.4625 15.9569 8.44574 15.9486C7.21596 15.5574 1.08511 13.2542 1.08511 6.31858V1.21678C1.08511 1.17068 1.10416 1.12647 1.13808 1.09387C1.17199 1.06127 1.21799 1.04296 1.26596 1.04296H15.734C15.782 1.04296 15.828 1.06127 15.8619 1.09387C15.8958 1.12647 15.9149 1.17068 15.9149 1.21678V6.31858C15.9149 13.2542 9.78404 15.5574 8.55426 15.9486ZM12.8676 5.03227C12.9167 5.08111 12.9552 5.13886 12.981 5.20215C13.0067 5.26544 13.0191 5.33301 13.0174 5.40094C13.0157 5.46887 13 5.5358 12.9712 5.59784C12.9423 5.65988 12.901 5.7158 12.8495 5.76234L7.55053 10.6295C7.44738 10.7223 7.31202 10.7749 7.17074 10.7772C7.03167 10.7772 6.89831 10.724 6.8 10.6295L4.15053 8.19591C4.04741 8.1014 3.98757 7.97138 3.98418 7.83447C3.98078 7.69756 4.03412 7.56495 4.13245 7.46584C4.23077 7.36672 4.36604 7.3092 4.50849 7.30594C4.65094 7.30268 4.7889 7.35394 4.89202 7.44845L7.17074 9.53437L12.108 5.01489C12.1588 4.96765 12.2189 4.9306 12.2847 4.90587C12.3506 4.88115 12.4209 4.86925 12.4915 4.87087C12.5622 4.87248 12.6319 4.88759 12.6964 4.91529C12.761 4.943 12.8191 4.98276 12.8676 5.03227Z" fill="black" />
                        </svg>
                        <p className='text-[#2D2D2D] leading-[19.5px] font-normal font-poppins'>Privacy</p>
                    </div>
                </div>
            </Drawer>
            <div className=' flex items-center gap-[9px] mt-[7px] sm:hidden '>
                <Select className='mbl_select'
                    defaultValue="Kathmandu"
                    style={{ width: 120, }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'bhaktapur',
                            label: 'bhaktapur',
                        },
                        {
                            value: 'lalitpur',
                            label: 'lalitpur',
                        },

                    ]}
                />

                <div className='border md:hidden border-[#EDEDED] rounded-[2px]  flex items-center justify-between py-[20px] pl-[10.16px] pr-[15px] h-[36px]  w-full gap-[15px]'>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={searchClick}>
                        <path opacity="0.4" d="M5.75957 0C8.93886 0 11.5191 2.58029 11.5191 5.75957C11.5191 8.93886 8.93886 11.5191 5.75957 11.5191C2.58029 11.5191 0 8.93886 0 5.75957C0 2.58029 2.58029 0 5.75957 0ZM5.75957 10.2392C8.23427 10.2392 10.2392 8.23427 10.2392 5.75957C10.2392 3.28424 8.23427 1.27991 5.75957 1.27991C3.28424 1.27991 1.27991 3.28424 1.27991 5.75957C1.27991 8.23427 3.28424 10.2392 5.75957 10.2392ZM11.1896 10.2847L13 12.0945L12.0945 13L10.2847 11.1896L11.1896 10.2847Z" fill="black" />
                    </svg>

                    <input type="text" placeholder='Search products' className='placeholder:text-[#817D79] text-[#817D79] text-[13px] font-normal font-poppins leading-[19.5px] outline-none w-[85%] ' />
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M5 8.8421C4.40476 8.8421 3.89881 8.62719 3.48214 8.19737C3.06548 7.76754 2.85714 7.24561 2.85714 6.63158V2.21053C2.85714 1.59649 3.06548 1.07456 3.48214 0.644737C3.89881 0.214912 4.40476 0 5 0C5.59524 0 6.10119 0.214912 6.51786 0.644737C6.93452 1.07456 7.14286 1.59649 7.14286 2.21053V6.63158C7.14286 7.24561 6.93452 7.76754 6.51786 8.19737C6.10119 8.62719 5.59524 8.8421 5 8.8421ZM4.28571 14V11.7342C3.04762 11.5623 2.02381 10.9912 1.21429 10.0211C0.404762 9.05088 0 7.92105 0 6.63158H1.42857C1.42857 7.65088 1.77691 8.51961 2.47357 9.23779C3.16976 9.95646 4.0119 10.3158 5 10.3158C5.9881 10.3158 6.83048 9.95646 7.52714 9.23779C8.22333 8.51961 8.57143 7.65088 8.57143 6.63158H10C10 7.92105 9.59524 9.05088 8.78571 10.0211C7.97619 10.9912 6.95238 11.5623 5.71429 11.7342V14H4.28571Z" fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default EcommerceTopbar