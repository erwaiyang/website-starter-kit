const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ['react', 'react-dom', 'redux', 'react-redux'],
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules'],
    alias: {
      actions: 'src/actions',
      components: 'src/components',
      constants: 'src/constants',
      middlewares: 'src/middlewares',
      reducers: 'src/reducers',
    },
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!postcss',
    },
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    },
  ],
  },
};
