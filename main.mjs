import app from 'src/app.mjs'
import Server from 'src/common/Server.mjs'
import environment from 'src/common/environment.mjs'
import logger from 'src/common/logger.mjs'

const server = new Server(app, environment)
server.start()
    .then(startedServer => {
        logger.info('Server started')
        logger.info(`Server port: ${environment.server.port}`)
    })
    .catch(err => logger.error('Error on starting server %s', err))
