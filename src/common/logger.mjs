import bunyan from 'bunyan'

const logger = bunyan.createLogger({
    name: 'api',
    stream: process.stdout,
    level: 'info',
    src: true
})

if(process.env.NODE_ENV === 'test'){
    logger.level(bunyan.FATAL + 1)
}

export default logger
