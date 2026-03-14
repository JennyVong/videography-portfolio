import { Award, Video, Users, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const stats = [
  { icon: Video, label: 'Videos Created', value: '12' },
  { icon: Users, label: 'Content Views', value: '250K+' },
  { icon: Award, label: 'Avg. Engagement', value: '8.5%' },
  { icon: Heart, label: 'Client Satisfaction', value: '100%' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm RJ, a fitness content creator passionate about producing scroll-stopping
              videos for Instagram and TikTok. I specialize in cinematic gym content that
              captures intensity, motivation, and the aesthetic that resonates with today's
              fitness community.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As someone who lives and breathes the gym lifestyle, I know what catches attention
              in the fitness space. From dramatic slow-motion lifts to high-energy training
              montages, I create content that not only looks incredible but also drives real
              engagement for influencers and brands.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether you're looking to grow your personal brand, showcase your gym facility,
              or promote athletic products, I bring creative editing, trending audio, and
              platform-optimized delivery to every project. Let's create content that stops
              the scroll and builds your audience.
            </p>

            <div className="pt-4">
              <h3 className="font-bold text-white mb-3">What I Create:</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Instagram Reels & TikTok videos optimized for maximum reach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Training content with cinematic slow-motion & dynamic angles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Brand content for athletic wear, supplements & fitness products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Gym showcases and facility tours that attract new members</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
              alt="Gym videography"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-3xl font-bold">250K+</p>
              <p className="text-sm">Total Views</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="text-center bg-gray-800 border-gray-700 hover:bg-gray-800/80 hover:ring-2 hover:ring-red-600 transition-all"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-full mb-4">
                    <Icon className="text-red-500" size={24} />
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}