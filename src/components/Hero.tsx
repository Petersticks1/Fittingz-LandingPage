import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';

const Hero = () => {
  const revealRef = useScrollReveal();
  const [currentImg, setCurrentImg] = useState(0);
  const mockupImages = [img1, img2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % mockupImages.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [mockupImages.length]);

  const taglines = [
    'Your talent deserves better tools. Fittingz is the all-in-one studio companion that keeps your clients, measurements, and creative vision perfectly organized — on web and mobile.',
    'Fittingz handles the chaos so you can focus on creating. Client profiles, measurements, style boards, and orders — organized, searchable, and always at your fingertips.',
    'Stop losing measurements in notebooks and client details in chats. Fittingz gives fashion professionals one elegant space to manage everything — from first fitting to final stitch.',
    'Fittingz brings client profiles, measurements, style inspiration, and order tracking into one powerful platform — designed specifically for tailors and fashion designers.',
    'From the first measurement to the final fitting, Fittingz keeps your fashion business running smoothly — available on web and mobile, always in sync, always secure.',
  ];
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [taglineFading, setTaglineFading] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setTaglineFading(true);
      setTimeout(() => {
        setTaglineIdx((prev) => (prev + 1) % taglines.length);
        setTaglineFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(cycle);
  }, [taglines.length]);

  // const avatars = [
  //   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  //   'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  // ];

  return (
    <>
    <section id="home" className="bg-white min-h-[90vh] flex items-center relative overflow-hidden pt-24 pb-16 px-6 md:px-16 lg:px-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, #0F4C75 12%, transparent 12.5%, transparent 87%, #0F4C75 87.5%, #0F4C75),
                            linear-gradient(-45deg, #0F4C75 12%, transparent 12.5%, transparent 87%, #0F4C75 87.5%, #0F4C75)`,
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div ref={revealRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full z-10">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05] tracking-tight">
            {/* Your Design Studio, <span className="text-primary">Digitized.</span> */}
            Fashion Design is an Art. <span className="text-primary">Running it Shouldn't Be Hard.</span>
          </h1>
          <p
            className="text-main-text/80 text-lg md:text-xl mt-8 max-w-lg leading-relaxed transition-all duration-400"
            style={{
              opacity: taglineFading ? 0 : 1,
              transform: taglineFading ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {taglines[taglineIdx]}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#features"
              className="bg-primary hover:opacity-90 text-white font-bold py-4 px-10 rounded-xl transition-all btn-glow shadow-xl text-lg inline-flex items-center gap-3"
            >
              Explore Fittings <Icon icon="heroicons:sparkles" className="text-xl" />
            </a>
            <a
              href="#contact"
              className="bg-primary hover:opacity-90 text-white font-bold py-4 px-10 rounded-xl transition-all btn-glow shadow-xl text-lg inline-flex items-center gap-3"
            >
              Book a Demo <Icon icon="heroicons:calendar" className="text-xl" />
            </a>
          </div>
          {/* 
          <div className="flex items-center gap-4 mt-12">
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Designer"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-main-text/60 text-sm font-medium">
              Trusted by 50+ designers across Africa
            </p>
          </div> */}
        </div>

        <div className="relative pt-12">

          {/* <div className="rounded-[1.8rem] overflow-hidden border-4 border-white shadow-inner">
              <img
                src="/assets/hero-mockup.png"
                alt="Fittingz App Mockup"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              /> */}
          {/* 3D Perspective Wrapper */}
          <div className="relative w-full aspect-[4/3] [perspective:2000px]">
            <div
              className="relative w-full h-full [transform:rotateY(-15deg)rotateX(10deg)] transition-all duration-700 hover:[transform:rotateY(-5deg)rotateX(5deg)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Tablet Body (The iPad Frame) */}
              <div className="absolute inset-0 bg-black rounded-[2.5rem] p-4 shadow-[30px_50px_100px_rgba(0,0,0,0.3)] border-[6px] border-gray-800">
                {/* Speaker/Camera Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-2 bg-gray-900 rounded-b-lg"></div>

                {/* Screen Area */}
                <div className="relative w-full h-full rounded-[1.8rem] bg-[#0A0B10] overflow-hidden ring-1 ring-white/10 group">
                  {mockupImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Fittingz Dashboard ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 transform ${currentImg === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    />
                  ))}

                  {/* Glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* iPad thickness/side shadow */}
              <div className="absolute -right-1 top-4 bottom-4 w-2 bg-gray-900 rounded-r-lg transform translate-x-full [transform:rotateY(90deg)]"></div>
            </div>

            {/* Floating UI Overlay Card (stays relative to page) */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-64 md:w-72 z-20 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center text-primary text-xl shadow-inner border border-primary/5">
                  <Icon icon="lucide:user-check" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-primary font-bold text-sm">Client: Peter M.</h4>
                    <Icon icon="heroicons:check-circle-solid" className="text-green-500 text-base" />
                  </div>
                  <p className="text-[10px] text-muted font-semibold uppercase tracking-wider mt-0.5">Perfect Fit Verified</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] rounded-full animate-pulse"></div>
                </div>
                <div className="h-1.5 w-[70%] bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary/40 w-[60%] rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
