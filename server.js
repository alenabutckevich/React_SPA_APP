var express = require('express');
var app = express();

var webpack = require('webpack');
var config = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
