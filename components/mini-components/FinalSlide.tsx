'use client'
import React from 'react'
import { travel } from '../../utils/constants'
import { Swiper,SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import Image from 'next/image';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import 'swiper/css/pagination';
const FinalSlide = () => {
  return (
    <div className='block bg-white space-y-28 h-full pt-20'>
    <div className='w-[55%] relative mx-auto text-3xl font-poppins text-center leading-relaxed'>
        Despite its small size Sri Lanka boasts of one of the highest rates of biological endemism in the world
        whether in plants or animals and is included among the top five biodiversity hotspots in the world.
    </div>
    <div className=' w-full relative h-full px-[40px] mx-auto '>
        <Swiper
        slidesPerView={4}
        className='w-[85%]'
        loop={true}
        // slidesOffsetBefore={50}
        // slidesOffsetAfter={100}
        // watchOverflow={true}
        modules={[Pagination,Navigation]}
        >
                    {travel.map((item, index)=>(
                        <SwiperSlide>
                            <div className='relative px-10 bg-white'>
                                <Image key={index} src={item.src} alt='photo' width={500} height={280} />
                                <div className='bg-transparent absolute inset-0 flex flex-col items-center justify-end text-white font-poppins pb-20 space-y-3'>
                                    <div className='text-5xl text-center'>{item.title}</div>
                                    <div className='flex justify-center'>{item.desc}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                   <NavigationButtons /> 
        </Swiper>
    </div>
    </div>
  )
}
const NavigationButtons=()=>{
    const swiper=useSwiper();
    return(
        <div className='absolute inset-0 z-30'>
            <div className='absolute top-1/2 left-0'>
                <button className='w-[90px] h-[90px] border-2 bg-white rounded-2xl shadow-lg' onClick={()=>swiper.slideNext()}>
                        <IoIosArrowBack size={80}/>
                </button>
            </div>
            <div className='absolute top-1/2 right-0'>
                <button className='w-[90px] h-[90px] bg-white rounded-2xl border-2 shadow-lg' onClick={()=>swiper.slidePrev()}>
                        <IoIosArrowForward size={80}/>
                </button>
            </div>
        </div>
    )
};

export default FinalSlide                                                                                                                            