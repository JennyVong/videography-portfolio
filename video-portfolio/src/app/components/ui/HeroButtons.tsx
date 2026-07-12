'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from './button';

/**
 * Client component — wraps the interactive CTA buttons in HeroSection.
 * Separated from HeroSection (server component) to keep the server/client
 * boundary clean in Next.js App Router.
 */
export function HeroButtons() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        onClick={() => scrollTo('pricing')}
        size="lg"
        className="group bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl cursor-pointer"
      >
        View Pricing Packages
        <ArrowDown
          size={20}
          className="ml-2 group-hover:translate-y-1 transition-transform"
        />
      </Button>

      <Button
        onClick={() => scrollTo('works')}
        size="lg"
        variant="outline"
        className="group bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl cursor-pointer"
      >
        See My Work
      </Button>
    </div>
  );
}
