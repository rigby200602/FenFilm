import React from 'react'
import { Link } from 'react-router-dom'

const Box = ( {data} ) => {
  return (
    <Link to={`/play/${data.id}`}
    className="text-white my-8 max-w-65 md:max-w-70 lg:max-w-80 cursor-pointer transition hover:scale-105">
              <img src={data.thumnail}
              loading='lazy' />
              <h1 className="text-start my-2">{data.title}</h1>
    </Link>
  )
}

export default Box