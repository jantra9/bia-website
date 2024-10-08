'use client'
import React,{useState} from 'react'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import Image from 'next/image';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
const BookYourHoliday = () => {
    const tabs = [
        { id: 'wifi', src: '/Wifi.png', alt: 'wifi icon', name: 'Wi-Fi Router' },
        { id: 'hotels', src: '/Hotels.png', alt: 'hotels icon', name: 'Hotels' },
        { id: 'flights', src: '/Flights.png', alt: 'flights icon', name: 'Flights' },
        { id: 'car', src: '/Car.png', alt: 'car icon', name: 'Car' },
      ];
    const [activeTab, setActiveTab] = useState(0);
    
  return (
    <div className='bg-white pb-40'>
        <div className='relative p-[100px] space-y-5'>
            <div className='text-8xl text-sky-600 font-bold font-custom'>Book Your Holiday</div>
            <div className='text-2xl'>Make your holiday seamless and book your flights, car and hotel with us!</div>
        </div>
        <div>
            <Tabs 
            key={activeTab}
            className='px-10 w-[80%] mx-auto space-y-10'>
                 <TabList className="text-[29px] font-semibold flex justify-between cursor-default">
                    {tabs.map(({ id, src, alt, name }) => (
                    <Tab key={id} className="flex gap-2 justify-center items-center" selectedClassName='border-b-8 border-sky-600/[0.7] pb-2'>
                        <Image src={src} alt={alt} height={50} width={50} />
                        {name}
                    </Tab>
                    ))}
                </TabList>
                <div className='border-2 rounded-xl px-6 shadow-2xl'>
                    <TabPanel ><Table1 /></TabPanel>
                    <TabPanel ><Table2/></TabPanel>
                    <TabPanel ><Table3 /></TabPanel>
                    <TabPanel ><Table3 /></TabPanel>
                </div>
            </Tabs>
        </div>
    </div>
  )
}

export default BookYourHoliday