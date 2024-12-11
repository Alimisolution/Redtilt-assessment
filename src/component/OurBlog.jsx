import React from 'react'
import image from '../assets/man-laptop.jpg';
import { CircleCheck } from 'lucide-react';
const OurBlog = () => {
  return (
   <div className='w-full'>
    <div className='text-center mb-5' id='blog'>
				<p className='pb-3'>Read Our Blog</p>
				<div className='text-2xl md:text-3xl font-semibold'>
					<h1>Read Daily news about</h1>
					<h1>startup companies</h1>
				</div>
			</div>

			<div className='mx-5 md:flex gap-7 py-5'>
				<div className='sm:px-3'>
					<img src={image} alt="" className='w-[100%]' />
				</div>

				<div className='flex flex-col mt-14 sm:mt-0'>
					<div>
						<p className='text-xl pb-4 font-bold'>Not Another Framework</p>
						<p className='pb-5 sm:text-base text-sm'>We brought all the remix goodies over to React Router and made improvements in the process.</p>
						<p className='pb-5 border-b border-1 sm:text-base text-sm border-gray-700'>Now it's time to bring those improved APIs back over to Remix where they started!</p>
					</div>
					<div className='flex flex-col mt-4 text-sm sm:text-base'>
						<div className='flex gap-3 mb-3'>
							<CircleCheck className='w-5 h-5'/>
							<p>Collaboration Tools</p>
						</div>
						<div className='flex gap-3'>
							<CircleCheck className='w-5 h-5'/>
							<p>Collaboration Tools</p>
						</div>
					</div>

					<div className="text-center flex justify-center my-10">
						<button className="border border-white rounded-xl px-3 py-3">Read more</button>
					</div>
				</div>
			</div>

   </div>
  )
}

export default OurBlog