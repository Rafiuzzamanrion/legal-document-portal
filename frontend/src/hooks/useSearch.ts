
import { useState, useCallback } from 'react';
import { apiService } from '@/services/api.service';
import type { SearchResult } from '@/types';

export const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<SearchResult | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const data = await apiService.searchDocuments(query);
      setResults(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Unable to connect to the server. Please ensure the backend is running.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setResults(null);
  }, []);

  return {
    loading,
    error,
    results,
    search,
    clearError,
    reset,
  };
};