import React from 'react'
import Image from 'next/image'
import Highlights1 from './mini-components/Highlights1'
const Body = () => {
  return (
    <div>
        <Highlights1 />
        <div className='bg-orange-300'>Body</div>
    </div>
  )
}

export default Body