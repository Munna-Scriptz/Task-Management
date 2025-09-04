import React from 'react'
import Wrincle from '../assets/images/wrincle.png'
import smile from '../assets/images/smile.png'
import beaming from '../assets/images/beaming.png'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";

const Pricing = () => {
  return (
    <>
        <section id='Pricing' className='mt-[112px]'>
            <div className="container">
                <div id="Pricing-Row">
                    {/* ------------Header-------------- */}
                    <div><h2 className='text-gray900 lg:text-[40px] text-[32px] font-extrabold text-center' data-aos="fade-up">Transparent Pricing for You</h2></div>
                    <div className='flex items-center justify-center mt-10' data-aos="fade-up">
                        <div className='flex items-center gap-[16px]'>
                            <p className='font-manrope font-semibold text-gray700'>Bill Monthly</p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer"/>
                                <div className="group peer ring-0 bg-brand  rounded-full outline-none duration-300 after:duration-300 w-[46px] h-[26px]  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[20px] after:w-[20px] after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95">
                                </div>
                            </label>
                            <p className='font-manrope font-semibold text-gray700 peer-checked:text-brand'>Bill Annualy</p>
                        </div>
                    </div>
                    {/* ------------Pricing Card-------------- */}
                    <div className='flex lg:flex-row flex-col lg:gap-x-4 gap-y-5 items-center justify-between mt-10'>
                        {/* -------------First Card------------- */}
                        <div className='lg:w-[416px] lg:p-10 p-7 border-1 border-gray300 rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]' data-aos="fade-up">
                            <div><img src={Wrincle} alt="Emoji" /></div>
                            <div>
                                <p className='text-gray600 text-lg mb-1'>Basic</p>
                                <h2 className='text-gray900 text-[32px] font-extrabold flex items-start gap-[2px]'>$ 5 <span className='text-lg'>40</span></h2>
                            </div>
                            {/* ---------Border---------- */}
                            <span className='w-full h-[1px] bg-gray300 my-4'></span>
                            {/* ---------Border---------- */}
                            <div className='w-full'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Aenean neque tortor, purus faucibus</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Nullam augue vitae et volutpat sagittis augue</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Mauris massa penatibus enim elit quam</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Nec ac sagittis nunc bibendum</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Odio ut orci volutpat ultricies eleifend</p>
                                    </li>
                                </ul>
                                <div className='mt-13'>
                                    <button className='py-[12px] w-full text-brand border-1 border-[#6366F159] rounded-[6px] font-semibold text-sm hover:bg-brand hover:text-white duration-[.3s] cursor-pointer'>Start free trial</button>
                                </div>
                            </div>
                        </div>
                        {/* -------------Second Card------------- */}
                        <div className='relative lg:w-[416px] lg:p-10 p-7 border-1 border-gray300 rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]' data-aos="fade-up">
                            <div><img src={smile} alt="Emoji" /></div>
                            {/* ------------Status------------- */}
                            <div className='absolute top-[16px] left-0 drop-shadow-md drop-shadow-success bg-success py-[6px] px-[8px] text-white text-sm font-semibold rounded-r-[4px] flex items-center gap-1'><FaRegStar className='text-[14px]'/><p>Popular</p></div>
                            {/* ------------Status------------- */}
                            <div>
                                <p className='text-gray600 text-lg mb-1'>Standard</p>
                                <h2 className='text-gray900 text-[32px] font-extrabold flex items-start gap-[2px]'>$ 10 <span className='text-lg'>50</span></h2>
                            </div>
                            {/* ---------Border---------- */}
                            <span className='w-full h-[1px] bg-gray300 my-4'></span>
                            {/* ---------Border---------- */}
                            <div className='w-full'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Aenean neque tortor, purus faucibus</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Nullam augue vitae et volutpat sagittis augue</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Mauris massa penatibus enim elit quam</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Nec ac sagittis nunc bibendum</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Odio ut orci volutpat ultricies eleifend</p>
                                    </li>
                                </ul>
                                <div className='mt-13'>
                                    <button className='py-[12px] w-full text-brand border-1 border-[#6366F159] rounded-[6px] font-semibold text-sm hover:bg-brand hover:text-white duration-[.3s] cursor-pointer'>Start free trial</button>
                                </div>
                            </div>
                        </div>
                        {/* -------------Third Card------------- */}
                        <div className='lg:w-[416px] lg:p-10 p-7 border-1 border-gray300 rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]' data-aos="fade-up">
                            <div><img src={beaming} alt="Emoji" /></div>
                            <div>
                                <p className='text-gray600 text-lg mb-1'>Basic</p>
                                <h2 className='text-gray900 text-[32px] font-extrabold flex items-start gap-[2px]'>$ 5 <span className='text-lg'>40</span></h2>
                            </div>
                            {/* ---------Border---------- */}
                            <span className='w-full h-[1px] bg-gray300 my-4'></span>
                            {/* ---------Border---------- */}
                            <div className='w-full'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Aenean neque tortor, purus faucibus</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Nullam augue vitae et volutpat sagittis augue</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Mauris massa penatibus enim elit quam</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Nec ac sagittis nunc bibendum</p>
                                    </li>
                                    <li className='text-gray700 text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-gray600 text-lg'/>
                                        <p>Odio ut orci volutpat ultricies eleifend</p>
                                    </li>
                                </ul>
                                <div className='mt-13'>
                                    <button className='py-[12px] w-full text-brand border-1 border-[#6366F159] rounded-[6px] font-semibold text-sm hover:bg-brand hover:text-white duration-[.3s] cursor-pointer'>Start free trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing