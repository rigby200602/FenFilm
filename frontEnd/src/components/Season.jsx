import React from 'react'
import lists  from '../data/lists.json'
import { useParams } from 'react-router-dom'
import { filmData } from '../context/AppContext'
import seasons from '../data/seasons.json'

const Season = ({data}) => {
  // fetch id from url
  const {id} = useParams();
  // get season data
  const season = seasons.find(s => s.id === data)
  // get list film through season
  const listFilm = lists.filter(l => l.season === season.id)
  console.log(listFilm);
  return (
    <div className='mx-[5%] my-4 text-white'>
        <h1 className='text-xl hidden md:block'>{season.name}</h1>
        <div>
          {listFilm.map((item,id) => (
          <div key={id} className='mx-2'>
            <p>{item.id}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Season