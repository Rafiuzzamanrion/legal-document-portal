
import { API_BASE_URL, API_ENDPOINTS } from '@/constants';
import type { SearchResult } from '@/types';
async function searchDocuments(query: string): Promise<SearchResult> {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `${API_BASE_URL}${API_ENDPOINTS.GENERATE}?query=${encodedQuery}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch results');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}



export const apiService = {
  searchDocuments,
};