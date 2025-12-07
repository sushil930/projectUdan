import { GalleryItem, Magazine, TeamMember, SubmissionCategory, Article } from './types';

export const MAGAZINES: Magazine[] = [
  {
    id: 'vol-5-2024',
    title: 'UDAAN Vol. 5: Renaissance',
    year: '2024',
    coverImage: 'https://picsum.photos/seed/mag2024/600/800',
    description: 'Exploring the rebirth of culture and creativity in the post-modern digital era.',
    editors: ['Aditi Sharma', 'Rahul Verma'],
  },
  {
    id: 'vol-4-2023',
    title: 'UDAAN Vol. 4: Horizons',
    year: '2023',
    coverImage: 'https://picsum.photos/seed/mag2023/600/800',
    description: 'Looking beyond the ordinary, capturing student perspectives on global change.',
    editors: ['Vikram Singh', 'Neha Gupta'],
  },
  {
    id: 'vol-3-2022',
    title: 'UDAAN Vol. 3: Origins',
    year: '2022',
    coverImage: 'https://picsum.photos/seed/mag2022/600/800',
    description: 'Tracing back to our cultural roots while stepping into the future.',
    editors: ['Priya Patel', 'Amit Kumar'],
  },
  {
    id: 'vol-2-2021',
    title: 'UDAAN Vol. 2: Resilience',
    year: '2021',
    coverImage: 'https://picsum.photos/seed/mag2021/600/800',
    description: 'Art and literature created during challenging times.',
    editors: ['Sandeep Roy'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Sunset at GGV', artist: 'Rohan Das', category: 'Photography', imageUrl: 'https://picsum.photos/seed/photo1/800/600' },
  { id: '2', title: 'Abstract Dreams', artist: 'Sneha I.', category: 'Art', imageUrl: 'https://picsum.photos/seed/art1/600/800' },
  { id: '3', title: 'Cultural Fest 2023', artist: 'UDAAN Team', category: 'Events', imageUrl: 'https://picsum.photos/seed/event1/800/500' },
  { id: '4', title: 'Monochrome City', artist: 'Arjun K.', category: 'Photography', imageUrl: 'https://picsum.photos/seed/photo2/600/900' },
  { id: '5', title: 'Digital Portrait', artist: 'Meera S.', category: 'Art', imageUrl: 'https://picsum.photos/seed/art2/700/700' },
  { id: '6', title: 'Campus Life', artist: 'Photography Club', category: 'Photography', imageUrl: 'https://picsum.photos/seed/photo3/800/600' },
  { id: '7', title: 'Oil on Canvas', artist: 'Rajiv M.', category: 'Art', imageUrl: 'https://picsum.photos/seed/art3/600/800' },
  { id: '8', title: 'Spoken Word Night', artist: 'Events Team', category: 'Events', imageUrl: 'https://picsum.photos/seed/event2/800/600' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'p1', name: 'Prof. Alok Chakrawal', role: 'Vice Chancellor', category: 'Patron', image: 'https://picsum.photos/seed/vc/300/300' },
  { id: 'c1', name: 'Dr. Gauri Tripathi', role: 'Faculty Coordinator', category: 'Coordinator', image: 'https://picsum.photos/seed/fac1/300/300' },
  { id: 's1', name: 'Ananya Singh', role: 'Editor-in-Chief', category: 'Editorial Board', image: 'https://picsum.photos/seed/stu1/300/300' },
  { id: 's2', name: 'Rohan Mehta', role: 'Head of Design', category: 'Design Team', image: 'https://picsum.photos/seed/stu2/300/300' },
  { id: 's3', name: 'Kavita Das', role: 'Art Director', category: 'Art Board', image: 'https://picsum.photos/seed/stu3/300/300' },
];

export const SUBMISSION_CATEGORIES: SubmissionCategory[] = [
  {
    id: 'art',
    label: 'Art & Illustration',
    guidelines: [
      'High-resolution scans or photos required (300 DPI min).',
      'Accepted mediums: Sketch, Oil, Acrylic, Digital Art.',
      'Includes a short description (50 words max).'
    ]
  },
  {
    id: 'photo',
    label: 'Photography',
    guidelines: [
      'Original work only. No heavy manipulation.',
      'Format: JPEG/PNG. Minimum dimension 2000px.',
      'Includes EXIF data if possible.'
    ]
  },
  {
    id: 'lit-eng',
    label: 'English Literature',
    guidelines: [
      'Word limit: 1500 words for prose, 40 lines for poetry.',
      'Submit as .doc or .docx file.',
      'Theme: Open (unless specified for special issue).'
    ]
  },
  {
    id: 'lit-hin',
    label: 'Hindi Literature',
    guidelines: [
      'Unicode font (Mangal/Nirmala) preferred.',
      'Word limit: 1500 words for prose.',
      'Original content only.'
    ]
  }
];

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 'art-of-minimalism',
    title: 'The Art of Digital Minimalism',
    excerpt: 'How student designers are rejecting complex aesthetics for bold, simple statements in the digital age.',
    author: 'Riya Sen',
    date: 'Oct 12, 2024',
    category: 'Design',
    imageUrl: 'https://picsum.photos/seed/minimal/800/600'
  },
  {
    id: 'campus-chronicles',
    title: 'Shadows of the Old Library',
    excerpt: 'A photo essay exploring the hidden corners of the university campus that time seems to have forgotten.',
    author: 'Photography Club',
    date: 'Nov 01, 2024',
    category: 'Photography',
    imageUrl: 'https://picsum.photos/seed/library/800/600'
  },
  {
    id: 'modern-poetry',
    title: 'Verse in the Void',
    excerpt: 'An interview with the winner of this year’s poetry slam about finding inspiration in silence.',
    author: 'Amit Verma',
    date: 'Sep 28, 2024',
    category: 'Literature',
    imageUrl: 'https://picsum.photos/seed/poetry/800/600'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    text: "UDAAN gave me the platform to showcase my art to the entire university. It's more than just a magazine; it's a community.",
    author: "Priya Sharma",
    role: "B.Tech CSE, 3rd Year",
    image: "https://picsum.photos/seed/t1/100/100"
  },
  {
    id: 't2',
    text: "Being part of the editorial team was the highlight of my college life. The creative freedom we get is unmatched.",
    author: "Rahul Verma",
    role: "MA English, Final Year",
    image: "https://picsum.photos/seed/t2/100/100"
  },
  {
    id: 't3',
    text: "The quality of content and design in UDAAN rivals professional publications. Proud to see our university producing this.",
    author: "Dr. S.K. Mishra",
    role: "Faculty, Arts Dept.",
    image: "https://picsum.photos/seed/t3/100/100"
  }
];