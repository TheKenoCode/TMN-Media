/** @format */

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const buildPath = path.join(__dirname, "/public")
module.exports = {
	entry: "./src/index.js",
	output: {
		path: buildPath,
		filename: "bundle.js",
		publicPath: "/",
		globalObject: "self",
	},
	devServer: {
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(scss|css)$/,
				use: [
					process.env.NODE_ENV !== "production"
						? "style-loader"
						: MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.png$/,
				use: "file-loader",
			},
			{
				test: /\.(mov|mp4)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
						},
					},
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 3000,

		historyApiFallback: true,
	},
	performance: {
		hints: false,
	},
	optimization: {
		splitChunks: {
			minSize: 10000,
			maxSize: 250000,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/public/index.html"),
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].css",
		}),
	],
}
