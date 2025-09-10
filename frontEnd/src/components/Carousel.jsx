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
    <div className='flex relative justify-center items-center w-full px-[5%] my-[2%]'>
      <BsArrowLeftCircleFill size={50} onClick={prevSlide} color='white'
      className='absolute cursor-pointer left-0 ml-[5%]'/>
        <img src={DP} alt='Danny Phantom' className='w-full max-h-120'/>
      <BsArrowRightCircleFill size={50} onClick={nextSlide} color='white'
      className='absolute cursor-pointer right-0 mr-[5%]'/>
    </div>
  )
}

export default Carousel