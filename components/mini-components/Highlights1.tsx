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
    <div className='bg-white pt-[100px] relative overflow-hidden'> 
      {/* This is the highlight text */}
      <div className='space-y-4 absolute z-10 pl-24'>
          <p className='text-7xl text-sky-600 font-bold font-custom'>Highlights</p>
          <p className='text-xl font-semibold'>Find out more about the latest <br /> deals and events</p>  
      </div>  
      {/* This is the background image */}
      <div className='relative w-full h-[1000px] '>
        <div className='h-[600px] w-full absolute left-64 bg-white'>
          <Image
          src="/Highlights.png"
          objectFit='fill'
          fill
          alt='hightlight background'
          />
        </div>
        <div className='absolute pt-[30px] pl-[300px] w-full'>
              {/* This is the slide */}
              <div className='absolute w-full overflow-visible h-[650px]'>
                {/* This is one box of slide */}
                <Swiper
                spaceBetween={10}
                slidesPerView={3}
                className='w-[100%] flex'
                loop={true}
                modules={[Pagination,Navigation]}
                >  
                  {images.map((image,index)=>(
                    <div className="">
                    <SwiperSlide key={index} className='relative inset-0 z-5 '>
                      {({isActive})=>(

                              <div className={`overflow-hidden w-full h-[500px] bg-white relative rounded-3xl shawdow-gray-300 shadow-xl ${isActive? "rounded-l-full rounded-r-3xl shadow-gray-300 border": ""} `}>
                                <div className={`absolute inset-0 flex justify-center h-[350px] flex-row transition-all duration-500 ease-in-out mb-[150px]`}>
                                  <Image src={image.src}
                                  fill
                                  style={{objectFit:"cover"}}
                                  alt='travel images'
                                  className={`w-full ${isActive?"  ":"rounded-lg"}`}
                                  />
                                </div>
                                <div className='absolute'>
                                  <div>Lorem ipsum, dolor sit amet consectetur </div>
                                  <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos repellendus voluptate accusantium deserunt! Nihil maxime pariatur fugiat quaerat delectus repudiandae odio ad velit adipisci. Praesentium eaque quos dignissimos placeat!
                                  </div>
                                </div>
                              </div>
                      )}
                  </SwiperSlide>
                  </div>
                  ))}
                  <div className="overflow-visible">
                    <CustomNavigation />
                  </div>                   
                </Swiper>
             </div>
        </div>
      </div>
</div>
  )
}

const CustomNavigation =()=>{
  const swiper = useSwiper();
  return (
    <div>
      <div className="absolute top-[550px] left-0 transform -translate-y-1/2 z-30 overflow-visible">
        <button
          className="bg-gray-300 text-sky-600 p-2 rounded-full w-[100px] h-[100px] flex justify-center items-center"
          onClick={() => swiper.slidePrev()}
        >
          <IoIosArrowRoundBack size={50} />
        </button>
      </div>
      <div className="absolute top-[50%] left-3/4 transform -translate-y-1/2 z-30">
        <button
          className="bg-white text-sky-600 p-2 rounded-full  w-[100px] h-[100px] flex justify-center items-center"
          onClick={() => swiper.slideNext()}
        >
          <IoIosArrowRoundForward size={50}/>
        </button>
      </div>
    </div>
  );
};
export default Hightlights1