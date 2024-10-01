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

const Dealsforyou = () => {
  
 return (
<div className='bg-white pt-[200px] relative overflow-hidden h-[100%]'> 
  {/* This is the dealsforyou text */}
  <div className='space-y-4 absolute z-50 right-16 top-24'>
    <p className='text-8xl text-sky-600 font-bold font-custom'>Deals <br /> For You</p>
    <p className='text-[22px] font-medium w-[300px] ml-[100px]'>From BIA Exclusives and unique experiences, to amazing dining and shopping deals, there is something for everyone.</p>  
  </div>  
  {/* This is the background grey image and slides */}
  <div className='relative w-full flex h-[720px] right-[200px] overflow-hidden'>
    <div className='absolute inset-0 h-[640px] w-[95%]'>
      <Image src="/Dealsforyou.png" fill objectFit='fill' alt='background in grey'/>
    </div>
    {/* This is container for swiper as Swiper styling for margin and padding not working. This is for buttons to go outside the swiper */}
    <div className=' relative h-full w-[93%] z-10 mt-[15px] flex'>
      <Swiper
      spaceBetween={20}
      slidesPerView={3}
      className='  w-full'
      loop={true}
      modules={[Pagination,Navigation]}
      initialSlide={0} 
      dir="rtl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {({ isActive}) => (
                <>
                  <div className={`relative h-[70%] w-[710px]  top-10 overflow-hidden bg-white rounded-3xl shadow-2xl transition-transform hover:-translate-y-9 duration-500 ease-linear ${isActive ? "rounded-r-full rounded-l-[900px]" : "rounded-3xl"}`}>
                    {/* Images */}
                    <div className={`relative w-full h-[330px] rounded-3xl ${isActive?"rounded-l-3xl ":""} `}>
                      <Image src={image.src} alt='image' fill style={{objectFit:"cover"}} className='rounded-3xl'/>
                    </div>
                    {/* The text of each slide matching the images */}
                    <div className='absolute pt-[14px]'>
                      <div className='text-2xl text-sky-600 font-semibold text-center'>
                        Lorem ipsum, dolor sit amet consectetur
                      </div>
                      <div className={`text-lg text-left px-9 pt-3 opacity-40 ${isActive? "" : "" }`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos repellendus voluptate accusantium deserunt!
                      </div>
                    </div>
                  </div>
                  {/* The see more button */}
                  <div className='absolute left-0'>
                    <button className='h-[70px] bg-sky-600 text-white text-xl font-medium px-[50px] rounded-full transition-all duration-300 ease-linear transform hover:px-[60px]'>see more</button>
                  </div>
                </>
            )}
          </SwiperSlide>
        ))}
        <div>
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
      <div className="absolute top-[230px] right-[75%] transform -translate-y-1/2 z-30">
        <button
          className="bg-white text-sky-600 p-2 rounded-full w-[140px] h-[140px] flex justify-center items-center"
          onClick={() => swiper.slidePrev()}
        >
          <IoIosArrowRoundBack size={60} className='hover:-translate-x-4 transition-transform duration-300 ease-linear'/>
        </button>
      </div>
      <div className="absolute top-[620px] right-0 transform -translate-y-1/2 z-30 overflow-visible">
        <button
          className="bg-gray-300 text-sky-600 p-2 rounded-full  w-[140px] h-[140px] flex justify-center items-center"
          onClick={() => swiper.slideNext()}
        >
          <IoIosArrowRoundForward size={60} className='hover:translate-x-4 transition-transform duration-300 ease-linear'/>
        </button>
      </div>
    </div>
  );
};
export default Dealsforyou