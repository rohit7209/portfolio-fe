const nodeExternals = require('webpack-node-externals');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: './server/index.js',
  output: {
    path: distPath,
    filename: 'server.js',
    publicPath: '/',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {
              targets: {
                node: 8,
              },
            }],
          ],
        },
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
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  externals: nodeExternals(),
};
