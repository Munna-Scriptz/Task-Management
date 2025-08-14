import React from 'react'
import Banner from '../components/Banner'
import Manage from '../components/Manage'
// import Subscribe from '../components/Subscribe'
import Organized from '../components/Organized'
import Tool from '../components/Tool'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <>
      <Banner/>
      <Organized/>
      <Manage/>
      <Tool/>
      <Pricing/>
      {/* ----Old---- */}
      {/* <Subscribe/>  */}
    </>
  )
}

export default Home