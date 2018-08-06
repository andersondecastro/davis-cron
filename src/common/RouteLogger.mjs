import logger from './logger.mjs'
export default (req,res,next) => {
    logger.info(`Application ==> REQUEST: URL: ${JSON.stringify(req.url)}`)
    logger.info(`Application ==> REQUEST: HEADERS: ${JSON.stringify(req.headers)}`)
    logger.info(`Application ==> REQUEST: Params: ${JSON.stringify(req.params)}`)
    logger.info(`Application ==> REQUEST: Query: ${JSON.stringify(req.query)}`)
    logger.info(`Application ==> REQUEST: Body: ${JSON.stringify(req.body)}`)
    logger.info(`Application ==> ---------------------------------`)
    next()
}