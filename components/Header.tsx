import React from 'react'
import {Divider} from "@nextui-org/divider";
import Image from 'next/image'
import Link from 'next/link';
import LanguageDropDown from './mini-components/LanguageDropDown';
import SearchIcon from './mini-components/SearchIcon';
const Header = () => {
  return (
    <div className=''>
        <div className='bg-center w-screen h-[650px] relative'>
            {/* This is the video background */}
            <div className='absolute inset-0 object-cover'>
            <div>
              <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
              <source
                src="original.mp4"
                type="video/mp4"
              />
              </video>
              <div className='absolute z-20 inset-0 mt-[570px]'>
                <Image 
                src="/Polygon 1.png"
                objectFit='cover '
                fill
                alt='image'
                />
              </div>
            </div>

            {/* Overlay color */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-700/[0.7] to-black/50"></div>
            </div>

            {/*This is the nav menu*/}
            <div className='absolute flex items-center justify-center space-x-[70px] w-full px-[100px] pt-[20px] non-underlined'>
            
            {/*This is the logo*/}
            <div className='flex '>
                  <Image
                  src="/Mask group.png" // Path to the image in the public folder
                  alt="Logo Icon"
                  width={90} // Adjust the width
                  height={90} // Adjust the height
                  color='black'
                  />
            </div>
              {/*Nav list*/}
              <div className="text-white flex justify-between w-[50%] space-x-3" >
                  <p>Flight Info</p>
                  <p>Fast Track</p>
                  <p>Passenger Guide</p>
                  <p className='no-underline'>Shop Dine & relax</p>
                  <p>Services</p>
                  <p>Lounges</p>
                  <p>Contact Us</p>
              </div>
              {/*Divider*/}
              <div className='h-5 bg-white w-[1px]' >
                
              </div>
              {/*buttons*/}
              <div className='flex space-x-5 justify-between'>
                  <Link href='#'>
                    <button className="px-5 h-8 rounded-lg text-white border-white border bg-slate-300/[0.2]"> Airports </button>
                  </Link>
                  <LanguageDropDown />
                  <SearchIcon />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header