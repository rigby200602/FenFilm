import React from 'react'
import lists  from '../data/lists.json'
import { useParams } from 'react-router-dom'
import { filmData } from '../context/AppContext'

const Season = () => {
  // fetch id from url
  const {id} = useParams();
  // get film data from id
  const film = filmData(id);
  return (
    <div className='flex mx-[5%] my-4 text-white'>
        {/* <h1 className='text-3xl hidden md:block'>{season.name}</h1> */}
        {}
    </div>
  )
}

export default Season