import React from 'react'
import Banner from '../components/Banner'
import Manage from '../components/Manage'
import Organized from '../components/Organized'
import Tool from '../components/Tool'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Migrate from '../components/Migrate'
import Ready from '../components/Ready'

const Home = () => {
  return (
    <>
      <Banner/>
      <Organized/>
      <Manage/>
      <Tool/>
      <Pricing/>
      <Reviews/>
      <Migrate/>
      <Ready/>
      {/* ----Old---- */}
    </>
  )
}

export default Home