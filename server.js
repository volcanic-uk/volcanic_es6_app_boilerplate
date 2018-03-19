const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.prod.js');
const compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	mode: 'production'
}));

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	console.log( 'gotten!');
	next();
    
});
// Serve the files on port 3001.
app.listen(3001, function () {

	console.log('Volcanic Header listening on port 3000!\n');
});