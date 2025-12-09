/**
 * Utility to optimize images using Cloudinary's Fetch API.
 * This automatically converts images to the most efficient format (like AVIF/WebP)
 * and optimizes quality.
 */

// TODO: Replace with your actual Cloudinary Cloud Name
const CLOUDINARY_CLOUD_NAME = 'de4uhtgmb'; 

// TODO: Replace with your production domain (e.g., 'https://project-udan.vercel.app')
// This is needed because Cloudinary needs a public URL to fetch local images from.
const PRODUCTION_URL = 'https://project-udan.vercel.app';

export const getOptimizedImageUrl = (url: string, width?: number) => {
  if (!url) return '';

  // 1. If it's already a Cloudinary URL, inject AVIF + quality + optional width
  if (url.includes('res.cloudinary.com')) {
    const hasUpload = url.includes('/image/upload/');
    const alreadyOptimized = url.includes('f_avif') || url.includes('f_auto');

    if (!hasUpload || alreadyOptimized) {
      return url;
    }

    let transformation = 'f_avif,q_auto';
    if (width) transformation += `,w_${width}`;

    return url.replace('/image/upload/', `/image/upload/${transformation}/`);
  }

  // 2. Construct the transformation string
  // f_avif: Force AVIF output when supported
  // q_auto: Automatic quality optimization
  let transformations = 'f_avif,q_auto';
  if (width) {
    transformations += `,w_${width}`;
  }

  // 3. Handle External URLs (e.g., https://picsum.photos/...)
  if (url.startsWith('http')) {
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/${transformations}/${url}`;
  }

  // 4. Handle Local Paths (e.g., /images/teams/...)
  // Cloudinary can only fetch images that are publicly accessible.
  // During local development (localhost), we return the original local path.
  // In production, we prepend the production domain so Cloudinary can fetch it.
  
  const isProduction = import.meta.env.PROD; // Vite environment check

  if (isProduction && PRODUCTION_URL !== 'https://project-udan.vercel.app') {
    const fullUrl = `${PRODUCTION_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/${transformations}/${fullUrl}`;
  }

  // Fallback for local development or unconfigured production URL
  return url;
};
