const path = require('path')

// const pkg = require('./package.json')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080,
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      actions: path.join(__dirname, 'src/actions'),
      components: path.join(__dirname, 'src/components'),
      constants: path.join(__dirname, 'src/constants'),
      middlewares: path.join(__dirname, 'src/middlewares'),
      reducers: path.join(__dirname, 'src/reducers'),
      images: path.join(__dirname, 'src/images'),
      json: path.join(__dirname, 'src/json'),
      styles: path.join(__dirname, 'src/styles'),
    },
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'postcss-loader' },
      ],
    },
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/,
    },
    {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      ],
    },
    ],
  },
}
