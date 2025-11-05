import type { Document } from '@/types';
import { formatDate, getRelevanceBadgeColor, calculateRelevancePercentage } from '@/utils/helpers';

interface DocumentCardProps {
  document: Document;
  index: number;
}

export default function DocumentCard({ document, index }: DocumentCardProps) {
  const relevancePercentage = calculateRelevancePercentage(document.relevanceScore);
  const badgeColor = getRelevanceBadgeColor(document.relevanceScore);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full text-sm font-bold">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {document.title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-3">
            <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              {document.type}
            </span>
            <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {formatDate(document.date)}
            </span>
            <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {document.caseNumber}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className={`inline-flex items-center px-3 py-1.5 ${badgeColor} rounded-full text-xs font-medium`}>
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {relevancePercentage}% match
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Court and Outcome */}
        <div className="flex items-center justify-between text-sm bg-gray-50 rounded-lg p-3">
          <span className="text-gray-600">
            <span className="font-medium">Court:</span> {document.court}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            document.outcome.toLowerCase().includes('prevailed') || document.outcome.toLowerCase().includes('upheld')
              ? 'bg-green-100 text-green-800'
              : document.outcome.toLowerCase().includes('settled')
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
          }`}>
            {document.outcome}
          </span>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4 border-l-4 border-indigo-500">
          <p className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            Summary
          </p>
          <p className="text-gray-900 leading-relaxed">{document.summary}</p>
        </div>

        {/* Excerpt */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
            Excerpt
          </p>
          <p className="text-gray-600 text-sm italic leading-relaxed">{document.excerpt}</p>
        </div>

        {/* Tags */}
        {document.tags && document.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {document.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}