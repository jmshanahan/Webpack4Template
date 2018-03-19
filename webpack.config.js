const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: ['react-hot-loader/patch','./src/index.js'],
  // output: {
  //   path: path.resolve(__dirname,'dist'),
  //   filename: "my_main.js"
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
          use: [{loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
          }
        ]
      },     
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {minimize:true}
        }
      }
    ]
  },
  resolve: {
    extensions: ['*','.js','.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    contentBase: './dist'
  }
};
