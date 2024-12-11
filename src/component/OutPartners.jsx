import React from 'react'
import Github from '../assets/github-142-svgrepo-com.svg';
import  Cloud from '../assets/google-cloud-svgrepo-com.svg';
import Linode from '../assets/linode-svgrepo-com.svg';
import Flare from '../assets/cloudflare-icon.png';
import DigitalOcean from '../assets/digitalocean-icon.png';
import Azure from '../assets/azure-svgrepo-com.svg';

export const OutPartners = () => {
  return (
    <div className='mt-[-1.5rem]'>
        <div className='uppercase flex justify-center mb-12'>Trusted by our partners</div>

		
        <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-6 justify-center items-center mb-24'>
            
            <div className='flex flex-col justify-center items-center gap-1'>
                <img src={DigitalOcean} alt="Digital Ocean" className='w-8 h-8 sm:w-12 sm:h-12' />
                <p className="text-xs sm:text-base">Digital Ocean</p>
            </div>

            <div className='flex justify-center items-center gap-1'>
                <img src={Azure} alt="Digital Ocean" className='w-8 h-8 sm:w-12 sm:h-12' />
                <p className="text-xs sm:text-base">Azure</p>
            </div>

            <div className='flex justify-center items-center'>
                <img src={Github} alt="Github" className='w-8 h-8 sm:w-12 sm:h-12' />
            </div>

            <div className='flex justify-center items-center gap-1'>
                <img src={Cloud} alt="Cloud" className='w-8 h-8 sm:w-12 sm:h-12 pr-2' />
                <p className="text-xs sm:text-base">Google Cloud</p>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <img src={Linode} alt="Linode" className='w-8 h-8 sm:w-12 sm:h-12' />
                <p className="text-xs sm:text-base">Linode</p>
            </div>

            <div className='flex flex-col justify-center sm:items-end gap-1'>
                <img src={Flare} alt="Linode" className='w-7 h-7 sm:w-10 sm:h-10' />
                <p className="text-xs sm:text-base">CLOUDFLARE</p>
            </div>

        </div>
    </div>
  )
}
