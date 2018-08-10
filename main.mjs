import app from './src/app.mjs'
import Server from './src/common/Server.mjs'
import environment from './src/common/environment.mjs'
import logger from './src/common/logger.mjs'
import DavisCrawler from './src/business/usecase/DavisCrawler.mjs'
import schedule from 'node-schedule'

const server = new Server(app, environment)
server.start()
    .then(startedServer => {
        logger.info('Server started')
        logger.info(`Server port: ${environment.server.port}`)
        const davisCrawler = new DavisCrawler()

        logger.info('SCHEDULE START')
        schedule.scheduleJob('* * * * * *', function(){
            let date = new Date()
            logger.info(`${date.getMinutes()}:${date.getSeconds()}`)
        })
        schedule.scheduleJob('* * * * *', () => {
            logger.info('STARTING...')
            davisCrawler.execute()
        })
    })
    .catch(err => logger.error('Error on starting server %s', err))
