import { BsArrowRight } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay and image placeholder */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")' }}
      />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-amber-500 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base animate-fade-in-up">
          Welcome to Drishti Studios
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Capturing <span className="italic font-light">Moments</span> <br/>
          That Last Forever
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Premium photography and cinematography services for your most precious days.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#contact" className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
            Book Shoot <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-zinc-950 px-8 py-4 rounded-full font-bold text-lg transition-all">
            <FiPhoneCall /> Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[30px] h-[50px] border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-500 rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
