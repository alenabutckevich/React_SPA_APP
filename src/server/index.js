import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config';
import handleRender from './handleRender';

const app = express();
const compiler = webpack(config);
const port = 3000;

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

app.get(/.*/, handleRender);

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
