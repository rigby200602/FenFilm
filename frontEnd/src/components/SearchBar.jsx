import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div>
        <CiSearch />
        <input type='text' placeholder='Tìm kiếm'/>
    </div>
  )
}

export default SearchBar