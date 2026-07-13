import { Badge } from './ui/badge';
import { HeroButtons } from './ui/HeroButtons';
import { VideoPlayer } from './Videoplayer';
import { NotionVideo } from '@/app/clients/notion';
import { SITE_TAGLINE } from '@/app/constants';

interface HeroSectionProps {
  featuredVideo: NotionVideo | null;
}

export function HeroSection({ featuredVideo }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <Badge variant="destructive" className="mb-2 bg-red-600 text-white border-0">
                {SITE_TAGLINE}
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                Hi, I'm RJ
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I create high-energy, scroll-stopping cinematic gym content for Instagram
                and TikTok — capturing the grind, motivation, and raw intensity that makes fitness go viral.
              </p>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 mb-6">
                My mission: Help gym influencers, fitness brands, and athletes stand out
                with visually stunning content that drives engagement and builds communities.
              </p>
              <HeroButtons />
            </div>
          </div>

          {/* Featured Video */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
                {featuredVideo?.videoUrl ? (
                  <VideoPlayer video={featuredVideo} autoplay />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <p className="text-gray-500 text-sm text-center px-4">
                      No featured video yet.<br />
                      Add a Cloudinary URL in Notion and check Featured.
                    </p>
                  </div>
                )}
              </div>

              {featuredVideo?.title && (
                <p className="text-sm text-gray-500 mt-3 text-center">
                  {featuredVideo.title}
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}