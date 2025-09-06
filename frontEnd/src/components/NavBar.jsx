import React from 'react'

const NavBar = () => {
  return (
    <div className='flex text-white mx-[5%] my-[2%]'>
        <h1 className='text-4xl font-bold cursor-pointer'>FenFilm</h1>
        <div className='ml-auto'>
            <button className='rounded-4xl cursor-pointer px-4 py-2 hover:bg-white hover:text-[#17252A]'>
                Ủng hộ tôi
            </button>
        </div>
    </div>
  )
}

export default NavBar