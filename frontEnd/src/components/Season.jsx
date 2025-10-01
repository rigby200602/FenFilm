import React from 'react'
import lists  from '../data/lists.json'
import { useParams } from 'react-router-dom'

const Season = () => {
  // fetch id from url
  const {id} = useParams();
  // fetch season data
  const season = lists.filter(s => s.season === Number(id));
  return (
    <div className='flex mx-[5%] my-4 text-white'>
        <h1 className='text-3xl hidden md:block'>{season.name}</h1>
        {}
    </div>
  )
}

export default Season