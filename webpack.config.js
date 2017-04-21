'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const buildConfig = function (env) {
  const isProd = env === 'prod';
  const folder = isProd ? './output/' : '/';
  return {
    entry: {
      app: ['./standalone/main']
    },
    output: {
      filename: '[name].js',
      path: folder
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /node/
          ],
          use: {loader: 'babel-loader', options: {presets: 'es2015'}}
        }, {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
          test: /\.html$/,
          include: path.resolve(__dirname, './standalone/index.html'),
          use: {loader: 'html-loader', options: {attrs: ['img:src', 'link:href']}}
        },{
          test: /\.(gif|jpe?g|png|svg)(\?.*)?$/,
          use: [
            'url-loader',
            {
              loader: 'image-webpack-loader',
              options: {}
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [require('autoprefixer')]
        }
      }),
      new HtmlWebpackPlugin({
        chunks: ['app'],
        template: './standalone/index.html'
      })
    ],
    stats: {
      colors: true,
      modules: true,
      reasons: true,
      errorDetails: true
    }
  };
};
module.exports = buildConfig;