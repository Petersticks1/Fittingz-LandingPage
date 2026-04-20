import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const revealRef = useScrollReveal();


//    const solutions = [
//     {
//       icon: 'mdi:book-open-variant',
//       title: 'Digital Measurement Vault',
//       description: 'Replace dusty paper notebooks with a secure digital database. Find any measurement from any client, any year, in just one tap.'
//     },
//     {
//       icon: 'mdi:image-multiple',
//       title: 'Organized Style Boards',
//       description: "Keep your gallery clean. Fittingz separates your personal photos from client style references and inspiration boards."
//     },
//     {
//       icon: 'mdi:calendar-check',
//       title: 'Instant Order Tracking',
//       description: 'Stop hunting for fabric sourcing or project status. Fittingz centralizes your workflow so you know exactly where every stitch stands.'
//     }
//   ];

  const problems = [
    {
      icon: 'mdi:book-open-variant',
      title: 'Scattered paper notebooks',
      description: 'No more flipping through dusty pages to find that one specific waist measurement from last August.'
    },
    {
      icon: 'mdi:image-multiple',
      title: 'Photos buried in gallery',
      description: "Separate your family vacation photos from your client's silk gown references and style inspiration."
    },
    {
      icon: 'mdi:magnify-close',
      title: 'Time wasted searching',
      description: 'Stop hunting for fabric sourcing contacts or project status. Everything you need is exactly where it belongs.'
    }
  ];

  return (
    <section id="about" className="bg-[#0F172A] py-32 section-padding relative overflow-hidden">
      <div 
        ref={revealRef}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Stop losing clients between the cracks.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium">
            Chaos is the enemy of creativity. Reclaim your studio focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
          {problems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-colors">
                <Icon icon={item.icon} className="text-[#38BDF8] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-white/5">
          <p className="text-[#38BDF8] text-2xl md:text-3xl font-bold tracking-tight">
            Fittingz brings it all together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
