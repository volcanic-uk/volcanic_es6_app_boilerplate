/* eslint-env node */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('stylesheets/[name].min.css');
console.log('%c PROD CONFIGS ******************************************************');
module.exports = merge(common, {
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|\.test\.js)/,
				use: ['babel-loader']
			},
			{
				test: /\.(css|scss)$/,
				use: extractSASS.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: { minimize: true }
					},
					{
						loader: 'sass-loader'
					}]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader?name=images/[hash].[ext]',
					}
				]
			}
		]
	},

	plugins: [
		extractSASS,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
        
	],
	optimization: {
		minimizer: [
			new UglifyJSPlugin({
				uglifyOptions: {
					mangle: {
						keep_fnames: true,
					},
				},
			}),
			new CompressionPlugin({
				asset: '[path].gz[query]',
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.html$/,
				threshold: 10240,
				minRatio: 0.8
			})
		],
	},
});