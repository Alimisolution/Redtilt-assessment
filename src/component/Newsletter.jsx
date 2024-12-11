import React from 'react'

const Newsletter = () => {
  return (
    <div className='sm:flex space-y-6 justify-between gap-12 items-center px-6 py-6 bg-red-950 rounded-md mb-5'>
    <div className='flex flex-col'>
        <p className='mb-1 font-semibold'>Newsletter</p>
        <p className='text-sm sm:text-base'>Be the first one to know about insights, technologies and innovations.</p>
    </div>
    <button className='px-6 py-3 bg-red-700 text-sm rounded-md'>Subscribe</button>
</div>
  )
}

export default Newsletter