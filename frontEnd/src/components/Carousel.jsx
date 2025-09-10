import React, { useState } from 'react'
import DP from '../assets/DP.jpg'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({data}) => {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide - 1)
  }

  return (
    <div className='flex justify-center items-center w-full px-[5%] my-[2%]'>
      <BsArrowLeftCircleFill size={50} onClick={prevSlide} className='cursor-pointer'/>
        <img src={DP} alt='Danny Phantom' className='w-full max-h-120'/>
      <BsArrowRightCircleFill size={50} onClick={nextSlide} className='cursor-pointer'/>
    </div>
  )
}

export default Carousel