import React from 'react'
import DoughnutChart from './DoughNut/DoughnutChart'
import Chart from './LineChart/Chart'

const Visuals = () => {
  return (
    <div className=' bg-white shadow-lg px-5 mx-5'>
      <div className='font-bold my-2'>
         Total Balance : $6400
      </div>

      <div className='grid grid-flow-col'>
        <DoughnutChart />
        <Chart></Chart>
      </div>
        
       
    </div>
  )
}

export default Visuals