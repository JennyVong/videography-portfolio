import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              RJ<span className="text-red-600">Films</span>
            </h3>
            <p className="text-sm mb-4">
              Creating cinematic fitness content that inspires, motivates, and drives engagement 
              for influencers and brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a></li>
              <li><a href="#works" className="hover:text-red-500 transition-colors">Works</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Instagram Reels & TikToks</li>
              <li>Gym Influencer Content</li>
              <li>Athletic Apparel Videos</li>
              <li>Training Montages</li>
              <li>Fitness Facility Tours</li>
              <li>Brand Collaborations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-500" />
                <a href="mailto:rj@rjfilms.com" className="hover:text-red-500 transition-colors">
                  rj@rjfilms.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-500" />
                <a href="tel:+15551234567" className="hover:text-red-500 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-red-500" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RJFilms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}