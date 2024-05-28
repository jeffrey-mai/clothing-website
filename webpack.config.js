const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      }, 
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp4|ico)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './client/styles.css' },
        { from: './client/favicon.ico' },
      ],
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      publicPath: '/public',
      directory: path.resolve(__dirname, 'public'),
    },
    proxy: [
      {'/': 'http://localhost:3000'},
    ],
    historyApiFallback: true,
  },
};