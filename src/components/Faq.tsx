import { useState } from 'react';
import { Icon } from '@iconify/react';
import type { FAQItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const revealRef = useScrollReveal();

  const faqs: FAQItem[] = [
    { 
      question: "Is Fittingz free to use?", 
      answer: "Yes! Phase 1 is completely free. Premium features will be introduced later with a generous free tier for growing brands." 
    },
    { 
      question: "Do I need to install anything?", 
      answer: "No. Fittingz is fully web-based. Simply open your browser on any device and you're ready to start designing." 
    },
    { 
      question: "Can I use it on my phone?", 
      answer: "Absolutely. We built Fittingz mobile-first. It works beautifully on smartphones, tablets, and desktops alike." 
    },
    { 
      question: "How is my data protected?", 
      answer: "We use enterprise-grade authentication and encrypted cloud storage. Your clients' data belongs to you and is strictly private." 
    },
    { 
      question: "Can I customize measurement fields?", 
      answer: "Yes. Every decorator or tailor has different needs. You can add, remove, or rename fields to match your exact craft." 
    },
    { 
      question: "When will booking and payments arrive?", 
      answer: "Phase 2 is already in active development. Early access users will get priority access and beta features as they roll out." 
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-24 section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-chip">Support</span>
          <h2 className="text-4xl font-extrabold text-primary mt-4">
            Questions? <span className="text-amber">Answers.</span>
          </h2>
        </div>

        <div ref={revealRef} className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-card rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 shadow-sm hover:bg-card-hover"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center px-8 py-6 text-left transition-colors"
                id={`faq-button-${idx}`}
              >
                <span className="text-primary font-bold text-lg">{faq.question}</span>
                <Icon 
                  icon={openIndex === idx ? "mdi:minus" : "mdi:plus"} 
                  className={`text-amber text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
