
const logger = require('../utils/logger');
const config = require('../config');

function errorHandler(err, req, res, next) {
  logger.error(`Error: ${err.message}`, {
    stack: err.stack,
    url: req.url,
    method: req.method,
  });

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal server error';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation error';
  }

  if (err.name === 'UnauthorizedError') {
    statusCode = 401;
    message = 'Unauthorized access';
  }

  res.status(statusCode).json({
    success: false,
    error: err.name || 'ServerError',
    message: message,
    ...(config.server.env === 'development' && {
      stack: err.stack,
      details: err.details,
    }),
    timestamp: new Date().toISOString(),
  });
}

function notFoundHandler(req, res) {
  logger.warn(`404 Not Found: ${req.method} ${req.url}`);

  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.url}`,
    availableEndpoints: {
      generate: 'POST/api/generate',
      documents: 'GET/api/documents',
      stats: 'GET/api/stats',
      health: 'GET/api/health',
    },
  });
}

module.exports = {
  errorHandler,
  notFoundHandler,
};