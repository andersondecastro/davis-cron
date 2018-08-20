module.exports = {
  apps : [{
    name      : 'Davis CRON',
    script    : 'npm start',
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
};
