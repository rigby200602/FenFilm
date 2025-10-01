import React from 'react'

const Season = ({data}) => {
  return (
    <div className='flex mx-[5%] my-4 text-white'>
        <h1 className='text-3xl hidden md:block'>{data.name}</h1>
    </div>
  )
}

export default Season