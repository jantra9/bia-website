'use client'
import React from 'react'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
const SearchBar = () => {
  return (
    <div className='w-full relative'>
      <Tabs className="w-full relative">
        <TabList className="flex text-white text-3xl font-custom gap-x-[200px] mb-7">
          <Tab selectedClassName='border-b-4 pb-2'>
            Arrival
          </Tab>
          <Tab selectedClassName='border-b-4 pb-2'>
            Departure
          </Tab>
        </TabList>
        <TabPanel>
          <input placeholder='Search arriving flight' className='w-full h-[80px] rounded-xl border pl-10 text-xl'
          />
        </TabPanel>
        <TabPanel>
          <input placeholder='Search departing flight' className='w-full h-[80px] rounded-xl border pl-10 text-xl' />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SearchBar