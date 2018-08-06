import mongoose from 'mongoose'
import logger from './logger.mjs'

export default class Server {
    constructor(app, environment) {
        this.app = app
        this.environment = environment
    }

    async start() {
        this.registerGlobalEvents()
        await this.connectDb()
        logger.info(`Database connection status: ${mongoose.connection.readyState}`)
        return this.startApp()
    }

    registerGlobalEvents() {
        process.on('unhandledRejection', (reason, p) => {
            throw reason
        })
        process.on('uncaughtException', (error) => {
            logger.error('Error not handled %s', error)
            process.exit(1)
        })
    }

    async getDatabaseOptions(){
        return new Promise((resolve, reject) => {
            try {
                if(this.environment.ENV_NAME === 'staging' || this.environment.ENV_NAME === 'production'){

                    const dbConnection = {
                        options:{
                            user:this.environment.db.USERNAME,
                            pass:this.environment.db.PASSWORD,
                            autoIndex: true,
                            reconnectTries: Number.MAX_VALUE,
                            reconnectInterval: 500,
                            poolSize: 3,
                            bufferMaxEntries: 0,
                            useNewUrlParser: true
                        },
                        url:`mongodb://${this.environment.db.HOSTNAME}:${this.environment.db.PORT}/${this.environment.db.NAME}`
                    }
                    resolve(dbConnection)
                }else{
                    const dbConnection = {
                        options:{
                            dbName:this.environment.dev.DB_NAME,
                            autoIndex: true,
                            reconnectTries: Number.MAX_VALUE,
                            reconnectInterval: 500,
                            poolSize: 3,
                            bufferMaxEntries: 0,
                            useNewUrlParser: true
                        },
                        url:`mongodb://${this.environment.dev.DB_HOSTNAME}:${this.environment.dev.DB_PORT}/`
                    }
                    resolve(dbConnection)
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    async connectDb() {
        mongoose.Promise = global.Promise
        return this.getDatabaseOptions()
        .then((payload) => {
            logger.info(`Database connected: ${JSON.stringify(payload)}`)
            mongoose.connect(payload.url, payload.options)
        })
    }

    async startApp() {
        return new Promise((resolve, reject) => {
            try {
                this.app.listen(this.environment.server.port, (serv) => {
                    resolve(serv)
                })
            } catch (err) {
                reject(err)
            }
        })
    }

}
