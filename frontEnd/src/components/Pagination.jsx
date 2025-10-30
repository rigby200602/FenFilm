import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className='flex items-center gap-2'>
        <button>
            <GrLinkPrevious />
        </button>
    </div>
  )
}

export default Pagination