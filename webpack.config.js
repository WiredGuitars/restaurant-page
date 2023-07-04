const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    devServer: {
        contentBase: './dist', // The directory to serve as the base location
        port: 8080, // The port number for the development server
        open: true, // Open the project in the default browser automatically
      },
  },
};
