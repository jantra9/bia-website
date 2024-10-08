import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='relative w-full h-[550px]'>
        <Image src='/banner.png' alt='banner' objectFit='cover' fill/>
    </div>
  )
}

export default Banner