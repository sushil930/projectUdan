import React from 'react';
import { motion } from 'framer-motion';
import { Crown, PenTool, Palette, Users, Star, Linkedin, Mail, Twitter } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

// Helper to filter members
const getMembersByCategory = (category: TeamMember['category']) => 
  TEAM_MEMBERS.filter(m => m.category === category);

const Marquee = () => (
  <div className="bg-primary text-white border-y border-gray-900 py-3 overflow-hidden whitespace-nowrap relative z-10">
    <div className="inline-block animate-marquee">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="mx-8 font-serif italic text-xl tracking-wide opacity-90">
          Meet The Makers <span className="mx-4 text-accent">✦</span> Editorial Board <span className="mx-4 text-accent">✦</span> Design Team <span className="mx-4 text-accent">✦</span> Patrons <span className="mx-4 text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);

const MemberCard: React.FC<{ member: TeamMember; showBio?: boolean }> = ({ member, showBio = true }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col h-full bg-white border-b border-r border-gray-900 md:border-r-0 md:last:border-r-0 lg:border-r"
  >
    {/* ID Badge Number */}
    <div className="absolute top-0 left-0 z-20 bg-gray-900 text-white px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        ID: {member.id.toUpperCase()}
    </div>

    {/* Image Frame */}
    <div className="relative aspect-[3/4] overflow-hidden border-b border-gray-900 bg-gray-200">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
        />
        
        {/* Social Links Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-gray-900 z-20">
            <button className="text-gray-900 hover:text-primary transition-colors"><Mail size={18} /></button>
            <button className="text-gray-900 hover:text-blue-600 transition-colors"><Linkedin size={18} /></button>
            <button className="text-gray-900 hover:text-sky-500 transition-colors"><Twitter size={18} /></button>
        </div>
    </div>

    {/* Info */}
    <div className="p-6 flex-grow flex flex-col justify-between bg-texture">
        <div>
            <div className="mb-2">
                <span className="inline-block border border-gray-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white">
                    {member.category}
                </span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-1 leading-none group-hover:text-primary transition-colors">
                {member.name}
            </h3>
            <p className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                {member.role}
            </p>
            {showBio && (
                 <p className="text-gray-600 text-sm leading-relaxed font-medium line-clamp-3">
                    {member.bio || "Contributing to the artistic vision and literary excellence of the university publication."}
                </p>
            )}
        </div>
    </div>
  </motion.div>
);

const SectionHeader: React.FC<{ title: string; icon: React.ElementType }> = ({ title, icon: Icon }) => (
    <div className="flex items-center gap-4 py-8 px-6 border-b border-gray-900 bg-white">
        <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center bg-gray-100 text-gray-900">
            <Icon size={24} />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 italic uppercase">
            {title}
        </h2>
    </div>
);

const Team: React.FC = () => {
  const patrons = getMembersByCategory('Patron');
  const coordinators = getMembersByCategory('Coordinator');
  const editorial = getMembersByCategory('Editorial Board');
  const design = getMembersByCategory('Design Team');
  const art = getMembersByCategory('Art Board');

  return (
    <div className="w-full min-h-screen text-gray-900 bg-texture">
      
      {/* 1. Masthead */}
      <header className="border-b border-gray-900 bg-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="py-20 md:py-32 text-center relative z-10 px-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 border border-gray-900 px-4 py-1 bg-white mb-6 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Star size={12} className="text-accent fill-accent" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Est. 2018</span>
                    <Star size={12} className="text-accent fill-accent" />
                </div>
                
                <h1 className="font-serif text-[12vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-gray-900 uppercase mb-6">
                    The<br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600">Masthead</span>
                </h1>
                
                <p className="font-serif text-xl md:text-2xl italic text-gray-600 max-w-2xl mx-auto">
                    "The creative minds, editors, designers, and mentors working behind the scenes to bring UDAAN to life."
                </p>
            </motion.div>
        </div>
      </header>

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Leadership Section (Patrons & Coordinators) */}
      <section className="bg-white border-b border-gray-900">
         <div className="grid lg:grid-cols-12 min-h-[600px]">
            {/* Title Column */}
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-gray-900 p-10 bg-gray-50 flex flex-col justify-between">
                 <div>
                    <Crown size={48} className="text-gray-900 mb-6" />
                    <h2 className="text-4xl font-serif font-black uppercase leading-none mb-4">Leadership <br/>& Guidance</h2>
                    <p className="font-mono text-xs leading-relaxed text-gray-500 uppercase tracking-wide">
                        Our distinguished patrons and faculty coordinators who provide the vision and support for the club.
                    </p>
                 </div>
                 <div className="hidden lg:block">
                     <div className="w-16 h-1 border-b-4 border-double border-gray-900 mb-2"></div>
                     <span className="font-mono text-[10px] font-bold">SECTION 01</span>
                 </div>
            </div>

            {/* Cards Grid */}
            <div className="lg:col-span-9 grid md:grid-cols-2 lg:grid-cols-3">
                {[...patrons, ...coordinators].map((member, idx) => (
                    <div key={member.id} className={`border-b border-gray-900 md:border-b-0 ${idx !== patrons.length + coordinators.length - 1 ? 'border-r border-gray-900' : ''}`}>
                         <MemberCard member={member} showBio={false} />
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 4. Editorial Board */}
      <section className="border-b border-gray-900">
        <SectionHeader title="Editorial Board" icon={PenTool} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-gray-900">
            {editorial.map((member, idx) => (
                <div key={member.id} className={`${idx < editorial.length - 1 ? 'md:border-r border-gray-900' : ''} border-b md:border-b-0`}>
                    <MemberCard member={member} />
                </div>
            ))}
            {/* Fillers to complete grid if needed */}
            {editorial.length < 4 && (
                <div className="hidden lg:flex bg-gray-100 items-center justify-center p-10 border-l border-gray-900">
                    <div className="text-center opacity-40">
                        <Users size={48} className="mx-auto mb-4" />
                        <span className="font-mono text-xs uppercase tracking-widest font-bold">Join The Team</span>
                    </div>
                </div>
            )}
        </div>
      </section>

      {/* 5. Design & Art Team */}
      <section className="border-b border-gray-900">
        <SectionHeader title="Design & Art" icon={Palette} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {[...design, ...art].map((member, idx) => (
                <div key={member.id} className="border-r border-gray-900 border-b md:border-b-0 last:border-r-0 lg:last:border-r-0">
                    <MemberCard member={member} />
                </div>
            ))}
        </div>
      </section>

      {/* 6. Footer Call to Action */}
      <section className="bg-gray-900 text-[#FDFBF7] py-24 text-center px-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Want to be part of the crew?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 font-medium">
                We recruit new members at the beginning of every academic session. Writers, designers, and artists are welcome.
            </p>
            <div className="flex justify-center gap-6">
                <button className="bg-[#FDFBF7] text-gray-900 px-8 py-3 font-bold uppercase tracking-widest border border-transparent hover:bg-primary hover:text-white transition-all">
                    Apply Now
                </button>
                <button className="border border-gray-600 text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                    Contact Us
                </button>
            </div>
      </section>

    </div>
  );
};

export default Team;