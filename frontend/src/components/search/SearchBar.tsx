'use client';

import {useState, FormEvent, useEffect,} from 'react';
import {QUERY_LIMITS} from '@/constants';

interface SearchBarProps {
  onSearch: (query: string) => void;
  disabled?: boolean;
  enableAutoSearch?: boolean;
  debounceDelay?: number;
}

export default function SearchBar({
                                    onSearch,
                                    disabled = false,
                                    enableAutoSearch = true,
                                    debounceDelay = 500
                                  }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!enableAutoSearch) return;

    if (query.trim().length === 0) {
      setIsTyping(false);
      setDebouncedQuery('');
      return;
    }

    setIsTyping(true);

    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
      setIsTyping(false);
    }, debounceDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, debounceDelay, enableAutoSearch]);

  useEffect(() => {
    if (debouncedQuery.trim().length > 0) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() && query.length <= QUERY_LIMITS.MAX_LENGTH) {
      setIsTyping(false);
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    setDebouncedQuery('');
    setIsTyping(false);
  };

  const isQueryValid = query.trim().length > 0 && query.length <= QUERY_LIMITS.MAX_LENGTH;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isTyping ? (
            <svg className="h-5 w-5 text-indigo-500 animate-spin" fill="none"
                 viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="h-5 w-5 text-gray-400" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          )}
        </div>

        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search legal documents (e.g., contract dispute, employment discrimination...)"
          disabled={disabled}
          maxLength={QUERY_LIMITS.MAX_LENGTH}
          className="block w-full pl-12 pr-32 py-4 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed text-lg transition-all"
        />

        <div
          className="absolute inset-y-0 right-0 pr-2 flex items-center space-x-2">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          )}

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
        <div className="flex items-center space-x-3">
          <p className="text-sm text-gray-500 ml-1">
            {query.length}/{QUERY_LIMITS.MAX_LENGTH} characters
          </p>
          {isTyping && (
            <span
              className="text-xs text-indigo-600 font-medium flex items-center">
              <svg className="w-3 h-3 mr-1 animate-pulse" fill="currentColor"
                   viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"/>
              </svg>
              Searching...
            </span>
          )}
          {enableAutoSearch && !isTyping && query.length > 0 && (
            <span
              className="text-xs text-green-600 font-medium flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor"
                   viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"/>
              </svg>
              Ready
            </span>
          )}
        </div>
        {query.length > QUERY_LIMITS.MAX_LENGTH * 0.9 && (
          <p className="text-sm text-amber-600 mr-1">
            Approaching character limit
          </p>
        )}
      </div>

      {enableAutoSearch && (
        <p className="text-xs text-gray-400 mt-2 ml-1">
          💡 Results update automatically as you type (after {debounceDelay}ms
          pause)
        </p>
      )}
    </form>
  );
}