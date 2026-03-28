import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="bg-zinc-950 text-slate-50 min-h-screen font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <AboutUs />
      <Testimonials />
      <VideoSection />
      <Contact />
      <FloatingButtons />
    </div>
  );
}

export default App;
