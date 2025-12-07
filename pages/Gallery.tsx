import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera, Palette, Calendar, Grid } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryCategory, GalleryItem } from '../types';

const CATEGORIES: { id: GalleryCategory; icon: React.ElementType }[] = [
  { id: 'All', icon: Grid },
  { id: 'Art', icon: Palette },
  { id: 'Photography', icon: Camera },
  { id: 'Events', icon: Calendar },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryCategory>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-texture pt-20">
      
      {/* 1. Retro Masthead */}
      <header className="bg-texture border-b border-gray-900 py-16 md:py-24 text-center relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
             <div className="inline-block border-2 border-gray-900 px-6 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-1">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-900">Est. 2018 • Collection No. 05</span>
             </div>
             
             <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-gray-900 mb-6 leading-[0.85] uppercase">
                Visual Gallery
             </h1>
             
             <p className="font-serif text-xl md:text-2xl italic text-gray-500 max-w-2xl mx-auto leading-relaxed">
                "A curated exhibition of student photography, digital art, and captured moments."
             </p>
        </div>
      </header>

      {/* 2. Sticky Filter Toolbar */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-900 shadow-sm">
        <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center md:justify-start">
                <div className="font-mono text-xs font-bold uppercase tracking-widest py-4 px-6 border-r border-gray-900 hidden md:flex items-center bg-gray-50 text-gray-500">
                    Filter By:
                </div>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`flex items-center gap-2 px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest border-r border-gray-900 border-b md:border-b-0 border-gray-900 md:border-t-0 transition-all ${
                            filter === cat.id
                            ? 'bg-gray-900 text-white'
                            : 'bg-white text-gray-900 hover:bg-primary hover:text-white'
                        }`}
                    >
                        <cat.icon size={14} />
                        {cat.id}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* 3. Masonry Grid (Polaroid Style) */}
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="break-inside-avoid"
                    >
                        <div 
                            className="group relative bg-white p-3 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(29,78,216,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden border border-gray-200 mb-4 bg-gray-100 aspect-auto">
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.title} 
                                    className="w-full h-auto object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500" 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="bg-white border-2 border-gray-900 p-2 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <ZoomIn size={20} className="text-gray-900" />
                                    </div>
                                </div>
                            </div>

                            {/* Metadata / Label */}
                            <div className="flex justify-between items-start border-t border-gray-200 pt-4">
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-gray-900 leading-none mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                                        Artist: <span className="text-gray-900 font-bold">{item.artist}</span>
                                    </p>
                                </div>
                                <span className="inline-block border border-gray-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gray-50">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </div>

      {/* 4. Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-gray-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                onClick={() => setSelectedItem(null)}
            >
                <div 
                    className="relative w-full max-w-6xl max-h-[90vh] bg-white border-2 border-gray-900 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden" 
                    onClick={e => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button 
                        className="absolute top-4 right-4 z-20 bg-white border-2 border-gray-900 text-gray-900 p-2 hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        onClick={() => setSelectedItem(null)}
                    >
                        <X size={24} />
                    </button>

                    {/* Image Area */}
                    <div className="flex-grow bg-gray-100 flex items-center justify-center relative md:w-3/5 p-4 md:p-8 overflow-auto">
                        <div className="bg-white p-2 md:p-4 shadow-xl border border-gray-200">
                             <img 
                                src={selectedItem.imageUrl} 
                                alt={selectedItem.title} 
                                className="max-h-[50vh] md:max-h-[75vh] w-auto object-contain"
                            />
                        </div>
                    </div>
                    
                    {/* Info Sidebar */}
                    <div className="md:w-2/5 border-t md:border-t-0 md:border-l border-gray-900 bg-texture p-8 md:p-12 flex flex-col justify-center relative">
                        <div className="mb-auto">
                            <span className="inline-block bg-gray-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-6">
                                {selectedItem.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4 leading-none">
                                {selectedItem.title}
                            </h2>
                            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8 pb-8 border-b border-gray-300">
                                Created By <span className="text-primary font-bold text-sm ml-2">{selectedItem.artist}</span>
                            </p>
                            
                            <p className="font-serif text-lg leading-relaxed text-gray-700">
                                {selectedItem.description || "Captured moment submitted to the UDAAN visual archive. This piece represents the unique perspective and creative expression of the student artist."}
                            </p>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-300 flex justify-between items-center opacity-60">
                            <div className="flex flex-col">
                                <span className="font-mono text-[10px] uppercase font-bold text-gray-400">ID Reference</span>
                                <span className="font-mono text-xs font-bold">#{selectedItem.id.padStart(4, '0')}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="font-mono text-[10px] uppercase font-bold text-gray-400">Date Added</span>
                                <span className="font-mono text-xs font-bold">Oct 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;