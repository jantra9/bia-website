"use client";
import React, {useState,useRef} from 'react'
import Image from 'next/image'
import { images } from '../../utils/constants'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {Swiper,SwiperSlide, useSwiper} from "swiper/react";
import { Navigation, Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hightlights1 = () => {
  
 return (
<div className='bg-white pt-[150px] relative overflow-hidden h-[100%] w-full'> 
  {/* This is the highlight text */}
  <div className='space-y-4 absolute z-10 pl-16'>
    <p className='text-8xl text-sky-600 font-bold font-custom'>Highlights</p>
    <p className='text-[22px] font-medium w-[230px]'>Find out more about the latest deals and events</p>  
  </div>  
  {/* This is the background grey image and slides */}
  <div className='relative w-full top-16 h-[780px]'>
    {/* This is the background grey image */}
    <div className='h-[640px] w-full absolute left-64 '>
      <Image
      src="/Highlights.png"
      objectFit='fill'
      fill
      alt='hightlight background'
      />
    </div>
    {/* This is the slide container */}
    <div className='relative h-full pt-[10px] pl-[300px] w-full'>
          {/* This is the slide */}
          
            {/* This is the whole slide */}
            <Swiper
            spaceBetween={20}
            slidesPerView={3}
            className='w-[100%] h-full '
            loop={true}
            modules={[Pagination,Navigation]}
            >  
            {images.map((image,index)=>(
              // This is one slide
              <SwiperSlide key={index}>
              {({isActive})=>(
                // This is the wrapper of each slide/DO NOT DELETE AS ONLY FOR ONE PARENT ELEMENT
                <>
                    {/* The slide */}
                    <div className={`bg-white overflow-hidden w-full h-[500px] mb-[150px] relative shadow-gray-500 top-10 shadow-xl transition-all duration-800 ease-linear hover:-translate-y-9 rounded-3xl ${isActive ? "rounded-l-full rounded-r-[900px] " : ""}`}>
                      {/* The images of the slide */}
                      <div className={`absolute inset-0 flex justify-center h-[350px] flex-row transition-all duration-500 ease-in-out mb-[150px]`}>
                        <Image src={image.src}
                        fill
                        style={{objectFit:"cover"}}
                        alt='travel images'
                        className={`w-full rounded-3xl ${isActive?"rounded-r-3xl":""}`}
                        />
                      </div>
                      {/* The text of each slide matching the images */}
                      <div className='absolute top-2/3 px-[50px] pt-10'>
                        <div className='text-2xl text-sky-600 font-semibold text-center'>Lorem ipsum, dolor sit amet consectetur </div>
                        <div className={`text-lg opacity-40 ${isActive? "pl-28" : "" }`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos repellendus voluptate accusantium deserunt!
                        </div>
                      </div>
                    </div>
                    {/* The "see more" button */}
                    <div className='absolute right-0 bottom-[180px]  '>
                      <button className='h-[70px] bg-sky-600 text-white text-xl font-medium px-[50px] rounded-full transition-all duration-300 ease-linear transform hover:px-[60px]'>see more</button>
                    </div>
                </>
              )}
              </SwiperSlide>
            ))}
              {/* This is the prev and next buttons */}
              <div className="overflow-visible">
                <CustomNavigation />
              </div>                   
            </Swiper>
          
    </div>
  </div>
</div>
  )
}

const CustomNavigation =()=>{
  const swiper = useSwiper();
  return (
    <div>
      <div className="absolute top-[620px] left-0 transform -translate-y-1/2 z-30 overflow-visible">
        <button
          className="bg-gray-300 text-sky-600 p-2 rounded-full w-[140px] h-[140px] flex justify-center items-center"
          onClick={() => swiper.slidePrev()}
        >
          <IoIosArrowRoundBack size={60} className='hover:-translate-x-4 transition-transform duration-300 ease-linear'/>
        </button>
      </div>
      <div className="absolute top-[35%] right-[280px] transform -translate-y-1/2 z-30">
        <button
          className="bg-white text-sky-600 p-2 rounded-full  w-[140px] h-[140px] flex justify-center items-center"
          onClick={() => swiper.slideNext()}
        >
          <IoIosArrowRoundForward size={60} className='hover:translate-x-4 transition-transform duration-300 ease-linear'/>
        </button>
      </div>
    </div>
  );
};
export default Hightlights1