const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
      proxy(
          '/index/recommend.json',
          {
            target: 'https://www.bilibili.com',
            changeOrigin: true
          }
      )
  );
};