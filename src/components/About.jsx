import React, { useEffect, useRef } from 'react';
import { Heart, Palette, IndianRupee, Star } from 'lucide-react';
import event from './image/event.png'
const stats = [
  { value: '500+', label: 'Events Decorated' },
  { value: '8+', label: 'Years Experience' },
  { value: '100%', label: 'Happy Clients' },
  { value: '50+', label: 'Designs Available' },
];

const pillars = [
  {
    icon: <Heart size={24} />,
    title: 'Made with Love',
    desc: 'Every decoration is crafted with genuine passion and attention to detail.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Fully Customised',
    desc: 'We tailor every setup to match your unique vision, theme, and style.',
  },
  {
    icon: <IndianRupee size={24} />,
    title: 'Affordable Luxury',
    desc: 'Premium quality decorations that fit every budget — no compromise.',
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-cream relative overflow-hidden">
      {/* Background mandala */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative z-10">
              <img
                src={event}
                alt="Beautiful wedding decoration by Samrudhi Events"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gold-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                    <Star size={20} className="text-white fill-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-charcoal leading-none">
                      4.9
                    </p>
                    <p className="font-body text-xs text-gold-600 tracking-wide">
                      Rated by clients
                    </p>
                  </div>
                </div>
              </div>
              {/* Gold accent frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold-400 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold-400 rounded-br-2xl" />
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="reveal section-subtitle mb-3">Our Story</p>
            <h2 className="reveal section-title mb-6">
              Pune's Most Trusted
              <br />
              <span className="italic text-gold-600">Event Decorators</span>
            </h2>
            <div className="gold-divider ml-0 mb-6" />

            <p className="reveal font-body text-charcoal/75 leading-relaxed mb-5">
              Samrudhi Events was born from a simple belief — every celebration
              deserves to be extraordinary. Based in the heart of Pune, we have been
              transforming ordinary spaces into breathtaking venues for over 8 years.
            </p>
            <p className="reveal font-body text-charcoal/75 leading-relaxed mb-10">
              From intimate haldi ceremonies to grand wedding receptions, we pour
              creativity, dedication, and warmth into every event. Our team
              understands the cultural richness of Indian celebrations and blends
              tradition with contemporary elegance.
            </p>

            {/* Pillars */}
            <div className="reveal grid gap-5">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-500 flex-shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-charcoal text-lg mb-1">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal mt-20 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-2xl">
          {stats.map((s, i) => (
            <div key={i} className="relative">
              <p className="font-display text-4xl font-bold text-gold-400 mb-1">
                {s.value}
              </p>
              <p className="font-body text-white/70 text-sm tracking-wide">
                {s.label}
              </p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
