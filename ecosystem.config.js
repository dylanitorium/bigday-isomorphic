module.exports = {
  apps: [
    {
      name: 'bdv2',
      script: './server/server.babel.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      watch: './',
    },
  ],
};
