import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Rahul Deshmukh',
    event: 'Wedding Decoration',
    location: 'Kothrud, Pune',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    text: 'Samrudhi Events turned our wedding into an absolute fairytale! The floral mandap was breathtaking and every detail matched our vision perfectly. Our guests couldn\'t stop complimenting the décor. Truly the best decorators in Pune!',
  },
  {
    name: 'Sneha Kulkarni',
    event: 'Birthday Decoration',
    location: 'Baner, Pune',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    text: 'We hired them for my daughter\'s 5th birthday — a princess theme. The balloon arch, the backdrop, everything was so beautifully done! My daughter was over the moon. Will definitely book again for every party!',
  },
  {
    name: 'Amit & Sunita Pawar',
    event: 'Haldi Ceremony',
    location: 'Hadapsar, Pune',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    text: 'The Haldi setup was vibrant, colourful, and so beautifully traditional. The marigold decorations and the seating arrangement made everything look like straight out of a Bollywood movie. Very professional team!',
  },
  {
    name: 'Meera Joshi',
    event: 'Baby Shower',
    location: 'Viman Nagar, Pune',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    text: 'Absolutely loved my baby shower décor! The soft pink and white theme with those adorable balloon arrangements made the whole event so special. Samrudhi Events is super responsive and delivered on time. Highly recommend!',
  },
  {
    name: 'Vikram Marathe',
    event: 'Engagement Decoration',
    location: 'Shivajinagar, Pune',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    text: 'Very affordable and very beautiful work. The engagement stage decoration was elegant and exactly what we described. They accommodated last-minute changes without any fuss. Five stars all the way!',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navigate = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const auto = setInterval(() => navigate(1), 5000);
    return () => clearInterval(auto);
  }, [animating]);

  const t = testimonials[active];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-mandala-pattern opacity-50" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle mb-3">Happy Clients</p>
          <h2 className="reveal section-title mb-4">
            What Our Clients <span className="italic text-gold-600">Say</span>
          </h2>
          <div className="gold-divider mb-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Mini cards — prev */}
          <div className="hidden lg:flex flex-col gap-4">
            {[
              (active - 1 + testimonials.length) % testimonials.length,
              (active - 2 + testimonials.length) % testimonials.length,
            ].map((idx, i) => (
              <button
                key={idx}
                onClick={() => { setActive(idx); }}
                className={`reveal text-left p-4 rounded-xl border bg-white shadow transition-all duration-300 hover:border-gold-300 ${
                  i === 0 ? 'opacity-80' : 'opacity-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonials[idx].photo}
                    alt={testimonials[idx].name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-body font-medium text-charcoal text-sm">
                      {testimonials[idx].name}
                    </p>
                    <p className="font-body text-gold-600 text-xs">{testimonials[idx].event}</p>
                  </div>
                </div>
                <p className="font-body text-charcoal/60 text-xs line-clamp-2">
                  {testimonials[idx].text}
                </p>
              </button>
            ))}
          </div>

          {/* Main card */}
          <div className="reveal">
            <div
              className={`bg-white rounded-2xl shadow-2xl p-8 border border-gold-100 transition-all duration-200 ${
                animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center mb-6">
                <Quote size={22} className="text-white fill-white" />
              </div>

              <StarRating count={t.stars} />

              <p className="font-accent text-charcoal/80 text-lg leading-relaxed my-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gold-50">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
                />
                <div>
                  <p className="font-display font-semibold text-charcoal">{t.name}</p>
                  <p className="font-body text-sm text-gold-600">
                    {t.event} · {t.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 px-2">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full border border-gold-300 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all ${
                      i === active ? 'w-6 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-gold-200'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 rounded-full border border-gold-300 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Mini cards — next */}
          <div className="hidden lg:flex flex-col gap-4">
            {[
              (active + 1) % testimonials.length,
              (active + 2) % testimonials.length,
            ].map((idx, i) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`reveal text-left p-4 rounded-xl border bg-white shadow transition-all duration-300 hover:border-gold-300 ${
                  i === 0 ? 'opacity-80' : 'opacity-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonials[idx].photo}
                    alt={testimonials[idx].name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-body font-medium text-charcoal text-sm">
                      {testimonials[idx].name}
                    </p>
                    <p className="font-body text-gold-600 text-xs">{testimonials[idx].event}</p>
                  </div>
                </div>
                <p className="font-body text-charcoal/60 text-xs line-clamp-2">
                  {testimonials[idx].text}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
