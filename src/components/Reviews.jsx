import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    // const ReviewData = [
    //     {
    //         message: 'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp1,
    //         username: 'Fannie Summers',
    //         role: 'Designer'
    //     },
    //     {
    //         message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />],
    //         image: pfp2,
    //         username: 'Annette Black',
    //         role: 'Manager'
    //     },
    //     {
    //         message: 'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />],
    //         image: pfp3,
    //         username: 'Fannie Summers',
    //         role: 'Designer'
    //     },
    //     {
    //         message: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas..',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaRegStar />,<FaRegStar />],
    //         image: pfp4,
    //         username: 'Robert Fox',
    //         role: 'PR-Director'
    //     },
    //     {
    //         message: 'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus...',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />],
    //         image: pfp5,
    //         username: 'Jerome Bell',
    //         role: 'Producer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp6,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp1,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp4,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp2,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp5,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp3,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    //     {
    //         message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
    //         stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
    //         image: pfp1,
    //         username: 'Albert Flores',
    //         role: 'Developer'
    //     },
    // ]
  return (
    <>
        <section id='Reviews' className='mt-[112px]'>
            <div className="container">
                <div id="Reviews-Row">
                    {/* ------------Header------------ */}
                    <div>
                        <h2 className='text-gray900 text-[40px] font-extrabold text-center mb-[64px]'>Clients are Loving Our App</h2>
                    </div>
                    {/* ------------Reviews Slider------------ */}
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews