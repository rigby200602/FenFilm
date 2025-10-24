import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='flex bg-white text-black rounded-4xl mx-2 '>
        <span>
            <CiSearch />
        </span>
        <input type='text' placeholder='Tìm kiếm' className='outline-none'/>
    </div>
  )
}

export default SearchBar