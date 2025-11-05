'use client';

import { SEARCH_SUGGESTIONS } from '@/constants';

interface SearchSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

export default function SearchSuggestions({ onSuggestionClick }: SearchSuggestionsProps) {
  return (
    <div className="mt-6 text-center animate-fade-in">
      <p className="text-sm text-gray-600 mb-3 font-medium">Try searching for:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {SEARCH_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-4 py-2 bg-white text-indigo-600 rounded-full text-sm font-medium border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md transition-all duration-200 transform hover:scale-105"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}