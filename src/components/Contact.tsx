import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className="bg-primary py-32 section-padding relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div ref={revealRef} className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Ready to transform <br /> your <span className="text-amber">atelier?</span>
        </h2>
        <p className="text-white/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of designers already working smarter with Fittingz. Get early access today and start digitizing your craft.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex-1 w-full md:w-auto relative max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-amber transition-colors text-lg"
            />
          </div>
          <button className="w-full md:w-auto bg-amber hover:opacity-90 text-white font-bold py-4.5 px-10 rounded-2xl transition-all btn-glow text-lg">
            Notify Me
          </button>
        </div>

        <a 
          href="https://fittingz.vercel.app/register"
          className="mt-8 text-amber/80 hover:text-amber font-bold text-lg inline-flex items-center justify-center gap-2 mx-auto decoration-2 underline-offset-8 hover:underline transition-all"
        >
          Get Early Access — It's Free <Icon icon="heroicons:arrow-right" />
        </a>

        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center">
          <div className="flex items-center gap-2 text-white/40 mb-6 font-medium">
             <Icon icon="mdi:email-outline" className="text-lg" />
             <span>hello@fittingz.io</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-amber transition-colors text-3xl">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="#" className="text-white/40 hover:text-amber transition-colors text-3xl">
              <Icon icon="mdi:twitter" />
            </a>
            <a href="#" className="text-white/40 hover:text-amber transition-colors text-3xl">
              <Icon icon="mdi:whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
