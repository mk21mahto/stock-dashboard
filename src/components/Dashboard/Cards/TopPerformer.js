import React from 'react'

const TopPerformer = ({title}) => {
  return (
    <div className='grid-span-3 bg-white shadow-lg p-2 mx-2'>
      <div className='font-bold py-2'>
        {title}
      </div>
      <div>
        <div className='grid grid-flow-col'>
          <div>Sports</div>
          <div> 40%</div>
        </div>
        <div className='grid grid-flow-col'>
          <div>Sports</div>
          <div> 40%</div>
          </div>
        <div className='grid grid-flow-col'>
          <div>Sports</div>
          <div> 40%</div>
        </div>
      </div>
    </div>
  )
}

export default TopPerformer