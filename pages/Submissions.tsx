import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUBMISSION_CATEGORIES } from '../constants';
import { UploadCloud, CheckCircle, ArrowRight, AlertCircle, Star } from 'lucide-react';

const Submissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SUBMISSION_CATEGORIES[0].id);
  const activeCategory = SUBMISSION_CATEGORIES.find(c => c.id === activeTab)!;

  return (
    <div className="w-full min-h-screen text-gray-900 pt-20 bg-texture">
      
      {/* 1. Masthead */}
      <header className="border-b border-gray-900 bg-texture relative overflow-hidden">
         {/* Background elements */}
         <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none hidden md:block">
             <Star size={180} />
         </div>

         <div className="py-20 md:py-28 text-center relative z-10 px-4">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-3 border-2 border-gray-900 px-6 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform rotate-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Open For Submissions • Vol. 06</span>
                </div>

                <h1 className="font-serif text-6xl md:text-9xl font-black tracking-tighter text-gray-900 mb-6 uppercase leading-[0.85]">
                    Submit<br/><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Work.</span>
                </h1>

                <p className="font-serif text-xl md:text-2xl italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    "Be a part of the next edition. We are looking for art, photography, poetry, and stories that move us."
                </p>
            </motion.div>
         </div>
      </header>

      {/* 2. Ticker Tape */}
      <div className="bg-primary text-white border-y border-gray-900 py-3 overflow-hidden whitespace-nowrap relative z-10">
        <div className="inline-block animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 font-serif italic text-xl tracking-wide opacity-90">
              Call For Entries <span className="mx-4 text-accent">✦</span> Deadline: Nov 30th <span className="mx-4 text-accent">✦</span> Submit Your Best Work <span className="mx-4 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. Main Interface */}
      <div className="grid lg:grid-cols-12 min-h-[800px] border-b border-gray-900 bg-white">
        
        {/* Sidebar Nav */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-900 bg-gray-50 flex flex-col">
            <div className="p-8 border-b border-gray-900 bg-white">
                <h3 className="font-serif font-black text-3xl uppercase">Categories</h3>
                <p className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-wider">Select a category to view guidelines</p>
            </div>
            
            <div className="flex-grow flex flex-col">
                {SUBMISSION_CATEGORIES.map((cat, idx) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`w-full text-left p-6 md:p-8 flex items-center justify-between border-b border-gray-900 last:border-b-0 group transition-all duration-300 ${
                            activeTab === cat.id 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-white hover:bg-gray-100 text-gray-900'
                        }`}
                    >
                        <div>
                             <span className={`block font-mono text-[10px] uppercase tracking-widest mb-1 ${activeTab === cat.id ? 'text-gray-400' : 'text-gray-500'}`}>0{idx + 1}</span>
                             <span className="font-serif text-2xl font-bold italic">{cat.label}</span>
                        </div>
                        <ArrowRight size={24} className={`transform transition-transform duration-300 ${activeTab === cat.id ? 'rotate-0' : '-rotate-45 opacity-0 group-hover:opacity-100'}`} />
                    </button>
                ))}
            </div>
            
            <div className="p-8 bg-texture border-t border-gray-900 mt-auto">
                <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-primary shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Important Note</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Plagiarism is strictly prohibited. Ensure all submissions are original. AI-generated content must be disclosed.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 bg-texture flex flex-col relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-16 flex-grow"
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-10 flex items-baseline justify-between border-b border-gray-900 pb-6">
                             <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 uppercase">
                                {activeCategory.label}
                             </h2>
                             <span className="font-mono text-xs font-bold bg-primary text-white px-2 py-1 uppercase tracking-widest hidden md:inline-block">
                                Form #2024-{activeCategory.id.toUpperCase()}
                             </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Submission Guidelines</h3>
                                <ul className="space-y-4">
                                    {activeCategory.guidelines.map((rule, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center bg-white shrink-0 font-mono text-[10px] font-bold">
                                                {idx + 1}
                                            </div>
                                            <span className="text-gray-800 font-medium leading-relaxed">{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="bg-white border border-gray-900 p-6 shadow-[8px_8px_0px_0px_rgba(209,213,219,1)]">
                                <h3 className="font-serif font-bold text-xl mb-4">Editor's Tip</h3>
                                <p className="text-gray-600 italic leading-relaxed text-sm">
                                    "We value authenticity over perfection. Don't be afraid to show vulnerability in your work. Make sure your file names are formatted as: Name_Title_Category."
                                </p>
                            </div>
                        </div>

                        {/* Drop Zone */}
                        <div className="border-2 border-dashed border-gray-900 bg-gray-50 hover:bg-white transition-colors p-12 text-center group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                    <UploadCloud size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Upload Files</h3>
                                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8">
                                    Drag & drop or click to browse
                                </p>
                                <button className="px-8 py-3 bg-white border border-gray-900 text-gray-900 font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                    Select From Device
                                </button>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 font-mono uppercase tracking-wide">
                            <CheckCircle size={14} className="text-green-500" />
                            Secure Transfer • SSL Encrypted
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Submissions;