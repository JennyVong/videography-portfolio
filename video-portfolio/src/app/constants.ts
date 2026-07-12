// ─── Site Identity ────────────────────────────────────────────────────────────
export const SITE_NAME = 'RJFilms';
export const SITE_TAGLINE = 'Fitness Content Creator';

// ─── Contact Details ──────────────────────────────────────────────────────────
export const CONTACT_EMAIL = 'rj@rjfilms.com';
export const CONTACT_PHONE = '(555) 123-4567';
export const CONTACT_PHONE_HREF = 'tel:+15551234567';
export const CONTACT_LOCATION = 'Los Angeles, CA';

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIAL_INSTAGRAM = '#';
export const SOCIAL_YOUTUBE = '#';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'About',   id: 'about'   },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Works',   id: 'works'   },
] as const;

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const RETAINER_PACKAGES = [
  {
    name: 'The Essentials',
    price: '$2,500',
    period: '/month',
    description: 'Designed for those who just need a social presence and have the time to manage their own strategy.',
    highlight: 'Foundation Tier',
    features: [
      '4 High-End Reels/TikToks: Professionally edited, high-quality video assets',
      '2 Custom Carousel Posts: Value driven or educational content',
      'Note: Production-only. Does not include advanced content strategy, ad-performance monitoring, or hook-optimization. Requires client to handle their own distribution and community engagement.',
    ],
  },
  {
    name: 'The Conversion Engine',
    price: '$4,000',
    period: '/month',
    description: 'Designed for brands who want to treat social media as an automated growth and lead-generation machine.',
    highlight: 'Recommended',
    features: [
      '8 Hook-Driven Reels/TikToks: I don\'t just make videos; I engineer the first 3 seconds to maximize scroll-stop and retention',
      'Full Strategy & A/B Testing: Multiple hook variants per video to test what actually converts your audience',
      'Conversion Optimization: Monthly performance data review to pivot and scale what is driving sign-ups',
      'Full Creative Suite: Includes 4 high-res lifestyle images and priority support for your paid ad campaigns',
      'Efficiency: I handle the entire creative pipeline—from script/hook development to final delivery—so you can focus 100% on your business',
    ],
  },
] as const;

export const PACKAGE_SELECT_OPTIONS = [
  { group: 'Monthly Retainer', options: [
      { label: 'The Essentials – $2,500/mo',        value: 'The Essentials'       },
      { label: 'The Conversion Engine – $4,000/mo', value: 'The Conversion Engine' },
    ]},
  { group: null, options: [
      { label: 'Custom Package', value: 'Custom' },
    ]},
] as const;

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_SERVICES = [
  'Instagram Reels & TikToks',
  'Gym Influencer Content',
  'Athletic Apparel Videos',
  'Training Montages',
  'Fitness Facility Tours',
  'Brand Collaborations',
] as const;

// ─── Cloudinary ───────────────────────────────────────────────────────────────
// Used to detect Cloudinary URLs in notion.ts
export const CLOUDINARY_DOMAIN = 'cloudinary.com';
// Match this to your Notion Status option for "live" videos
export const NOTION_PUBLISHED_STATUS = 'Published';

// ─── EmailJS ──────────────────────────────────────────────────────────────────
export const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? '';
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
export const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? '';

// ─── Revalidation ─────────────────────────────────────────────────────────────
export const NOTION_CACHE_TAG = 'videos';
export const CLOUDINARY_THUMBNAIL_OFFSET = 5;

// ─── About Section ────────────────────────────────────────────────────────────
// Add your photo URL here — Cloudinary link or any direct image URL
export const ABOUT_PHOTO = 'https://res.cloudinary.com/osl7eeuh/image/upload/v1783895180/24AB84F1-C430-4482-A073-553DF475163A_koqe4a.png';

export const DEFAULT_BIO = [
  "Hi, I'm RJ, a fitness content creator passionate about producing scroll-stopping videos for Instagram and TikTok. I specialize in cinematic gym content that captures intensity, motivation, and the aesthetic that resonates with today's fitness community.",
  "As someone who lives and breathes the gym lifestyle, I know what catches attention in the fitness space. From dramatic slow-motion lifts to high-energy training montages, I create content that not only looks incredible but also drives real engagement for influencers and brands.",
  "Whether you're looking to grow your personal brand, showcase your gym facility, or promote athletic products, I bring creative editing, trending audio, and platform-optimized delivery to every project. Let's create content that stops the scroll and builds your audience.",
] as const;export const SERVICES = [
  'Instagram Reels & TikTok videos optimized for maximum reach',
  'Training content with cinematic slow-motion & dynamic angles',
  'Brand content for athletic wear, supplements & fitness products',
  'Gym showcases and facility tours that attract new members',
] as const;