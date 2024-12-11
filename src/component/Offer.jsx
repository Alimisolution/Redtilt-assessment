import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from 'aos';
import OurBlog from './OurBlog';
import OurSuperHero from './OurSuperHero';
import WhatWeOffer from './WhatWeOffer';
Aos.init();


const Offer = () => {
  return (
    <>
			<WhatWeOffer/>
			<OurSuperHero/>
			<OurBlog/>
    </>
  )
}

export default Offer