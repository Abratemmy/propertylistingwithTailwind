import React from 'react';
import { FaBath } from 'react-icons/fa';
import defaultImage from '../Assets/house.jpg'
import { IoIosPerson } from "react-icons/io";

function Card({ property }) {
    return (
        <div className='flex shadow-lg  flex-col  w-66 h-65'>
            <div >
                <img src={property.coverPhoto.url ? property.coverPhoto.url : defaultImage} alt="" className='w-full h-48' />
            </div>
            <div className='p-3 bg-white shadow-md font-lato h-50'>
                <div className='font-railway text-base  text-[color:var(--textColor)] capitalize'>{property.title.length > 30 ? property.title.substring(0, 25) + '...' : property.title}</div>
                <div className="text-[color:var(--text2Color)]">From <span className='text-[color:var(--accentColor)]'>£{property.price}</span> /week</div>
                <div className="bg-[var(--accentColor)] w-2/3 p-2  rounded-t-lg rounded-b-lg text-white mt-3 mb-3">
                    {property.furnishingStatus ? `Well ${property.furnishingStatus}` : 'Almost completed'}
                </div>
                <div className='flex items-center gap-2 text-[color:var(--text2Color)]'>
                    <FaBath className='w-5 h-7' /> | {property.baths === 1 ? `${property.baths} Baths` : `${property.baths} Bath`}<IoIosPerson className='w-5 h-7' /> | {property.contactName}
                </div>
            </div>

        </div>
    )
}

export default Card