/*
  ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: './bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
}
