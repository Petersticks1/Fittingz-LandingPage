const SocialProofBar = () => {
  const cities = ['Lagos', 'Abuja', 'Accra', 'Nairobi', 'London', 'Dubai', 'Kigali', 'Cape Town'];

  return (
    <div className="bg-gray-50 py-8 overflow-hidden border-y border-gray-100 flex flex-col items-center gap-6">
      <p className="text-muted font-semibold text-xs uppercase tracking-widest text-center px-6">
        Designers from these cities trust Fittingz:
      </p>
      
      <div className="relative w-full flex">
        <div className="animate-marquee flex whitespace-nowrap items-center min-w-full">
          {[...cities, ...cities].map((city, index) => (
            <div key={index} className="flex items-center mx-6 lg:mx-10 shrink-0">
              <span className="text-primary font-bold text-lg md:text-xl">{city}</span>
              <span className="text-amber ml-12 lg:ml-20 text-2xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;
