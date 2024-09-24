"use client";
import React, {useState} from 'react'
import Image from 'next/image'
import { images } from '../../utils/constants'

const Hightlights1 = () => {

  return (
    <div className='bg-white pt-[100px] relative'> 
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
        <div className='absolute top-[30px] left-[350px]'>
                 {/* This is the slide */}
                <div className='absolute top-0 '>
                      {/* This is one box of slide */}
                      <div className='w-[660px] h-[440px] relative shadow-lg rounded-l-full  overflow-hidden'>
                            <div className='relative'>
                                <Image src= "/travel.1.png" width={660} height={400} alt='travel' className='rounded-r-3xl'/>
                            </div>
                            <div className='absolute bottom-0'>
                              <Image src="/curved container.png" width={660} height={320} alt='travel' className='rounded-r-3xl'/>
                            </div>
                            <div className='absolute inset-y-2/4 pl-[30px] pt-[35px] '>
                              <p className='font-custom text-sky-600 text-xl'>Lorem ipsum dolor<br/> amet, consectetur</p>
                              <div className=' text-black/[0.3] text-base font-semibold pt-[15px]'>
                                <p className='pl-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium </p>
                                <p className='pl-[45px]'>deleniti est quis. Dolor hic autem blanditiis animi velit in aliquid voluptas</p>
                                <p className='pl-[70px]'> expedita obcaecati. Eveniet commodi enim quod iste debitis? Donec</p>
                                <p className='pl-[115px]'> bibendum augue porta, convallis nunc at, aliquet mauris</p>
                              </div>
                            </div>
                      </div>
                </div>
        </div>
      </div>
</div>
  )
}

export default Hightlights1