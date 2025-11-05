import type { SearchResult } from '@/types';
import DocumentCard from './DocumentCard';

interface ResultsDisplayProps {
  results: SearchResult;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 border border-indigo-200 rounded-xl p-6 shadow-md">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-3 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">Summary
              <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                System Generated
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{results.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center text-indigo-700 font-semibold bg-white px-3 py-1.5 rounded-lg shadow-sm">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                {results.totalResults} {results.totalResults === 1 ? 'document' : 'documents'} found
              </span>
              <span className="text-gray-500">
                Query: <span className="font-medium text-gray-700">&quot;{results.query}&quot;</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {results.documents.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Relevant Documents</h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Showing top {results.documents.length} result{results.documents.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-6">
            {results.documents.map((doc, index) => (
              <DocumentCard key={doc.id} document={doc} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}