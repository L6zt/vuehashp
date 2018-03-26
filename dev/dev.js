const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PrefetchPolyfillPlugin = require('prefetch-polyfill-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === "production"
const extractScss = new ExtractTextPlugin('css/[name]-[contenthash].css', {
	disable: !isProd
})
const extractVueS = new ExtractTextPlugin('css/own-[name]-[contenthash].css', {
	disable: !isProd,
	allChunks: true
})
const config = {
	devtool: isProd ? false : 'inline-source-map',
	entry: {
		// app: ['babel-polyfill', './src/app'],
		app: './src/app',
		vendor: ['vue', 'vue-router', 'vuex']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: isProd ? 'js/[name].[hash].js' : '[name].[hash].js',
		publicPath: !isProd ? '/' : 'http://koa.jcmark.cn/'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				// exclude: /node_modules/,
				include: [
					path.resolve(__dirname, "../src"),
					path.resolve(__dirname, "../node_modules/vuex")
				],
				options: {
					loaders: {
						scss: extractVueS.extract({
								fallback: 'vue-style-loader',
								use: [{
									loader: 'css-loader',
									options: {
										minimize: isProd
									}
								}, {
									loader: 'sass-loader'
								}
								]
							},
							),
						js: 'babel-loader'
					},
					postLoaders: {
						html: 'babel-loader'
					}
				}
			},
			// js babel 转义
			{
				// exclude: /node_modules/,
				include: [
					path.resolve(__dirname, "../src"),
					path.resolve(__dirname, "../node_modules/vuex"),
					path.resolve(__dirname, "../node_modules/webpack"),
				],
				test: /\.js/,
				use: 'babel-loader'
			},
			{
				test: /\.(scss|css)$/,
				use: extractScss.extract({
					fallback: 'style-loader',
					use: [
							{ loader: 'css-loader',
								options: {
									minimize: isProd
								}
							},
							{loader: 'postcss-loader'},
							{loader: 'sass-loader'}
						]
				})
			},
			// 对于静态资源
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1000,
							outputPath: isProd ? 'static/' : ''
						}
					}
				]
			},
			// 字体等等
			{
				test: /\.ttf$/,
				loader: "url-loader",
				options: {
					limit: 1000,
					outputPath: isProd ? 'static/' : ''
				}
			},
			{
				test: /\.(eot|woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 1000,
							outputPath: isProd ? 'static/' : ''
						}
					}
				]
			},
		]
	},
	externals: ["$"],
	plugins: [
		extractVueS,
		extractScss,
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'../src/index.html'),
			filename: 'index.html',
			favicon: './src/assert/img/koa.ico'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new  webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: isProd ? 'production' : 'development'
		})
	],
}
if (isProd) {
	config.plugins.push(
		new UglifyJsPlugin({
			test: /\.(js)$/i
		})
	)
	config.plugins.push(
		new PrefetchPolyfillPlugin()
	)
	config.plugins.push(
		new CompressionPlugin({
			test: /\.js$|\.css$|\.html$/
		})
	)
} else {
	config.devServer = {
		//静态资源name
		//contentBase: path.join(__dirname, '../dist'),
		allowedHosts: [
			'.jcmark.com',
		],
		port: 9000
	}
}
module.exports = config
