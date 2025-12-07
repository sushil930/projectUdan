import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Star, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MAGAZINES } from '../constants';

const Magazines: React.FC = () => {
  const latestIssue = MAGAZINES[0];
  const pastIssues = MAGAZINES.slice(1);

  return (
    <div className="w-full min-h-screen text-gray-900 bg-texture">
      
      {/* 1. Archive Masthead */}
      <header className="bg-texture border-b border-gray-900 py-16 md:py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-3 mb-6 border border-gray-900 px-4 py-1 rounded-full bg-white">
                    <BookOpen size={14} className="text-primary" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-600">Library & Collections</span>
                </div>
                <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-gray-900 mb-6 leading-[0.85]">
                    THE ARCHIVE
                </h1>
                <p className="font-serif text-xl md:text-2xl italic text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    "A curated collection of stories, art, and memories from the past volumes of UDAAN."
                </p>
            </motion.div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
            <Star size={120} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block rotate-12">
             <div className="border-4 border-gray-900 rounded-full w-32 h-32 flex items-center justify-center">
                <span className="font-mono font-black text-4xl">EST.</span>
             </div>
        </div>
      </header>

      {/* 2. Featured "Latest Issue" Section (Split Layout) */}
      <section className="grid lg:grid-cols-12 border-b border-gray-900 bg-white">
        
        {/* Visual Side */}
        <div className="lg:col-span-5 bg-gray-100 p-12 lg:p-20 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-900 relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
             >
                {/* Retro Shadow */}
                <div className="absolute top-4 left-4 w-full h-full bg-gray-900 z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative z-10 border-2 border-gray-900 bg-white p-2">
                    <img 
                        src={latestIssue.coverImage} 
                        alt={latestIssue.title} 
                        className="w-[300px] md:w-[380px] h-auto object-cover border border-gray-200 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
             </motion.div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-7 p-10 lg:p-20 bg-texture flex flex-col justify-center">
             <div className="mb-6 flex items-center gap-4">
                 <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Current Edition</span>
                 <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">{latestIssue.year}</span>
             </div>

             <h2 className="text-5xl md:text-7xl font-serif font-black text-gray-900 mb-6 leading-none">
                {latestIssue.title}
             </h2>

             <p className="text-xl text-gray-700 font-serif leading-relaxed mb-10 max-w-2xl text-justify">
                {latestIssue.description} An exploration of student creativity that defies boundaries. Curated by our dedicated editorial board to bring you the best of art and literature.
             </p>

             <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-gray-900 py-8 mb-10">
                 <div>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">Editor In Chief</span>
                    <span className="font-bold text-gray-900">{latestIssue.editors[0]}</span>
                 </div>
                 <div>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">Release Date</span>
                    <span className="font-bold text-gray-900">Oct, {latestIssue.year}</span>
                 </div>
                 <div className="hidden md:block">
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">Format</span>
                    <span className="font-bold text-gray-900">Digital / Print</span>
                 </div>
             </div>

             <Link 
                to={`/magazines/${latestIssue.id}`} 
                className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-primary transition-colors border border-gray-900 w-full md:w-auto"
             >
                Read Volume 05 <MoveRight size={18} />
             </Link>
        </div>
      </section>

      {/* 3. Back Issues Grid */}
      <section className="py-24 px-6 container mx-auto max-w-7xl relative">
          <div className="flex items-end justify-between mb-16 border-b-2 border-gray-900 pb-4">
               <h3 className="text-4xl md:text-5xl font-serif font-black italic text-gray-900">Back Issues</h3>
               <span className="hidden md:block font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Total Collections: {pastIssues.length}</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {pastIssues.map((mag, index) => (
                <motion.div 
                    key={mag.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col h-full"
                >
                    {/* Card Image */}
                    <Link to={`/magazines/${mag.id}`} className="block relative mb-8">
                        <div className="relative z-10 border-2 border-gray-900 bg-gray-100 aspect-[3/4] overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
                            <img 
                                src={mag.coverImage} 
                                alt={mag.title} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-0 right-0 bg-white border-l-2 border-b-2 border-gray-900 p-3 z-20">
                                <span className="font-mono text-xl font-bold text-gray-900 block leading-none">{mag.year}</span>
                            </div>
                        </div>
                        {/* Solid Shadow */}
                        <div className="absolute inset-0 border-2 border-gray-900 bg-gray-900 translate-x-2 translate-y-2 z-0"></div>
                    </Link>

                    {/* Content */}
                    <div className="flex-grow flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-3 w-full">
                            <span className="h-px bg-gray-900 w-8"></span>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Vol. 0{4 - index}</span>
                        </div>
                        
                        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                            <Link to={`/magazines/${mag.id}`}>{mag.title}</Link>
                        </h3>
                        
                        <p className="text-gray-600 font-medium leading-relaxed mb-6 line-clamp-3 text-sm">
                            {mag.description}
                        </p>
                        
                        <Link 
                            to={`/magazines/${mag.id}`} 
                            className="mt-auto inline-flex items-center text-xs font-black uppercase tracking-widest border border-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-all"
                        >
                            View Issue <ArrowUpRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </motion.div>
            ))}
          </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="bg-gray-900 text-[#FDFBF7] py-20 border-t border-gray-900 text-center">
         <div className="container mx-auto px-6">
             <Star size={32} className="mx-auto text-accent mb-6 animate-spin-slow" />
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Have something to contribute?</h2>
             <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                We are always looking for new voices, artists, and storytellers for our next volume.
             </p>
             <Link to="/submissions" className="inline-block bg-[#FDFBF7] text-gray-900 font-bold uppercase tracking-widest px-10 py-4 hover:bg-primary hover:text-white transition-colors">
                Submit Your Work
             </Link>
         </div>
      </section>

    </div>
  );
};

export default Magazines;