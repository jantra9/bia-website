"use client";
import React, {useState} from 'react'
import Image from 'next/image'
import { images } from '../../utils/constants'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Hightlights1 = () => {
  const [activeIndex,setActiveIndex]= useState(0);
  const handleNext =()=>{
    setActiveIndex((prevIndex)=>(prevIndex+1)% images.length)
  };
  const handlePrev =()=>{
    setActiveIndex((prevIndex)=>(prevIndex-1+images.length)%images.length)
  }
  return (
    <div className='bg-white pt-[100px] relative overflow-hidden'> 
      {/* This is the highlight text */}
      <div className='space-y-4 absolute z-10 pl-24'>
          <p className='text-7xl text-sky-600 font-bold font-custom'>Highlights</p>
          <p className='text-lg font-semibold'>Find out more about the latest <br /> deals and events</p>  
      </div>  
      {/* This is the background image */}
      <div className='relative w-full h-[600px]'>
        <div className='h-[550px] w-full relative left-64 bg-white'>
          <Image
          src="/Highlights.png"
          objectFit='fill'
          layout='fill'
          alt='hightlight background'
          />
        </div>
        <div className='absolute top-[30px] left-[350px] w-full'>
                 {/* This is the slide */}
                <div className='absolute top-0 flex w-full'>
                      {/* This is one box of slide */}
                    
                            {images.map((image,index)=>(
                            <div className={`w-[660px] h-[440px] relative shadow-lg rounded-l-full`}>
                                <div className='relative w-[660px] h-[440px]'>
                                    <Image src= {image.src} layout='fill' objectFit='cover' alt='travel' className='rounded-r-3xl'/>
                                </div>
                                <div className='absolute bottom-0'>
                                  <Image src="/curved container.png" width={660} height={320} alt='travel' className='rounded-r-3xl'/>
                                </div>
                                <div className='absolute inset-y-2/4 pl-[30px] pt-[35px] '>
                                  <p className='font-custom text-sky-600 text-xl'>Lorem ipsum dolor<br/> amet, consectetur</p>
                                  <div className=' text-black/[0.3] text-base font-semibold pt-[15px]'>
                                    <p className='pl-20'>{image.desc}</p>
                                  </div>
                                </div>
                            </div>
                            ))}
                            <div className='absolute z-10 left-2/3 top-1/2'>
                              <button key={""} onClick={handleNext} className={"w-[110px] h-[110px] rounded-full flex justify-center items-center bg-white"}><IoIosArrowRoundForward size={40} color='sky'/></button>
                            </div>
                            <div className='absolute z-10 left-0 -bottom-20 '>
                              <button key={""} onClick={handleNext} className={"w-[110px] h-[110px] rounded-full flex justify-center items-center bg-gray-200"}><IoIosArrowRoundBack size={40} color='sky'/></button>
                            </div>
                </div>
        </div>
      </div>
</div>
  )
}

export default Hightlights1