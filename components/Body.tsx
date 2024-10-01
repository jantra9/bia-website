import React from 'react'
import Image from 'next/image'
import Highlights1 from './mini-components/Highlights1'
import Dealsforyou from './mini-components/Dealsforyou'
const Body = () => {
  return (
    <div>
        <Highlights1 />
        <Dealsforyou />
        <div className='bg-orange-300'>Body</div>
    </div>
  )
}

export default Body