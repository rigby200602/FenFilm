import React, { useState } from 'react'
import DP from '../assets/DP.jpg'
import slides from '../data/slides.json'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1)
  }

  return (
    <div className='w-full px-[5%] my-[2%]'>
      <BsArrowLeftCircleFill/>
        <img src={DP} alt='Danny Phantom' className='w-full max-h-100'/>
      <BsArrowRightCircleFill/>
    </div>
  )
}

export default Carousel