import React from 'react'
import { CircleCheck } from 'lucide-react';
import { cardDataArray } from '../constants';
const WhatWeOffer = () => {
  return (
    <>
    <div className="text-center flex justify-center items-center flex-col " id="service">
		<h1 className="mb-5 text-center text-2xl sm:text-3xl font-semibold">What we offer</h1>
		<p className="capitalize rounded-full text-sm md:text-base py-2 px-3 border-2 border-red-900">our experts will help you in following fields </p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center place-items-center px-4 py-16 gap-8 '>
    {cardDataArray.map((data) =>(
           <div className='bg-red-800 flex flex-col w-72  pt-3 rounded-md h-[400px]' data-aos="fade-up" data-aos-duration="5000" key={data.cardNo}>
           <div className='flex py-5 pl-5 justify-start items-center'>
               <data.cardHeadingImg className='pl-3 pr-2 w-14 h-14'/>
               <p className='text-xl pr-3'>{data.cardTitle}</p>
           </div>
           <div className="pl-12 h-[300px]">
                <ul className="h-full flex flex-col justify-between pl-3 pt-0 bg-[darkred] rounded-ss-md rounded-ee-md text-sm">
                    {data.listItems.map((service, ind) => (
                        <li className="flex items-center flex-1" key={ind}>
                            <CircleCheck className="pr-2 w-8 h-8" />
                            <p>{service}</p>
                        </li>
                    ))}
                </ul>
            </div>


       </div>
    ))}
 

  

</div>

    </>
  )
}

export default WhatWeOffer