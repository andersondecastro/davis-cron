module.exports = {
  apps : [{
    name      : 'Microservice API',
    script    : 'npm start',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
};
