import React, { useState } from 'react'
import { AiFillBank } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotifications, MdMenu } from "react-icons/md";
import { FaUser, FaXmark } from "react-icons/fa6";

function Header() {
    let links = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Contact', link: '/' },
    ]

    let [isOpen, setIsOpen] = useState(false)
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='lg:px-10 py-4 px-7 lg:flex justify-between items-center bg-white'>
                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <AiFillBank className='w-7 h-7 text-blue-600' />
                    <span className='font-bold'> Realtor </span>
                </div>

                {/* Menu icon */}
                <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 bg-[var(--accentColor)] rounded-t-sm rounded-b-sm text-center mx-auto absolute right-8 top-6 cursor-pointer lg:hidden '>
                    {
                        isOpen ? <FaXmark className='w-6 h-6 text-white' /> : <MdMenu className='w-6 h-6 text-white' />
                    }
                </div>

                {/* nav links here */}
                <ul className={`lg:flex pl-9 lg:pl-0 lg:items-center lg:pb-0 pb-15 absolute lg:static lg:z-auto z-[-1]
                left-0  transition-all bg-white duration-500 ease-in ${isOpen ? 'top-18 w-full' : 'top-[-480px]'}
                `}>
                    {
                        links.map(link => (
                            <li className='font-semibold my-7 lg:my-0 lg:ml-8'>
                                <a href="/">{link.name}</a>
                            </li>))
                    }
                </ul>

                {/* notification, user and search */}

                <div className=' hidden lg:block'>
                    <div className='flex items-center gap-5 justify-center w-full'>
                        <div className='hidden lg:block'>
                            <div className='flex items-center gap-3 border-2 rounded-t-2xl rounded-b-2xl border-[color:var(--accentColor)] p-1 '>
                                <BiSearch />
                                <input type="text" placeholder='Search ...' className='border-0 outline-none' />
                            </div>
                        </div>
                        <div>
                            <MdOutlineNotifications className='w-7 h-7' />
                        </div>
                        <div className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full cursor-pointer '>
                            <FaUser className='w-5 h-5 text-gray-500' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header