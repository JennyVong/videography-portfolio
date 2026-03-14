import type { Metadata } from 'next';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'RJ Films - Fitness Videography',
  description: 'Creating high-energy, scroll-stopping content for Instagram and TikTok. Specializing in cinematic gym videos for fitness influencers, gyms, and athletic clothing brands.',
};

export default function RootLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}