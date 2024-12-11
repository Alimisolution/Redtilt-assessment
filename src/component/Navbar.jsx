import { navItems } from "../constants";
import { Moon } from 'lucide-react';
import { Menu, X} from 'lucide-react';
import { useState } from "react";


const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
	const toggleNavbar = () =>{
		setMobileDrawerOpen(!mobileDrawerOpen);
	}

	const toggleFuc = () =>{
		document.body.classList.toggle('toggle');
	}


  return (
   <nav className="py-5 backdrop-blur-lg border-b border-neutral-700/80">
		<div className="container px-4 mx-auto relative text-sm">
			<div className="flex justify-between items-center">
				
				<div className="flex items-center">
					<span className="text-white text-2xl tracking-wider">RedTilt</span>
				</div>

				<ul className="hidden lg:flex ml-14 space-x-12">
					{navItems.map((item, index) => (
						<li key={index}>
							<a href={item.href}>{item.label}</a>
						</li>
					))}
				</ul>

				<div className="hidden lg:flex justify-center space-x-12 items-center">
					<div className="py-2 px-2 bg-red-800 rounded-full h-17 w-17 cursor-pointer">
						<Moon onClick={toggleFuc} className="rounded-full bg-darkred px-1 py-1 w-17"/>
					</div>
					<a href="#" className="bg-red-800 py-3 px-3 rounded-md">Start a project</a>
				</div>

				<div className="lg:hidden md:flex flex-col justify-end">
					<button onClick={toggleNavbar}>
						{mobileDrawerOpen ? <X /> : <Menu/>}
					</button>
				</div>
			</div>
			{mobileDrawerOpen && (
				<div className="fixed right-0 z-20 bg-slate-900 w-full h-screen flex flex-col justify-center items-center lg:hidden">
					<ul>
						{navItems.map((item, index) => (
							<li key={index} className="py-4">
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					<div className="flex space-x-6 mt-6">
						<div className="py-2 px-2 bg-red-800 rounded-full h-17 w-17 cursor-pointer">
							<Moon onClick={toggleFuc} className="rounded-full bg-darkred px-1 py-1 h-17 w-17"/>
						</div>
						<a href="#" className="bg-red-800 py-3 px-3 rounded-md">
							Get a project
						</a>
					</div>
				</div>
			)}
		</div>
	 </nav>
  )
}

export default Navbar