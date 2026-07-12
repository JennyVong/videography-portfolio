import { cache } from "react";
import { NOTION_PUBLISHED_STATUS, NOTION_CACHE_TAG, CLOUDINARY_DOMAIN, CLOUDINARY_THUMBNAIL_OFFSET } from "@/app/constants";

const NOTION_TOKEN = process.env.NOTION_TOKEN as string;
const DATABASE_ID  = process.env.NOTION_DATABASE_ID as string;

export type NotionVideo = {
  id: string;
  title: string;
  videoUrl: string;   // Cloudinary direct .mp4 URL
  thumbnail: string;
  category: string;
  featured: boolean;
};

/**
 * Derives a thumbnail from a Cloudinary video URL by adding
 * so_2,f_jpg transformation and changing ext to .jpg.
 * Returns empty string for non-Cloudinary URLs.
 */
function cloudinaryAutoThumbnail(videoUrl: string): string {
  if (!videoUrl || !videoUrl.includes(CLOUDINARY_DOMAIN)) return '';
  return videoUrl
    .replace('/upload/', `/upload/so_${CLOUDINARY_THUMBNAIL_OFFSET},f_jpg/`)
    .replace(/\.(mp4|mov|webm)$/i, '.jpg');
}


function resolveFile(prop: any): string {
  if (!prop) return '';
  if (prop.type === 'url') return prop.url ?? '';
  if (prop.type === 'files' && prop.files?.length > 0) {
    const f = prop.files[0];
    return f.type === 'file' ? (f.file?.url ?? '') : (f.external?.url ?? '');
  }
  return '';
}

async function notionFetch(endpoint: string, body?: object) {
  const res = await fetch(`https://api.notion.com/v1/${endpoint}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
    next: { tags: [NOTION_CACHE_TAG] },
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Notion API error ${res.status}: ${err}`);
  }

  return res.json();
}

/**
 * Fetches all published videos from the Notion database.
 *
 * Notion DB columns:
 *   Title      — Text
 *   Video URL  — URL  (Cloudinary .mp4 link)
 *   Thumbnail  — URL or Files & Media
 *   Category   — Select
 *   Featured   — Checkbox
 *   Status     — Status (set to "Complete" to go live)
 */
export const getVideos = cache(async (): Promise<NotionVideo[]> => {
  const data = await notionFetch(`databases/${DATABASE_ID}/query`, {
    filter: {
      property: 'Status',
      status: { equals: NOTION_PUBLISHED_STATUS },
    },
  });

  return (data.results ?? []).map((page: any) => {
    const p = page.properties ?? {};
    return {
      id: page.id,
      title: p['Title']?.rich_text?.[0]?.plain_text ?? '',
      videoUrl: p['Video URL']?.url ?? '',
      thumbnail: resolveFile(p['Thumbnail']) || cloudinaryAutoThumbnail(p['Video URL']?.url ?? ''),
      category:
        p['Category']?.select?.name ??
        p['Category']?.multi_select?.[0]?.name ??
        '',
      featured: p['Featured']?.checkbox ?? false,
    };
  });
});

export const getFeaturedVideo = cache(async (): Promise<NotionVideo | null> => {
  const videos = await getVideos();
  return videos.find((v) => v.featured) ?? videos[0] ?? null;
});

export type AboutContent = {
  photoUrl: string;
  bio: string[];   // array of paragraphs; empty = use DEFAULT_BIO from constants
};

/**
 * Fetches about section content from a dedicated single-row Notion database.
 *
 * Notion DB columns:
 *   Photo — URL or Files & Media  (Cloudinary link or uploaded image)
 *   Bio   — Text (rich_text)      (optional; leave blank to use default copy)
 *
 * Add to .env.local:
 *   NOTION_ABOUT_DATABASE_ID=your_about_db_id
 */
export const getAboutContent = cache(async (): Promise<AboutContent> => {
  const aboutDbId = process.env.NOTION_ABOUT_DATABASE_ID;
  if (!aboutDbId) return { photoUrl: '', bio: [] };

  const data = await notionFetch(`databases/${aboutDbId}/query`, {});
  const page = data.results?.[0];
  if (!page) return { photoUrl: '', bio: [] };

  const p = page.properties ?? {};

  const photoUrl = resolveFile(p['Photo']) ?? '';

  // Bio: join all rich_text blocks into an array of paragraph strings
  // Each item in the Notion rich_text array becomes one paragraph
  const bioBlocks: any[] = p['Bio']?.rich_text ?? [];
  const rawBio = bioBlocks.map((b: any) => b.plain_text ?? '').join('');

  // Split on double newlines so the user can separate paragraphs in Notion
  // with a blank line; filter out any empty strings
  const bio = rawBio
    .split('\n\n')
    .map((s: string) => s.trim())
    .filter(Boolean);

  return { photoUrl, bio };
});