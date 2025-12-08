import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Camera, PenTool, Star, Sparkles, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MAGAZINES, FEATURED_ARTICLES, TESTIMONIALS, PATRONS } from '../constants';

const Marquee = () => (
  <div className="bg-primary text-white border-y border-gray-900 py-3 overflow-hidden whitespace-nowrap relative z-10">
    <div className="inline-block animate-marquee">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="mx-8 font-serif italic text-2xl tracking-wide opacity-90">
          The Official Creative Magazine of GGV <span className="mx-4 text-accent">✦</span> Submissions Open for Vol 6 <span className="mx-4 text-accent">✦</span> Explore Art, Poetry, & Design <span className="mx-4 text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);

const SectionLink: React.FC<{ to: string; title: string; desc: string; icon: React.ElementType; index: string }> = ({ to, title, desc, icon: Icon, index }) => (
  <Link to={to} className="group relative block p-10 border-b md:border-b-0 md:border-r border-gray-900 last:border-r-0 transition-all overflow-hidden h-full flex flex-col justify-between bg-white/50">
     <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-400 font-bold border-l border-b border-gray-100 transition-colors">
        {index}
     </div>
     
     <div className="mt-4 mb-12">
        <div className="w-16 h-16 border-2 border-gray-900 rounded-full flex items-center justify-center mb-6 transition-all duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight decoration-2 underline-offset-4">{title}</h3>
        <p className="text-gray-600 font-medium text-lg leading-relaxed">{desc}</p>
     </div>
     
     <div className="flex items-center justify-between border-t border-gray-200 pt-6 transition-colors">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Discover</span>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 transition-all">
            <MoveRight size={18} />
        </div>
     </div>
  </Link>
);

const Home: React.FC = () => {
  const latestIssue = MAGAZINES[0];

  return (
    <div className="w-full bg-texture min-h-screen text-gray-900">
      
      {/* 1. Retro Masthead */}
      <header className="border-b border-gray-900 bg-texture relative z-10">
        <div className="border-b border-gray-900 py-2 px-4 flex justify-between items-center text-[11px] md:text-xs font-mono uppercase tracking-widest text-gray-600">
             <div className="flex gap-4">
                <span>Vol. 05</span>
                <span className="hidden md:inline">|</span>
                <span className="hidden md:inline">Bilaspur, C.G.</span>
             </div>
             <span>Est. 2018</span>
             <div className="flex gap-4">
                <span className="hidden md:inline">Quarterly</span>
                <span className="hidden md:inline">|</span>
                <span>Free Edition</span>
             </div>
        </div>
        
        <div className="py-12 md:py-20 text-center relative overflow-hidden">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-[18vw] md:text-[13rem] leading-[0.75] font-black tracking-tighter text-gray-900 select-none"
            >
                UDAAN
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-serif text-lg md:text-xl text-gray-600 mt-8 font-medium max-w-3xl mx-auto leading-relaxed px-4"
            >
                UDAAN is the official creative magazine of Guru Ghasidas Vishwavidyalaya, showcasing art, literature, photography, and student voices since 2010. It is a platform built to celebrate imagination, culture, and the evolving creative spirit of the university.
            </motion.p>
            
            {/* Decorative Stamps */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden md:block opacity-80">
                <div className="w-24 h-24 rounded-full border border-gray-900 flex items-center justify-center animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-gray-900">
                            <textPath href="#curve">
                                • Student Creative Club • Est 2018 •
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
      </header>

      {/* 2. Hero Split Layout */}
      <section className="grid lg:grid-cols-12 border-b border-gray-900 bg-white">
        {/* Left: Editorial Text */}
        <div className="lg:col-span-7 p-6 md:p-20 lg:p-24 border-b lg:border-b-0 lg:border-r border-gray-900 flex flex-col justify-center relative bg-texture">
             <div className="absolute top-0 left-0 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest border-b border-r border-gray-900 z-20">
                Featured Story
             </div>

             <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif font-black leading-[0.9] mb-8 md:mb-10 text-gray-900 relative z-10 break-words">
                THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">RENAISSANCE</span> <br/>
                ISSUE.
             </h2>

             <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                 <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif drop-cap text-justify">
                        Welcome to the 5th volume of UDAAN. In this issue, we explore the boundaries of student imagination, featuring over 50 artists and writers from Guru Ghasidas Vishwavidyalaya. It is a collection of stories that define our generation.
                    </p>
                 </div>
                 <div className="w-full md:w-48 shrink-0 flex flex-col gap-4">
                     <span className="block w-full h-px bg-gray-900"></span>
                     <p className="font-mono text-xs text-gray-500 uppercase leading-relaxed">
                        Vol. 05 <br/>
                        Pages: 124 <br/>
                        Curated by: <br/>Editorial Board
                     </p>
                     <Link to={`/magazines/${latestIssue.id}`} className="inline-block mt-2 px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-primary transition-colors text-sm text-center">
                        Read Now
                    </Link>
                 </div>
             </div>
        </div>

        {/* Right: Visual Showcase */}
        <div className="lg:col-span-5 bg-gray-100 relative overflow-hidden flex items-center justify-center p-12 min-h-[600px] border-l-0 lg:border-l border-gray-900">
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 group cursor-pointer">
                {/* Image Frame Effect */}
                <div className="relative border-4 border-gray-900 bg-white p-2 shadow-[16px_16px_0px_0px_rgba(17,24,39,1)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[20px_20px_0px_0px_rgba(29,78,216,1)]">
                    <div className="relative overflow-hidden border border-gray-200">
                         <img 
                            src={latestIssue.coverImage} 
                            alt="Latest Issue" 
                            className="w-[340px] h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-mono text-xs uppercase tracking-widest border border-white/50 px-2 py-1 rounded-sm">Click to View</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Ticker Tape */}
      <Marquee />

      {/* 4. Featured Articles Section (New) */}
      <section className="py-20 border-b border-gray-900 bg-texture">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-12 border-b border-gray-900 pb-4">
                <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 italic">Editor's Picks</h2>
                <Link to="/magazines" className="hidden md:inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    See All Stories <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {FEATURED_ARTICLES.map((article, idx) => (
                    <motion.article 
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex flex-col items-start h-full"
                    >
                        <div className="w-full aspect-[4/3] overflow-hidden border-2 border-gray-900 mb-6 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute top-0 left-0 bg-white text-gray-900 px-3 py-1 text-xs font-bold uppercase border-r-2 border-b-2 border-gray-900 z-10">
                                {article.category}
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs font-mono uppercase text-gray-500 mb-3 tracking-wider">
                            <span className="text-primary font-bold">{article.date}</span>
                            <span className="text-gray-300">/</span>
                            <span>{article.author}</span>
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                            {article.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow font-medium">
                            {article.excerpt}
                        </p>
                        
                        <Link to={`/magazines`} className="mt-auto inline-flex items-center text-xs font-black uppercase tracking-widest border-b-2 border-gray-900 pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                            Read Story <MoveRight size={14} className="ml-2" />
                        </Link>
                    </motion.article>
                ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
                <Link to="/magazines" className="inline-block w-full py-4 border border-gray-900 text-center font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors">
                    View All Stories
                </Link>
            </div>
        </div>
      </section>

      {/* 5. Navigation Grid (Editorial Style) */}
      <section className="bg-texture">
          <div className="grid md:grid-cols-3 border-b border-gray-900">
             <SectionLink 
                index="01"
                to="/magazines" 
                title="The Archive" 
                icon={BookOpen} 
                desc="A library of past editions, capturing the history of our creativity." 
             />
             <SectionLink 
                index="02"
                to="/gallery" 
                title="Visual Gallery" 
                icon={Camera} 
                desc="Photography, digital art, and sketches from talented students." 
             />
             <SectionLink 
                index="03"
                to="/submissions" 
                title="Submit Work" 
                icon={PenTool} 
                desc="Got a story to tell? Be a part of the next volume." 
             />
          </div>
      </section>

      {/* 6. Magazine Shelf */}
      <section className="py-20 border-b border-gray-900 bg-white relative">
         <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-gray-200 pb-6">
                <h2 className="text-5xl md:text-7xl font-serif font-black text-gray-900">From The Vault</h2>
                <Link to="/magazines" className="font-mono text-sm uppercase tracking-widest border border-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors mt-6 md:mt-0">
                    View Full Archive
                </Link>
            </div>

            {/* Shelf Display */}
            <div className="overflow-x-auto pb-16 pt-4 hide-scrollbar">
                <div className="flex gap-16 w-max px-4">
                    {MAGAZINES.slice(1).map((mag) => (
                        <Link key={mag.id} to={`/magazines/${mag.id}`} className="group relative w-64 flex-shrink-0 perspective-1000">
                            {/* Spine/Cover */}
                            <div className="aspect-[3/4] bg-gray-200 relative shadow-xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-1">
                                <img src={mag.coverImage} alt={mag.title} className="w-full h-full object-cover filter sepia-[0.3] contrast-125 group-hover:sepia-0 transition-all" />
                                {/* Overlay Shadow for depth */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none mix-blend-multiply"></div>
                            </div>
                            
                            {/* Label */}
                            <div className="mt-8 text-center">
                                <span className="inline-block px-3 py-1 bg-gray-100 border border-gray-300 text-[10px] font-mono font-bold uppercase tracking-widest mb-3">{mag.year}</span>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 leading-none group-hover:text-primary transition-colors">{mag.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
         </div>
      </section>

      {/* 7. Patrons */}
      <section className="py-20 border-b border-gray-900 bg-texture">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-center mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">Our Patrons</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {PATRONS.map((patron, idx) => (
                    <motion.div 
                        key={patron.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="w-48 h-56 border-2 border-gray-900 p-2 mb-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform duration-300">
                            <img src={patron.image} alt={patron.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{patron.name}</h3>
                        <p className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-4">{patron.role}</p>
                        <p className="text-gray-600 italic font-serif max-w-xs">"{patron.message}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-20 border-b border-gray-900 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-center mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">Voices of UDAAN</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, idx) => (
                    <motion.div 
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col"
                    >
                        <div className="mb-6 text-primary">
                            <Sparkles size={32} />
                        </div>
                        <p className="font-serif text-lg leading-relaxed text-gray-800 mb-8 flex-grow italic">
                            "{testimonial.text}"
                        </p>
                        <div className="border-t border-gray-200 pt-4 flex items-center gap-4">
                            <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border border-gray-900" />
                            <div>
                                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">{testimonial.author}</h4>
                                <p className="font-mono text-xs text-gray-500 mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 9. Footer Lead-in / Manifesto */}
      <section className="py-32 bg-gray-900 text-[#FDFBF7] text-center px-6 border-b border-gray-900 relative overflow-hidden">
         {/* Background noise for footer */}
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")' }}></div>
         
         <div className="max-w-4xl mx-auto relative z-10">
             <Star size={48} className="mx-auto text-accent mb-10 animate-spin-slow" />
             <h2 className="text-5xl md:text-8xl font-serif font-black mb-10 leading-[0.9]">
                "Creativity takes courage."
             </h2>
             <p className="font-mono uppercase tracking-[0.3em] text-gray-500 mb-16 text-sm">
                - Henri Matisse • Est. 2018
             </p>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link to="/team" className="w-full md:w-auto px-12 py-4 bg-[#FDFBF7] text-gray-900 font-bold uppercase tracking-widest border border-transparent hover:bg-primary hover:text-white transition-all">
                    Meet The Team
                </Link>
                <Link to="/contact" className="w-full md:w-auto px-12 py-4 border border-gray-600 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                    Get In Touch
                </Link>
             </div>
         </div>
      </section>

    </div>
  );
};

export default Home;