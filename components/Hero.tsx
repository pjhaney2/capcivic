'use client';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/capcivic-background.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Capital</span>
          <span className="text-gray-900"> Strategy for</span>
          <br />
          <span className="gradient-text">Community</span>
          <span className="text-gray-900"> Impact</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          CapCivic makes cross-sector partnerships possible through{' '}
          <span className="text-primary-blue font-semibold">creative capital solutions</span>.
        </p>


        <a
          href="#services"
          className="inline-block gradient-bg text-white px-8 py-4 text-lg font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce" />
      </div>
    </section>
  );
}
