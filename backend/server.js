const app = require('./src/app');
const config = require('./src/config');
const logger = require('./src/utils/logger');
const { getDocumentStats } = require('./src/models/documents');

const PORT = config.server.port;


app.listen(PORT, () => {
  const stats = getDocumentStats();
  logger.info('Legal Document Search API');
  logger.info(`Environment: ${config.server.env}`);
  logger.info(`Port: ${PORT}`);
  logger.info(`Documents loaded: ${stats.total}`);
  logger.info(`Server running at http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', { error: err.message, stack: err.stack });
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', { error: err.message, stack: err.stack });
  process.exit(1);
});