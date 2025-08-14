import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import ManageImg from '../assets/images/ManageImage.png'

const Manage = () => {
  return (
    <>
        <section id='Manage' className='mt-[112px]'>
            <div className="container">
                <div id="Manage-Row" className='flex items-center justify-between'>
                    {/* -------------Left Side------------ */}
                    <div>
                        <img src={ManageImg} alt="Image" />
                    </div>
                    {/* -------------Right Side------------ */}
                    <div>
                        <h2 className='text-gray900 font-extrabold text-[32px] mb-[32px]'>Simple & Easy to Use</h2>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Powerful project management</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Transparent work management</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Manage work & focus on the most important tasks</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Track your progress with interactive charts</p>
                            </li>
                            <li className='flex items-center gap-2'>
                                <IoMdCheckmarkCircleOutline fill='#6366F1' className='text-[18px]'/>
                                <p className='text-gray700 text-base '>Easiest way to track time spent on tasks</p>
                            </li>
                        </ul>
                        <button className='flex items-center gap-2 text-white font-semibold cursor-pointer py-[12px] px-[28px] bg-brand rounded-[6px] mt-[40px]'>Learn more<FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Manage