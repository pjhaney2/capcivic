'use client';

export default function Services() {
  const publicSectorServices = [
    "Public-Private Partnerships",
    "Developer Negotiations",
    "Business Attraction Strategies",
    "Industrial Park Development",
    "Economic Impact Analysis",
    "Housing Strategy",
    "Re-Use & Redevelopment Strategy",
  ];

  const federalFunding = [
    "New Markets Tax Credits (NMTC)",
    "Historic Tax Credits (HTC)",
    "Low-Income Housing Tax Credits (LIHTC)",
    "Opportunity Zones (OZ)",
  ];

  const stateFunding = [
    "Job Creation Incentives",
    "Infrastructure Grants",
    "Affordable Housing Programs",
    "Revitalization & Adaptive Reuse Grants",
    "Business Attraction Incentives",
  ];

  const localFunding = [
    "Tax Increment Financing",
    "Property Tax Abatements",
    "Sales Tax Incentives",
    "Infrastructure Assistance",
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="gradient-text">Services</span>
        </h2>

        <div className="bg-gray-800 rounded-xl p-6 md:p-8 max-w-2xl mx-auto mb-16 border border-gray-700">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            We find, secure, and coordinate capital from federal, state, & local sources to enable
            partnerships between the public & private sectors. CapCivic helps businesses complete
            their capital stack and local governments grow their tax base.{' '}
            <span className="font-bold text-white">Because when governments and businesses partner, communities win.</span>
          </p>
        </div>

        {/* Public Sector */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Public Sector Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {publicSectorServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 border border-gray-700 text-center w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
              >
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Private Sector */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Private Sector Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Federal */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h4 className="text-xl font-bold mb-6 text-white">Federal</h4>
              <ul className="space-y-4">
                {federalFunding.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* State */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h4 className="text-xl font-bold mb-6 text-white">State</h4>
              <ul className="space-y-4">
                {stateFunding.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h4 className="text-xl font-bold mb-6 text-white">Local</h4>
              <ul className="space-y-4">
                {localFunding.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
