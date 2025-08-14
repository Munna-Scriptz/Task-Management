import React from 'react'
import Play from '../assets/images/PlaystoreIcon.png'
import Apple from '../assets/images/AppleIcon.png'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router';

const Banner = () => {
  return (
    <>
        <section id='Banner' className='mt-[112px]'>
            <div className="container">
                <div id="Banner-Row" className='flex items-center justify-between'>
                    {/* ---------Banner Text--------- */}
                    <div>
                        <h1 className='text-[56px] text-gray900 w-[526px] font-extrabold'>Manage All Your Money in One App</h1>
                        <p className='text-[18px] text-gray700 w-[526px] font-normal mt-[24px]'>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                        {/* ---------Buttons--------- */}
                        <div className='mt-[48px] flex items-center gap-[24px]'>
                            <a href='#' className='bg-gray900 flex items-center gap-[11px] py-[10px] px-[22px] w-fit rounded-[8px]'>
                                <img src={Apple} alt="icon" />
                                <div>
                                    <p className='text-white text-sm leading-[14px]'>Download on the</p>
                                    <h2 className='text-[20px] text-white font-semibold leading-[26px]'>Apple Store</h2>
                                </div>
                            </a>
                            <a href='#' className='bg-gray900 flex items-center gap-[11px] py-[10px] px-[22px] w-fit rounded-[8px]'>
                                <img src={Play} alt="icon" />
                                <div>
                                    <p className='text-white text-sm leading-[14px]'>GET IT ON</p>
                                    <h2 className='text-[20px] text-white font-semibold leading-[26px]'>Google Play</h2>
                                </div>
                            </a>
                        </div>
                        {/* ---------Discover--------- */}
                        <Link className='flex items-center gap-[16px] mt-[226px]'>
                            <div id='ArrowDownSHadow' className='bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full'><FaAngleDown /></div>
                            <p className='text-gray700 text-[14px] '>Discover more</p>
                        </Link>
                    </div>
                    {/* ---------Banner Image--------- */}
                    <div>
                        <img src='{BannerImg}' alt="Banner Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner