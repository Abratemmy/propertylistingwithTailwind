import React, { useState } from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import './Property.css'
import HeaderText from './HeaderText';

function Property({ data }) {
    const [priceData, setpriceData] = useState(data);
    const [filterData, setFilterData] = useState(data);
    const handlePrizeChange = (e) => {
        console.log("Values", e.target.value)
        if (e.target.value === "b4000") {
            let filteredData = data?.hits?.filter((item) => {
                return item?.price
            })
            console.log("gilteredData", filteredData)
            setpriceData(filteredData)
            return
        }
        else if (e.target.value === "b6000") {
            let filteredData = data?.hits?.filter((item) => {
                return item?.status === (item.price >= 5000)
            })
            setpriceData(filteredData)
            return
        }
        else if (e.target.value === "b8000") {
            let filteredData = data?.hits?.filter((item) => {
                return item?.status === (item.price >= 7000)
            })
            setpriceData(filteredData)
            return
        }
        else {

            setpriceData(data)
        }

    }

    const handleChange = (e) => {
        console.log("Values", e.target.value)
        if (e.target.value === "furnished") {
            let filteredData = data?.hits?.filter((item) => {
                return item?.furnishingStatus === "furnished"
            })
            console.log("filteredData", filteredData)
            setFilterData(filteredData)
            return
        }

        else {

            setFilterData(data)
        }
    }

    const sliderSettings = {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
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
        <div className={`lg:px-10 py-4 px-7 pt-10 bg-[var(--secondaryColor)]`}>
            <HeaderText name='Featured Properties' task="Horizontal Scroll" />
            <div className='flex gap-3'>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[color:var(--accentColor)] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
                    <option>Open this select menu</option>
                    <option value='Furnished'>Well Furnished</option>
                    <option value='notCompleted'>Not Yet Completed</option>
                </select>

                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[color:var(--accentColor)] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handlePrizeChange}>
                    <option>Filter with price</option>
                    <option value='b4000'>Below 4000</option>
                    <option value='b6000'>Below 6000</option>
                    <option value='b8000'>Below 8000</option>
                </select>
            </div>
            <h1>{priceData?.length}</h1>
            <h1>{filterData?.hit?.length}</h1>

            <h1 className='pt-2.5 lg:flex gap-2 w-full items-center'>
                <div className='flex-1 lg:w-64'>
                    <Slider {...sliderSettings} className='sliderContainer'>
                        {data?.hits?.map(property => {
                            return (
                                <div>
                                    <Card
                                        property={property}
                                        key={property.id}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <div className='flex-none w-31 mt-8 lg:mt-0'>
                    <div className='bg-cover bg-center h-screen bgImage'>
                        <div>
                            <div className='text-white text-sm font-lato'>More collected properties near University College London</div>
                            <button className='bg-[var(--primaryColor)] text-white w-full p-2 text-center mt-8'>Check out</button>
                        </div>
                    </div>
                </div>


            </h1>
        </div>
    )
}


export default Property