import React from 'react'
import lists  from '../data/lists.json'

const Season = () => {
  // fetch season data
  const season = lists.filter(s => s.season === Number(id));
  return (
    <div className='flex mx-[5%] my-4 text-white'>
        <h1 className='text-3xl hidden md:block'>{data.name}</h1>
        {}
    </div>
  )
}

export default Season