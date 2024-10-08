import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Table2 = () => {
    const [startDate, setStartDate] =useState<Date | null>(new Date());
    const [returnDate, setReturnDate]= useState<Date | null>(new Date());

  return (
    <div className='px-5 py-20'>
        <form>
            <input 
            className='border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10'
            placeholder='e.g country, city, district or landmark'></input>
            <div className='flex space-x-10'>
                <div className='border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10 mt-10'>
                    <div>Check in date</div>
                    <DatePicker 
                    selected={startDate} 
                    className='text-sky-700 text-[20px] tracking-widest font-semibold bg-transparent' 
                    onChange=
                    {(date) => setStartDate(date)}
                    />
                </div>
                <div className='border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10 mt-10'>
                    <div>Check out date</div>
                    <DatePicker 
                    selected={returnDate}
                    className='text-sky-700 text-[20px] tracking-widest font-semibold bg-transparent' onChange=
                  {(date) => setReturnDate(date)}/>
                </div>
            </div>
            <button className='py-6 px-10 text-3xl border-4 border-sky-500/[0.8] rounded-xl opacity-60 relative mt-10 w-full font-semibold'>Search</button>
        </form>
    </div>
  )
}

export default Table2