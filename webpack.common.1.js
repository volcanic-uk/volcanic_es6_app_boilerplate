/* eslint-env node */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('%c COMMON CONFIGS ******************************************************');
module.exports = {
	entry: {
		main: './src/js/main.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
	plugins: [
		new CleanWebpackPlugin(['dist','build','lib']),
		new HtmlWebpackPlugin({
			title: 'Production',
			template: './index.html',
			filename: './index.html'
		}),
	]
};