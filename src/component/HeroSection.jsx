import { Users } from 'lucide-react';
import { CornerRightUp } from 'lucide-react';
import { Phone } from 'lucide-react';
import Typing from './Typing'


const HeroSection = () => {
	const text1 = Typing(' From Concept to Code')
	const text2 = Typing(" We Make IT Happen")

  return (
    <>
			<div className='flex flex-col items-center mt-16 lg:mt-20'>
				<h1 className="text-2xl sm:text-4xl lg:text-6xl text-center tracking-wide">
					{text1}
				</h1>
				<h1 className="text-3xl mt-2 bg-gradient-to-b from-red-500 to-red-800 text-transparent bg-clip-text sm:text-4xl lg:text-6xl text-center tracking-wide">
					{text2}
				</h1>
			</div>

			<div className="flex justify-between items-center px-3 mt-4 lg:mx-8">
				<div className="hidden lg:flex rounded-full border-2 bg-red-900 border-[#722F37] px-3 py-3">
					<Users className='w-10 h-10 lg:w-12 sm:h-12 '/>
				</div>
				<div className='text-sm lg:text-lg text-center space-y-2 capitalize flex flex-col justify-center items-center w-full '>
					<p className='text-xs md:text-xl'>We help brands and B2B enterprises build amazing</p>
					<p className='text-xs md:text-xl'>website that convert thier visitors to paying customers.</p>
				</div>
				<div className="hidden lg:flex rounded-full border-2 bg-red-900 border-[#722F37] px-2 py-2">
					<CornerRightUp className='w-12 h-12 lg:w-14 sm:h-14'/>
				</div>
			</div>

			<div className='flex px-2 py-3 justify-center mt-4 mb-28 text-center'>
				<div className='flex px-5 py-4 rounded-full gap-2 bg-gradient-to-r from-red-800 to-[red]'>
					<span className='text-xs'><Phone className='text-xs'/></span>
					<a href="#">Lets have a call</a>	
				</div>
			</div>
		</>
		
		
  )
}

export default HeroSection