'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { NAV_ITEMS } from '@/app/constants';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            RJ<span className="text-red-600">ustFitness</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo('contact')}
              className="bg-red-600 text-white hover:bg-red-700 cursor-pointer"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { scrollTo(item.id); setMobileMenuOpen(false); }}
                    className="text-gray-300 hover:text-white transition-colors px-2 text-lg text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => { scrollTo('contact'); setMobileMenuOpen(false); }}
                  className="bg-red-600 text-white hover:bg-red-700 w-full"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  );
}