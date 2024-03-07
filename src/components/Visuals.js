import React from 'react'
import Donut from './DoughNut/Donut'
import Chart from './Chart'

const Visuals = () => {
  return (
    <div className='flex bg-white shadow-lg px-5 mx-5'>
      <div className=''>
        <Donut></Donut>
      </div>
      <div className=''>
        <Chart></Chart>
      </div>
        
       
    </div>
  )
}

export default Visuals