import React, { Component } from 'react'

import Navbar from './Navbar'
import HeatMap from './HeatMap.jsx'


const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <HeatMap />
      </div>
    </div>    
  )

}


export default Home