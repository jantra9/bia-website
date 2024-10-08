import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Table3 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
      };
     
      const [departDate, setDepartDate] =useState<Date | null>(new Date());
    const [returnDate, setReturnDate] = useState<Date | null>(new Date())
    return (
    <div className='px-5 py-20'>
        <form>
            <input 
            className='border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10'
            placeholder='From'></input>
            <input 
            className='mt-10 border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10'
            placeholder='To'></input>
            <div className=' flex space-x-8 py-10'>
                <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="tripType"
                  value="Return"
                  checked={selectedOption === 'Return'}
                  onChange={()=>handleOptionChange}
                  className="form-radio w-6 h-6"
                />
                <span className="ml-2 text-3xl text-sky-600">Return</span>
                </label>
                <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="tripType"
                  value="One way"
                  checked={selectedOption === 'One way'}
                  onChange={()=>handleOptionChange}
                  className="form-radio w-6 h-6"
                />
                <span className="ml-2 text-3xl text-sky-600">One way</span>
                </label>
            </div>
            <div className='flex gap-x-10'>
                <div className='border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10 mt-10'>
                    <div>Depart</div>
                    <DatePicker 
                    className='text-sky-700 text-[20px] tracking-widest font-semibold bg-transparent' 
                    onChange=
                    {(date) => setDepartDate(date)}
                    selected={departDate}
                    />
                </div>
                <div className='border-4 border-sky-500/[0.8] w-full rounded-xl text-3xl py-6 px-10 mt-10'>
                    <div>Return</div>
                    <DatePicker className='text-sky-700 text-[20px] tracking-widest font-semibold bg-transparent' onChange=
                    {(date) => setReturnDate(date)}
                    selected={returnDate}
                  />
                </div>
            </div>
            <button className='py-6 px-10 text-3xl border-4 border-sky-500/[0.8] rounded-xl opacity-60 relative mt-10 w-full font-semibold'>Search</button>
        </form>
    </div>
  )
}

export default Table3