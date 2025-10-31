import React from 'react'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className='flex justify-center items-center gap-2 mx-[5%] my-4'>
        <button className='w-10 h-10 rounded-full bg-white text-black cursor-pointer'>
            <GrLinkPrevious className='mx-auto'/>
        </button>
        <button className='w-10 h-10 rounded-full bg-white text-black cursor-pointer'>
            <GrLinkNext className='mx-auto'/>
        </button>
    </div>
  )
}

export default Pagination