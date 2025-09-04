import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import ManageImg from '../assets/images/ManageImage.png'

const Manage = () => {
  return (
    <>
        <section id='Manage' className='mt-[112px] overflow-hidden'>
            <div className="container">
                <div id="Manage-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                    {/* -------------Left Side------------ */}
                    <div data-aos="fade-right">
                        <img src={ManageImg} alt="Image" />
                    </div>
                    {/* -------------Right Side------------ */}
                    <div>
                        <h2 className='text-gray900 font-extrabold text-[32px] mb-[32px]' data-aos="fade-left">Simple & Easy to Use</h2>
                        <ul className='flex flex-col md:gap-3 gap-4'>
                            <li className='flex items-center gap-2' data-aos="fade-up">
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 lg:text-base text-sm '>Powerful project management</p>
                            </li>
                            <li className='flex items-center gap-2' data-aos="fade-up">
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 lg:text-base text-sm '>Transparent work management</p>
                            </li>
                            <li className='flex items-center gap-2' data-aos="fade-up">
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 lg:text-base text-sm '>Manage work & focus on the most important tasks</p>
                            </li>
                            <li className='flex items-center gap-2' data-aos="fade-up">
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 lg:text-base text-sm '>Track your progress with interactive charts</p>
                            </li>
                            <li className='flex items-center gap-2' data-aos="fade-up">
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 lg:text-base text-sm '>Easiest way to track time spent on tasks</p>
                            </li>
                        </ul>
                        <button className='flex items-center gap-2 text-white font-semibold hover:bg-gray300 hover:text-gray800 duration-[.3s] cursor-pointer py-[12px] px-[28px] bg-brand rounded-[6px] mt-[40px]' data-aos="fade-up">Learn more<FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Manage