
const { searchDocuments, generateSummary, formatDocument } = require('../services/searchService');
const { getAllDocuments, getDocumentStats } = require('../models/documents');
const logger = require('../utils/logger');
const config = require('../config');

async function generate(req, res, next) {
  try {
    const { query } = req.query;
    logger.info(`Generate request received: "${query}"`);
    await new Promise(resolve =>
      setTimeout(resolve, config.search.simulatedDelay)
    );

    const results = searchDocuments(query);
    const summary = generateSummary(query, results);
    const documents = results
      .slice(0, 3)
      .map(doc => formatDocument(doc));

    res.json({
      success: true,
      query: query,
      summary: summary,
      documents: documents,
      totalResults: results.length,
      timestamp: new Date().toISOString(),
    });

    logger.info(`Search completed: ${results.length} results`);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  generate,
};