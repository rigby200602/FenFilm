import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AboutUs = () => {
  return (
    <div className='text-white'>
        <NavBar/>
        <div className='mx-[5%] text-2xl leading-10'>
            <h1 className='text-4xl text-center'>Chúng tôi là ai?</h1>
            <p>Xin chào các bạn!</p>
            <p>Mình là Fensub, ngươi đang thực hiện các dự ác dịch thuật các phim hoạt hình cũ trên các kênh TV ngày ấy.</p>
            <p></p>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs