import { useState } from 'react';
import { Icon } from '@iconify/react';
import logo from '../assets/logo.png';

// ── Modal types ───────────────────────────────────────────────────────────────
type ModalType = 'privacy' | 'terms' | 'contact' | null;

// ── Content ───────────────────────────────────────────────────────────────────
const PRIVACY_CONTENT = `Privacy Policy

This Privacy Policy explains how Fittingz collects, uses, and protects your information.

1. Information We Collect
What you provide:
• Account details (name, email, business info)
• Client data (names, contacts, measurements)
• Orders, projects, and design inspirations
• Images and files you upload

Automatically collected:
• Device information (browser, IP address)
• How you use the app (pages visited, features used)
• Cookies for keeping you logged in

2. How We Use Your Information
We use your data to:
• Provide and improve the service
• Keep your account secure
• Send important updates
• Fix bugs and add new features

We do NOT:
• Sell your data to anyone
• Share client information without permission
• Use your designs or client data for ourselves

3. Data Security
We protect your information with:
• Encrypted connections (SSL/HTTPS)
• Secure servers and databases
• Password protection

However, no system is 100% secure. Keep your password safe and don't share it.

4. Your Rights
You can:
• Access your data anytime
• Export your data from the app
• Delete your account and data
• Update or correct your information

Your responsibilities:
• Get consent from clients before storing their data
• Comply with Nigerian data protection laws (NDPR)
• Inform clients about how you use their information

5. Data Retention
• We keep your data while your account is active
• After you delete your account, we keep data for 30 days
• Then we permanently delete everything

6. Cookies
We use cookies to:
• Keep you logged in
• Remember your preferences
• Understand how people use the app

You can disable cookies in your browser, but some features may not work.

7. Third-Party Services
We may use third-party services for:
• Cloud storage
• Analytics
• Future payment processing (when we add payments)

These services have their own privacy policies.

8. Children's Privacy
Our service is not for anyone under 18. We don't knowingly collect information from children.

9. Changes to This Policy
We may update this Privacy Policy. We'll notify you by:
• Email
• Notice in the app
• Posting the updated policy

10. Nigerian Data Protection
We comply with the Nigeria Data Protection Regulation (NDPR). If you're storing client data:
• You're the data controller
• We're the data processor
• You must get proper consent from your clients
• You must inform clients of their rights

Contact Us
Questions about privacy or your data?
Email: hello@altair-attic.com
Website: altair-attic.com

By using Fittingz, you agree to this Privacy Policy.`;

const TERMS_CONTENT = `Terms of Service

Welcome to Fittingz! By using our Fashion Designer Web Application, you agree to these terms.

1. What We Offer
Fittingz helps fashion designers and tailors manage:
• Client information
• Orders and projects
• Body measurements
• Style inspirations
• Invoices

2. Your Account
You must:
• Be at least 18 years old
• Provide accurate information
• Keep your password secure
• Get consent from clients before storing their data

You cannot:
• Share your account with others
• Use the service illegally
• Try to hack or damage the service
• Upload harmful or offensive content

3. Your Content
• You own all data you upload (client info, designs, measurements)
• We own the software and app
• You're responsible for the accuracy of your data
• You should back up important information

4. Service Availability
The app is currently free to use. We provide the service "as is" and:
• May have occasional downtime for maintenance
• Cannot guarantee 100% uptime
• May update or change features
• Will notify you if we plan to start charging in the future

5. Liability
We're not responsible for:
• Lost data or business interruption
• Errors or issues in the service
• Unauthorized access to your account

You're responsible for:
• How you use the service
• Complying with data protection laws
• Getting client consent for storing their information

6. Termination
• You can delete your account anytime
• We can suspend accounts that violate these terms
• Your data will be deleted 30 days after account closure

7. Governing Law
These terms are governed by the laws of Nigeria. Disputes will be resolved in Nigerian courts.

Contact Us
Email: hello@altair-attic.com
Website: altair-attic.com

By using Fittingz, you agree to these Terms of Service.`;

// ── Component ─────────────────────────────────────────────────────────────────
const Footer = () => {
  const [modal, setModal] = useState<ModalType>(null);

  const modalTitles: Record<Exclude<ModalType, null>, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact Us',
  };

  return (
    <>
      {/* ── Modal ──────────────────────────────────────────────────────────── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(9,15,26,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_32px_100px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col max-h-[85vh]">

            {/* Top accent */}
            <div className="h-1 w-full flex-shrink-0" style={{ background: 'linear-gradient(90deg,#0F4C75,#3282B8)' }} />

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon
                    icon={modal === 'privacy' ? 'mdi:shield-lock-outline' : modal === 'terms' ? 'mdi:file-document-outline' : 'mdi:phone-outline'}
                    className="text-primary text-lg"
                  />
                </div>
                <h3 className="text-primary font-extrabold text-lg">{modalTitles[modal]}</h3>
              </div>
              <button
                onClick={() => setModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Icon icon="mdi:close" className="text-gray-500 text-base" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1 px-8 py-6">

              {/* Privacy / Terms — plain text content */}
              {(modal === 'privacy' || modal === 'terms') && (
                <pre className="text-primary/70 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  {modal === 'privacy' ? PRIVACY_CONTENT : TERMS_CONTENT}
                </pre>
              )}

              {/* Contact Us */}
              {modal === 'contact' && (
                <div className="space-y-6 py-2">
                  <p className="text-primary/60 text-sm leading-relaxed">
                    Have a question or need support? Reach us through any of the channels below — we're happy to help.
                  </p>

                  {/* Phone */}
                  <a
                    href="tel:+2347077195098"
                    className="group flex items-center gap-4 bg-primary/5 border border-primary/12 rounded-2xl p-5 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon icon="mdi:phone" className="text-primary text-2xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary/40 mb-0.5">Call Us Via</p>
                      <p className="text-primary font-extrabold text-lg">+234 707 719 5098</p>
                    </div>
                    <Icon icon="mdi:arrow-right" className="text-primary/30 text-xl ml-auto group-hover:text-primary/60 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:altairattic@gmail.com"
                    className="group flex items-center gap-4 bg-primary/5 border border-primary/12 rounded-2xl p-5 hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon icon="mdi:email-outline" className="text-primary text-2xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary/40 mb-0.5">Email Us Via</p>
                      <p className="text-primary font-extrabold text-base">altairattic@gmail.com</p>
                    </div>
                    <Icon icon="mdi:arrow-right" className="text-primary/30 text-xl ml-auto group-hover:text-primary/60 group-hover:translate-x-1 transition-all" />
                  </a>

                  <p className="text-primary/35 text-xs text-center pt-2">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              )}
            </div>

            {/* Footer bar */}
            <div className="px-8 py-4 border-t border-gray-100 flex-shrink-0 flex justify-end">
              <button
                onClick={() => setModal(null)}
                className="bg-primary hover:opacity-90 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#090F1A] py-12 px-6 md:px-16 lg:px-24 border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">

          {/* Left: Brand & Tagline */}
          <div className="flex flex-col items-center lg:items-start max-w-sm">
            <a href="#home" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Fittingz Logo" className="w-8 h-8 object-contain" />
              <div className="text-2xl font-black tracking-tight">
                <span className="text-primary">Fitt</span><span className="text-white">ingz</span>
              </div>
            </a>
            <p className="text-white/40 text-xs md:text-sm leading-relaxed text-center lg:text-left">
              The Digital Atelier. Precision management for the modern fashion house.
            </p>
          </div>

          {/* Center: Links & Socials */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <button
                onClick={() => setModal('privacy')}
                className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModal('terms')}
                className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setModal('contact')}
                className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest"
              >
                Contact Us
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-xl">
                <Icon icon="mdi:instagram" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-xl">
                <Icon icon="mdi:twitter" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-xl">
                <Icon icon="mdi:linkedin" />
              </a>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="text-white/20 text-[10px] md:text-xs tracking-widest uppercase font-bold text-center lg:text-right">
            © {new Date().getFullYear()} FITTINGZ<br className="hidden lg:block" /> ALL RIGHTS RESERVED.
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
