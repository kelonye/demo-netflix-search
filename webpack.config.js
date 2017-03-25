var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
      }, {
        test: /\.dot$/,
        loader: 'dot-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Netflix' }),
    new ExtractTextPlugin('dist.css'),
  ],
  resolve: {
    extensions: ['.js', '.dot', '.scss'],
    modules: [path.resolve('./lib'), 'node_modules'],
  }
};
