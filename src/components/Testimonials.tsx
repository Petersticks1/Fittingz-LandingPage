import { Icon } from '@iconify/react';
import type { Testimonial } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const revealRef = useScrollReveal();

  const testimonials: Testimonial[] = [
    {
      initials: 'SO',
      name: 'Sarah Okon',
      city: 'Lagos',
      quote: "Fittingz has completely transformed how I handle measurements. No more frantic searches for notebooks mid-consultation.",
      color: 'bg-amber'
    },
    {
      initials: 'KA',
      name: 'Kofi Mensah',
      city: 'Accra',
      quote: "The style inspiration board is a game changer. Being able to link designs directly to client profiles saved me hours.",
      color: 'bg-blue-600'
    },
    {
      initials: 'EN',
      name: 'Elizabeth Njeri',
      city: 'Nairobi',
      quote: "Clean, intuitive, and works perfectly on my phone. Fittingz is the digital assistant every modern designer needs.",
      color: 'bg-primary'
    }
  ];

  return (
    <section className="bg-white py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Designers <span className="text-amber">love</span> Fittingz.
          </h2>
        </div>

        <div 
          ref={revealRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-card p-8 rounded-3xl border border-gray-100 flex flex-col justify-between hover:bg-card-hover hover:scale-[1.02] transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex text-amber mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="text-2xl" />
                  ))}
                </div>
                <p className="text-primary font-medium text-lg italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                <div className={`w-12 h-12 rounded-full ${t.color === 'bg-navy' ? 'bg-primary' : t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-primary font-bold">{t.name}</div>
                  <div className="text-muted text-xs font-semibold uppercase tracking-wider">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
