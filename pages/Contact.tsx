import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Star, Send, ArrowRight, MessageSquare } from 'lucide-react';

const Marquee = () => (
  <div className="bg-primary text-white border-y border-gray-900 py-3 overflow-hidden whitespace-nowrap relative z-10">
    <div className="inline-block animate-marquee">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="mx-8 font-serif italic text-xl tracking-wide opacity-90">
          Get In Touch <span className="mx-4 text-accent">✦</span> Collaborations <span className="mx-4 text-accent">✦</span> Feedback <span className="mx-4 text-accent">✦</span> Queries <span className="mx-4 text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-gray-900 pt-20 bg-texture">
      
      {/* 1. Masthead */}
      <header className="border-b border-gray-900 bg-texture relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
        
        <div className="py-20 md:py-32 text-center relative z-10 px-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 border border-gray-900 px-4 py-1 bg-white mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <MessageSquare size={12} className="text-gray-900" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Inquiries & Support</span>
                </div>
                
                <h1 className="font-serif text-[15vw] md:text-[11rem] leading-[0.8] font-black tracking-tighter text-gray-900 uppercase mb-6 mix-blend-multiply">
                    CONTACT
                </h1>
                
                <p className="font-serif text-xl md:text-2xl italic text-gray-600 max-w-2xl mx-auto">
                    "We are always open to new ideas, collaborations, and conversations. Drop us a line."
                </p>
            </motion.div>
        </div>
      </header>

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Main Split Layout */}
      <div className="grid lg:grid-cols-12 min-h-[800px] border-b border-gray-900 bg-white">
        
        {/* Left: Info & Map */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-900 bg-gray-50 flex flex-col">
            
            {/* Contact Details */}
            <div className="p-10 md:p-12 space-y-10 border-b border-gray-900 bg-white">
                <div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                        <Mail size={14} className="text-primary" /> Electronic Mail
                    </h3>
                    <a href="mailto:udaan.ggv@gmail.com" className="text-3xl font-serif font-bold text-gray-900 hover:text-primary transition-colors underline decoration-2 underline-offset-4">
                        udaan.ggv@gmail.com
                    </a>
                </div>

                <div>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                         <MapPin size={14} className="text-accent" /> Base of Operations
                    </h3>
                    <p className="text-xl font-serif font-medium text-gray-900 leading-relaxed">
                        Guru Ghasidas Vishwavidyalaya,<br/>
                        Koni, Bilaspur,<br/>
                        Chhattisgarh 495009
                    </p>
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-grow relative min-h-[400px] bg-gray-200 group overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.5562776648743!2d82.1396!3d22.1054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b117b9b32b5%3A0x7d6f51774335606e!2sGuru%20Ghasidas%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1625631245789!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="GGV Map"
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white border border-gray-900 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 pointer-events-none">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Campus Location
                    </span>
                </div>
            </div>
        </div>

        {/* Right: The Form */}
        <div className="lg:col-span-7 bg-texture p-10 md:p-20 relative">
             <div className="absolute top-0 right-0 p-4 border-l border-b border-gray-900 bg-white hidden md:block">
                 <span className="font-mono text-xs font-bold uppercase">Form No. 05-C</span>
             </div>

             <div className="max-w-2xl mx-auto">
                 <h2 className="text-4xl font-serif font-black text-gray-900 mb-2">SEND TRANSMISSION</h2>
                 <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-12">
                    Fields marked with * are mandatory
                 </p>

                 <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-900">First Name *</label>
                            <input type="text" className="w-full bg-white border border-gray-900 p-4 font-serif text-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-[4px_4px_0px_0px_rgba(229,231,235,1)] focus:shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] transition-shadow placeholder:text-gray-300 placeholder:italic" placeholder="Jane" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-900">Last Name *</label>
                            <input type="text" className="w-full bg-white border border-gray-900 p-4 font-serif text-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-[4px_4px_0px_0px_rgba(229,231,235,1)] focus:shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] transition-shadow placeholder:text-gray-300 placeholder:italic" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-900">Email Address *</label>
                        <input type="email" className="w-full bg-white border border-gray-900 p-4 font-serif text-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-[4px_4px_0px_0px_rgba(229,231,235,1)] focus:shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] transition-shadow placeholder:text-gray-300 placeholder:italic" placeholder="jane.doe@university.edu" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-900">Topic</label>
                        <div className="relative">
                            <select className="w-full bg-white border border-gray-900 p-4 font-serif text-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-[4px_4px_0px_0px_rgba(229,231,235,1)] focus:shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] transition-shadow appearance-none cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Magazine Submission Issue</option>
                                <option>Join The Team</option>
                                <option>Event Collaboration</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <ArrowRight size={18} className="text-gray-400 rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-900">Message *</label>
                        <textarea rows={5} className="w-full bg-white border border-gray-900 p-4 font-serif text-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-[4px_4px_0px_0px_rgba(229,231,235,1)] focus:shadow-[4px_4px_0px_0px_rgba(29,78,216,1)] transition-shadow placeholder:text-gray-300 placeholder:italic resize-none" placeholder="Type your message here..."></textarea>
                    </div>

                    <button className="w-full bg-gray-900 text-white font-bold uppercase tracking-widest py-4 border border-gray-900 hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-3 group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
                        <span>Send Message</span>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                 </form>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;