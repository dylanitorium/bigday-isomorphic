/* eslint-disable */
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
 entry: './client/index.js',
 output: {
     path: path.resolve(__dirname, 'static', 'dist'),
     publicPath: '/dist/',
     filename: "build.js"
 },
 module: {
   loaders: [
     {
         test: /.js$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
             presets: ['es2015', 'react']
         }
     },
     {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
    },
       {
         test:   /.css$/,
         loader: ExtractTextPlugin.extract(
           'style?sourceMap',
           'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
           'postcss-loader'
         ),
       },
       {
         test: /\.jpg$/,
         loader: "file-loader?name=img/[hash].[ext]"
       }
   ]
 },
 plugins: [
   new ExtractTextPlugin("build.css")
 ],
 postcss: function () {
   return [autoprefixer, precss];
 }
}
