import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import doc1 from "../Assets/doc1.png"
import doc2 from "../Assets/doc2.png"
import doc3 from "../Assets/doc3.png"

const Specialists = () => {
  return (
    <>
    <div>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <div style={{width:'540px', height:'67px', fontWeight:'600', fontSize:'48px', lineHeight:'67px', textAlign:'center', fontFamily:'inherit', overflow:'hidden', whiteSpace:'nowrap', color:'rgba(27,60,116,1)', marginTop:'56px'}}>Our Medical Specialist</div>
    <Swiper
        slidesPerView="auto"
        
        spaceBetween={30}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={{width:'fit-content'}}><><img src={doc1} alt=''/></></SwiperSlide>
        <SwiperSlide style={{width:'fit-content'}}><img src={doc2} alt=''/></SwiperSlide>
        <SwiperSlide style={{width:'fit-content'}}><img src={doc3} alt=''/></SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default Specialists