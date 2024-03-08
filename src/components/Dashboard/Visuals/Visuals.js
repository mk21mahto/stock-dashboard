import React from 'react'
import DoughnutChart from './DoughNut/DoughnutChart'
import Chart from './LineChart/Chart'

const Visuals = () => {
  return (
    <div className=' bg-white shadow-lg shadow-sky-300 px-5 mx-5'>
      <div className='font-bold my-2 flex'>
         Total Balance : $10,881
         <div className='text-green-600'> (26.7%)</div>
      </div>

      <div className='grid grid-flow-col'>
        <DoughnutChart />
        <Chart></Chart>
      </div>
        
       
    </div>
  )
}

export default Visuals