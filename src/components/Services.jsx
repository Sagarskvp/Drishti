import { FiCamera, FiVideo, FiMonitor } from 'react-icons/fi';
import { BsLayers } from 'react-icons/bs';

const services = [
  {
    icon: <FiCamera size={32} />,
    title: 'Wedding Photography',
    description: 'Candid and traditional photography to capture the true essence of your big day in an authentic way.',
    price: 'Starting at ₹50,000',
  },
  {
    icon: <FiVideo size={32} />,
    title: 'Cinematography',
    description: 'Cinematic wedding films that tell your unique love story with premium production quality.',
    price: 'Starting at ₹70,000',
  },
  {
    icon: <BsLayers size={32} />,
    title: 'Drone Shoot',
    description: 'Breathtaking aerial perspectives of your venue, events, and couple portraits.',
    price: 'Starting at ₹15,000',
  },
  {
    icon: <FiMonitor size={32} />,
    title: 'Editing Services',
    description: 'Professional color grading, album designing, and video editing for the footage.',
    price: 'Starting at ₹10,000',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">Our Brochure</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Services & Pricing</h3>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            We offer bespoke packages tailored to your vision. Every moment is handled with professional care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-amber-500/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-0 bg-amber-500 transition-all duration-300 group-hover:h-full" />

              <div className="text-amber-500 mb-6 bg-amber-500/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-white font-medium bg-zinc-800 px-3 py-1 rounded-full text-xs">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
