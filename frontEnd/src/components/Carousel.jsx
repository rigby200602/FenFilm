import React, { useState } from 'react'
import DP from '../assets/DP.jpg'

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    setSlide()
  }
  const prevSlide = () => {
    setSlide()
  }

  return (
    <div className='w-full px-[5%] my-[2%]'>
        <img src={DP} alt='Danny Phantom' className='w-full max-h-100'/>
    </div>
  )
}

export default Carousel