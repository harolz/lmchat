const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathToBourbon = require('node-bourbon').includePaths;

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'WebChat',
    libraryTarget: 'umd'
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
    contentBase: path.resolve(__dirname, '/lib')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'src/scss/'),
              path.resolve(__dirname, 'path/to/imported/file/dir'), [pathToBourbon]]
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
        loader: 'file-loader'
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Chat Widget Test',
      filename: 'index.html',
      inject: false,
      template: 'dev/src/index.html',
      favicon: 'dev/favicon.ico', // 添加小图标
      showErrors: true
    })
  ]
};
