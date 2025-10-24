import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='flex bg-white text-black rounded-4xl mx-2 justify-between items-center'>
        <span>
            <CiSearch className='mx-2'size={20}/>
        </span>
        <input type='text' placeholder='Tìm kiếm' className='outline-none pr-4'/>
    </div>
  )
}

export default SearchBar