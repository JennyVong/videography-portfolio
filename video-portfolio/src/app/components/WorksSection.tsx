'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Athlete Training Montage',
    category: 'Influencer Content',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Gym Facility Tour',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Powerlifting Session',
    category: 'Training Content',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Apparel Brand Shoot',
    category: 'Brand Content',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'CrossFit WOD',
    category: 'Training Content',
    thumbnail: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Boxing Training',
    category: 'Influencer Content',
    thumbnail: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 7,
    title: 'Supplement Brand Ad',
    category: 'Brand Content',
    thumbnail: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 8,
    title: 'Morning Workout Routine',
    category: 'Influencer Content',
    thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 9,
    title: 'Functional Fitness',
    category: 'Training Content',
    thumbnail: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 10,
    title: 'Athletic Wear Showcase',
    category: 'Brand Content',
    thumbnail: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 11,
    title: 'Home Gym Setup',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 12,
    title: 'Bodybuilding Prep',
    category: 'Influencer Content',
    thumbnail: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export function WorksSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Check out some of my latest fitness content created for Instagram and TikTok
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl ring-1 ring-gray-800 hover:ring-red-600"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="bg-red-600 rounded-full p-3 mb-2 mx-auto w-fit">
                    <Play className="text-white" size={20} fill="white" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 to-transparent">
                <span className="text-red-400 text-xs font-medium block mb-1">{video.category}</span>
                <h3 className="text-white text-sm font-semibold line-clamp-2">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal - Portrait */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe
              className="w-full h-full rounded-2xl"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}