import { Icon } from '@iconify/react';
import type { Step } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HowItWorks = () => {
  const revealRef = useScrollReveal();

  const steps: Step[] = [
    { number: '01', title: 'Create Account', description: 'Sign up free in seconds. No credit card needed.' },
    { number: '02', title: 'Add Clients', description: 'Build rich profiles with measurements and contact info.' },
    { number: '03', title: 'Upload Inspirations', description: 'Attach style images and link them to client orders.' },
    { number: '04', title: 'Walk In Confident', description: 'Access everything instantly. Impress every client.' },
  ];

  return (
    <section id="how-it-works" className="bg-primary py-24 section-padding relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full inline-block mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            From sketch to <span className="text-accent">stitch.</span>
          </h2>
        </div>

        <div 
          ref={revealRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-primary border-4 border-accent flex items-center justify-center text-white font-black text-xl mb-6 shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform relative z-10">
                {step.number}
              </div>

              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-24px)] text-accent/30 text-2xl">
                  <Icon icon="heroicons:arrow-right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://fittingz.vercel.app/register"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_24px_rgba(56,189,248,0.35)] hover:shadow-[0_0_36px_rgba(56,189,248,0.55)]"
        >
          <Icon icon="mdi:rocket-launch-outline" className="text-lg" />
          Explore the Process Now!
          <Icon icon="mdi:arrow-right" className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
