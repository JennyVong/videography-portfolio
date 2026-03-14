'use client';

import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Starter Pack',
    price: '$199',
    description: 'Perfect for testing the waters',
    features: [
      '3 short-form videos (15-60 seconds)',
      'Optimized for Instagram Reels & TikTok',
      'Vertical 9:16 format',
      '1 hour shooting session',
      'Trending audio & effects',
      'Basic color grading',
      '1080p resolution',
      'Delivered within 3-5 days',
    ],
    popular: false,
  },
  {
    name: 'Creator Pack',
    price: '$399',
    description: 'Best for growing influencers',
    features: [
      '6-8 short-form videos',
      'Mix of Reels, TikToks & Stories',
      'Vertical 9:16 format',
      '2-3 hours shooting time',
      'Trending audio & creative transitions',
      'Professional color grading',
      'Slow-motion shots included',
      '4K resolution',
      'One round of revisions',
      'Delivered within 5-7 days',
    ],
    popular: true,
  },
  {
    name: 'Brand Package',
    price: '$799',
    description: 'Complete content solution',
    features: [
      '12-15 short-form videos',
      'Content calendar planned',
      'Vertical & square formats',
      'Half-day shoot (4-5 hours)',
      'Custom audio & advanced editing',
      'Cinematic color grading',
      'Slow-motion & dynamic angles',
      '4K resolution',
      'Two rounds of revisions',
      'Raw footage included',
      'Multi-location filming',
      'Delivered within 10-14 days',
    ],
    popular: false,
  },
];

const retainerPackages = [
  {
    name: 'Influencer Retainer',
    price: '$1,200',
    period: '/month',
    description: 'For creators who post consistently',
    savings: 'Save $400/month',
    features: [
      '16-20 short-form videos per month',
      '2 shoot days per month (flexible scheduling)',
      'Priority booking & faster turnaround',
      'Dedicated content strategy session',
      'Trending audio research included',
      'Custom thumbnails for each video',
      'Unlimited revisions',
      '4K resolution with slow-motion',
      'Monthly analytics review',
      'Cancel anytime with 30 days notice',
    ],
    highlight: 'Most Popular',
  },
  {
    name: 'Brand Retainer',
    price: '$2,500',
    period: '/month',
    description: 'For businesses & athletic brands',
    savings: 'Save $900/month',
    features: [
      '40-50 short-form videos per month',
      '4 shoot days per month + b-roll library',
      'VIP priority scheduling',
      'Monthly content calendar & strategy',
      'Branded templates & intros',
      'Social media captions included',
      'Platform-specific optimization',
      'Multiple format delivery (9:16, 1:1, 16:9)',
      'Unlimited revisions',
      'Raw footage access',
      'Monthly performance reports',
      'Dedicated communication line',
      'Cancel anytime with 30 days notice',
    ],
    highlight: 'Best Value',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pricing Packages
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Affordable content packages designed for creators and brands. 
            All videos are optimized for Instagram and TikTok to maximize engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border ${
                pkg.popular ? 'border-red-600 ring-2 ring-red-600' : 'border-gray-800'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-12">
          Need a custom package? <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-red-500 hover:underline font-medium"
          >
            Contact me
          </button> to discuss your specific requirements.
        </p>

        {/* Retainer Packages Section */}
        <div className="mt-24 pt-16 border-t-2 border-gray-800">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔥 Long-Term Partnership
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Monthly Retainer Packages
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Lock in consistent, high-quality content every month. Perfect for influencers and brands 
              who need a dedicated content partner with priority access and better rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {retainerPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden border-2 border-gray-700 hover:border-red-600 transition-all hover:shadow-2xl"
              >
                {/* Header Badge */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      {pkg.highlight}
                    </span>
                  </div>
                  <p className="text-red-100 text-sm">{pkg.description}</p>
                </div>

                <div className="p-8">
                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-gray-700">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">{pkg.price}</span>
                      <span className="text-xl text-gray-400">{pkg.period}</span>
                    </div>
                    <div className="mt-2 inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm font-semibold">
                      ✓ {pkg.savings}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 rounded-lg font-semibold transition-all bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
                  >
                    Start Monthly Partnership
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-12 bg-gray-900 rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Why Choose a Retainer Package?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Better Value</h4>
                <p className="text-sm text-gray-400">
                  Save hundreds compared to one-off packages while getting more content
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Priority Access</h4>
                <p className="text-sm text-gray-400">
                  Skip the waitlist with dedicated booking slots and faster turnaround
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Consistent Growth</h4>
                <p className="text-sm text-gray-400">
                  Regular content keeps your audience engaged and your brand growing
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-8">
            Want a custom retainer tailored to your needs? <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-red-500 hover:underline font-semibold"
            >
              Let's talk
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}