
const { searchDocuments, generateSummary, formatDocument } = require('../services/searchService');
const { getAllDocuments, getDocumentStats } = require('../models/documents');
const logger = require('../utils/logger');
const config = require('../config');

async function generate(req, res, next) {
  try {
    const { query } = req.body;
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

async function getDocuments(req, res, next) {
  try {
    const documents = getAllDocuments();

    res.json({
      success: true,
      data: documents,
      count: documents.length,
    });
  } catch (error) {
    next(error);
  }
}

async function getStats(req, res, next) {
  try {
    const stats = getDocumentStats();

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
}

function health(req, res) {
  const stats = getDocumentStats();

  res.json({
    status: 'ok',
    message: 'Legal Document API is running',
    version: '1.0.0',
    environment: config.server.env,
    documentsLoaded: stats.total,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}

module.exports = {
  generate,
  getAllDocuments: getDocuments,
  getStats,
  health,
};