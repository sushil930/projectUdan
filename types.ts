export interface Magazine {
  id: string;
  title: string;
  year: string;
  coverImage: string;
  description: string;
  editors: string[];
  pdfUrl?: string; // Placeholder for PDF link
}

export type GalleryCategory = 'All' | 'Art' | 'Photography' | 'Events';

export interface GalleryItem {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  category: GalleryCategory;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  category: 'Patron' | 'Coordinator' | 'Art Board' | 'Editorial Board' | 'Design Team';
  bio?: string;
}

export interface SubmissionCategory {
  id: string;
  label: string;
  guidelines: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}