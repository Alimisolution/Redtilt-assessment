import React from 'react'
import Javascript from '../assets/javascript-155-svgrepo-com.svg';
import flutter from '../assets/flutter.svg';
import prisma from '../assets/prisma-svgrepo-com.svg';
import postgres from '../assets/postgres.svg';
import remix from '../assets/remix-light.svg';
import mongo from '../assets/mongodb.svg';

const OurSuperHero = () => {
  return (
    <div className='max-w-7xl pb-24 mt-20'>
        <h1 className='text-center text-2xl sm:text-3xl font-semibold'>Our Superpowers</h1>
        <div className='pt-12 px-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-10 place-items-center'>
            <img src={Javascript} alt="javascript" className='w-14 h-14' />
            <img src={flutter} alt="javascript" className='w-14 h-14' />
            <div className='flex justify-center items-center'> 
                <img src={prisma} alt="javascript" className='w-14 h-14' />
                <span>Prisma</span>
            </div>
            <img src={postgres} alt="javascript" className='w-14 h-14' />
            <img src={remix} alt="javascript" className='w-14 h-14' />
            <img src={mongo} alt="javascript" className='w-14 h-14' />
        </div>
    </div>

  )
}

export default OurSuperHero