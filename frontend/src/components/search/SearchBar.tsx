'use client';

import { useState, FormEvent } from 'react';
import { QUERY_LIMITS } from '@/constants';

interface SearchBarProps {
  onSearch: (query: string) => void;
  disabled?: boolean;
}

export default function SearchBar({ onSearch, disabled = false }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() && query.length <= QUERY_LIMITS.MAX_LENGTH) {
      onSearch(query);
    }
  };

  const isQueryValid = query.trim().length > 0 && query.length <= QUERY_LIMITS.MAX_LENGTH;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search legal documents (e.g., contract dispute, employment discrimination...)"
          disabled={disabled}
          maxLength={QUERY_LIMITS.MAX_LENGTH}
          className="block w-full pl-12 pr-32 py-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed text-lg transition-all"
        />
        <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
          <button
            type="submit"
            disabled={disabled || !isQueryValid}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-500 ml-1">
          {query.length}/{QUERY_LIMITS.MAX_LENGTH} characters
        </p>
        {query.length > QUERY_LIMITS.MAX_LENGTH * 0.9 && (
          <p className="text-sm text-amber-600 mr-1">
            Approaching character limit
          </p>
        )}
      </div>
    </form>
  );
}