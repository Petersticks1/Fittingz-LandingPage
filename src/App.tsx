import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/Faq';

function App() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* <SocialProofBar /> */}
        <About />
        <Features />
        <HowItWorks />
        {/* <Testimonials /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
