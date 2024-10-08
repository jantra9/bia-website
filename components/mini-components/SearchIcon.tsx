import { CiSearch } from "react-icons/ci";
import React from 'react'

const SearchIcon = () => {
  return (
    <div className="text-lg bg-slate-200/[0.3] rounded-full w-12 h-12 flex justify-center items-center border">
        <CiSearch color="white" size="20px"   />
    </div>
  )
}

export default SearchIcon