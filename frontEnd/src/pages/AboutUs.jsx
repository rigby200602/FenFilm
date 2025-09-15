import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AboutUs = () => {
  return (
    <div className='text-white'>
        <NavBar/>
        <div className='mx-[5%] text-2xl'>
            <h1 className='text-4xl text-center'>Chúng tôi là ai?</h1>
            <h2>Xin chào các bạn!</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs