const pino = require('pino')

const logger = pino({
  level: process.env.NODE_ENV === 'test' ? 'silent' : 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})

module.exports = logger
