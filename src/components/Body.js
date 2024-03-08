import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard/Dashboard'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
    </div>
  )
}

export default Body