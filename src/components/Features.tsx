import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FeatureCard {
  layer: string;
  icon: string;
  title: string;
  tags: string[];
  color: string;
}

const NUM = 7;
const D = 720, D_CX = 360, D_CY = 360, D_R = 240;
const M = 320, M_CX = 160, M_CY = 160, M_R = 115;

const radPos = (idx: number, cx: number, cy: number, r: number, total: number) => {
  const a = (idx * (360 / total) - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};

const FEATURES: FeatureCard[] = [
  { layer: '/ 01', icon: 'mdi:account-card-outline',   title: 'Client Profiles',         tags: ['Name & Contact','Event Type','Style Notes','Order History'],    color: '#0F4C75' },
  { layer: '/ 02', icon: 'mdi:ruler',            title: 'Client Measurements',     tags: ['Bust · Waist · Hip','Sleeve & Inseam','Custom Fields'],        color: '#1565A0' },
  { layer: '/ 03', icon: 'mdi:image-filter-vintage',    title: 'Style Inspiration',       tags: ['Mood Boards','Client Refs','Fabric Swatches'],                 color: '#0F4C75' },
  { layer: '/ 04', icon: 'mdi:magnify',                 title: 'Instant Search & Filter', tags: ['Search by Name','Filter by Event','Quick Lookup'],             color: '#1565A0' },
  { layer: '/ 05', icon: 'mdi:shield-lock-outline',     title: 'Secure & Private',        tags: ['Encrypted','Auth Protected','GDPR Ready'],                    color: '#0F4C75' },
  { layer: '/ 06', icon: 'mdi:bell-badge-outline',      title: 'Rent Updates',            tags: ['Fitting Reminders','Collection Alerts','Notifications'], color: '#1565A0' },
  { layer: '/ 07', icon: 'mdi:clipboard-list-outline',  title: 'Create Orders',           tags: ['Order Setup','Set Deadlines','Track Progress'],               color: '#0F4C75' },
];

const Features = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="features"
      className="relative py-28 section-padding overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EEF5FB 0%, #ffffff 50%, #F5F9FF 100%)' }}
    >
      <style>{`
        @keyframes ft-orbit   { to { transform: rotate(360deg);  } }
        @keyframes ft-counter { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes ft-pulse   { 0%,100%{opacity:.18;transform:scale(1)} 50%{opacity:.06;transform:scale(1.12)} }
        @keyframes ft-spin-slow { to { transform: rotate(360deg); } }
        @keyframes ft-spin-rev  { to { transform: rotate(-360deg); } }
        .ft-orbit-ring { animation: ft-orbit   24s linear infinite; }
        .ft-orbit-card { animation: ft-counter 24s linear infinite; }
        .ft-spin-slow  { animation: ft-spin-slow 22s linear infinite; }
        .ft-spin-rev   { animation: ft-spin-rev  16s linear infinite; }
        .ft-pulse-el   { animation: ft-pulse 3.5s ease-in-out infinite; }
        .ft-card-top::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          border-radius: 9999px 9999px 0 0;
          background: linear-gradient(90deg, transparent, #0F4C75 40%, #3282B8 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ft-card-top:hover::before { opacity: 1; }
      `}</style>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0F4C7518 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={revealRef} className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 text-primary text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-6 shadow-sm">
            <Icon icon="mdi:view-grid-outline" />
            Features Overview
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: '#0F1B2D' }}>
            Everything your{' '}
            <span style={{ background: 'linear-gradient(135deg,#0F4C75,#3282B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              atelier
            </span>{' '}
            needs.
          </h2>
          <p className="text-primary/50 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Seven purpose-built features — one seamless platform designed around how you actually work.
          </p>
        </div>

        {/* ════════ DESKTOP ORBITAL ════════ */}
        <div className="hidden md:flex justify-center">
          <div className="relative" style={{ width: D, height: D }}>

            {/* SVG: defs + orbit ring + gradient lines */}
            <svg className="absolute inset-0 pointer-events-none" viewBox={`0 0 ${D} ${D}`} style={{ zIndex: 1 }}>
              <defs>
                {FEATURES.map((_, idx) => {
                  const pos = radPos(idx, D_CX, D_CY, D_R, NUM);
                  return (
                    <linearGradient key={idx} id={`lg${idx}`} gradientUnits="userSpaceOnUse"
                      x1={D_CX} y1={D_CY} x2={pos.x} y2={pos.y}>
                      <stop offset="0%"   stopColor="#0F4C75" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3282B8" stopOpacity="0.12" />
                    </linearGradient>
                  );
                })}
              </defs>

              {/* Outer orbit ring */}
              <circle cx={D_CX} cy={D_CY} r={D_R} fill="none"
                stroke="#0F4C75" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="6 6" />
              {/* Inner secondary ring */}
              <circle cx={D_CX} cy={D_CY} r={D_R * 0.55} fill="none"
                stroke="#3282B8" strokeWidth="0.6" strokeOpacity="0.08" strokeDasharray="4 8" />
              {/* Pulsing center glow */}
              <circle cx={D_CX} cy={D_CY} r="64" fill="#0F4C75" fillOpacity="0.06" className="ft-pulse-el" />

              {FEATURES.map((_, idx) => {
                const pos = radPos(idx, D_CX, D_CY, D_R, NUM);
                return (
                  <g key={idx}>
                    <line x1={D_CX} y1={D_CY} x2={pos.x} y2={pos.y}
                      stroke={`url(#lg${idx})`} strokeWidth="1.5" strokeDasharray="6 5" />
                    {/* Endpoint glow dot */}
                    <circle cx={pos.x} cy={pos.y} r="7" fill="#0F4C75" fillOpacity="0.08" />
                    <circle cx={pos.x} cy={pos.y} r="4" fill="#0F4C75" fillOpacity="0.4" />
                    <circle cx={pos.x} cy={pos.y} r="2" fill="#3282B8" fillOpacity="0.9" />
                  </g>
                );
              })}
            </svg>

            {/* CORE node */}
            <div className="absolute z-20 flex items-center justify-center"
              style={{ left: D_CX, top: D_CY, transform: 'translate(-50%,-50%)' }}>
              {/* Ring 1 — slow spin */}
              <div className="ft-spin-slow absolute rounded-full border border-dashed"
                style={{ width: 130, height: 130, borderColor: 'rgba(15,76,117,0.18)' }} />
              {/* Ring 2 — reverse spin */}
              <div className="ft-spin-rev absolute rounded-full border"
                style={{ width: 100, height: 100, borderColor: 'rgba(50,130,184,0.15)', borderStyle: 'dotted' }} />
              {/* Core badge */}
              <div className="relative flex flex-col items-center justify-center rounded-full shadow-[0_8px_48px_rgba(15,76,117,0.35),0_0_0_8px_rgba(15,76,117,0.06)]"
                style={{ width: 76, height: 76, background: 'linear-gradient(135deg,#0F4C75,#1a6fa8)' }}>
                <Icon icon="mdi:needle" className="text-white text-2xl" />
                <span className="text-white/75 text-[8px] font-bold tracking-[0.22em] mt-0.5">CORE</span>
              </div>
            </div>

            {/* Feature cards */}
            {FEATURES.map((f, idx) => {
              const pos = radPos(idx, D_CX, D_CY, D_R, NUM);
              return (
                <div key={idx} className="absolute z-10 ft-card-top group cursor-default"
                  style={{ left: pos.x, top: pos.y, transform: 'translate(-50%,-50%)', width: 178 }}>
                  <div className="relative bg-white rounded-2xl border border-primary/10 p-5 overflow-hidden
                    shadow-[0_2px_16px_rgba(15,76,117,0.08),0_1px_4px_rgba(15,76,117,0.05)]
                    hover:shadow-[0_12px_40px_rgba(15,76,117,0.16)] hover:border-primary/25
                    hover:-translate-y-1.5 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 shadow-sm"
                      style={{ background: 'linear-gradient(135deg,#EEF5FB,#dbeeff)' }}>
                      <Icon icon={f.icon} style={{ color: f.color, fontSize: 18 }} />
                    </div>
                    {/* Layer + title */}
                    <p className="text-[9px] font-bold tracking-[0.18em] uppercase mb-1" style={{ color: '#3282B8', opacity: 0.6 }}>{f.layer}</p>
                    <h3 className="text-primary font-extrabold text-[12.5px] uppercase tracking-tight leading-snug mb-3">{f.title}</h3>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {f.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[8px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border"
                          style={{ color: '#0F4C75', background: 'rgba(15,76,117,0.05)', borderColor: 'rgba(15,76,117,0.12)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg,rgba(15,76,117,0.03) 0%,transparent 60%)' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════ MOBILE ════════ */}
        <div className="md:hidden">

          {/* Orbit visual */}
          <div className="relative mx-auto mb-10" style={{ width: M, height: M }}>
            <svg className="absolute inset-0 pointer-events-none" viewBox={`0 0 ${M} ${M}`} style={{ zIndex: 1 }}>
              <circle cx={M_CX} cy={M_CY} r={M_R} fill="none"
                stroke="#0F4C75" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="5 5" />
              <circle cx={M_CX} cy={M_CY} r="38" fill="#0F4C75" fillOpacity="0.06" className="ft-pulse-el" />
            </svg>

            {/* Center */}
            <div className="absolute z-20 flex items-center justify-center"
              style={{ left: M_CX, top: M_CY, transform: 'translate(-50%,-50%)' }}>
              <div className="ft-spin-slow absolute rounded-full border border-dashed"
                style={{ width: 76, height: 76, borderColor: 'rgba(15,76,117,0.2)' }} />
              <div className="relative flex flex-col items-center justify-center rounded-full shadow-[0_4px_24px_rgba(15,76,117,0.3)]"
                style={{ width: 54, height: 54, background: 'linear-gradient(135deg,#0F4C75,#1a6fa8)' }}>
                <Icon icon="mdi:needle" className="text-white text-xl" />
                <span className="text-white/70 text-[7px] font-bold tracking-widest mt-0.5">CORE</span>
              </div>
            </div>

            {/* Rotating ring with lines + cards */}
            <div className="absolute inset-0 ft-orbit-ring" style={{ zIndex: 5 }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${M} ${M}`}>
                {FEATURES.map((_, idx) => {
                  const pos = radPos(idx, M_CX, M_CY, M_R, NUM);
                  return (
                    <line key={idx} x1={M_CX} y1={M_CY} x2={pos.x} y2={pos.y}
                      stroke="#0F4C75" strokeWidth="0.8" strokeOpacity="0.18" strokeDasharray="3 3" />
                  );
                })}
              </svg>
              {FEATURES.map((f, idx) => {
                const pos = radPos(idx, M_CX, M_CY, M_R, NUM);
                return (
                  <div key={idx} className="ft-orbit-card absolute flex flex-col items-center justify-center rounded-xl border shadow-md bg-white"
                    style={{ left: pos.x, top: pos.y, width: 50, height: 50, borderColor: 'rgba(15,76,117,0.18)' }}>
                    <Icon icon={f.icon} style={{ color: '#0F4C75', fontSize: 18 }} />
                    <p className="text-[5.5px] text-primary/60 font-bold text-center mt-0.5 leading-tight px-0.5 uppercase">
                      {f.title.split(' ')[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-3">
            {FEATURES.map((f, idx) => (
              <div key={idx} className="relative flex items-start gap-4 bg-white rounded-2xl p-4 overflow-hidden
                border border-primary/10 shadow-[0_2px_12px_rgba(15,76,117,0.07)]
                hover:border-primary/25 hover:shadow-[0_6px_24px_rgba(15,76,117,0.12)] transition-all duration-200">
                {/* Left accent bar */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                  style={{ background: 'linear-gradient(180deg,#0F4C75,#3282B8)' }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ml-2 shadow-sm"
                  style={{ background: 'linear-gradient(135deg,#EEF5FB,#dbeeff)' }}>
                  <Icon icon={f.icon} style={{ color: '#0F4C75', fontSize: 20 }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase mb-0.5" style={{ color: '#3282B8', opacity: 0.7 }}>{f.layer}</p>
                  <h3 className="text-primary font-extrabold text-sm uppercase tracking-tight mb-2">{f.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {f.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[8px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border"
                        style={{ color: '#0F4C75', background: 'rgba(15,76,117,0.05)', borderColor: 'rgba(15,76,117,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      

      </div>
    </section>
  );
};

export default Features;
