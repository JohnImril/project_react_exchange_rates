"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx", // Поменяйте entry point на index.tsx
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle-[hash].js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	devServer: {
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
