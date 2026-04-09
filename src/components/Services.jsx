import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import babyShowerImg from './image/Baby_shower.jpg';
const services = [
  {
    title: 'Wedding Decoration',
    emoji: '💒',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    desc: 'Grand mandap setups, floral arches, fairy lights, and stage decorations that make your wedding day truly magical.',
    tags: ['Mandap', 'Floral Arch', 'Stage Setup', 'Lighting'],
    color: 'from-rose-100 to-rose-50',
  },
  {
    title: 'Birthday Decoration',
    emoji: '🎂',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80',
    desc: 'Themed birthday setups for all ages — from princess fairy tales to superhero adventures and elegant adult parties.',
    tags: ['Themed Setup', 'Banners', 'Photo Booth', 'Backdrop'],
    color: 'from-blue-100 to-blue-50',
  },
  {
    title: 'Balloon Decoration',
    emoji: '🎈',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    desc: 'Stunning balloon arches, walls, and sculptures. Custom balloon arrangements for every celebration and event.',
    tags: ['Arch', 'Balloon Wall', 'Bouquets', 'Garlands'],
    color: 'from-purple-100 to-purple-50',
  },
  {
    title: 'Haldi & Engagement',
    emoji: '💛',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',
    desc: 'Vibrant and traditional Haldi ceremony setups with marigold flowers, turmeric-themed décor, and engagement stage arrangements.',
    tags: ['Marigold', 'Floral Seating', 'Traditional', 'Colourful'],
    color: 'from-yellow-100 to-yellow-50',
  },
  {
    title: 'Baby Shower Events',
    emoji: '🍼',
    image:  babyShowerImg,
    desc: 'Gentle, adorable baby shower setups with soft colors, balloon arrangements, and cute themed decorations for this precious milestone.',
    tags: ['Soft Themes', 'Gender Reveal', 'Photo Corner', 'Florals'],
    color: 'from-pink-100 to-pink-50',
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 0L1440 40C1200 80 960 80 720 60C480 40 240 80 0 40V0Z" fill="#fdf6ee" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle mb-3">What We Offer</p>
          <h2 className="reveal section-title mb-4">
            Our <span className="italic text-gold-600">Specialisations</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="reveal font-body text-charcoal/65 max-w-xl mx-auto">
            From traditional ceremonies to modern parties, we bring your dream
            décor to life with flair and precision.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="reveal card-hover group rounded-2xl overflow-hidden shadow-lg border border-gold-50 bg-white"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Emoji badge */}
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow">
                  {svc.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-gold-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-4">
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body bg-gold-50 text-gold-700 border border-gold-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-gold-600 font-body font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  Get a Quote <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-16">
          <p className="font-accent text-charcoal/60 text-lg mb-5">
            Don't see what you're looking for? We do custom setups too!
          </p>
          <button onClick={scrollToContact} className="btn-gold text-base py-4 px-12">
            Discuss Your Event
          </button>
        </div>
      </div>
    </section>
  );
}
