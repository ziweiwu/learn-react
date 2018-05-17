const path = require('path');

//provide the absolute path to the project folder
//set up the loader to load babel for transcribing code to es6
//source map let browser know the source of error in dev tools
//devServer is a convinient server for development
module.exports={
  entry:'./src/app.js',
  output:{
    path: path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};



