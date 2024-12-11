import { CircleCheck } from 'lucide-react';
import Facebook from '../assets/facebookIcon.svg';
import Twitter from '../assets/twitterIcon.svg';
import Instagram from '../assets/instaIcon.svg';
import Github from '../assets/githubIcon.svg';

const Footer = () => {
  return (
    <>
		
		<div className='sm:flex justify-around items-start gap-8'>
			
			<div className='flex flex-col mb-10'>
				<p className='mb-4 font-semibold'>Company</p>
				<ul>
					<li className='pb-3 text-sm'>About</li>
					<li className='pb-3 text-sm'>Service</li>
					<li className='pb-3 text-sm'>Works</li>
					<li className='pb-3 text-sm'>Career</li>
				</ul>
			</div>
			
			<div className='flex flex-col mb-10'>
				<p className='mb-4 font-semibold'>Help</p>
				<ul>
					<li className='pb-3 text-sm'>Customer support</li>
					<li className='pb-3 text-sm'>Terms & Conditions</li>
					<li className='pb-3 text-sm'>Privacy Policy</li>
				</ul>
			</div>
			
			<div className='flex flex-col'>
				<p className='mb-4 font-semibold'>Resources</p>
				<ul>
					<li className='pb-3 text-sm'>Free eBooks</li>
					<li className='pb-3 text-sm'>Development Tutorial</li>
					<li className='pb-3 text-sm'>How to-Blog</li>
					<li className='pb-3 text-sm'>Career</li>
				</ul>
			</div>
		</div>

		<div className='sm:flex text-center space-y-4 justify-between items-center px-7 py-5'>
			<p className='text-xs'>&copy; Copyright 2024, All Rights Reserved</p>
			<div className='flex gap-4 items-center justify-center'>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Twitter} alt="Twitter" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Facebook} alt="Facebook" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Instagram} alt="Instagram" className='w-6 h-6 md:w-8 md:h-8' /></a>
				<a href="" className='rounded-full hover:shadow-lg hover:shadow-red-500'><img src={Github} alt="Github" className='w-6 h-6 md:w-8 md:h-8' /></a>
			</div>
		</div>
    </>
  )
}

export default Footer