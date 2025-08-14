import React from 'react'
import Banner from '../components/Banner'
import Features from '../components/Manage'
import Reviews from '../components/Reviews'
import Subscribe from '../components/Subscribe'
import Use from '../components/Use'
import Organized from '../components/Organized'

const Home = () => {
  return (
    <>
      <Banner/>
      <Organized/>
      {/* ----Old---- */}
      <Features/>
      <Use/>
      <Reviews/>
      <Subscribe/>
    </>
  )
}

export default Home