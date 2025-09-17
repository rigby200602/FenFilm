import React from 'react'

const Box = ( {data} ) => {
  return (
    <div className="text-white my-8 max-w-65 md:max-w-70 lg:max-w-80 cursor-pointer transition hover:scale-105">
              <img src={data.thumnail} />
              <h1 className="text-start my-2">{data.title}</h1>
    </div>
  )
}

export default Box