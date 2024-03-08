import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Dashboard from './Dashboard/Dashboard'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar data-testid="sidebar"></Sidebar>
        <Dashboard data-testid="dashboard"></Dashboard>
    </div>
  )
}

export default Body