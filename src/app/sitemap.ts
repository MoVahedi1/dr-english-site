import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drdermatology.com';
  
  const routes = [
    '',
    '/about',
    '/treatments',
    '/treatments/dermatology',
    '/treatments/hair-restoration',
    '/treatments/laser',
    '/treatments/injectables',
    '/treatments/body-contouring',
    '/treatments/skincare',
    '/gallery',
    '/blog',
    '/contact',
    '/booking',
  ];

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.includes('/treatments/') ? 0.8 : 0.7,
  }));

  return sitemap;
}