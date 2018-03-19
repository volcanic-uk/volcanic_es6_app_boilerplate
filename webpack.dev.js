const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
console.log('%c DEV CONFIGS ******************************************************');
module.exports = merge(common, {
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader','eslint-loader']
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
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
	devServer: {
		contentBase: './dist',
		hot: true,
		publicPath: '/'
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.SourceMapDevToolPlugin({
		//     filename: '[name].js.map',
		// })
	]
});