import React from 'react'
import Box from './Box'
import { dannyPhantom } from '../data/list.json'

const ListCartoon = (props) => {
  return (
    <div className='h-[15%] mx-[5%] my-8'>
        <h1 className='text-3xl text-white'>{props.title}</h1>
        {/* Show box */}
        <div className='grid grid-cols-4 gap-4'>
            <Box data={dannyPhantom}/>
        </div>
    </div>
  )
}

export default ListCartoon