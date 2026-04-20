const Footer = () => {
  const navLinks = ['About', 'Features', 'How It Works', 'FAQ', 'Contact'];

  return (
    <footer className="bg-primary-dark border-t-2 border-amber/20 py-12 section-padding font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold text-white tracking-tight">
          Fitting<span className="text-amber">z</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/60 hover:text-amber transition-colors text-sm font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-white/30 text-xs md:text-sm font-medium text-center md:text-right">
          © 2025 Fittingz. <br className="md:hidden" />
          <span className="hidden md:inline">·</span> 
          Built for designers, by designers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
