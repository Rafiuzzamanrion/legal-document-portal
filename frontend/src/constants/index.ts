
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  GENERATE: '/api/generate',
  DOCUMENTS: '/api/documents',
  STATS: '/api/stats',
  HEALTH: '/api/health',
} as const;

export const SEARCH_SUGGESTIONS = [
  'contract dispute',
  'employment discrimination',
  'criminal appeal',
  'breach of contract',
  'age discrimination',
  'gender bias',
] as const;

export const QUERY_LIMITS = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 500,
} as const;

export const APP_INFO = {
  NAME: 'Legal Document Search Portal',
  DESCRIPTION: 'Legal Assistant Tool',
  VERSION: '1.0.0',
  AUTHOR: 'Rafiuzzamanrion',
} as const;