import React from 'react'
import Hero1 from "../assets/hero.jpeg"
import image1 from "../assets/image1.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import { Navigation } from "swiper";

function Hero() {
return (
    <div>
    <div className=' h-[100vh] 'id="/">
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="absolute  h-full w-full flex justify-center items-center">
                        <p className="absolute text-2xl text-white ">G-poker</p>
                                    <p className="absolute text-lg text-white bottom-48">Lorem ipsum dolor sit amet.</p>
</div>
                <img className='h-[100%] w-full object-cover'
                src={image1} alt="" />
        </SwiperSlide>
                <SwiperSlide>
                <div className="absolute  h-full w-full flex justify-center items-center">
                        <p className="absolute text-2xl text-white ">G-poker</p>
                                    <p className="absolute text-lg text-white bottom-44">Lorem ipsum dolor sit amet.</p>
</div>
                <img className='h-[100%] w-full object-cover'
                src={Hero1} alt="" />
        </SwiperSlide>
</Swiper>
    
    </div>
    </div>
)
}

export default Hero