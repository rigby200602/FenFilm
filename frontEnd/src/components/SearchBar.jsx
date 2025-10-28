import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [search, setSearch] = useState()
  return (
    <div className='flex bg-white text-black rounded-l-4xl  md:mr-0 ml-0 md:ml-2 justify-between items-center w-full max-w-90 md:max-w-60 h-10'>
        <span>
            <CiSearch className='mx-2'size={20}/>
        </span>
        <input type='text' placeholder='Tìm kiếm' className='outline-none pr-4' onChange={() => setSearch()}/>
    </div>
  )
}

export default SearchBar