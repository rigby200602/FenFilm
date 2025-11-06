import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AboutUs = () => {
  return (
    <div>
        <NavBar/>
        <div className='text-white mx-[5%] text-4xl leading-10'>
            <h1 className='text-3xl md:text-4xl text-center my-2'>Chúng tôi là ai?</h1>
            <p>Xin chào các bạn!</p>
            <p>Mình là Fensub, người đang thực hiện các dự ác dịch thuật các phim hoạt hình cũ trên các kênh TV ngày ấy.</p>
            <p>Với mong muốn đem lại những trải nghiệm tốt hơn và mang lại cảm giác hoài niệm cho mọi người.</p>
            <p>Và đây hiện tại là dự án tiếp theo của mình muốn thực hiện, nhằm tạo ra một trang web nhầm tổng hợp những tập phim mình đã làm,
                để mọi người có thể dễ dàng theo dõi và có nền tảng tiện để xem phim hơn.
            </p>
            <p>Tuy bây giờ, giao diện có đơn giản và chức năng ch đủ hoàn chỉnh nhưng mình sẽ liên tục phát triển và chỉnh sửa để có thể nuôi dưỡng đứa con tinh thần này của mình</p>
            <p>Một lần nữa, mình muốn gửi lời cảm ơn đến tất cả các bạn đã luôn ủng hộ mình và sẽ tiếp tục đồng hành cùng mình trong những dự án sắp tới.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs