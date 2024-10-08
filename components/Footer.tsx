import React from 'react'
import Image from 'next/image';
const items1 = [
    "Ministry of Ports, Shipping & Aviation",
    "Sri Lanka Airport & Aviation (SLAAA) Aeronautical",
    "Information Services [AIS]",
    "Exchange Rates",
    "Weather Information",
    "Civil Aviation Authority",
    "Sri Lanka Customs",
    "Department of Immigration & Emigration",
    "Ministry of Defense (MOD)",
    "Sri Lanka Tourism",
    "hello again - Sri Lanka Tourism"
  ];
  const icons=[
    "/X.png",
    "/Instagram.png",
    "/Facebook.png",
    "/Youtube.png",
    "/LinkedIn.png",
  ]

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between mx-[100px] pt-[70px]'>
            <div className='w-[350px]'>
                <div className='flex items-center'>
                    <div className='h-[15px] bg-sky-600 w-[5px]'> </div>
                    <div className='font-custom text-2xl pl-2'>Useful Links</div>
                </div>
                <li className='list-none space-y-5 pt-5'>
                    {items1.map((item,index)=>(
                        <ul key={index} className='text-2xl font-poppins flex-wrap transition-transform duration-500 hover:translate-x-4'>{item}</ul>
                    ))}
                </li>
            </div>
            {/* This is a divider */}
            <div className='h-[300px] bg-sky-600/[0.3] w-[3px]' > </div>
            <div className='w-[350px] pl-[40px]'>
                <div className='flex items-center'>
                    <div className='h-[15px] bg-sky-600 w-[5px]'> </div>
                    <div className='font-custom text-2xl pl-2'>AASL News</div>
                </div>
                <li className='list-none space-y-5 pt-5'>
                    {items1.slice(2,7).map((item,index)=>(
                        <ul key={index} className='text-2xl font-poppins transition-transform duration-500 hover:translate-x-4'>
                            {item}
                        </ul>
                    ))}
                </li>
            </div>
            {/* This is a divider */}
            <div className='h-[300px] bg-sky-600/[0.3] w-[3px]'> </div>
            
            <div className='w-[350px] pl-[40px]'>
                <div className='flex items-center'>
                    <div className='h-[15px] bg-sky-600 w-[5px]'> </div>
                    <div className='font-custom text-2xl pl-2'>Emergency No</div>
                </div>
                <li className='list-none space-y-5 pt-5'>
                    {items1.slice(3,7).map((item,index)=>(
                        <ul key={index} className='text-2xl font-poppins transition-transform duration-500 hover:translate-x-4'>
                            {item}
                        </ul>
                    ))}
                </li>
            </div>
            {/* This is a divider*/}
            <div className='h-[300px] bg-sky-600/[0.3] w-[3px]'> </div>
            <div className='w-[350px] pl-[40px]'>
                <div className='flex items-center'>
                    <div className='h-[15px] bg-sky-600 w-[5px]'> </div>
                    <div className='font-custom text-2xl pl-2'>Contact Us</div>
                </div>
                <li className='list-none space-y-5 pt-5'>
                    {items1.slice(3,7).map((item,index)=>(
                        <ul key={index} className='text-2xl font-poppins transition-transform duration-500 hover:translate-x-4'>
                            {item}
                        </ul>
                    ))}
                </li>

            </div>
        </div>
        {/* This is icon */}
        <div className='flex justify-end items-center pr-[150px] pb-[50px] space-x-8'>
            <div>
                <Image src="/Logo.png" width={100} height={100} alt='logo' />
            </div>
            <div className='bg-sky-600/[0.4] w-[1px] h-16'> </div>
            <div>
                <div className='text-[20px] font-medium'>Follow</div>
                <div className='flex flex-row'>
                    {icons.map((icon, index)=>(
                        <div key={index}>
                            <Image src={icon} width={50} height={50} alt='icons' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer