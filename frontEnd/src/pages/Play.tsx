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
    console.log(filmUrl)
    return (
    <div>
        <NavBar />
        <div className="my-5 mx-[5%]">
          <iframe
            key={id}
            src={filmUrl}
            title={film?.title}
            loading='lazy'
            allow='autoplay; picture-in-picture; fullscreen'
            className="w-full h-[60vh] md:h-[80vh] rounded-lg bg-black"
          >
          </iframe>
        </div>
        <Footer />
    </div>
  )
}

export default Play