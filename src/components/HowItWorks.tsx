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
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] border-t-2 border-dashed border-amber/10 hidden lg:block -translate-y-16"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber bg-amber/10 px-3 py-1 rounded-full inline-block mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            From sketch to <span className="text-amber">stitch.</span>
          </h2>
        </div>

        <div 
          ref={revealRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-primary border-4 border-amber flex items-center justify-center text-white font-black text-xl mb-6 shadow-[0_0_20px_rgba(232,135,74,0.3)] group-hover:scale-110 transition-transform relative z-10">
                {step.number}
              </div>

              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-24px)] text-amber/30 text-2xl">
                  <Icon icon="heroicons:arrow-right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
