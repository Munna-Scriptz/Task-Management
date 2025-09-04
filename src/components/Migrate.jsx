import React from 'react'
import png1 from '../assets/images/subPng1.png'
import png2 from '../assets/images/subPng2.png'
import png3 from '../assets/images/subPng3.png'
import png4 from '../assets/images/subPng4.png'
import png5 from '../assets/images/subPng5.png'
import png6 from '../assets/images/subPng6.png'
import png7 from '../assets/images/subPng7.png'
import { Link } from 'react-router'

const Migrate = () => {
  return (
    <>
        <section id='Migrate' className='mt-[112px]'>
            <div className="container">
                <div id="Migrate-Row">
                    {/* -----------Header------------ */}
                    <div className='flex items-center flex-col'>
                        <h2 className='text-gray900 lg:text-[40px] text-[32px] font-extrabold text-center' data-aos="fade-up">Integrate Top Work Tools</h2>
                        <p className='text-gray600 lg:text-lg text-sm leading-[160%] text-center lg:w-[856px] mt-6' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    </div>
                    {/* -----------Items------------ */}
                    <div className='flex lg:flex-nowrap flex-wrap items-center justify-center lg:gap-6 gap-0 mt-[48px]'>
                        <Link to={'/'} data-aos="fade-up"><img src={png1} alt="icon" /></Link>
                        <Link to={'/'} data-aos="fade-up"><img src={png2} alt="icon" /></Link>
                        <Link to={'/'} data-aos="fade-up"><img src={png3} alt="icon" /></Link>
                        <Link to={'/'} data-aos="fade-up"><img src={png4} alt="icon" /></Link>
                        <Link to={'/'} data-aos="fade-up"><img src={png5} alt="icon" /></Link>
                        <Link to={'/'} data-aos="fade-up"><img src={png6} alt="icon" /></Link>
                        <Link to={'/'} data-aos="fade-up"><img src={png7} alt="icon" /></Link>
                    </div>
                    <div className='flex items-center justify-center mt-[48px]' data-aos="fade-up">
                        <button className='bg-brand py-[9px] px-[20px] hover:bg-gray200 hover:text-gray800 duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                            <span>View all integrations</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Migrate