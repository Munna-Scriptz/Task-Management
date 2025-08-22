import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FiUser } from "react-icons/fi";
import { IoLogInOutline } from "react-icons/io5";
import { FaBarsStaggered } from 'react-icons/fa6';
import { MdNightlightRound } from 'react-icons/md';

const ResNavbar = () => {
  return (
    <>
    <nav className='lg:hidden block'>
        <div className="container">
            <div id="NavBar_Row" className='py-[20px] flex items-center justify-between'>
                <div className='w-[100px]'>
                    <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                </div>
                {/* -----------Nav button--------  */}
                <div className='flex items-center gap-5 text-2xl'>
                    <MdNightlightRound className='cursor-pointer'/>
                    <FaBarsStaggered className='cursor-pointer'/>
                </div>
            </div>
        </div>
        </nav>
    </>
  )
}

export default ResNavbar