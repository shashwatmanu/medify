import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HeroImage from "../..//src/Assets/HeroSectionImage.png"
import SearchBox from './SearchBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import image1 from "../Assets/Image1.png"
import image2 from "../Assets/Image2.png"
import image3 from "../Assets/image3.png"


const HeroSection = () => {
  return (
    <>
    <div>
    <div style={{display:'flex', justifyContent:'space-between', backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)', padding:'0 48px 0 48px'}}>
        <div style={{paddingTop:'56px'}}>
            <Stack spacing={1} style={{width:'663px', marginLeft:'70px'}}>
                <p style={{fontWeight:'500', fontSize:'31px'}}>Skip the travel! Find Online</p>
                <p style={{fontWeight:'700', fontSize:'68px'}}>Medical <span style={{color:'#2AA7FF'}}>Centers</span></p>
                <p style={{fontSize:'20px', color:'#5C6169'}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                <Button variant='contained' style={{backgroundColor:'#2AA7FF', width:'177px', height:'48px', textTransform:'none'}}>Find Centers</Button>
            </Stack>
        </div>
        <div>
            <img src={HeroImage} alt='Doctors' style={{width:'620px', height:'735.94px' }}/>
        </div>
    </div>
    <SearchBox/>
    <div style={{margin:'200px 70px 100px 70px'}}>
    <Swiper
        slidesPerView={3}
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide><div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={image1} alt=''/></div></SwiperSlide>
        <SwiperSlide><div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={image2} alt=''/></div></SwiperSlide>
        <SwiperSlide><div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={image3} alt=''/></div></SwiperSlide>
        <SwiperSlide><div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={image2} alt=''/></div></SwiperSlide>
        <SwiperSlide><div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={image1} alt=''/></div></SwiperSlide>
        <SwiperSlide><div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={image2} alt=''/></div></SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default HeroSection