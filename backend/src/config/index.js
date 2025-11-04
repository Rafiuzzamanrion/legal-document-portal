require ('dotenv').config();
const config = {
  server: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development',
  },

  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },
  api: {
    prefix: '/api',
    version: 'v1',
  },

  search: {
    minQueryLength: 1,
    maxQueryLength: 500,
    simulatedDelay: 500,
  },

  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};

module.exports = config;