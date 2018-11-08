const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist/assets');

const configJSON = require(path.resolve(__dirname, 'config/app.json'));

// console.log('process::', configJSON[process.env.NODE_ENV]);

const plugins = [
  new HTMLWebpackPlugin({
    title: 'Rohit Sharma',
    template: path.resolve(__dirname, 'src/client/index.ejs'),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      APP_CONFIG: JSON.stringify(configJSON[process.env.NODE_ENV]),
    },
  }),
  new ExtractTextPlugin('styles.css'),
  new ReactLoadablePlugin({
    filename: './react-loadable.json',
  }),
];

module.exports = {
  context: srcPath,
  target: 'web',
  entry: {
    client: `${srcPath}/client/index.js`,
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'redux-saga', 'react-redux'],
  },
  output: {
    path: distPath,
    filename: '[name].js', // '[name].[chunkhash].js', '[name].[hash:6].js',
    chunkFilename: '[chunkhash].js',
    // publicPath: '/',
    publicPath: '/assets/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { compact: false },
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins,
  // devtool: 'source-map',
};
