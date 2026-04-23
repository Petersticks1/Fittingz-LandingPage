import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WHATSAPP_NUMBER = '2347077195098';
const CONTACT_EMAIL   = 'altairattic@gmail.com';

interface FormState { name: string; email: string; message: string; }

const Contact = () => {
  const revealRef = useScrollReveal();

  // ── Email modal state ────────────────────────────────────────────────────────
  const [modalOpen,  setModalOpen]  = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [sending,    setSending]    = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build a mailto: link and open the user's mail client
    const subject = encodeURIComponent(`Fittingz Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setForm({ name: '', email: '', message: '' });
  };

  // ── WhatsApp link ────────────────────────────────────────────────────────────
  const waText = encodeURIComponent(
    'Hi, I am ______, I want to make enquiry about Fittingz'
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <>
      {/* ── Email Modal ────────────────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(15,27,45,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.25)] overflow-hidden animate-[fadeUp_0.3s_ease]">

            {/* Top accent bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#0F4C75,#3282B8)' }} />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon icon="mdi:email-outline" className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-primary font-extrabold text-lg leading-tight">Send us a message</h3>
                    <p className="text-primary/40 text-xs font-medium">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Icon icon="mdi:close" className="text-gray-500 text-base" />
                </button>
              </div>

              {submitted ? (
                /* ── Success state ── */
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-4">
                    <Icon icon="mdi:check-circle" className="text-green-500 text-3xl" />
                  </div>
                  <h4 className="text-primary font-extrabold text-xl mb-2">Message Sent!</h4>
                  <p className="text-primary/50 text-sm max-w-xs mx-auto">
                    Your email client has opened with the message pre-filled. Hit send and we'll get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 bg-primary text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-primary/70 text-xs font-bold tracking-wider uppercase mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Amara Okafor"
                      className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-primary/70 text-xs font-bold tracking-wider uppercase mb-1.5">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-primary/70 text-xs font-bold tracking-wider uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you'd like to know about Fittingz..."
                      className="w-full border border-primary/15 rounded-xl px-4 py-3 text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary hover:opacity-90 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60"
                  >
                    {sending ? (
                      <><Icon icon="mdi:loading" className="text-lg animate-spin" /> Opening mail client…</>
                    ) : (
                      <><Icon icon="mdi:send" className="text-base" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Section ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#0F4C75] py-32 section-padding relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        <div ref={revealRef} className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Ready to transform your atelier?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Join the league of elite designers who have digitized their workflow for absolute precision.
          </p>

          {/* ── Primary CTAs ── */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://fittingz.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white hover:opacity-90 text-[#0F4C75] font-bold py-5 px-10 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-4 text-lg"
            >
              <Icon icon="mdi:laptop" className="text-2xl" />
              Open Web App
            </a>
            <a
              href="#"
              className="w-full md:w-auto bg-transparent border-2 border-white/20 hover:bg-white/5 text-white font-bold py-5 px-10 rounded-2xl transition-all flex items-center justify-center gap-4 text-lg"
            >
              <Icon icon="mdi:cellphone" className="text-2xl" />
              Download Mobile App
            </a>
          </div>

          {/* ── Divider ── */}
          <div className="mt-12 flex items-center gap-4 max-w-sm mx-auto">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">or reach us directly</span>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          {/* ── Contact Buttons ── */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] text-base"
            >
              <Icon icon="mdi:whatsapp" className="text-2xl" />
              Send WhatsApp Message
              <Icon icon="mdi:arrow-right" className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Email */}
            <button
              onClick={() => setModalOpen(true)}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm text-base"
            >
              <Icon icon="mdi:email-outline" className="text-xl" />
              Send Email
              <Icon icon="mdi:arrow-right" className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
