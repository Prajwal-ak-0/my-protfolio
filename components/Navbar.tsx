import React from 'react'
import Logo from './Logo'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <div className='h-28 py-6 flex justify-between items-center px-8 md:px-16'>
        <Logo/>
        <div className='flex space-x-8 text-[#C4CFDE] items-center'>
            <div className='cursor-pointer hover:text-white'>
                Home
            </div>
            <div className='cursor-pointer hover:text-white'>
                About
            </div>
            <div className='cursor-pointer hover:text-white'>
                Contact
            </div>
            <div className='cursor-pointer hover:text-white'>
                Project
            </div>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar