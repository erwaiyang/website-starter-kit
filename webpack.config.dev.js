const path = require('path');
const webpack = require('webpack');

const pkg = require('./package.json');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: Object.keys(pkg.dependencies),
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
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
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    },
  ],
  },
};
