import { FaPlay } from 'react-icons/fa';

const videos = [
  { id: 1, type: 'Wedding Highlight', title: 'Rohini & Karan', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, type: 'Pre-Wedding Reel', title: 'Aman & Aditi', thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop' },
  { id: 3, type: 'Cinematic Teaser', title: 'The Royal Wedding', thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop' },
];

const VideoSection = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-2">Cinematography</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Films & Reels</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div key={vid.id} className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${vid.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-zinc-950 pl-1 group-hover:scale-110 transition-transform">
                  <FaPlay size={20} />
                </div>
              </div>

              {/* Title Plate */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                  {vid.type}
                </span>
                <h4 className="text-white text-xl font-bold drop-shadow-md">{vid.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
