import React, { useEffect, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80',
    tag: 'Wedding Decoration',
  },
  {
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1600&q=80',
    tag: 'Birthday Celebration',
  },
  {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80',
    tag: 'Balloon Decoration',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === i ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold-400/40 rounded-full px-5 py-2 mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Star size={14} className="text-gold-300 fill-gold-300" />
          <span className="text-gold-200 font-accent text-sm tracking-widest">
            Pune's Premier Event Decorators
          </span>
          <Star size={14} className="text-gold-300 fill-gold-300" />
        </div>

        {/* Heading */}
        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-4 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Make Your{' '}
          <span className="shimmer-text italic">Special Moments</span>
          <br />
          Unforgettable
        </h1>

        {/* Ornament */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
          <span className="text-gold-300 font-accent text-lg tracking-widest">
            ✦ Weddings · Birthdays · Celebrations ✦
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        <p
          className={`text-white/80 font-body text-lg max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Transforming your vision into breathtaking reality. Premium decorations
          crafted with love, creativity, and elegance — right here in Pune.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button onClick={() => scrollTo('#contact')} className="btn-gold text-base py-4 px-10 shadow-xl">
            Book Now
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="border-2 border-white/70 text-white px-10 py-4 rounded-full font-body font-medium tracking-wide hover:bg-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5"
          >
            View Services
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                current === i
                  ? 'w-8 h-2 bg-gold-400'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      {/* Slide tag */}
      <div className="absolute bottom-8 right-6 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
        <p className="text-gold-300 font-accent text-sm tracking-widest">
          {slides[current].tag}
        </p>
      </div>
    </section>
  );
}
