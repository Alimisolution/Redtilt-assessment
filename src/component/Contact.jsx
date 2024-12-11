import React from 'react'
import { CircleCheck } from 'lucide-react';
const Contact = () => {
  return (
    <div className='md:flex justify-between gap-72 pb-12 md:px-8 mt-10'>
			
			<div className='flex flex-col items-start mb-14 md:mb-0 text-sm'>
				<p className='pb-2 text-white'>Got a project in mind?</p>
				<h1 className='text-2xl md:text-4xl pb-5 text-white'>Reserve a call</h1>
				<ul className='flex flex-col justify-start items-start gap-4'>
					<li className='flex gap-3 items-center justify-center'>
						<CircleCheck className='w-6 h-6 bg-red-600 rounded-full outline-none border-none text-black'/>
						<p>An in depth session to understand your needs</p>
					</li>
					<li className='flex gap-3 items-center justify-center'>
						<CircleCheck className='w-6 h-6 bg-red-600 rounded-full outline-none border-none text-black'/>
						<p>Leran which plan is right for your team</p>
					</li>
					<li className='flex gap-3 items-center justify-center'>
						<CircleCheck className='w-6 h-6 bg-red-600 rounded-full outline-none border-none text-black'/>
						<p>Get onboarding help</p>
					</li>
					<li className='text-base sm:text-xl mt-4'>
						<p>Technical support or some query?</p>
						<p>Contact support</p>
					</li>
				</ul>
			</div>
			
			<div className='flex-1'>
				<p className='text-lg font-semibold px-5 py-3'>Tell us about yourself</p>
				<form action="" className='px-5 py-3'>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Full Name</label>
						<input type="text" placeholder='TAHA HAIDER' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-red-950 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Work Email</label>
						<input type="text" placeholder='Syed.Shah@RedTilT.Team' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-red-950 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>Company Size</label>
						<input type="text" placeholder='1-20' className='mt-2 w-full px-2 py-3 rounded-lg text-xs sm:text-sm bg-red-950 outline-none'/>
					</div>
					<div className='mb-3'>
						<label htmlFor="Full name" className='mb-5'>How Can We Help?</label>
						<textarea type="text" placeholder='I Am Interested In Redtilt For My Team. I Would Like To Learn More About It....' className='mt-2 w-full px-2 py-4 rounded-lg text-xs sm:text-sm bg-red-950 outline-none '></textarea>
					</div>
					<div className='my-3-3 mt-5 md:flex space-y-5 gap-3 justify-between items-center'>
						<p className='text-sm'>You Can Also Email Us At Apac@Redtilt.Team</p>
						<button className='px-3 py-3 rounded-md bg-red-700 text-base w-full sm:w-1/3'>Send message</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Contact