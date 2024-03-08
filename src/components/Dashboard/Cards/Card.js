import React from 'react'
import TopPerformer from './TopPerformer'

const Card = () => {
  return (
    <>
      <div className='grid grid-flow-col mx-3 py-5'>
        <TopPerformer title={'Top Holding'}/>
        <TopPerformer title={'Profitable Asset'} />
        <TopPerformer title={'Top Contributer'} />
      </div>
    </>

  )
}

export default Card