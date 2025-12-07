import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Feather, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-texture border-t border-gray-900 text-gray-900 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        {/* Identity Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-6 p-6 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-900 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Feather size={200} />
             </div>

             <div>
                <Link to="/" className="flex items-center gap-3 mb-6 group w-fit relative z-10">
                  <div className="bg-gray-900 text-white p-2 border border-gray-900 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Feather size={24} />
                  </div>
                  <span className="font-serif text-3xl font-black tracking-tight uppercase">
                    UDAAN
                  </span>
                </Link>
                <p className="font-serif text-xl leading-relaxed max-w-md relative z-10">
                    The official creative club & annual student magazine of Guru Ghasidas Vishwavidyalaya. Fostering art, literature, and culture since 2018.
                </p>
            </div>
            
            <div className="mt-12 flex gap-4 relative z-10">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                       <Icon size={20} />
                   </a>
               ))}
            </div>
        </div>

        {/* Categories */}
        <div className="col-span-1 lg:col-span-3 p-6 md:p-10 border-b md:border-b-0 border-r-0 md:border-r border-gray-900 bg-white">
             <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-200 pb-2 inline-block">Categories</h4>
             <ul className="space-y-4">
                {['Visual Arts', 'Photography', 'English Editorial', 'Hindi Editorial'].map((cat) => (
                    <li key={cat}>
                        <Link to="/gallery" className="group flex items-center gap-2 font-serif text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-primary transition-colors rounded-full"></span>
                            {cat}
                        </Link>
                    </li>
                ))}
             </ul>
         </div>

         {/* Contact */}
         <div className="col-span-1 lg:col-span-3 p-6 md:p-10 bg-white">
             <h4 className="font-mono text-xs font-bold uppercase tracking-widest mb-8 text-gray-400 border-b border-gray-200 pb-2 inline-block">Contact</h4>
             <ul className="space-y-6">
                <li className="flex items-start gap-4">
                    <div className="mt-1"><MapPin size={18} className="text-primary" /></div>
                    <span className="font-serif text-base md:text-lg leading-snug">
                        Guru Ghasidas Vishwavidyalaya,<br/>
                        Bilaspur, Chhattisgarh 495009
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <Mail size={18} className="text-primary" />
                    <a href="mailto:udaan.ggv@gmail.com" className="font-serif text-base md:text-lg hover:underline decoration-primary decoration-2 underline-offset-4">
                        udaan.ggv@gmail.com
                    </a>
                </li>
             </ul>
         </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-gray-900 bg-gray-900 text-[#FDFBF7] p-4 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
             <span>© {new Date().getFullYear()} UDAAN Club</span>
             <span className="hidden md:inline text-gray-600">|</span>
             <span className="hidden md:inline text-gray-400">Est. 2018</span>
          </div>
          <div className="flex gap-8">
              <Link to="#" className="hover:text-white text-gray-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white text-gray-400 transition-colors">Terms of Use</Link>
              <Link to="#" className="hover:text-white text-gray-400 transition-colors">Sitemap</Link>
          </div>
      </div>
    </footer>
  );
};

export default Footer;