import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const revealRef = useScrollReveal();

  const problems = [
    {
      icon: 'mdi:book-open-variant',
      title: 'Scattered Paper Notebooks',
      description: 'No more flipping through dusty pages to find that one specific waist measurement from last August. Your clients deserve better recall.',
    },
    {
      icon: 'mdi:image-multiple',
      title: 'Photos Buried in Gallery',
      description: "Keep client style references, fabric swatches, and inspiration boards completely separate from your personal photos — neatly organised.",
    },
    {
      icon: 'mdi:magnify-close',
      title: 'Time Wasted Searching',
      description: 'Stop hunting for fabric sourcing contacts or project status. Every detail lives exactly where it belongs, ready in seconds.',
    },
  ];

  const features = [
    {
      icon: 'mdi:ruler',
      title: 'Digital Measurement Vault',
      description: 'Store every client\'s full measurement profile in a secure, searchable database. Retrieve any record in one tap — no paper, no guesswork.',
    },
    {
      icon: 'mdi:palette-swatch',
      title: 'Style Boards & Inspiration',
      description: 'Create dedicated style boards for each client, pinning fabric swatches, reference images, and design notes in one visual workspace.',
    },
    {
      icon: 'mdi:calendar-clock',
      title: 'Order & Project Tracking',
      description: 'Track every order from first fitting to final delivery. Set milestones, attach fabric sources, and never miss a deadline again.',
    },
    {
      icon: 'mdi:account-group',
      title: 'Client Relationship Manager',
      description: 'Build richer client profiles with contact history, style preferences, past orders, and personalised notes — all in one place.',
    },
    {
      icon: 'mdi:bell-ring',
      title: 'Smart Reminders',
      description: 'Automated reminders for fittings, collection dates, and follow-ups mean you always stay ahead of your schedule with zero effort.',
    },
    {
      icon: 'mdi:chart-line',
      title: 'Business Insights',
      description: 'Understand which clients, styles, or seasons drive your revenue. Fittingz surfaces the numbers that help you grow smarter.',
    },
  ];

  // const stats = [
  //   { value: '10k+', label: 'Measurements Stored' },
  //   { value: '500+', label: 'Fashion Professionals' },
  //   { value: '98%', label: 'Client Satisfaction' },
  //   { value: '3 hrs', label: 'Saved Per Week' },
  // ];

  return (
    <section id="about" className="bg-primary py-32 section-padding relative overflow-hidden">

      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-dark/40 rounded-full blur-[150px]" />
      </div>

      <div
        ref={revealRef}
        className="max-w-7xl mx-auto relative z-10"
      >

        {/* ── Section Header ── */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Icon icon="mdi:information-outline" className="text-base" />
            What is Fittingz?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The studio OS built for{' '}
            <span className="text-accent">fashion professionals</span>.
          </h2>
          <p className="text-white/60 text-lg md:text-xl mt-6 max-w-3xl mx-auto font-medium leading-relaxed">
            Fittingz is the all-in-one business companion for tailors, fashion designers, and dressmakers.
            We replace scattered notebooks, overflowing galleries, and missed deadlines with a single elegant platform
            — so you can focus on what you do best: <span className="text-white font-semibold">creating</span>.
          </p>
        </div>

        {/* ── Stats Row ──
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-accent">{stat.value}</p>
              <p className="text-white/60 text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* ── Problem Cards ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Sound familiar?
            </h3>
            <p className="text-white/50 mt-3 text-base max-w-xl mx-auto">
              Every fashion professional has faced these pain points. Fittingz was built to eliminate them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-primary-dark/60 border border-white/10 rounded-2xl p-8 hover:border-accent/40 hover:bg-primary-dark/80 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                  <Icon icon={item.icon} className="text-accent text-xl" />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Feature Grid ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Everything your studio needs
            </h3>
            <p className="text-white/50 mt-3 text-base max-w-xl mx-auto">
              Purpose-built tools that work the way fashion professionals actually work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-primary-light/30 border border-primary-light/40 rounded-xl flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                  <Icon icon={item.icon} className="text-accent text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none" />
          <Icon icon="mdi:needle" className="text-accent text-5xl mx-auto mb-6 relative z-10" />
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 relative z-10">
            Fittingz brings it all together.
          </h3>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 relative z-10">
            Stop juggling apps, notebooks, and sticky notes. Join fashion professionals
            who have made Fittingz the heartbeat of their studio — and never looked back.
          </p>
          <a
            href="#waitlist"
            className="relative z-10 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/30 text-sm"
          >
            Get Early Access
            <Icon icon="mdi:arrow-right" className="text-base" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
