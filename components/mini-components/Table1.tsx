import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { TiArrowSortedDown } from "react-icons/ti";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Table1 = () => {
    const [startDate, setStartDate] =useState<Date | null>(new Date());
    const [returnDate, setReturnDate]= useState<Date | null>(new Date())
    const {register, handleSubmit}=useForm();
    const [isOpen, setIsOpen] = useState(false);
    const options= ["Australia","Brazil","Israel","Japan","Macau"]
  return (
    <div className='px-5 py-20'>
       <form>
        {/* This is select the destination */}
       <div 
          className='py-6 px-10 text-3xl border-4 border-sky-500/[0.8] rounded-xl opacity-60 relative'
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on click
        >
          <div className='flex items-center cursor-pointer'>
            Please select a destination <TiArrowSortedDown />
          </div>

          {/* Dropdown (conditionally visible) */}
          <div className={`mt-2 ${isOpen ? 'block' : 'hidden'} absolute bg-white opacity-100 border-4 border-sky-500/[0.7] rounded-lg w-[30%] z-20 `}>
            <select
              {...register('destination', { required: true })}  
              className="w-full p-2 bg-white z-30 "
              size={options.length} 
            >
              {options.map((option, index) => (
                <option key={index} value={option} className='hover:bg-slate-400 border-4 border-sky-500/[0.7] px-10 py-2 my-3 rounded-2xl'>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* This is collection date */}
        <div className='py-6 px-10 text-3xl border-4 border-sky-500/[0.8] rounded-xl opacity-60 relative mt-10'>
            <div>Collection date</div>
            <DatePicker selected={startDate} className='text-sky-700 text-[20px] tracking-widest font-semibold bg-transparent' onChange=
              {(date) => setStartDate(date)} />
        </div>
        <div className='py-6 px-10 text-3xl border-4 border-sky-500/[0.8] rounded-xl opacity-60 relative mt-10'>
          <div>Return date</div>
          <DatePicker 
          selected={returnDate} 
          className='text-sky-700 text-[20px] tracking-widest font-semibold bg-transparent'
          onChange=
              {(date) => setReturnDate(date)} 
          minDate={new Date()} 
          />
        </div>
        <button className='py-6 px-10 text-3xl border-4 border-sky-500/[0.8] rounded-xl opacity-60 relative mt-10 w-full font-semibold'>Search</button>
       </form>
    </div>
  )
}

export default Table1