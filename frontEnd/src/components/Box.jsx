import React from 'react'

const Box = (data) => {
  return (
    <div className='max-h-[150px] text-white my-8'>
        <img src={data.thumnail}/>
    </div>
  )
}

export default Box