
import { API_BASE_URL, API_ENDPOINTS } from '@/constants';
import type { SearchResult } from '@/types';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async searchDocuments(query: string): Promise<SearchResult> {
    try {
      const response = await fetch(`${this.baseUrl}${API_ENDPOINTS.GENERATE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
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

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}${API_ENDPOINTS.HEALTH}`);
      return response.ok;
    } catch {
      return false;
    }
  }

  async getAllDocuments() {
    try {
      const response = await fetch(`${this.baseUrl}${API_ENDPOINTS.DOCUMENTS}`);
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch documents');
    }
  }

  async getStats() {
    try {
      const response = await fetch(`${this.baseUrl}${API_ENDPOINTS.STATS}`);
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch statistics');
    }
  }
}

export const apiService = new ApiService();