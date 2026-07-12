'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { NotionVideo } from '@/app/clients/notion';
import { VideoPlayer } from './Videoplayer';

interface WorksSectionProps {
  videos: NotionVideo[];
}

export function WorksSection({ videos }: WorksSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<NotionVideo | null>(null);

  return (
    <section id="works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Recent Work</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Check out some of my latest fitness content created for Instagram and TikTok
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg mb-2">No published videos yet.</p>
            <p className="text-sm">Add a Cloudinary URL in Notion and set Status → Complete.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl ring-1 ring-gray-800 hover:ring-red-600"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail image preferred; silent video preview as fallback */}
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title || 'Video thumbnail'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="bg-red-600 rounded-full p-3 mx-auto w-fit">
                      <Play className="text-white" size={20} fill="white" />
                    </div>
                  </div>
                </div>

                {/* Info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 to-transparent">
                  {video.category && (
                    <span className="text-red-400 text-xs font-medium block mb-1">
                      {video.category}
                    </span>
                  )}
                  {video.title && (
                    <h3 className="text-white text-sm font-semibold line-clamp-2">
                      {video.title}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <VideoPlayer video={selectedVideo} controls />
            </div>

            {selectedVideo.title && (
              <p className="text-sm text-gray-500 mt-3 text-center">
                {selectedVideo.title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}