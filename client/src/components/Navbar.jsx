import React, { useEffect } from 'react'
import flame from "../assets/flame.gif"
import { NavLink } from 'react-router-dom'
import toast from "react-hot-toast";

const Navbar = () => {

  useEffect(() => {
    toast.success("Welcome To My Portfolio!", { icon: '😉' })
  }, [])

  return (
    <div className='flex py-5 px-5 justify-between items-center border-b border-gray-600'>
      {/* Left: Name */}
      <NavLink to={'/'}>
        <div className='flex items-center'>
          <h1 className='text-sm sm:text-2xl'>Ajay Arumugam</h1>
          <span className='w-[4px] h-[4px] sm:w-[7px] sm:h-[7px] rounded-full bg-green-500 ml-1.5 mt-[2px] sm:mt-[6px]'></span>
        </div>
      </NavLink>

      {/* Right: Role */}
      <div className='flex items-center gap-1 sm:gap-2 flex-shrink-0 max-w-[150px] sm:max-w-none overflow-hidden'>
        <img src={flame} alt="flame" className='w-3 sm:w-[18px] flex-shrink-0' />
        <p className='text-[10px] sm:text-sm truncate'>MERN STACK WEB DEVELOPER</p>
      </div>
    </div>
  )
}

export default Navbar