import React from 'react'
import { useParams } from 'react-router-dom'

const Play = () => {
    // get id from url
    const {id} = useParams()
    return (
    <div>Play</div>
  )
}

export default Play