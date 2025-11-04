
const { getAllDocuments } = require('../models/documents');
const logger = require('../utils/logger');

function searchDocuments(query) {
  logger.info(`Searching for: "${query}"`);

  const lowerQuery = query.toLowerCase();
  const documents = getAllDocuments();

  const scoredDocs = documents.map(doc => {
    let score = 0;

    if (doc.title.toLowerCase().includes(lowerQuery)) {
      score += 15;
    }

    if (doc.type.toLowerCase().includes(lowerQuery)) {
      score += 12;
    }

    if (doc.category.toLowerCase().includes(lowerQuery)) {
      score += 10;
    }

    doc.keywords.forEach(keyword => {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        score += 8;
      }
      if (keyword.toLowerCase().includes(lowerQuery)) {
        score += 6;
      }
    });

    doc.tags.forEach(tag => {
      if (lowerQuery.includes(tag.toLowerCase()) || tag.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }
    });

    if (doc.content.toLowerCase().includes(lowerQuery)) {
      score += 4;
    }

    if (doc.summary.toLowerCase().includes(lowerQuery)) {
      score += 3;
    }

    const partiesText = JSON.stringify(doc.parties).toLowerCase();
    if (partiesText.includes(lowerQuery)) {
      score += 3;
    }

    return { ...doc, relevanceScore: score };
  });

  const results = scoredDocs
    .filter(doc => doc.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  logger.info(`Found ${results.length} matching documents`);

  return results;
}

function generateSummary(query, results) {
  if (results.length === 0) {
    return `No legal documents found matching "${query}". Try broader terms like "contract", "employment", "criminal", or "discrimination".`;
  }

  const topDoc = results[0];
  const resultsCount = results.length;
  const resultsWord = resultsCount === 1 ? 'document' : 'documents';

  let summary = `Based on your query "${query}", I found ${resultsCount} relevant legal ${resultsWord}. `;

  summary += `The most relevant case is "${topDoc.title}" (${topDoc.type}, filed on ${topDoc.date}). `;
  summary += topDoc.summary;

  if (resultsCount > 1) {
    summary += ` Additional related cases are also available below.`;
  }

  return summary;
}

function formatDocument(doc) {
  return {
    id: doc.id,
    title: doc.title,
    type: doc.type,
    category: doc.category,
    date: doc.date,
    caseNumber: doc.caseNumber,
    court: doc.court,
    parties: doc.parties,
    summary: doc.summary,
    outcome: doc.outcome,
    relevanceScore: doc.relevanceScore,
    excerpt: doc.content.substring(0, 250) + '...',
    tags: doc.tags,
  };
}

module.exports = {
  searchDocuments,
  generateSummary,
  formatDocument,
};