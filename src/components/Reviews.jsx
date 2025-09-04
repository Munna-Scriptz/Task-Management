import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import pfp1 from '../assets/images/SliderPfp.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <FaAngleRight />,
        prevArrow: <FaAngleLeft />
    };

    const MyReviews = [
        {
            image: pfp1,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
        {
            image: pfp1,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
        {
            image: pfp1,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
        {
            image: pfp1,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
    ]
  return (
    <>
        <section id='Reviews' className='mt-[112px] bg-gray100 py-[96px] overflow-hidden'>
            <div className="container">
                <div id="Reviews-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                    {/* --------------Left Side------------- */}
                    <div className='bg-gray900 lg:p-[48px] p-[38px] lg:mb-0 mb-10 lg:pb-[113px] pb-[60px] rounded-[8px] lg:w-[610px] w-full' data-aos="fade-right">
                        <h2 className='text-white lg:text-[80px] text-[40px] font-extrabold'>420k</h2>
                        <p className='text-[#FFFFFFB2] lg:text-2xl text-lg leading-[160%] font-semibold'>users are taking advantage of our <span className='font-extrabold text-white'>Task Manager Tool</span>. It’s a new transparent and efficient way to organize all of your daily tasks.</p>
                    </div>
                    {/* --------------Right Side------------- */}
                        
                    <div id='SliderBoxShadow' className="slider-container lg:w-[636px] w-full shrink-0" data-aos="fade-left">
                        <Slider {...settings}>
                            {
                                MyReviews.map((item,e)=>(
                                    <div key={e} className='lg:p-[48px] p-[38px]'>
                                        <div id='Quote' className='bg-brand w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                                            <FaQuoteLeft />
                                            </div>
                                            <p className='text-gray700 lg:text-lg text-sm leading-[160%] mt-8'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                                            <div className='mt-[32px] flex items-center gap-4 pb-[48px]'>
                                                <img src={pfp1} alt="Pfp" />
                                                <div>
                                                    <h2 className='text-gray900 text-base font-extrabold'>Annette Black</h2>
                                                    <p className='text-gray600 text-sm '>Marketing Specialist at Createx Studio</p>
                                                 </div>
                                            </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews