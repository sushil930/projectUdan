import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Download, Share2, ArrowLeft, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { MAGAZINES } from '../constants';

const MagazineView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const magazine = MAGAZINES.find((m) => m.id === id);

  if (!magazine) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="bg-texture min-h-screen text-gray-900">
      {/* Header / Breadcrumb Area */}
      <div className="border-b border-gray-900 bg-white">
        <div className="container mx-auto px-6 max-w-7xl py-6 flex items-center justify-between">
             <Link to="/magazines" className="group flex items-center font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors">
                <div className="w-8 h-8 border border-gray-900 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <ArrowLeft size={14} />
                </div>
                Back to Archive
             </Link>
             <div className="font-mono text-xs uppercase tracking-widest text-gray-500">
                Issue ID: {magazine.id}
             </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 min-h-[calc(100vh-140px)]">
            {/* Left: Magazine Info */}
            <div className="lg:col-span-5 border-r border-gray-900 p-8 md:p-12 flex flex-col bg-texture">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 bg-primary text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">
                        {magazine.year} Edition
                    </span>
                    
                    <h1 className="text-5xl md:text-7xl font-serif font-black leading-[0.9] mb-8 text-gray-900">
                        {magazine.title}
                    </h1>

                    <div className="w-24 h-1 bg-gray-900 mb-8"></div>

                    <p className="text-xl text-gray-800 leading-relaxed font-serif mb-10 text-justify">
                        {magazine.description}
                    </p>

                    {/* Editors Section */}
                    <div className="mb-10 border-t border-b border-gray-200 py-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Editorial Board</h4>
                        <div className="flex flex-wrap gap-x-8 gap-y-2">
                            {magazine.editors.map((editor, idx) => (
                                <span key={idx} className="font-serif font-bold text-lg border-b border-gray-300 pb-1">
                                    {editor}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        <button className="flex-1 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-3 border border-gray-900">
                            <Download size={18} /> 
                            <span>Download PDF</span>
                        </button>
                        <button className="px-6 py-4 border border-gray-900 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3">
                            <Share2 size={18} />
                            <span className="sr-only md:not-sr-only">Share</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Right: Previewer */}
            <div className="lg:col-span-7 bg-gray-100 p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative w-full max-w-2xl"
                >
                    {/* Retro Browser Window Frame */}
                    <div className="border-4 border-gray-900 bg-white shadow-[20px_20px_0px_0px_rgba(17,24,39,1)]">
                        {/* Window Header */}
                        <div className="border-b-4 border-gray-900 bg-gray-100 p-3 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 border border-gray-900 bg-white rounded-full"></div>
                                <div className="w-3 h-3 border border-gray-900 bg-gray-400 rounded-full"></div>
                            </div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                                PREVIEW_MODE.EXE
                            </div>
                            <div className="w-4"></div>
                        </div>

                        {/* Content */}
                        <div className="relative aspect-[16/10] bg-gray-800 overflow-hidden group cursor-pointer">
                             <img 
                                src={magazine.coverImage} 
                                alt={magazine.title} 
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500" 
                             />
                             
                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                                <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Eye size={32} />
                                </div>
                                <h3 className="font-serif text-3xl font-bold mb-2">Read Online</h3>
                                <p className="font-mono text-xs text-gray-300 uppercase tracking-widest max-w-xs">
                                    Click to open the interactive reader experience
                                </p>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
      </div>
    </div>
  );
};

export default MagazineView;