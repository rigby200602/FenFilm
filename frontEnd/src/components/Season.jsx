import React from 'react'

const Season = (props) => {
  return (
    <div className='flex mx-[5%] my-4 text-white'>
        <h1 className='text-3xl'>{props.name}</h1>
    </div>
  )
}

export default Season