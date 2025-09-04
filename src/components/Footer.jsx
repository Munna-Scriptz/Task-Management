import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
        <footer className='pt-[72px]'>
            <div className="container">
                <div id="Footer-Row" className='flex lg:flex-row flex-col justify-between items-start'>
                    {/* ---------First row------------ */}
                    <div>
                        <img src={Logo} alt="Logo" data-aos="fade-up"/>
                        <p className='text-gray700 text-sm font-normal leading-[160%] lg:w-[416px] w-full mt-6' data-aos="fade-up">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p>
                        <div className='mt-[40px]' data-aos="fade-up">
                            <p className='text-gray900 font-semibold text-sm mb-2'>Subscribe to our newsletter</p>
                            <div className='lg:w-[416px] h-[52px] border-1 border-gray400 bg-white rounded-[8px] flex justify-between items-center'>
                                <div className='flex items-center w-full'>
                                    <MdOutlineEmail className='text-gray500 text-[20px] ml-[16px]'/>
                                    <input className='h-full rounded-[8px] outline-none pl-[8px] w-full' type="text" placeholder='Your Email'/>
                                </div>
                                <button className='bg-brand h-full text-white w-[164px] text-center text-base font-semibold rounded-r-[8px] cursor-pointer'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {/* ---------Second row------------ */}
                    <div className='flex flex-col lg:mt-0 mt-10 gap-2 text-gray800 text-base font-semibold'>
                        <Link to={'/'} data-aos="fade-left">Home</Link>
                        <Link to={'/'} data-aos="fade-left">Features</Link>
                        <Link to={'/'} data-aos="fade-left">Integrations</Link>
                        <Link to={'/'} data-aos="fade-left">Our Clients</Link>
                        <Link to={'/'} data-aos="fade-left">Blog</Link>
                        <br />
                        <Link to={'/'} data-aos="fade-left">Terms & Conditions</Link>
                        <Link to={'/'} data-aos="fade-left">Privacy Policy</Link>
                    </div>
                    {/* ---------Third row------------ */}
                    <div className='flex flex-col lg:mt-0 mt-10 gap-2 text-gray800 text-base font-semibold'>
                        <Link to={'/'} data-aos="fade-left">Facebook</Link>
                        <Link to={'/'} data-aos="fade-left">Linkedin</Link>
                        <Link to={'/'} data-aos="fade-left">Twitter</Link>
                        <Link to={'/'} data-aos="fade-left">Instagram</Link>
                    </div>
                    {/* ---------Fourth row------------ */}
                    <div className='flex flex-col lg:mt-0 mt-10 gap-2 text-gray800 text-base font-semibold' >
                        <Link data-aos="fade-left" to={'/'}>Contact Us</Link>
                        <Link data-aos="fade-left" className='text-brand' to={'/'}>munnascripz@gmail.com</Link>
                    </div>
                </div>
            </div>
            {/* --------Bottom Row------- */}
            <div className='py-5 lg:mt-20 mt-10 border-t-1 border-gray300'>
                <div className="container">
                    <p className='text-gray600 text-center text-[12px]'>2021. All rights reserved. Silicon Template</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer