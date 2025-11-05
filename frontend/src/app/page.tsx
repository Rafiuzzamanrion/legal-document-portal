'use client';

import { useSearch } from '@/hooks/useSearch';
import SearchBar from '@/components/search/SearchBar';
import SearchSuggestions from '@/components/search/SearchSuggestions';
import ResultsDisplay from '@/components/results/ResultsDisplay';
import ErrorMessage from '@/components/common/ErrorMessage';
import LoadingSpinner from '@/components/common/LoadingSpinner';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const { loading, error, results, search, clearError} = useSearch();

  const handleSearch = (query: string) => {
    search(query);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} disabled={loading} enableAutoSearch={true} debounceDelay={700} />
          {!results && !loading && !error && (
            <SearchSuggestions onSuggestionClick={handleSearch} />
          )}
        </div>

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onDismiss={clearError} />}
        {results && !loading && <ResultsDisplay results={results} />}

        {!results && !loading && !error && (
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full mb-6 shadow-lg">
              <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Search Legal Documents</h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Enter keywords or phrases to search through our legal document database.
              Our system will find and summarize relevant cases for you.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Fast Search</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Accurate Results</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </main>
  );
}