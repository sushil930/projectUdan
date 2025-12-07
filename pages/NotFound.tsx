import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-9xl font-serif font-bold text-gray-200">404</h1>
      <div className="-mt-12 z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;