import React from 'react'
import HeaderText from './HeaderText';
import defaultImage from '../Assets/house.jpg';
import { FaGraduationCap, FaRegHeart } from "react-icons/fa6";
import { GiWalk } from "react-icons/gi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { MdOutlineAddToPhotos } from "react-icons/md";

function VerticalList({ data }) {
    return (
        <div className='lg:px-10 py-4 px-7 pt-10 bg-[var(--secondaryColor)]'>
            <HeaderText name='Vertical Listing' task="Listing" />

            <div className='flex flex-col gap-4'>
                {data?.hits?.slice(0, 5)?.map(property => {
                    return (
                        <div className='md:flex bg-white p-8 '>
                            <div className='md:flex-none md:w-33' >
                                <div className='w-full relative'>
                                    <img src={property.coverPhoto.url ? property.coverPhoto.url : defaultImage} alt="" className='w-90 h-48 ' />
                                    <span className='absolute top-6 right-3 rounded-b-full rounded-t-full bg-white w-8 h-8 flex items-center justify-center'>
                                        <FaRegHeart className='text-[color:var(--textColor)]' />
                                    </span>
                                    <span className='absolute top-16 right-3 rounded-b-full rounded-t-full bg-white w-8 h-8 flex items-center justify-center'>
                                        < MdOutlineAddToPhotos className='text-[color:var(--textColor)]' />
                                    </span>
                                </div>
                            </div>
                            <div className='md:flex-1 md:w-64 ... md:pl-5 pt-5'>
                                <div className='lg:flex justify-between'>
                                    <div>
                                        <div className='font-railway text-base  text-[color:var(--textColor)] capitalize'>{property.title}</div>
                                        <div className='font-lato text-sm  text-[color:var(--text2Color)] pt-3'>{property.agency.slug} {property.agency.slug}</div>
                                        <div className='flex gap-3 pt-4'>
                                            <div className='flex gap-2 items-center font-railway text-sm  text-[color:var(--textColor)] '><FaGraduationCap className='w-5 h-5' /> <span>Distance to campus</span>:</div>
                                            <div className='flex gap-2 items-center font-lato text-sm  text-[color:var(--text2Color)]'><GiWalk className='w-5 h-5 text-[color:var(--textColor)]' /><span>{property.randBoostScore} mins</span></div>
                                        </div>
                                        <div className="bg-[var(--accentColor)] w-1/3 p-2  rounded-t-lg rounded-b-lg text-white mt-3 mb-3 capitalize">
                                            {property.completionStatus}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[color:var(--text2Color)] flex items-center gap-2">
                                            <div className='w-4 h-4 rounded-b-full rounded-t-full bg-[var(--accentColor)] flex items-center justify-center text-white'><BsFillLightningChargeFill className='w-2 h-2' /></div>
                                            From <span className='text-[color:var(--accentColor)]'>£{property.price}</span> /week
                                        </div>
                                        <div className='mt-10 w-full'>
                                            <NavLink to="/" className="bg-[var(--primaryColor)] w-full p-2   rounded-t-lg rounded-b-lg text-white mt-3 mb-3 capitalize">Detail</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 
                            <div className='flex-none w-35'>
                              
                            </div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VerticalList