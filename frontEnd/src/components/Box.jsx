import React from 'react'
import { Link } from 'react-router-dom'

const Box = ( {data} ) => {
  return (
    <Link to={`/play/${data.id}`}
    className="text-white mt-4 max-w-75 md:max-w-78 lg:max-w-80 cursor-pointer transition hover:scale-105">
              <img src={data.thumnail}
              title={`${data.title}`}
              loading='lazy' />
              <h1 className="text-start my-2">{data.title}</h1>
    </Link>
  )
}

export default Box