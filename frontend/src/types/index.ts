

export interface Parties {
  plaintiff?: string;
  defendant?: string;
  appellant?: string;
  respondent?: string;
}

export interface Document {
  id: number;
  title: string;
  type: string;
  category: string;
  date: string;
  caseNumber: string;
  court: string;
  parties: Parties;
  summary: string;
  outcome: string;
  relevanceScore: number;
  excerpt: string;
  tags: string[];
}

export interface SearchResult {
  success: boolean;
  query: string;
  summary: string;
  documents: Document[];
  totalResults: number;
  timestamp: string;
}

export interface ApiError {
  success: false;
  error: string;
  message: string;
  timestamp?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}