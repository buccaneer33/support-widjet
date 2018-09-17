/*VARIABLES*/
const path              = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let   faviconsWebpack   = require('favicons-webpack-plugin');
var   sass              = require('sass');
var   postcss    		= require('postcss');
// const CONSTANTS         = require("./constants");
const AUTOPREFIXER      = require('autoprefixer');
const EVENT 			= process.env.npm_lifecycle_event || '';
const PROD 				= EVENT.includes('prod');
const DEV 				= EVENT.includes('dev');
var   pathToDist 		= PROD ? ('dist/prod') : ('dist/dev');
// var   confMode 			= PROD ? (CONSTANTS.WEBPACK_MODE_PROD) : (CONSTANTS.WEBPACK_MODE_DEV);
var   postCssLoader 	= PROD ? ({plugins: [AUTOPREFIXER({browsers:['ie >= 8', 'last 12 version']})],sourceMap: false}) : ({sourceMap: true});

/*CONFIG*/

var clientConfig = (function webpackConfig() {
  var config = Object.assign({});

  config.entry = ['./src/widjet/index.js','./src/widjet/scss/index.scss',];
  config.output = {path: path.resolve(__dirname,  pathToDist), filename: 'widjet/index.js'};
	PROD ? config.devtool = '' : config.devtool = 'source-map';
	
  config.module = {
    rules: [
			{test: /\.js$/,
				exclude: /node_modules/,
				use: {loader: 'babel-loader',
				options: {presets: ['babel-preset-env']}}
			},
			{test: /\.(sa|sc|c)ss$/,
				include: path.resolve(__dirname, 'src/widjet/scss'),
				use: ExtractTextPlugin.extract({
				fallback: "style-loader",
					use: [
						{loader: 'css-loader', options: {url: false,minimize: PROD,sourceMap: DEV}},
						{loader: 'postcss-loader', options:postCssLoader},
						{loader: 'sass-loader', options: {sourceMap: DEV}}
					], publicPath:'./widjet/'
				})
			},
			
			{test: /\.(png|jpg|gif|svg)$/,
				use: [
					{loader: 'file-loader',
					options: {name: './img/[name].[ext]',
					context: path.resolve(__dirname, "./img")}
					}]
			}/*,
			{test: /\.(ttf|eot|woff|woff2)$/,
				use:
					{loader: "file-loader",
					options: {name: "[name].[ext]",
					context: path.resolve(__dirname, "./fonts")}}
			}*/
		]
  }
	config.resolve = {};

	config.plugins = [
	  new ExtractTextPlugin({
	    filename:'./widjet/widjet.css',
	    allChunks: true,
	  }), 
	  new HtmlWebpackPlugin({
	    files: {
          "css": [ "css/index.css" ],
		  "js" : [ "widjet/index.js"],
		  "chunks": {"head": {"entry": "",  "css": [ "widjet/widjet.css" ]},
                 "main": {"entry": "", "css": []}},
	    },
	    // title: CONSTANTS.HTML_TITLE,
	    // author: CONSTANTS.HTML_AUTHOR,
		//  mode: confMode,
			
	    minify: {collapseWhitespace: false},
	    filename: './index.html',
	    template: './src/html/index.html'
        })/*, 
	  new faviconsWebpack({
        logo: './src/img/favicon/favicon.jpg',
        prefix: 'img/favicon/',    
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: true,
        inject: true,
	    background: '#fff',
        title: 'Webpack App',
	    icons: {android: true,appleIcon: false,appleStartup: false,coast: false,favicons: true,
                firefox: true, opengraph: false,twitter: false,yandex: false,windows: true}
	  })*/
	]
	/*config.plugins.push(
		new Plugin()
	)
	config.plugins.push(
		new Plugin()
	)*/


return config;
});
module.exports = clientConfig;
