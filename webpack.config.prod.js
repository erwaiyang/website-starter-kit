const path = require('path');
const webpack = require('webpack');

const pkg = require('./package.json');

function pluginsArrayToString(pluginsArray) {
  var text = '';
  for (var i = 0; i < pluginsArray.length; i++) {
    text += 'plugins[]=' + pluginsArray[i];
    text += (i === pluginsArray.length - 1) ? '' : ',';
  }
  return text;
}

const babelLoaderQueryPlugins = [
  'transform-react-remove-prop-types',
  'transform-react-constant-elements',
  'transform-react-inline-elements',
];

const babelLoader = 'babel?' + pluginsArrayToString(babelLoaderQueryPlugins);

module.exports = {
  devtool: 'source-map',
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.DedupePlugin(),
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
      loaders: ['react-hot', babelLoader],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    },
  ],
  },
};
