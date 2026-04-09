import React, { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    label: 'Wedding Stage',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80',
    label: 'Birthday Bash',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    label: 'Balloon Arch',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80',
    label: 'Floral Mandap',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1576181256399-834e3ef3f9b0?w=600&q=80',
    label: 'Baby Shower',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
    label: 'Haldi Setup',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
    label: 'Engagement Décor',
    span: '',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-charcoal relative">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal section-subtitle text-gold-400 mb-3">Our Work</p>
          <h2 className="reveal font-display text-5xl text-white mb-4">
            A Glimpse of{' '}
            <span className="italic text-gold-400">Our Magic</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="reveal font-body text-white/55 max-w-xl mx-auto">
            Every setup tells a story. Browse through some of our favourite
            transformations across Pune.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={28} className="text-white" />
                  <span className="text-white font-body text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
              {/* Label pill */}
              <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold-300 font-body text-xs">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal text-center mt-12">
          <p className="font-accent text-white/60 text-lg mb-5">
            Follow us for daily inspiration
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-body font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @samrudhi_events_pune
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={galleryItems[lightbox].src}
            alt={galleryItems[lightbox].label}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-gold-400 font-accent text-lg">
            {galleryItems[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
}
