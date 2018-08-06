import logger from './logger.mjs'

export default class Responder {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    success(data) {
        logger.info(`Application SUCCESS ==> Sending Payload`)
        logger.info(`${data}`)
        this.res.json(data)
    }

    error(err) {
        const error = {
            status: 500,
            errorMessage: err.message
        }
        logger.info(`Application ERROR ==> ${JSON.stringify(error)}`)
        this.res.status(500).send(error)
    }

    unauthorized() {
        this.res.sendStatus(401)
    }
}
