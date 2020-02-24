const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    alias: {"~": path.resolve(__dirname, "./src")},
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html'
    }),
  ]
}
