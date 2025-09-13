import React from 'react'

const Box = (props) => {
  return (
    <div className='max-h-[150px] text-white my-8'>
        <img src={props.thumnail}/>
    </div>
  )
}

export default Box