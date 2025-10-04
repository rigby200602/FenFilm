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
    <div className='lg:flex mx-[5%] mb-4 text-white grid grid-cols-4 md:grid-cols-6 gap-4'>
        <h1 className='text-xl hidden lg:block w-70'>{season.name}</h1>
          {listFilm.map((item,id) => (
          <div key={id} className='mx-2 w-18 md:w-20 h-8 cursor-pointer py-0.5
          hover:border hover:border-white hover:rounded-2xl hover:text-black hover:bg-white
          // for reponsive
          border border-white rounded-2xl text-black bg-white
          lg:border-0 lg:rounded-none lg:text-white lg:bg-transparent
          '
          >
            <p className='text-center'>{item.id}</p>
          </div>
        ))}
    </div>
  )
}

export default Season