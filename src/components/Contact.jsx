import React, { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: "Call / WhatsApp",
    // value: "+91 95038 47897",
    value: "91+ 9503847897",
    sub: "Available 9 AM – 9 PM",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Pune, Maharashtra",
    sub: "Serving all areas in Pune",
  },
  {
    icon: <Clock size={22} />,
    label: "Working Hours",
    value: "Mon – Sun, 9 AM – 9 PM",
    sub: "Advance booking recommended",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // 👉 Open WhatsApp with form data
      window.open(waLink, "_blank");

      setForm({ name: "", phone: "", event: "", message: "" });
    }, 1000);
  };

  // const waLink = `https://wa.me/919503847897?text=Hi! I'm interested in booking Samrudhi Events for my celebration. Please share more details.`;
  const message = `
New Enquiry from Website:

Name: ${form.name}
Phone: ${form.phone}
Event: ${form.event}
Message: ${form.message}
`;

  const waLink = `https://wa.me/919503847897?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" ref={ref} className="py-24 bg-white relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V0H0V40Z"
            fill="#fdf6ee"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle mb-3">Get in Touch</p>
          <h2 className="reveal section-title mb-4">
            Book Your <span className="italic text-gold-600">Dream Event</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="reveal font-body text-charcoal/65 max-w-xl mx-auto">
            Ready to create something magical? Drop us a message or call us
            directly — we'd love to make your event unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Info side */}
          <div>
            <div className="reveal space-y-6 mb-10">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-gold-100 bg-cream group hover:border-gold-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs text-gold-600 uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    <p className="font-display font-semibold text-charcoal text-lg leading-tight">
                      {info.value}
                    </p>
                    <p className="font-body text-sm text-charcoal/55">
                      {info.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <div className="reveal">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-body font-semibold text-lg hover:bg-[#20ba58] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <p className="text-center font-body text-xs text-charcoal/40 mt-3">
                Fastest way to reach us!
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="reveal">
            <div className="bg-cream rounded-2xl p-8 border border-gold-100 shadow-lg">
              <h3 className="font-display text-2xl text-charcoal mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <CheckCircle size={56} className="text-green-500" />
                  <h4 className="font-display text-2xl text-charcoal">
                    Message Received!
                  </h4>
                  <p className="font-body text-charcoal/65">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-4"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Type name here"
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal/70 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Type mobile no"
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal/70 mb-1.5">
                      Event Type
                    </label>
                    <select
                      name="event"
                      value={form.event}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white font-body text-charcoal focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all appearance-none"
                    >
                      <option value="">Select Event Type</option>
                      <option>Wedding Decoration</option>
                      <option>Birthday Decoration</option>
                      <option>Balloon Decoration</option>
                      <option>Haldi & Engagement</option>
                      <option>Baby Shower</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal/70 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your event — date, location, budget, theme..."
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 bg-white font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full justify-center py-4 text-base disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
