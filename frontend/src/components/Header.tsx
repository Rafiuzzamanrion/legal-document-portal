import React from 'react';
import { APP_INFO } from '@/constants';
import Link from "next/link";

const Header = () => {
  return (

      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <Link href={'/'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-2.5 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {APP_INFO.NAME}
                </h1>
                <p className="text-sm text-gray-600 mt-1">{APP_INFO.DESCRIPTION}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1.5 rounded-full font-medium">
                v{APP_INFO.VERSION}
              </span>
            </div>
          </div>
        </div>
      </Link>
      </header>
  );
};

export default Header;