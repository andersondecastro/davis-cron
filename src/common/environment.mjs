import packageJson from '../../package.json'
import defaultEnvironmentConfig from '../../config/default_environment_config.json'

export default {

    ENV_NAME : process.env.ENV_NAME || 'development',

    app: {
        name: packageJson.name,
        version: packageJson.version,
        domain: process.env.DOMAIN || 'localhost'
    },

    jwt: {
        expiresInSeconds: process.env.JWT_EXPIRES || (5 * 60 * 60)
    },

    email: {
        from: process.env.EMAIL_USER || defaultEnvironmentConfig.email.default_from,
        password: process.env.EMAIL_PASSWORD || defaultEnvironmentConfig.email.default_password
    },

    dev: {
        DB_NAME: 'database',
        DB_HOSTNAME: 'localhost',
        DB_PORT: 27017
    },

    db: {
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        HOSTNAME: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        NAME: process.env.DB_NAME
    },

    server: {
        host: process.env.HOST || 'http://127.0.0.1',
        port: process.env.PORT || defaultEnvironmentConfig.server.default_port
    },

    microservices: {
        DATAS_PORT: process.env.DATAS_PORT || 4200
    }
}
