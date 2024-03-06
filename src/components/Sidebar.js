import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null
  
  return (
    <div className='w-38 p-5 shadow-lg'>
      <ul>
        <li> Dashboard</li>
        <li>Documents</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Sidebar