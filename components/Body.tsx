import React from 'react'
import Banner from './mini-components/Banner'
import Highlights1 from './mini-components/Highlights1'
import Dealsforyou from './mini-components/Dealsforyou'
import FinalSlide from './mini-components/FinalSlide'
import BookYourHoliday from './mini-components/BookYourHoliday'
const Body = () => {
  return (
    <div className='w-screen'>
        <Highlights1 />
        <Dealsforyou />
        <FinalSlide />
        <BookYourHoliday />
        <Banner />
    </div>
  )
}

export default Body