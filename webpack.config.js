const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/resize.js',
  mode: 'development',
  output: {
    filename: 'eventx-resize.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    /*new webpack.ProvidePlugin({
        evx: "eventx-core"
    })*/
  ]
};
