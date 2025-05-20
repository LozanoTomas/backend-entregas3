const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'http',
  format: format.combine(
    format.timestamp(),
    format.simple()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

module.exports = logger;