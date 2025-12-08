import { GalleryItem, Magazine, TeamMember, SubmissionCategory, Article } from './types';

export const ALL_TEAMS = [
  {
    category: 'Student Coordinators',
    members: [
      { name: 'Gaurav Sonkar', image: '/images/teams/student co-ordinators/Gaurav Sonkar.jpg' },
      { name: 'Manik Raghuvanshi', image: '/images/teams/student co-ordinators/Manik Raghuvanshi.jpg' },
      { name: 'Nibhrit Mishra', image: '/images/teams/student co-ordinators/Nibhrit Mishra.jpg' },
    ]
  },
  {
    category: 'Art & Design',
    members: [
      { name: 'Ayush Yadav', image: '/images/teams/art&design/AyushYadav.2ac6594cc9dfe6abca72.jpg' },
      { name: 'Jhanvee Singh', image: '/images/teams/art&design/JhanveeSingh.92070f551a7dc70c0c39.jpg' },
      { name: 'Kartika Gupta', image: '/images/teams/art&design/KartikaGupta.bb7507ceb67014b2cc8c.jpg' },
      { name: 'Piyush Rajak', image: '/images/teams/art&design/PiyushRajak.fe21bdd39fb2ff8c357e.jpg' },
      { name: 'Shwata Tamrakar', image: '/images/teams/art&design/ShwataTamrakar.0d178d423b13cff83897.jpg' },
      { name: 'Tamanna Jagra', image: '/images/teams/art&design/TamannaJagra.7280c643c025242eb31a.jpg' },
      { name: 'Tripti Verma', image: '/images/teams/art&design/TriptiVerma.2a6e4a0da2e0d2dbdf1d.jpg' },
    ]
  },
  {
    category: 'Graphic Design',
    members: [
      { name: 'Lisha Gupta', image: '/images/teams/graphic/Lishagupta.f67a101b4fb0485f2511.jpg' },
      { name: 'Om Gupta', image: '/images/teams/graphic/Omgupta.d9b73b59301e936af660.jpg' },
      { name: 'Prashant Yadav', image: '/images/teams/graphic/Prashantyadav.32645c079ba28e552d45.jpg' },
      { name: 'Ritika Ahirwar', image: '/images/teams/graphic/RitikaAhirwar.0c02bf5d1ab99425fc7c.jpg' },
      { name: 'Sheetal', image: '/images/teams/graphic/Sheetal.5d695cb412ebf6ea7f29.jpg' },
    ]
  },
  {
    category: 'English Literature',
    members: [
      { name: 'Gautami Deshmukh', image: '/images/teams/litrature-english/GAUTAMIDESHMUKH.921c390de26ebe11ef48.jpg' },
      { name: 'Himani Chaurasia', image: '/images/teams/litrature-english/HIMANICHAURASIA.2a1538ffc35594400c38.jpg' },
      { name: 'Nikita Dubey', image: '/images/teams/litrature-english/NIKITADUBEY.4da20e3333be265de36b.jpg' },
      { name: 'Prakhar Gupta', image: '/images/teams/litrature-english/PRAKHARGUPTA.31c4eedc276b4cc2f8d9.jpg' },
      { name: 'Sakshi Jha', image: '/images/teams/litrature-english/SAKSHIJHA.ad736db219a9a0a1aabe.jpg' },
      { name: 'Shubhangi Bajpayee', image: '/images/teams/litrature-english/SHUBHANGIBAJPAYEE.4490127ca5c07528f5eb.jpg' },
      { name: 'Shubhshri Gupta', image: '/images/teams/litrature-english/SHUBHSHRIGUPTA.ef2bc35036182138e7b9.jpg' },
    ]
  },
  {
    category: 'Hindi Literature',
    members: [
      { name: 'Aishwarya Sahu', image: '/images/teams/litrature-hindi/AishwaryaSahu.f936102272ecc85587ed.jpg' },
      { name: 'Ashutosh Yadav', image: '/images/teams/litrature-hindi/AshutoshYadav.1e5434c6a726311e93b9.jpg' },
      { name: 'Nidhi Tiwari', image: '/images/teams/litrature-hindi/NidhiTiwari.85e0aaa49ef40842c1db.jpg' },
      { name: 'Piyanshu Kashyap', image: '/images/teams/litrature-hindi/PiyanshuKashyap.cf4529a35d04d5d08429.jpg' },
      { name: 'Shivam Sati', image: '/images/teams/litrature-hindi/ShivamSati.bb02b722843d31a2aabe.jpg' },
      { name: 'Vidhi Agrawal', image: '/images/teams/litrature-hindi/VidhiAgrawal.8cf747086017a4c9b226.jpg' },
    ]
  },
  {
    category: 'Marketing Board',
    members: [
      { name: 'Akhil Patel', image: '/images/teams/marketing-board/AKHILPATEL.ed107792a3aeb975dc1b.jpg' },
      { name: 'Alankrita Mishra', image: '/images/teams/marketing-board/ALANKRITAMISHRA.16dd1b3d09144714c47e.jpg' },
      { name: 'Ashish', image: '/images/teams/marketing-board/ASHISH.3248a1b6ccf55de4266f.jpg' },
      { name: 'Rahul Patel', image: '/images/teams/marketing-board/RAHULPATEL.d03028ced182ed81f804.jpg' },
      { name: 'Reshabh', image: '/images/teams/marketing-board/RESHABH.b52c4d0155bac9964de0.jpg' },
      { name: 'Suman Shriwas', image: '/images/teams/marketing-board/SUMANSHRIWAS.9ae12b27563066db90c1.jpg' },
      { name: 'Umang Verma', image: '/images/teams/marketing-board/UMANGVERMA.441305b458a61a4c1aab.jpg' },
    ]
  },
  {
    category: 'Photography Board',
    members: [
      { name: 'Aniket Manikpuri', image: '/images/teams/photography-board/ANIKETMANIKPURI.03009a9a1ad8619d3f7f.jpg' },
      { name: 'Janvi Gawade', image: '/images/teams/photography-board/JANVIGAWADE.0f728149bdffdd4d0fcd.jpg' },
      { name: 'Niti Kumari', image: '/images/teams/photography-board/NITIKUMARI.6548264a8e3abed5558f.jpg' },
      { name: 'Om Pandey', image: '/images/teams/photography-board/OMPANDEY.1464a51574e009cb5716.jpg' },
      { name: 'Shantanu Vaishnav', image: '/images/teams/photography-board/SHANTANUVAISHNAV.4301948b201607e9e11b.jpg' },
    ]
  },
  {
    category: 'Website Board',
    members: [
      { name: 'Amogh Praveen Pete', image: '/images/teams/website-board/AmoghPraveenPete.9ae191ee4ab638001570.jpg' },
      { name: 'Atharva Bhawsar', image: '/images/teams/website-board/AtharvaBhawsar.9bd28c950a84e65a5c67.jpg' },
      { name: 'Ayush Agarwal', image: '/images/teams/website-board/AyushAgarwal.7fbe48687f4471189ee9.jpg' },
      { name: 'Jyoti Saini', image: '/images/teams/website-board/JyotiSaini.5b74f75ff55854c1fb25.jpg' },
      { name: 'Monalisa', image: '/images/teams/website-board/Monalisa.9a5de92b29c1decd36a0.jpg' },
      { name: 'Rahul Kumar', image: '/images/teams/website-board/RahulKumar.82940fcd85576bac178d.jpg' },
      { name: 'Srijani Som', image: '/images/teams/website-board/SrijaniSom.16ce456442d48bee92f6.jpg' },
      { name: 'Sweta Raj', image: '/images/teams/website-board/SwetaRaj.9796e21e7446e5ee5f42.jpg' },
    ]
  }
];

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
  { id: 'p1', name: 'Prof. Alok Chakrawal', role: 'Vice Chancellor', category: 'Patron', image: '/images/patrons/vc.jpg' },
  { id: 'c1', name: 'Prof. Manish Shrivastava', role: 'Teacher Coordinator', category: 'Coordinator', image: '/images/patrons/coordinator.jpg' },
  { id: 's1', name: 'Ananya Singh', role: 'Editor-in-Chief', category: 'Editorial Board', image: 'https://picsum.photos/seed/stu1/300/300' },
  { id: 's2', name: 'Rohan Mehta', role: 'Head of Design', category: 'Design Team', image: 'https://picsum.photos/seed/stu2/300/300' },
  { id: 's3', name: 'Kavita Das', role: 'Art Director', category: 'Art Board', image: 'https://picsum.photos/seed/stu3/300/300' },
];

export const PATRONS = [
  {
    id: 'patron-1',
    name: 'Prof. Alok Chakrawal',
    role: 'Hon\'ble Vice Chancellor',
    image: '/images/patrons/vc.jpg',
    message: 'UDAAN represents the soaring spirit of our students.'
  },
  {
    id: 'patron-2',
    name: 'Prof. Ashwini Kumar Dixit',
    role: 'Registrar',
    image: '/images/patrons/registrar.jpeg',
    message: 'A testament to the creative potential of GGV.'
  },
  {
    id: 'patron-3',
    name: 'Prof. Manish Shrivastava',
    role: 'Teacher Coordinator',
    image: '/images/patrons/coordinator.jpg',
    message: 'Nurturing talent and fostering artistic expression.'
  }
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