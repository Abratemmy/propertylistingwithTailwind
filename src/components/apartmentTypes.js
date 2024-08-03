import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHouseChimneyUser } from "react-icons/fa6"
import { MdApartment } from "react-icons/md";
import { PiOfficeChairFill, PiBuildingOfficeDuotone } from "react-icons/pi";
import HeaderText from './HeaderText';

function ApartmentTypes() {
    const apartment = [
        { icon: <FaHouseChimneyUser className='w-11 h-11' />, name: 'Houses', noOfProp: 22 },
        { icon: < MdApartment className='w-11 h-11' />, name: 'Apartments', noOfProp: 35 },
        { icon: <PiOfficeChairFill className='w-11 h-11' />, name: 'Office', noOfProp: 27 },
        { icon: <PiBuildingOfficeDuotone className='w-11 h-11' />, name: 'Townhome', noOfProp: 22 },
    ]
    const sliderSettings = {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 10000,
        draggable: true,
        cssEase: 'linear',
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1117,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='lg:px-10 py-4 px-7 mt-10 mb-10'>
            <HeaderText name='Apartment Types' task="Property" />
            <Slider {...sliderSettings} className='sliderContainer'>
                {apartment.map((data, index) => {
                    return (
                        <div className="bg-[var(--secondaryColor)] p-5 rounded-t-lg rounded-b-lg group" key={index}>
                            <div className='w-20 h-20 bg-[var(--primaryColor)] group-hover:bg-[var(--accentColor)] transition-all  duration-500 ease-in rounded-b-full rounded-t-full flex items-center justify-center'>
                                <span className='text-white '>{data.icon}</span>
                            </div>
                            <div className='mt-3 font-railway text-lg text-[color:var(--textColor)]'>{data.name}</div>
                            <div className='text-[color:var(--text2Color)] font-lato'>{data.noOfProp} Properties</div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ApartmentTypes