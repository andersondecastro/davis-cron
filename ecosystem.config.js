module.exports = {
  apps : [{
    name      : 'Davis CRON',
    script    : 'npm start',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
};
