'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <Badge variant="destructive" className="mb-2 bg-red-600 text-white border-0">
                Fitness Content Creator
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                Hi, I'm RJ
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Creating high-energy, scroll-stopping content for Instagram and TikTok.
                I specialize in cinematic gym videos that capture the grind, motivation,
                and raw intensity that makes fitness content go viral.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-gray-400 mb-6">
                My mission: Help gym influencers, fitness brands, and athletes stand out
                with visually stunning content that drives engagement and builds communities.
              </p>

              <Button
                onClick={() => scrollToSection('pricing')}
                size="lg"
                className="group bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
              >
                View Pricing Packages
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Video - Right - Portrait Format */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent z-10"></div>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Most Viewed Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}