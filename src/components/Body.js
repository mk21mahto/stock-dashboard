import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
    </div>
  )
}

export default Body