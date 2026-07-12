'use client';

import { NotionVideo } from '@/app/clients/notion';

interface VideoPlayerProps {
  video: NotionVideo;
  /** Autoplay + mute + loop. Use for hero. */
  autoplay?: boolean;
  /** Show native controls. Use for modal. */
  controls?: boolean;
  className?: string;
}

/**
 * Renders a Cloudinary video using the native <video> tag.
 * Autoplay requires muted (browser policy) — suitable for hero bg.
 * Controls mode is used in the modal so the user can scrub/pause.
 */
export function VideoPlayer({
                              video,
                              autoplay = false,
                              controls = false,
                              className = 'w-full h-full',
                            }: VideoPlayerProps) {
  if (!video.videoUrl) return null;

  return (
    <video
      className={`${className} object-cover`}
      src={video.videoUrl}
      poster={video.thumbnail || undefined}
      autoPlay={autoplay}
      muted={autoplay}
      loop={autoplay}
      playsInline
      controls={controls}
      preload="metadata"
    />
  );
}