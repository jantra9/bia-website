"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const LanguageDropDown = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown open/close state

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown on button click
  };

  const closeDropdown = () => {
    setIsOpen(false); // Close the dropdown on mouse leave
  };

  return (
    <div className="relative text-left">
      {/* Container with border wrapping both button and dropdown */}
      <div className={`border border-gray-300 rounded-md ${isOpen ? 'border-b-0 rounded-b-none' : ''}`}>
        <div className="flex px-1 py-0.5 bg-slate-50/[0.2] items-center">
          <div className="mr-2">
            <Image
              src="/SriLanka-flag.png" // Path to the image in the public folder
              alt="Logo Icon"
              width={25} // Adjust the width
              height={25} // Adjust the height
              className="rounded-full aspect-square object-cover object-center"
            />
          </div>
          <button
            id="dropdownButton"
            className="text-white text-center inline-flex items-center w-full"
            type="button"
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            Sinhalese
            <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white/[0.2] w-[127px] absolute border border-gray-300 border-t-0 rounded-b-md"
          onMouseLeave={closeDropdown} // Close dropdown when mouse leaves the menu area
        >
          <ul className="py-1 text-sm text-white dark:text-gray-200 space-y-1" aria-labelledby="dropdownButton">
            <li className="pl-2 items-center bg-slate-400/[0.5] w-11/12 flex mx-auto rounded-md">
              <Image
                src="/UK-flag.jpg" // Path to the image in the public folder
                alt="Logo Icon"
                width={20} // Adjust the width
                height={20} // Adjust the height
                className="rounded-full aspect-square object-cover"
              />
              <a href="#" className="pl-2 py-0.5">English</a>
            </li>
            <li className="pl-2 items-center bg-slate-400/[0.5] w-11/12 flex mx-auto rounded-md">
              <Image
                src="/Russia-flag.png" // Path to the image in the public folder
                alt="Logo Icon"
                width={20} // Adjust the width
                height={20} // Adjust the height
                className="rounded-full aspect-square object-cover"
              />
              <a href="#" className="pl-2 py-0.5">Russia</a>
            </li>
            <li className="pl-2 items-center bg-slate-400/[0.5] w-11/12 flex mx-auto rounded-md">
              <Image
                src="/India-flag.png" // Path to the image in the public folder
                alt="Logo Icon"
                width={20} // Adjust the width
                height={20} // Adjust the height
                className="rounded-full aspect-square object-cover"
              />
              <a href="#" className="pl-2 py-0.5">Hindi</a>
            </li>
            <li className="pl-2 items-center bg-slate-400/[0.5] w-11/12 flex mx-auto rounded-md">
              <Image
                src="/China-flag.png" // Path to the image in the public folder
                alt="Logo Icon"
                width={20} // Adjust the width
                height={20} // Adjust the height
                className="rounded-full aspect-square object-cover"
              />
              <a href="#" className="pl-2 py-0.5">Chinese</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropDown;
