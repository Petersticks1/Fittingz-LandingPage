import { Icon } from '@iconify/react';
import type { Feature } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Features = () => {
  const revealRef = useScrollReveal();

  const features: Feature[] = [
    { 
      icon: 'mdi:account-card', 
      title: 'Client Profiles', 
      description: 'Store full client records: name, contact, event type, and every measurement — always at your fingertips.' 
    },
    { 
      icon: 'mdi:tape-measure', 
      title: 'Smart Measurements', 
      description: 'Customizable fields for bust, waist, hip, sleeve — add whatever your craft demands.' 
    },
    { 
      icon: 'mdi:image-filter', 
      title: 'Style Inspiration Board', 
      description: 'Upload, tag, and link style images to client orders. Your Pinterest, but purpose-built.' 
    },
    { 
      icon: 'mdi:magnify', 
      title: 'Instant Search & Filter', 
      description: 'Find any client in seconds by name, phone, or event type. Even mid-consultation.' 
    },
    { 
      icon: 'mdi:cloud-sync', 
      title: 'Cloud Backup', 
      description: 'Your data is safe, synced, and accessible on any device, anywhere.' 
    },
    { 
      icon: 'mdi:shield-lock', 
      title: 'Secure & Private', 
      description: 'Enterprise-grade authentication. Only you access your client data.' 
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <span className="section-chip">Features Overview</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4">
            Everything your <span className="text-amber">atelier</span> needs.
          </h2>
        </div>

        <div 
          ref={revealRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {features.map((f, idx) => (
            <div 
              key={idx}
              className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:bg-card-hover hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-light flex items-center justify-center transition-colors group-hover:bg-amber">
                <Icon 
                  icon={f.icon} 
                  className="text-amber text-3xl group-hover:text-white transition-colors" 
                />
              </div>
              <h3 className="text-xl font-bold text-primary mt-8">{f.title}</h3>
              <p className="text-mainText/70 text-base mt-4 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
