const webpack = require('webpack');
const path = require('path');

const API_URL = process.env.NODE_ENV === 'production'
	? 'https://api-absences.cleverapps.io' : 'http://localhost:8080';
const publicPath = process.env.NODE_ENV === 'production' ? ''
	: '/gestion-des-absences/';

const output = 'public';

module.exports = {
	entry: "./app",
	output: {
		path: path.resolve(__dirname, output),
		filename: "bundle.js",
		publicPath: publicPath
	},

	devServer: {
		contentBase: path.join(__dirname, output),
		compress: true,
		port: 9000,
		historyApiFallback: true
	},

	devtool: 'cheap-module-eval-source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						[
							'env',
							{
								modules: false,
								targets: "ie"
							}
						]
					]
				}
			},

			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},

			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			},

			{
				test: /\.html$/,
				exclude: [
					/node_modules/
				],
				loader: 'html-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader?name=/public/icons/[name].[ext]"
			},
		]
	},

	plugins: [
		new webpack.DefinePlugin({'API_URL': JSON.stringify(API_URL)}),
		new webpack.ProvidePlugin({
			moment: "moment"
		  })
	]
};
