import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='flex p-2 m-1 shadow-lg justify-content'>
      <div className='flex left-0 top-0'>
      <img onClick={() => toggleMenuHandler()} className='h-10 cursor-pointer' alt='menu' src='https://www.svgrepo.com/show/312300/hamburger-menu.svg' />
      <a href='/'>
      <img className='h-10' alt='logo' src='https://financialit.net/sites/default/files/vega.png' />
      </a>

      </div>
      <div className='absolute top-0 right-0 m-1 p-2'>
        <img className='h-8' alt= 'user' src = 'https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png' />
      </div>
    </div>
  )
}

export default Head