'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">About</span>
        </h2>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <Image
                src="/images/kate-headshot.png"
                alt="Kate Crowley"
                width={320}
                height={320}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary-blue"
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Kate Crowley</h3>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kate Crowley founded CapCivic in 2024, drawing on over 25 years of experience,
                  to support governments and businesses to align capital investment with civic priorities.
                </p>

                <p>
                  Prior to starting CapCivic, Kate was a Principal & Practice Leader in Baker Tilly&apos;s
                  Development & Community Advisory division, leading a practice of 100+ consultants and
                  serving clients nationally for 15 years on development finance, municipal advisory,
                  and corporate site selection.
                </p>

                <p>
                  Kate holds a Bachelor of Science in Economics from the University of Wisconsin-Madison
                  and a Master of Urban Planning from the University of Illinois at Urbana-Champaign.
                  She is registered as a Municipal Advisor Principal (Series 50 and 54) with the
                  Municipal Securities Rulemaking Board (MSRB).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certification badge */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">CapCivic is a certified Women&apos;s Business Enterprise with the Women&apos;s Business Enterprise National Council (WBENC)</p>
          <Image
            src="/images/wbe-seal.jpg"
            alt="Women's Business Enterprise Certified"
            width={180}
            height={102}
            className="mx-auto h-24 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
