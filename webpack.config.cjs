const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/index.tsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    // proxy: [
    //   {
    //     context: ['/'],
    //     target: 'http://localhost:3000',
    //     logLevel: 'info',
    //     changeOrigin: true,  // This ensures proper routing for cross-origin requests
    //     secure: false        // Disable SSL verification if needed
    //   }
    // ],
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
};