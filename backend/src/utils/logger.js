
const config = require('../config');

class Logger {
  constructor() {
    this.level = config.logging.level;
  }

  format(level, message, meta = {}) {
    const timestamp = new Date().toISOString();
    const metaStr = Object.keys(meta).length > 0
      ? `\n${JSON.stringify(meta, null, 2)}`
      : '';

    return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}`;
  }

  info(message, meta) {
    console.log(this.format('info', message, meta));
  }

  warn(message, meta) {
    console.warn(this.format('warn', message, meta));
  }

  error(message, meta) {
    console.error(this.format('error', message, meta));
  }

  debug(message, meta) {
    if (this.level === 'debug') {
      console.debug(this.format('debug', message, meta));
    }
  }
}

module.exports = new Logger();