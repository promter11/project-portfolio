const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/send/", {
      target: "http://localhost:3001/send/",
      secure: false,
      changeOrigin: true,
    })
  );
};
