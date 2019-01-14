'use strict'

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'WebChat',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src/scss/')]
            }
          }
        ]
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }, {
        test: /\.(woff|woff2|eot)$/,
        use: {
          loader: 'url-loader'
        }
      }, {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]'
            }
          }
        ]
      }, {
        test: /\.less$/,
        exclude: [
          /\.(config|overrides|variables)$/,
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.scss$/
        ],
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['lib'])]
};
