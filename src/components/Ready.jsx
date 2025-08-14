import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

const Ready = () => {
  return (
    <>
        <section id='Ready' className='mt-[112px] bg-gray900 py-[96px] rounded-[8px]'>
            <div className="container">
                <div id="Ready-Row">
                    {/* ---------------Header--------------- */}
                    <div>
                        <h2 className='text-white text-[40px] font-extrabold text-center'>Ready to Get Started? </h2>
                        <p className='text-white opacity-[0.7] font-normal text-center mt-6 text-lg '>Organize your tasks with a 14-day free trial</p>
                    </div>
                    {/* ------------Input---------- */}
                    <div className='flex items-center justify-center mt-[40px]'>
                        <div className='w-[636px] h-[52px] bg-white rounded-[8px] flex justify-between items-center'>
                            <div className='flex items-center w-full'>
                                <MdOutlineEmail className='text-gray500 text-[20px] ml-[16px]'/>
                                <input className='h-full rounded-[8px] outline-none pl-[8px] w-full' type="text" placeholder='Your Email'/>
                            </div>
                            <button className='bg-brand h-full text-white w-[281px] text-base font-semibold rounded-r-[8px] cursor-pointer'>Get started for free</button>
                        </div>
                    </div>
                    <p className='text-white text-sm text-center opacity-[0.5] mt-4'>No subscriptions. No annual fees. No lock-ins.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Ready