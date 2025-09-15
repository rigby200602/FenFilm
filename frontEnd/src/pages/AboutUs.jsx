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
            <p>Và đây hiện tại là dự án tiếp theo ccuar mình muốn thực hiện, nhằm tạo ra một trang web nhầm tổng hợp những tập phim mình đã làm,
                để mọi người có thể dễ dàng theo dõi và có nền tảng tiện để xem phim hơn.
            </p>
            <p>Một lần nữa, mình muốn gửi lời ccamr ơn đến tất cả các bạn đã luôn ủng hộ mình và sẽ tiếp tục đồng hàng cùng mình trong những dự ác sắp tới.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs