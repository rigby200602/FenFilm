import React from 'react'

const Box = ( {data} ) => {
  return (
    <div className="text-white my-8 w-30 md:w-70 cursor-pointer transition hover:scale-105">
              <img src={data.thumnail} />
              <h1 className="text-start my-2">{data.title}</h1>
    </div>
  )
}

export default Box