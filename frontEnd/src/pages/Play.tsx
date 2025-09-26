import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Play = () => {
    // get id from url
    const {id} = useParams()
    return (
    <div>
        <NavBar />
        <Footer />
    </div>
  )
}

export default Play