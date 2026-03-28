const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            {/* The primary photo */}
            <div className="relative z-10 w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1554046920-90dcac024a1b?q=80&w=1958&auto=format&fit=crop" 
                alt="Founder of Drishti Studios" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-white font-bold text-lg">Suraj</p>
                <p className="text-amber-500 text-sm">Founder & Lead Photographer</p>
              </div>
            </div>
            
            {/* decorative box */}
            <div className="absolute top-8 -right-8 w-full h-full rounded-3xl border-2 border-amber-500/50 -z-10 group-hover:translate-x-2 transition-transform duration-500 hidden md:block" />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Story Behind the Lens</h3>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Drishti Studios started with a simple belief: <strong className="text-white">Every moment is a masterpiece waiting to be captured.</strong> Our journey began out of a pure passion for visual storytelling, evolving into a premium photography studio that captures the heart of your most special days.
              </p>
              <p>
                With over a decade of experience in the industry, we specialize in documenting weddings, events, and personal milestones with an artistic, candid approach. We don't just take pictures; we craft timeless memories that you will cherish forever.
              </p>
              <p>
                Our vision is to provide a seamless, stress-free experience while delivering stunning, high-definition visuals that perfectly encapsulate your emotions. Let us help you tell your story.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-zinc-800">
              <div>
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-amber-500 text-sm uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-amber-500 text-sm uppercase tracking-wide">Happy Couples</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
