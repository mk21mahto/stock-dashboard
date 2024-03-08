import React from 'react'

const TopPerformer = ({title}) => {

  return (
    <div className='grid-span-3 bg-white shadow-lg shadow-sky-300 p-2 mx-2 px-5'>
      <div className='font-bold py-2'>
        {title}
      </div>
      <div>
        <div>Etherium</div>
        <div>Amazon</div>
        <div>Dollar</div> 
      </div>
    </div>
  )
}

export default TopPerformer