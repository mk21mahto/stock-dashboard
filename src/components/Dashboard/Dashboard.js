import React from 'react'
import Visuals from './Visuals/Visuals'
import Card from './Cards/Card'

const Dashboard = () => {
  return (
    <div className='grid grid-flow-row bg-sky-50'>
      <h1 className='p-5 font-bold mx-5'>Dashboard</h1>
        <Visuals></Visuals>
        <div>
            <Card></Card>
        </div>
    </div>
  )
}

export default Dashboard