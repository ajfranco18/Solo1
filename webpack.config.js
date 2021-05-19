const path = require('path');

module.exports = {
    entry: './client/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        // publicPath: path.resolve(__dirname, 'build')
    },
    devServer: {
        publicPath: '/build',
    }, 
    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            },
            {
              test: /\.s[ac]ss$/i,
              exclude: /node_modules/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
          ],
    },
  }
  