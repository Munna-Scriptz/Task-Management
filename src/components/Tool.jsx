import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import { BiBarChartAlt2 } from "react-icons/bi";
import ToolImg from '../assets/images/ToolImg.png'
const Tool = () => {
  return (
    <>
        <section id='Tool' className='mt-[96px] overflow-hidden'>
            <div className="container">
                <div id="Tool-Row">
                    {/* -------------Header-------------- */}
                    <div><h2 className='text-gray900 lg:text-[40px] text-[32px] font-extrabold text-center' data-aos="fade-up">One Tool — Endless Use Cases</h2></div>
                    <div data-aos="fade-up" className='flex items-center justify-center'>
                        <div className='mt-[40px] flex flex-wrap items-center gap-[16px]'>
                            <button className='bg-brand py-[12px] px-[16px] shadow-lg duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <FaRegStar />
                                <span>Project Management</span>
                            </button>
                            <button className='bg-gray200 active:bg-brand active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <MdWorkOutline />
                                <span>Remote Work</span>
                            </button>
                            <button className='bg-gray200 active:bg-brand active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <GoRocket />
                                <span>Product Release</span>
                            </button>
                            <button className='bg-gray200 active:bg-brand active:text-white text-gray800 py-[12px] px-[16px] shadow-lg duration-[.3s] flex items-center gap-2 rounded-[4px] font-manrope lg:text-[14px] text-sm font-semibold cursor-pointer'>
                                <BiBarChartAlt2 />
                                <span>Campaign Planning</span>
                            </button>
                        </div>
                    </div>
                    {/* -------------Items Show-------------- */}
                    <div className='py-[48px] mt-[40px] flex lg:flex-row flex-col items-center justify-between'>
                        {/* -----------Left Side---------- */}
                        <div>
                            <h2 className='text-gray900 text-[28px] font-extrabold' data-aos="fade-right">Project management</h2>
                            <p className='text-gray700 lg:text-base text-sm md:mb-0 mb-5 font-normal lg:w-[416px] mt-3.5 leading-[160%]' data-aos="fade-right">Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                        </div>
                        {/* -----------Left Side---------- */}
                        <div data-aos="fade-left">
                            <img src={ToolImg} alt="Image" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Tool