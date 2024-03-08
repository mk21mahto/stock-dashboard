import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null
  
  return (
    <div className='w-38 p-5 shadow-lg'>
      <ul>
        <li className='font-bold text-sky-500 my-2 cursor-pointer'> Dashboard  </li>
        <li className='my-2 cursor-pointer'>Documents</li>
        <li className='my-2 cursor-pointer'>Settings</li>
        <li className='my-2 cursor-pointer'>Logout</li>
      </ul>
    </div>
  )
}

export default Sidebar