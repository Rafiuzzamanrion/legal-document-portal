
const config = require('../config');
const logger = require('../utils/logger');

function validateSearchQuery(req, res, next) {
  const { query } = req.body;

  if (!query) {
    logger.warn('Validation failed: Query is missing');
    return res.status(400).json({
      success: false,
      error: 'Query is required',
      message: 'Please provide a valid search query',
    });
  }

  if (typeof query !== 'string') {
    logger.warn('Validation failed: Query is not a string');
    return res.status(400).json({
      success: false,
      error: 'Invalid query type',
      message: 'Query must be a string',
    });
  }

  if (query.trim().length < config.search.minQueryLength) {
    logger.warn('Validation failed: Query is too short');
    return res.status(400).json({
      success: false,
      error: 'Query too short',
      message: 'Please provide a valid search query',
    });
  }

  if (query.length > config.search.maxQueryLength) {
    logger.warn(`Validation failed: Query too long (${query.length} chars)`);
    return res.status(400).json({
      success: false,
      error: 'Query too long',
      message: `Please limit your query to ${config.search.maxQueryLength} characters`,
    });
  }

  req.body.query = query.trim();

  next();
}

module.exports = {
  validateSearchQuery,
};