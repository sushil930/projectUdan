import React from 'react';
import { motion } from 'framer-motion';
import { Crown, PenTool, Palette, Users, Star, Linkedin, Mail, Twitter, Camera, Monitor, Megaphone, BookOpen } from 'lucide-react';
import { ALL_TEAMS } from '../constants';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

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

const MemberCard: React.FC<{ member: { name: string; image: string }; category: string }> = ({ member, category }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full bg-white border-b border-r border-gray-900 cursor-pointer"
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* Image Frame */}
      <div className="relative aspect-[3/4] overflow-hidden border-b border-gray-900 bg-gray-200">
          <div className={`absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity z-10 ${isClicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          <img 
              src={getOptimizedImageUrl(member.image, 400)} 
              alt={member.name} 
              className={`w-full h-full object-cover filter contrast-125 transition-all duration-500 ${isClicked ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} 
          />
          
          {/* Social Links Overlay */}
          <div className={`absolute bottom-0 left-0 w-full p-4 flex justify-center gap-4 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-gray-900 z-20 ${isClicked ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
              <button className="text-gray-900 hover:text-primary transition-colors"><Mail size={18} /></button>
              <button className="text-gray-900 hover:text-blue-600 transition-colors"><Linkedin size={18} /></button>
          </div>
      </div>

      {/* Info */}
      <div className="p-6 flex-grow flex flex-col justify-between bg-texture">
          <div>
              <div className="mb-2">
                  <span className="inline-block border border-gray-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white">
                      {category}
                  </span>
              </div>
              <h3 className={`font-serif font-bold text-xl mb-1 leading-tight transition-colors ${isClicked ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                  {member.name}
              </h3>
          </div>
      </div>
    </motion.div>
  );
};

const SectionHeader: React.FC<{ title: string; icon: React.ElementType }> = ({ title, icon: Icon }) => (
    <div className="flex items-center gap-4 py-8 px-6 border-b border-gray-900 bg-white sticky top-20 z-30 shadow-sm">
        <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center bg-gray-100 text-gray-900">
            <Icon size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 italic uppercase">
            {title}
        </h2>
    </div>
);

const getIconForCategory = (category: string) => {
    if (category.includes('Art') || category.includes('Design')) return Palette;
    if (category.includes('Graphic')) return PenTool;
    if (category.includes('Literature')) return BookOpen;
    if (category.includes('Marketing')) return Megaphone;
    if (category.includes('Photography')) return Camera;
    if (category.includes('Website')) return Monitor;
    if (category.includes('Coordinator')) return Crown;
    return Users;
};

const Team: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-gray-900 bg-texture">
      
      {/* 1. Masthead */}
      <header className="border-b border-gray-900 bg-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-6 py-24 relative z-10 text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-3 border border-gray-900 bg-white px-4 py-1 rounded-full mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest">The Dream Team</span>
                    <Star size={14} className="text-primary fill-primary" />
                </div>
                <h1 className="text-6xl md:text-8xl font-serif font-black mb-6 leading-[0.9]">
                    MEET THE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">CREATORS</span>
                </h1>
                <p className="font-serif text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto italic">
                    "The dedicated minds and creative souls behind every page of UDAAN."
                </p>
            </motion.div>
        </div>
      </header>

      <Marquee />

      {/* Team Sections */}
      {ALL_TEAMS.map((section, idx) => (
          <section key={idx} className="border-b border-gray-900">
              <SectionHeader title={section.category} icon={getIconForCategory(section.category)} />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gray-50">
                  {section.members.map((member, mIdx) => (
                      <MemberCard key={mIdx} member={member} category={section.category} />
                  ))}
              </div>
          </section>
      ))}

      {/* Join CTA */}
      <section className="py-32 bg-gray-900 text-[#FDFBF7] text-center px-6 relative overflow-hidden">
         <div className="max-w-3xl mx-auto relative z-10">
             <Users size={64} className="mx-auto text-accent mb-8" />
             <h2 className="text-5xl md:text-7xl font-serif font-black mb-8">
                Join The Club
             </h2>
             <p className="font-serif text-xl text-gray-400 mb-12 leading-relaxed">
                Are you a writer, artist, designer, or photographer? We are always looking for new talent to join our creative family.
             </p>
             <button className="px-12 py-4 bg-[#FDFBF7] text-gray-900 font-bold uppercase tracking-widest border border-transparent hover:bg-primary hover:text-white transition-all">
                Apply Now
             </button>
         </div>
      </section>

    </div>
  );
};

export default Team;