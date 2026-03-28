import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a 
        href="tel:+919876543210"
        className="group relative flex items-center justify-center w-14 h-14 bg-white text-zinc-950 rounded-full shadow-2xl hover:bg-zinc-200 transition-all hover:scale-110 active:scale-95"
        aria-label="Call Now"
      >
        <span className="absolute right-16 bg-white text-zinc-950 text-sm py-1 px-3 rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-lg whitespace-nowrap font-medium pointer-events-none">
          Call Now
        </span>
        <FiPhoneCall size={24} />
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-16 bg-green-500 text-white text-sm py-1 px-3 rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-lg whitespace-nowrap font-medium pointer-events-none">
          WhatsApp Us
        </span>
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default FloatingButtons;
