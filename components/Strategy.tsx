import Image from 'next/image';

export default function Strategy() {
  return (
    <section className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/images/capcivicstrategy-logo.png"
                alt="CapCivic Strategy"
                width={300}
                height={60}
                className="h-12 md:h-14 w-auto"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                CapCivic also offers strategy services for public sector organizations and the consultants who serve them.
              </p>
              <a
                href="https://www.capcivicstrategy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white bg-transparent px-6 py-2 text-base font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
