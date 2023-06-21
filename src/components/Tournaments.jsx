import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../assets/image1.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, } from "swiper";

    export default function Tournaments() {
        return (
            <div className="h-[50vh] bg-slate-100">
            <div className=" flex flex-col md:flex-row pt-10  " id= "projects">
        <>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            }}
                modules={[Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide className="">
                <div className="flex flex-col justify-center relative  ">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                    <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 py-3 px-7 rounded-md mt-48 ">Click  Me</button>
                        
                                </div> */}
                                
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
                    
            </SwiperSlide>
                <SwiperSlide>
                    
                <div className="flex flex-col justify-center relative">
                    
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 hover:bg-red-500  py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 hover:bg-red-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 hover:bg-red-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 hover:bg-red-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                            <div className="flex flex-col justify-center relative">
                                
                        {/* <div className="absolute  h-full w-full flex justify-center items-center">
                        <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 hover:bg-red-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                    </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative">
                                {/* <div className="absolute  h-full w-full flex justify-center items-center">
                                <p className="absolute text-2xl text-white bottom-54 ">Mech-connectt</p>
                                    <p className="absolute text-lg text-white bottom-36">Lorem ipsum dolor sit amet.</p>
                            <button className="bg-slate-500 py-3 px-7 rounded-md mt-48">Click  Me</button>
                        
                        </div> */}
                    <img src={Image1} alt="your browser doesnt support this image" />
                            </div>
                            
            </SwiperSlide>
        </Swiper>
        
                </>
                </div>
                </div>
    );
    }
