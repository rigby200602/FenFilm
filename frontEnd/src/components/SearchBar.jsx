import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='flex'>
        <span>
            <CiSearch />
        </span>
        <input type='text' placeholder='Tìm kiếm'/>
    </div>
  )
}

export default SearchBar