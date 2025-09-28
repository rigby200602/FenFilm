import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import lists from '../data/lists.json'

const Play = () => {
    // get id from url
    const {id} = useParams()
    // fetch film url from database
    const film = lists.find(film => film.id === Number(id))
    // get film url
    const filmUrl = film ? film.url : ''
    return (
    <div>
        <NavBar />
        <div className="my-5">
          <video key={id} className="w-full h-[90vh]" controls autoPlay>
            <source src={filmUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Footer />
    </div>
  )
}

export default Play