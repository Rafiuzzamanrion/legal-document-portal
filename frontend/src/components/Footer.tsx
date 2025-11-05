import React from 'react';
import { APP_INFO } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 {APP_INFO.NAME}. Built with Next.js 15 and Node.js by {APP_INFO.AUTHOR}
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-600 transition-colors duration-200">
              Documentation
            </a>
            <a href="http://localhost:5000" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors duration-200">
              API
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors duration-200">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;