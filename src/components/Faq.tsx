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
      answer: "Yes! Phase 1 is completely free on both the web app and mobile app. Premium features will be introduced later with a generous free tier for growing fashion businesses."
    },
    {
      question: "Is there a mobile app for Fittingz?",
      answer: "Yes! Fittingz is available as a mobile app alongside the web platform. Manage client profiles, measurements, style boards, and orders directly from your smartphone — perfect for on-the-go fittings."
    },
    {
      question: "Where can I download the Fittingz mobile app?",
      answer: "The Fittingz mobile app is available for both iOS and Android. Search for 'Fittingz' on the App Store or Google Play Store to download it for free."
    },
    {
      question: "Do the web app and mobile app sync together?",
      answer: "Absolutely. Fittingz uses real-time cloud sync — any change you make on the web is instantly reflected on mobile, and vice versa. Your studio travels with you."
    },
    {
      question: "Do I need to install anything to use the web app?",
      answer: "No. The Fittingz web app runs entirely in your browser. Just open fittingz.vercel.app, sign in, and you are ready — no downloads required."
    },
    {
      question: "Can I manage clients and measurements on both platforms?",
      answer: "Yes. Every core feature — client profiles, measurements, style inspiration boards, and order tracking — is available on both the web and mobile app so you can work from any device."
    },
    {
      question: "How is my data protected?",
      answer: "We use enterprise-grade authentication and encrypted cloud storage across both platforms. Your clients' data is strictly private and belongs to you — never shared or sold."
    },
    {
      question: "Can I customize measurement fields?",
      answer: "Yes. Every tailor and designer has unique needs. You can add, rename, or remove measurement fields on both the web and mobile app to match your exact craft."
    },
    {
      question: "Will I lose data if I switch between the app and website?",
      answer: "Never. Your data lives securely in the cloud and stays in sync at all times. Switch freely between mobile and web without losing a single measurement or client note."
    },
    // {
    //   question: "When will booking and payments arrive?",
    //   answer: "Phase 2 — including booking management and payment integration — is already in active development for both platforms. Early access users get priority access to beta features as they roll out."
    // },
  ];


  return (
    <section id="faq" className="bg-gray-50 py-24 section-padding relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0F4C7518 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-chip">Support</span>
          <h2 className="text-4xl font-extrabold text-primary mt-4">
            Questions? <span className="text-accent">Answers.</span>
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
                  className={`text-accent text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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
