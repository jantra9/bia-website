import React from 'react'
import Image from 'next/image'
import SearchBar from './mini-components/SearchBar'
const HeaderBody = () => {
  return (
    <div className='absolute inset-56'>
            {/* This is where the icons are       */}
            <div className='flex justify-center space-x-[50px]'>
                <div>
                    <Image
                    src="/Component 18.png" // Path to the image in the public folder
                    alt="icon"
                    width={150} // Adjust the width
                    height={150} // Adjust the height
                    />
                    <div className='flex justify-center items-center text-white text-sm font-semibold pt-1'>Word-class <br/> Shopping</div>
                </div>
                
                <div>
                    <Image
                    src="/Component 18 (1).png" // Path to the image in the public folder
                    alt="icon"
                    width={150} // Adjust the width
                    height={150} // Adjust the height
                    />
                    <div className='flex justify-center text-center items-center text-white text-sm font-semibold pt-1'>Glocal & Global <br/> Cuisine</div>
                </div>
                
                <div>
                    <Image
                    src="/Component 19.png" // Path to the image in the public folder
                    alt="icon"
                    width={150} // Adjust the width
                    height={150} // Adjust the height
                    />
                <div className='flex justify-center text-center items-center text-white text-sm font-semibold pt-1'>Inspring <br/> Moments</div>
                </div>
                
                <div>
                    <Image
                    src="/Component 20.png" // Path to the image in the public folder
                    alt="icon"
                    width={150} // Adjust the width
                    height={150} // Adjust the height
                    />
                    <div className='flex justify-center text-center items-center text-white text-sm font-semibold pt-1'>5G Wi-Fi<br/> Connection</div>

                </div>
            </div>
            {/* This is the searchbar */}
            <div className='flex w-[40%] mx-auto mt-20'>
                <SearchBar />
            </div>
    </div>
  )
}

export default HeaderBody