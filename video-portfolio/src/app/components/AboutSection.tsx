import { SERVICES, DEFAULT_BIO, ABOUT_PHOTO } from '@/app/constants';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6">
            {DEFAULT_BIO.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed ${i === 0 ? 'text-lg text-gray-300' : 'text-gray-400'}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="font-bold text-white mb-3">What I Create:</h3>
              <ul className="space-y-2 text-gray-400">
                {SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            {ABOUT_PHOTO ? (
              <img
                src={ABOUT_PHOTO}
                alt="RJ Films"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            ) : (
              <div className="rounded-lg shadow-2xl w-full aspect-[4/3] bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-4">
                  Add your photo URL to ABOUT_PHOTO in constants.ts
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}