import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router';
import Brand1 from '../assets/images/bannerBrand1.png'
import Brand2 from '../assets/images/bannerBrand2.png'
import Brand3 from '../assets/images/bannerBrand3.png'
import Brand4 from '../assets/images/bannerBrand4.png'
import BannerImage from '../assets/images/BannerImage.png'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='relative lg:mt-[112px] mt-[50px]'>
            <div className="container">
                <div id="Banner-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                    {/* ---------Banner Text--------- */}
                    <div>
                        <h1 className='lg:text-[56px] text-[28px] text-gray900 lg:w-[526px] font-extrabold leading-[130%]'>Task Management Assistant You Gonna Love</h1>
                        <p className='lg:text-[18px] text-[14px] text-gray700 lg:w-[526px] font-normal mt-[24px]'>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
                        {/* ---------Buttons--------- */}
                        <div className='mt-[48px] flex items-center gap-[24px]'>
                            <button className='bg-brand py-[13px] px-[32px] shadow-lg shadow-brand hover:bg-gray200 hover:text-gray800 duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                                <span>Ger started for free</span>
                            </button>
                        </div>
                        {/* ---------Brands--------- */}
                        <p className='text-gray900 text-base font-extrabold lg:mt-[112px] mt-[50px]'>Largest companies use our tool to work efficiently</p>
                        <div className='flex items-center gap-6 mt-10'>
                            <Link to={'/'}><img src={Brand1} alt="Brands" /></Link>
                            <Link to={'/'}><img src={Brand2} alt="Brands" /></Link>
                            <Link to={'/'}><img src={Brand3} alt="Brands" /></Link>
                            <Link to={'/'}><img src={Brand4} alt="Brands" /></Link>
                        </div>
                    </div>
                    {/* ---------Banner Image--------- */}
                    <div className='lg:absolute top-[-120px] right-0 max-w-[1058px] lg:min-w-[800px] lg:w-[700px]'>
                        <img src={BannerImage} alt="Banner Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner