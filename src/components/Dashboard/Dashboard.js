import React from 'react'
import Visuals from './Visuals/Visuals'
import Card from './Cards/Card'

const Dashboard = () => {
  return (
    <div className='grid grid-flow-row bg-slate-200'>
      <h1 className='p-5 font-bold'>Dashboard</h1>
        <Visuals></Visuals>
        <div>
            <Card></Card>
        </div>
    </div>
  )
}

export default Dashboard