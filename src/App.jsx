import Contact from './component/Contact';
import HeroSection from './component/HeroSection';
import Navbar from './component/Navbar';
import Newsletter from './component/Newsletter';
import Offer from './component/Offer';
import { OutPartners } from './component/OutPartners';
import Footer from './component/footer';

const App = () => {
  return (
    <div className='px-4'>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-4'>
        <HeroSection/>
        <OutPartners/>
      </div>

      <Offer/>
      <Contact/>
      <Newsletter/>
      <div className='max-w-7xl mx-auto pt-20'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App