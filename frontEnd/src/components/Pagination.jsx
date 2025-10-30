import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className='flex items-center gap-2 mx-[5%] my-4'>
        <button className='w-full rounded-4xl'>
            <GrLinkPrevious />
        </button>
    </div>
  )
}

export default Pagination