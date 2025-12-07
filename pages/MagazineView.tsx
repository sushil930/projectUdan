import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Download, Share2, ArrowLeft, BookOpen } from 'lucide-react';
import { MAGAZINES } from '../constants';

const MagazineView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const magazine = MAGAZINES.find((m) => m.id === id);

  if (!magazine) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        {/* Breadcrumb */}
        <Link to="/magazines" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Archive
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-8">
                <div className="shadow-2xl rounded-sm overflow-hidden border-8 border-white bg-gray-100">
                    <img src={magazine.coverImage} alt={magazine.title} className="w-full h-auto object-cover" />
                </div>
                
                <div>
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{magazine.title}</h1>
                    <p className="text-accent font-bold tracking-wide mb-6">{magazine.year} Edition</p>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {magazine.description}
                    </p>

                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="font-serif font-bold text-gray-900 mb-3">Editorial Board</h4>
                        <ul className="text-gray-600 space-y-1">
                            {magazine.editors.map((editor, idx) => (
                                <li key={idx}>{editor}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-white py-3 px-6 rounded-full font-medium hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                        <Download size={18} /> Download PDF
                    </button>
                    <button className="p-3 border border-gray-200 rounded-full text-gray-600 hover:text-primary hover:border-primary transition-colors">
                        <Share2 size={20} />
                    </button>
                </div>
            </div>

            {/* Viewer Area */}
            <div className="lg:col-span-8">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl h-[80vh] flex flex-col">
                    <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
                        <div className="text-white font-medium text-sm flex items-center gap-2">
                            <BookOpen size={16} className="text-gray-400" /> Reader View
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                    </div>
                    
                    {/* Mock PDF Viewer UI */}
                    <div className="flex-grow bg-gray-700 flex items-center justify-center relative overflow-hidden group">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-30" />
                         
                         <div className="text-center z-10 p-8">
                            <div className="inline-block p-6 rounded-full bg-gray-600/50 backdrop-blur-sm mb-4">
                                <BookOpen size={48} className="text-gray-300" />
                            </div>
                            <h3 className="text-white font-serif text-2xl mb-2">Preview Mode</h3>
                            <p className="text-gray-400 max-w-md mx-auto mb-8">
                                To read the full magazine with the best experience, please download the PDF or open in fullscreen.
                            </p>
                            <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-colors">
                                Open Fullscreen Reader
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineView;