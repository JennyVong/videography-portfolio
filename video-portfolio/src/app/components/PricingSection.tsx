'use client';

import { RETAINER_PACKAGES } from '@/app/constants';
import { PackageCard } from './ui/PackageCard';

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 Monthly Retainer
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Lock in consistent, high-quality content every month with a dedicated content partner.
          </p>
        </div>

        <div className={`grid gap-8 max-w-5xl mx-auto ${
          RETAINER_PACKAGES.length === 1 ? 'max-w-lg' : 'md:grid-cols-2'
        }`}>
          {RETAINER_PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              onSelect={scrollToContact}
            />
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10">
          Need something custom?{' '}
          <button
            onClick={scrollToContact}
            className="text-red-500 hover:underline font-semibold cursor-pointer"
          >
            Let's talk
          </button>
        </p>

      </div>
    </section>
  );
}